<template>
  <div>
    <div class="flex gap-10">
      <aside class="bg-gray-300 w-1/5 p-4">
        <h2 class="text-2xl text-violet-700">Sidebar</h2>
        <ul class="mt-6 text-sm flex gap-2 flex-col">
          <li><nuxt-link to="/">Go Home</nuxt-link></li>
          <li><nuxt-link to="/">Profile</nuxt-link></li>
          <li><nuxt-link to="/">Evil</nuxt-link></li>
          <li><nuxt-link to="/">Danger</nuxt-link></li>
          <li><nuxt-link to="/">Somewhere</nuxt-link></li>
        </ul>
      </aside>
      <div class="w-4/5">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>