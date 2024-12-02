<script setup lang="ts">
definePageMeta({
  middleware: "auth"
})
const { clear } = useUserSession()

</script>
<template>
  <div class="container mt-10 mx-auto">
    <h1>secret internal info!</h1>
    <h1>secret internal info!</h1>
    <h1>secret internal info!</h1>
    <h1>secret internal info!</h1>
    <NuxtLink @click="clear" class="block px-4 py-2 text-sm text-gray-700" to="/logout">Logout</NuxtLink>
  </div>
</template>
