<script setup lang="ts">
const { data } = await useFetch('/api/todos')
const { user } = useUserSession()

</script>
<template>
    <div class="container mt-10 mx-auto">
      <pre>{{ user }}</pre>
      <pre>{{ data }}</pre>
    </div>
</template>
