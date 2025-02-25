<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'DefaultLayout',
});
</script>

<style>

</style>
