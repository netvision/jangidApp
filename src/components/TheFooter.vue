<template>
  <nav mt-2 w-full inline-flex justify-center gap-2 text-xl>
    <button icon-btn @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>
    <span class="text-sm">&copy; jangid.co.in</span>
  </nav>
</template>
