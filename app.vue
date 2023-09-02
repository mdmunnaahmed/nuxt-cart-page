<template>
  <div>
    <the-header></the-header>
    <br>
    <br>
    <NuxtPage />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");
* {
  box-sizing: border-box;
}
body {
  font-family: "Open Sans", Courier, monospace;
  margin: 0;
  padding: 0;
  font-size: 16px;
}
</style>
