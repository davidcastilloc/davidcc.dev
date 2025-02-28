<template>
  <div>
    <AtomDcHero
      :user-name="heroData.meta.name"
      :description="heroData.description"
      :avatar="heroData.meta.avatar"
      :role="heroData.meta.role"
    />
  </div>
</template>

<script lang="ts" setup>
defineComponent({
  name: 'IndexPage',
});
const { data: heroData } = await useAsyncData(() => queryCollection('content').path('/hero').first());
</script>
