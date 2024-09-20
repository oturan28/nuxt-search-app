<script setup lang="ts">
const { data } = await useFetch('/api/todos')

</script>
<template>
  <MainNavbar></MainNavbar>
  <div class="container mt-10 mx-auto">
    <pre>{{ data }}</pre>
  </div>
</template>
