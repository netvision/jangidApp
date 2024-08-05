<script setup>
const subdomain = window.location.hostname.split('.').length > 2 ? window.location.hostname.split('.')[0] : 'index'
</script>

<template>
  {{ subdomain }}
</template>
