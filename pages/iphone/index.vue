<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap gap-4 gap-y-5 justify-center">
      <div
        v-for="(iphone, index) in iphones"
        :key="index"
        class="item columns-1 shadow-lg p-5"
      >
        <nuxt-link :to="/iphone/ + iphone.replaceAll(' ', '-')">
          <img
            width="250px"
            src="images/1533-41338.jpg"
            alt=""
            class="mx-auto"
          />
          <h1 class="text-center">{{ iphone }}</h1>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const iphones = [
  "Iphone -12",
  "Iphone",
  "iphone 13",
  "iphone 13 pro",
  "iphone 14 pro max",
];

const { data } = await useFetch("/api/iphones");
const iphones2 = data.value;

console.log(iphones2);
</script>

<style lang="scss" scoped>
</style>