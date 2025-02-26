<template>
  <section
    id="works"
    class="py-12"
  >
    <UContainer>
      <div class="text-center mb-8">
        <h2 class="text-4xl font-bold mb-4">
          My Works
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Here are some of my recent projects and professional work
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Project Card -->
        <UCard
          v-for="project in projects"
          :key="project.id"
          class="hover:shadow-lg transition-shadow duration-300"
        >
          <template #header>
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-cover rounded-t-lg"
            >
          </template>

          <h3 class="text-xl font-semibold mb-2">
            {{ project.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <UBadge
              v-for="tech in project.technologies"
              :key="tech"
              :label="tech"
            />
          </div>

          <template #footer>
            <div class="flex justify-between items-center">
              <UButton
                v-if="project.demoUrl"
                :to="project.demoUrl"
                target="_blank"
                color="primary"
                variant="soft"
              >
                Live Demo
              </UButton>
              <UButton
                v-if="project.repoUrl"
                :to="project.repoUrl"
                target="_blank"
                color="gray"
                variant="soft"
              >
                <UIcon
                  name="i-simple-icons-github"
                  class="mr-1"
                />
                Repository
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
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'My personal portfolio website built with Nuxt 3 and TailwindCSS',
    image: 'https://picsum.photos/id/1060/536/354?blur=2',
    technologies: ['Vue.js', 'Nuxt 3', 'TailwindCSS', 'TypeScript'],
    demoUrl: 'https://davidcc.dev',
    repoUrl: 'https://github.com/davidcastillog/davidcc.dev',
  },
  // Add more projects here
];
</script>
