<template>
  <div class="flex md:flex-row flex-col h-screen">
    <div class="flex-1 flex flex-col">
      <h1>Nodesports</h1>
      <div
        class="flex-1 max-w-sm w-full mx-auto flex flex-col justify-center items-center"
      >
        <form class="flex flex-col p-2" @submit.prevent="onSubmit">
          <div class="py-3">
            <label for="email">Enter your email: </label>
            <input
              class="w-full px-2 py-1"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div class="py-3">
            <label for="password">Enter your password: </label>
            <input
              class="w-full px-2 py-1"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <button class="bg-black text-white px-3 py-2 w-full" type="submit">
            Login
          </button>
        </form>
        <button class="text-center mt-4 px-3 py-2">Continue with Google</button>
      </div>
    </div>
    <img class="flex-1" src="/assets/login.jpg" />
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>
