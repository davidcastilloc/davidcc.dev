<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="min-h-screen flex flex-col">
    <OrganismDcHeader />
    <main class="flex-grow pt-20">
      <slot />
    </main>
    <OrganismDcFooter />
  </div>
</template>

<script setup>
</script>
