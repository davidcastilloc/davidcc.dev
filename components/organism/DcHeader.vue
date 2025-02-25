<template>
  <header class="w-full bg-gray-900 text-white py-4 fixed top-0 z-50">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="text-xl font-bold"
        >David Castillo</NuxtLink>
        <div class="hidden md:flex space-x-6">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="hover:text-gray-300 transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        <UButton
          icon="i-heroicons-bars-3"
          color="white"
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
          class="block hover:text-gray-300 transition-colors"
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
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Works', path: '/works' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];
</script>
