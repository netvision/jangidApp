<script setup>
const subdomain = window.location.hostname.split('.').length > 2 ? window.location.hostname.split('.')[0] : 'admin'
const component = defineAsyncComponent(() => import(`../components/themes/${subdomain}.vue`))
</script>

<template>
  <Component :is="component" :data="subdomain" />
</template>
