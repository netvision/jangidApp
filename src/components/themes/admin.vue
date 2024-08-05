<script setup>
const props = defineProps(['data'])
</script>

<template>
  <div class="bg-red-200 text-4xl text-indigo-900 font-bold">
    Admin page<br>
    {{ props.data }}
  </div>
</template>
