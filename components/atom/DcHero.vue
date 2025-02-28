<template>
  <UContainer>
    <div class="hero-content">
      <UCard class="hero-card">
        <template #header>
          <div
            class="hero-header"
          >
            <UAvatar
              :src="avatar"
              :alt="userName"
              size="2xl"
            />
            <UBadge
              color="primary"
              class="role-badge"
            >
              {{ role }}
            </UBadge>
          </div>
        </template>
        <h1 class="sm:text-3xl md:text-5xl font-bold">
          <UIcon
            name="i-heroicons-solid:hand"
            class="wave-icon"
          />
          Hi, I'm {{ userName }}
        </h1>
        <p class="my-4 font-bold">
          {{ description }}
        </p>
        <template #footer>
          <div class="flex gap-4 justify-center">
            <UButton
              icon="i-heroicons-document-text"
              to="/projects"
            >
              View Projects
            </UButton>
            <UButton
              variant="ghost"
              icon="i-heroicons-envelope"
              to="/contact"
            >
              Contact Me
            </UButton>
            <UButton
              variant="ghost"
              icon="i-heroicons-calendar"
              to="https://cal.com/davidcc.dev"
            >
              Schedule a Meeting
            </UButton>
          </div>
        </template>
      </UCard>
    </div>
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
.hero-content {
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.hero-card {
  max-width: 800px;
  width: 100%;
  text-align: center;
}

.hero-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.role-badge {
  font-size: 1rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.wave-icon {
  font-size: 2rem;
  animation: wave 2s infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-15deg); }
}
</style>
