<script setup lang="ts">
const { data } = await useFetch('/api/todos')

</script>
<template>
  <div class="container mt-10 mx-auto">
    <pre>{{ data }}</pre>
  </div>
</template>
