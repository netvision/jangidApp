<script setup>
const navIsOpen = ref(false)
const navItems = [
  {
    id: 1,
    text: 'Home',
    href: '/',
  },
  {
    id: 2,
    text: 'Services',
    href: '/',
  },
  {
    id: 3,
    text: 'About',
    href: '/',
  },
  {
    id: 4,
    text: 'Work',
    href: '/',
  },
  {
    id: 5,
    text: 'Pricing',
    href: '/',
  },
]

function toggleNavBar() {
  navIsOpen.value = !navIsOpen.value
}
function closeNavBar() {
  navIsOpen.value = false
}
</script>

<template>
  <div aria-hidden="true" class="fixed inset-0 z30 bg-gray-8/40" :class="navIsOpen ? 'visible flex lg-hidden lg-invisible' : 'invisible hidden'" @click="closeNavBar()" />
  <div mx-auto max-w-7xl w-full px="5 sm:10 md:12 lg:5" bg-blueGray>
    <div class="h14 w-full flex items-center justify-between">
      <div text="gray-7 dark:gray-300" class="hfull flex items-center gap-x-4">
        <a href="tel:" flex items-center gap-1 text-sm>
          <span i-carbon-phone text-xl bg="gray-7 dark:gray-3" />
          <span class="hidden sm-flex">+243 97 24 44 966</span>
        </a>
        <a href="mailto:" flex items-center gap-1 text-sm>
          <span i-carbon-email bg="gray-7 dark:gray-3" text-xl />
          <span class="hidden sm-flex">johndoe@info.com</span>
        </a>
      </div>
      <div text="gray-7 dark:gray-300" class="flex items-center gap-x-2.5 -mx-2">
        <a href="#facebook" border="~ gray-2 dark:gray-8" bg="gray-1 dark:gray-9" rd-md p1>
          <span class="sr-only">facebook</span>
          <span i-carbon-logo-facebook bg="gray-7 dark:gray-300 hover:pink-700" flex text-2xl transition ease-linear />
        </a>

        <a href="#twitter" border="~ gray-2 dark:gray-8" bg="gray-1 dark:gray-9" rd-md p1>
          <span class="sr-only">Twitter</span>
          <span i-carbon-logo-twitter bg="gray-7 dark:gray-300 hover:pink-700" flex text-2xl transition ease-linear />
        </a>

        <a href="#linkedin" border="~ gray-2 dark:gray-8" bg="gray-1 dark:gray-9" rd-md p1>
          <span class="sr-only">linkedin</span>
          <span i-carbon-logo-linkedin bg="gray-7 dark:gray-300 hover:pink-700" flex text-2xl transition ease-linear />
        </a>

        <a href="#instagram" border="~ gray-2 dark:gray-8" bg="gray-1 dark:gray-9" rd-md p1>
          <span class="sr-only">instagram</span>
          <span i-carbon-logo-instagram bg="gray-7 dark:gray-300 hover:pink-700" flex text-2xl transition ease-linear />
        </a>
      </div>
    </div>
  </div>
  <header border-b="~ gray-1 dark:gray-9" bg="blue dark:gray-950 op-80" class="relative z50 backdrop-blur-xl backdrop-filter">
    <nav px="5 sm:10 md:12 lg:5" class="sticky left-0 top-0 z40 mx-auto h20 max-w-7xl w-full flex items-center justify-between gap-x-5">
      <div min-w-max flex items-center>
        <router-link to="/" flex items-center gap-x-2 text-xl font-semibold>
          <span flex>
            <span h6 w3 flex rd-l-full bg-red-5 />
            <span mt2 h6 w3 flex rd-r-full bg-pink-7 />
          </span>
          <span text="lg gray-7 dark:gray-300">Archix</span>
        </router-link>
      </div>

      <div
        bg="white dark:gray-950  lg:transparent" border-b="~ gray-2 dark:gray-8 lg:none"
        py="8 lg:0" px="5 sm:10 md:12 lg:0" lg="flex justify-between"
        fixed left-0 top-20 w-full duration-300 ease-linear lg-relative lg-top-0
        :class="navIsOpen ? 'visible op100 translate-y-0' : 'translate-y-10 lg-translate-y-0 invisible lg-visible op0 lg-op100'"
      >
        <ul text="gray-7 dark:gray-300" flex flex-col gap-6 lg-w-full lg-flex-row lg-items-center lg-justify-center>
          <li v-for="navItem in navItems" :key="navItem.id">
            <router-link :to="navItem.href" class="py2.5 duration-300 ease-linear hover-text-pink-6">
              {{ navItem.text }}
            </router-link>
          </li>
        </ul>
        <div mt-10 flex lg-mt-0 lg-min-w-max sm-items-center>
          <router-link to="#" class="h-12 w-full flex items-center justify-center border border-gray-2 rd-3xl bg-gray-1 px-6 text-pink-7 duration-300 ease-linear sm-w-auto dark-border-gray-8 dark-bg-gray-9 dark-text-white">
            Book a call
          </router-link>
        </div>
      </div>
      <div aria-hidden="true" class="flex items-center lg:hidden">
        <button aria-label="toggle navbar" border-l="~ gray-1 dark:gray-9" class="relative bg-transparent py3 pl3 outline-none" @click="toggleNavBar()">
          <div h0.5 w6 rd bg="gray-7 dark:gray-3" transition duration-300 aria-hidden="true" :class="navIsOpen ? 'rotate-45 translate-y-1.5' : ''" />
          <div mt2 h0.5 w6 rd bg="gray-7 dark:gray-3" transition duration-300 aria-hidden="true" :class="navIsOpen ? '-rotate-45 -translate-y-1.5' : ''" />
        </button>
      </div>
    </nav>
  </header>
</template>
