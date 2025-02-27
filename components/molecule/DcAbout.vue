<template>
  <section class="about-section py-12">
    <UContainer>
      <div
        v-if="about?.meta"
        class="grid md:grid-cols-2 gap-8 items-center"
      >
        <div
          class="profile-image"
        >
          <img
            :src="about.meta.image"
            :alt="about.title"
            class="rounded-lg shadow-lg w-full max-w-md mx-auto"
          >
        </div>
        <div class="about-content">
          <h2 class="text-3xl font-bold mb-4">
            {{ about.title }}
          </h2>
          <ContentRenderer
            class="text-lg mb-6"
            :value="about"
          />
          <div
            v-if="about"
            class="key-points space-y-4"
          >
            <div class="flex items-start gap-3">
              <UIcon
                name="i-heroicons-code-bracket"
                class="text-primary mt-1"
              />
              <div>
                <h3 class="font-semibold">
                  Technical Expertise
                </h3>
                <p>{{ about.meta.technicalExpertise }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon
                name="i-heroicons-light-bulb"
                class="text-primary mt-1"
              />
              <div>
                <h3 class="font-semibold">
                  Problem Solver
                </h3>
                <p>{{ about.meta.problemSolver }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon
                name="i-heroicons-users"
                class="text-primary mt-1"
              />
              <div>
                <h3 class="font-semibold">
                  Team Player
                </h3>
                <p>{{ about.meta.teamPlayer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { data: about } = await useLazyAsyncData(() => queryCollection('content').path('/about').first());
</script>

<style scoped>
.about-section {
  background: var(--color-background-secondary);
}

.profile-image img {
  transition: transform 0.3s ease;
}

.profile-image img:hover {
  transform: scale(1.02);
}
</style>
