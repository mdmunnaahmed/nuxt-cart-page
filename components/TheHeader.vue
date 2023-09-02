<template>
  <div class="py-5 bg-gray-200">
    <nav class="container mx-auto">
      <ul class="flex text-xl gap-x-6 justify-center">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/iphone">Iphone</nuxt-link></li>
        <li><nuxt-link to="/profile">Profile</nuxt-link></li>
        <li><nuxt-link to="/login">Login</nuxt-link></li>
        <li><p to="/cart">Cart <span class="text-blue-700">{{ cart.length }}</span></p></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const cart = useCart();
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: green;
  font-weight: 600;
}
</style>