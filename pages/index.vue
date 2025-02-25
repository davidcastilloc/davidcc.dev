<template>
  <div>
    <h1> Hola Mundo</h1>
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta, defineComponent } from '#imports';

defineComponent({
  name: 'IndexPage',
});

definePageMeta(
  {
    name: 'IndexPage',
    head: {
      title: 'Hola Mundo',
      meta: [
        {
          name: 'description',
          content: 'Hola Mundo',
        },
      ],
    },
  },
);
</script>

<style>

</style>
