<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="min-h-screen flex flex-col bg-gray-50  text-gray-900 dark:text-gray-100  dark:bg-gray-900">
    <OrganismDcHeader />
    <main class="flex-grow pt-20">
      <slot />
    </main>
    <OrganismDcFooter />
  </div>
</template>
