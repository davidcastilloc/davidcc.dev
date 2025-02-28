<template>
  <header class="w-full bg-background/75 backdrop-blur border-b py-4 fixed top-0 z-50">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-around">
        <NuxtLink
          to="/"
          class="text-xl hover:text-primary font-bold"
        >David Castillo </NuxtLink>
        <div class="hidden md:flex space-x-6">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            :class="linkClasses(item)"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        <AtomDcDarkWhiteToggle class="z-51" />
        <UButton
          icon="i-heroicons-bars-3"
          variant="ghost"
          class="md:hidden"
          @click="isMenuOpen = !isMenuOpen"
        />
      </nav>
      <!-- Mobile menu -->
      <div
        v-show="isMenuOpen"
        class="md:hidden mt-4 space-y-4"
      >
        <NuxtLink
          v-for="item in navigationItems"
          :key="item.path"
          :to="item.path"
          class="block transition-colors"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

const navigationItems = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const route = useRoute();
const currentRoute = computed(() => route.path);

const linkClasses = computed(() => item => [
  'text-lg',
  'hover:text-primary',
  { 'text-primary font-bold': currentRoute.value === item.path },
]);
</script>
