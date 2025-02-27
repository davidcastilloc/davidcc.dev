<template>
  <UCard>
    <h2 class="section-title">
      <UIcon
        name="i-heroicons-check-circle"
        class="section-icon"
      />
      Thanks for contacting us!
    </h2>
    <p class="section-description">
      We will get back to you shortly.
    </p>
    <div class="flex justify-center">
      <UButton
        to="/"
        color="primary"
        icon="i-heroicons-arrow-left"
      >
        Back to Home
      </UButton>
    </div>
  </UCard>
</template>

<script lang="ts" setup>

</script>

<style>
.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.section-icon {
  font-size: 1.8rem;
}

.section-description {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
