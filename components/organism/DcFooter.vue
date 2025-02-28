<template>
  <footer class="py-8 mt-auto">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-sm">
            &copy; {{ currentYear }} David Castillo. All rights reserved.
          </p>
        </div>
        <div class="flex space-x-4">
          <UButton
            v-for="link in socialLinks"
            :key="link.name"
            :icon="link.icon"
            variant="ghost"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'i-simple-icons-github',
    url: 'https://github.com/davidcastilloc',
  },
  {
    name: 'LinkedIn',
    icon: 'i-simple-icons-linkedin',
    url: 'https://www.linkedin.com/in/davidjinformatico',
  },
];
</script>
