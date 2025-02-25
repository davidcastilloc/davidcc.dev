<template>
  <section
    id="projects"
    class="projects-section"
  >
    <UContainer>
      <h2 class="section-title">
        <UIcon
          name="i-heroicons-code-bracket"
          class="section-icon"
        />
        Projects
      </h2>
      <div class="projects-grid">
        <UCard
          v-for="project in projects"
          :key="project.id"
          class="project-card"
        >
          <template #header>
            <img
              :src="project.image"
              :alt="project.title"
              class="project-image"
            >
          </template>
          <h3 class="project-title">
            {{ project.title }}
          </h3>
          <p class="project-description">
            {{ project.description }}
          </p>
          <div class="project-tags">
            <UBadge
              v-for="tag in project.tags"
              :key="tag"
              color="primary"
              variant="subtle"
              class="tag"
            >
              {{ tag }}
            </UBadge>
          </div>
          <template #footer>
            <div class="project-actions">
              <UButton
                v-if="project.demo"
                color="primary"
                :to="project.demo"
                target="_blank"
                icon="i-heroicons-play-circle"
              >
                Live Demo
              </UButton>
              <UButton
                v-if="project.github"
                color="gray"
                variant="ghost"
                :to="project.github"
                target="_blank"
                icon="i-heroicons-code"
              >
                Source Code
              </UButton>
            </div>
          </template>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demo?: string
  github?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'A modern web application built with Nuxt 3 and Vue.js',
    image: '/images/project1.jpg',
    tags: ['Nuxt.js', 'Vue.js', 'TypeScript'],
    demo: 'https://project1.demo',
    github: 'https://github.com/username/project1',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Full-stack application with real-time features',
    image: '/images/project2.jpg',
    tags: ['Vue.js', 'Node.js', 'WebSocket'],
    demo: 'https://project2.demo',
    github: 'https://github.com/username/project2',
  },
  // Add more projects as needed
];
</script>

<style lang="scss" scoped>
.projects-section {
  padding: 4rem 0;
  background-color: var(--color-gray-50);
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
}

.project-description {
  color: var(--color-gray-600);
  margin-bottom: 1rem;
  flex-grow: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;

  .tag {
    font-size: 0.875rem;
  }
}

.project-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
}
</style>
