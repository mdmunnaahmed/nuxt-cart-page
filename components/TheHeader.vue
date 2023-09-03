<template>
  <div class="py-5 bg-gray-200">
    <nav class="container mx-auto">
      <ul class="flex items-center text-xl gap-x-6 justify-center">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/iphone">Iphone</nuxt-link></li>
        <li>
          <p to="/cart">
            Cart <span class="text-blue-700">{{ cart.length }}</span>
          </p>
        </li>
        <li v-if="auth.isAuth"><nuxt-link to="/profile">Profile</nuxt-link></li>
        <li v-if="auth.isAuth">
          <button class="py-0 text-white px-2 bg-red-500" @click="logout">
            Logout
          </button>
        </li>
        <li v-else>
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
        <li>
          <h6 class="text-blue">Page Visited {{ pageVisitCount }}</h6>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const cart = useCart();
const auth = useAuth();
const pageVisitCount = usePageVisitCount();

function logout() {
  auth.value.isAuth = false;
  localStorage.clear();
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: green;
  font-weight: 600;
}
</style>