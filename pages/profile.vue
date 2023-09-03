<template>
  <div class="mx-auto container">
    <NuxtLayout :name="sidebar">
      <h3 class="text-2xl">Profile</h3>
    </NuxtLayout>
  </div>
</template>

<script>
definePageMeta({
  layout: "sidebar",
  middleware: "auth",
});
</script>

<style lang="scss" scoped>
</style>