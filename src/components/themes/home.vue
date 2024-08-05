<script setup>
const props = defineProps(['data'])
</script>

<template>
  <div class="bg-blue-200 text-5xl">
    my test <br>
    {{ props.data }}
  </div>
</template>
