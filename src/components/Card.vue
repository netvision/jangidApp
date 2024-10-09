<script setup>
const props = defineProps(['page'])
const theme = shallowRef(null)
const showModal = ref(false)
if (props.page?.theme)
  theme.value = defineAsyncComponent(() => import(`./themes/${props.page?.theme?.name}.vue`))
</script>

<template>
  <Component :is="theme" :data="props.page" />
  <button id="show-modal" @click="showModal = true">
    Edit
  </button>
  <button>Delete</button>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <CardEditor :show="showModal" :page="props.page" @close="showModal = false" />
  </Teleport>
</template>
