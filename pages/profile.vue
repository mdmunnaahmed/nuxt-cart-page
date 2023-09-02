<template>
  <div class="mx-auto container">
    <NuxtLayout :name="sidebar">
      <h3>Profile</h3>
    </NuxtLayout>
  </div>
</template>

<script>
definePageMeta({
  layout: "sidebar",
});
</script>

<style lang="scss" scoped>
</style>