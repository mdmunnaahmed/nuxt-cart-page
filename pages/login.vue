<template>
  <div class="container mx-auto">
    <div class="w-1/3 mx-auto">
      <form @submit.prevent="formSubmit">
        <input
          class="w-full border px-4 py-3 mb-6"
          type="text"
          placeholder="Email"
          v-model="formData.email"
        />
        <input
          class="w-full border px-4 py-3 mb-2"
          type="text"
          placeholder="Password"
          v-model="formData.password"
        />
        <p class="text-red-700">{{ errorss }}</p>
        <button class="px-4 py-2 bg-green-700 text-white mt-3">
          {{ isLoading ? "Please wait | Loggin in" : "Submit Form" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const isLoading = ref(false);
let errorss = ref(null);

const url = "https://reqres.in/api/login";

const formData = reactive({
  email: "eve.holt@reqres.in",
  password: "cityslicka",
});

async function formSubmit() {
  if (isLoading.value) return;

  isLoading.value = true;
  const response = await useFetch(url, {
    method: "post",
    body: formData,
  });

  isLoading.value = false;

  const auth = useAuth();
  auth.value.isAuth = true;
  navigateTo("/iphone");

  const token = response.data.value.token;
  if (token) {
    localStorage.setItem("token", token);
  }

  if (response.error) {
    errorss = response.error.value.data.error;
  }
}
</script>

<style lang="scss" scoped>
</style>