<template>
  <section
    id="skills"
    class="skills-section"
  >
    <UContainer>
      <h2 class="section-title">
        <UIcon
          name="i-heroicons-cpu-chip"
          class="section-icon"
        />
        Skills & Technologies
      </h2>
      <div class="skills-grid">
        <UCard
          v-for="skill in page.meta.skills"
          :key="skill.name"
          class="skill-card"
        >
          <div class="skill-header">
            <UIcon
              :name="skill.icon"
              class="skill-icon"
            />
            <h3 class="skill-name">
              {{ skill.name }}
            </h3>
          </div>
          <UProgress
            :value="skill.level"
            :color="skill.color"
            class="skill-progress"
          />
          <p class="skill-description">
            {{ skill.description }}
          </p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  icon: string
  level: number
  color: string
  description: string
}
const { data: page } = await useAsyncData(() => queryCollection('content').path('/skills').first())

</script>

<style lang="scss" scoped>
.skills-section {
  padding: 4rem 0;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .section-icon {
    font-size: 1.8rem;
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.skill-card {
  height: 100%;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.skill-icon {
  font-size: 2rem;
}

.skill-name {
  font-size: 1.25rem;
  font-weight: bold;
}

.skill-progress {
  margin: 1rem 0;
}

.skill-description {
  color: var(--color-gray-600);
  font-size: 0.875rem;
}
</style>
