<template>
  <UContainer class="text-center w-full">
    <UCard>
      <template #header>
        <div class="flex flex-col items-center gap-1">
          <UAvatar
            :src="avatar"
            :alt="userName"
            size="2xl"
          />
          <UBadge
            color="primary"
            class="font-bold"
          >
            {{ role }}
          </UBadge>
        </div>
      </template>
      <h1 class="sm:text-2xl md:text-5xl font-bold">
        <UIcon
          name="i-heroicons-solid:hand"
          class="wave-icon text-primary-500 dark:text-primary-400"
        />
        Hi, I'm {{ userName }}
      </h1>
      <p class="my-4 md:font-bold text-gray-700 dark:text-gray-300">
        {{ description }}
      </p>
      <template #footer>
        <div>
          <UButton
            icon="i-heroicons-document-text"
            to="/projects"
            class="bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700"
          >
            View Projects
          </UButton>
          <UButton
            variant="ghost"
            icon="i-heroicons-envelope"
            to="/contact"
            class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Contact Me
          </UButton>
          <UButton
            variant="ghost"
            icon="i-heroicons-calendar"
            to="https://cal.com/davidcc.dev"
            class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            target="_blank"
          >
            Schedule a Call
          </UButton>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
export interface IHeroProps {
  userName: string
  description: string
  avatar: string
  role: string
}

const props = withDefaults(defineProps<IHeroProps>(), {
  description: 'A Professional Frontend Developer',
  avatar: 'https://picsum.photos/536/354',
  userName: 'David Castillo',
  role: 'frontend',
});

const { description, avatar, userName, role } = props;
</script>

<style lang="scss" scoped>
.wave-icon {
  animation: wave 2s infinite;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}
</style>
