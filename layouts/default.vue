<template>
  <div class="min-h-screen flex flex-col">
    <DcHeader />
    <main class="flex-grow pt-20">
      <slot />
    </main>
    <DcFooter />
  </div>
</template>

<script setup lang="ts">

</script>
