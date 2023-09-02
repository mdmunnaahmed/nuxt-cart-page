<template>
  <div class="container mx-auto">
    <Head>
      <Title>{{ name }}</Title>
    </Head>
    <div to="/iphone/iphone-12" class="item shadow-lg p-4 flex gap-10">
      <img width="450px" src="images/1533-41338.jpg" alt="" class="" />
      <h1 class="">Phone 14 Pro Max</h1>
      <button class="py-2 bg-black text-white px-4" @click="addCart">
        {{ isInCart ? "Remove from Cart" : "Add To Cart" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const route = useRoute();
    const name = computed(() => {
      return route.params.id;
    });

    const cart = useCart();
    const isInCart = computed(() => {
      return cart.value.find((ct) => ct.name === name.value);
    });

    function addCart() {
      const found = !!cart.value.find((ct) => ct.name === name.value);
      if (!found) {
        cart.value.push({ name: name });
      } else {
        cart.value = cart.value.filter((ct) => ct.name !== name.value);
      }
    }
    return {
      addCart,
      isInCart,
      name,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>