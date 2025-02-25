<template>
  <UContainer>
    <div class="hero-content">
      <UCard class="hero-card">
        <template #header>
          <div class="hero-header">
            <UAvatar
              src="https://avatars.githubusercontent.com/u/your-github-username"
              alt="Profile Picture"
              size="2xl"
            />
            <UBadge color="primary" class="role-badge">Nuxt/Vue.js Expert</UBadge>
          </div>
        </template>
        <h1 class="hero-title">
          <UIcon name="i-heroicons-wave-hand" class="wave-icon" />
          Hi, I'm David Castillo
        </h1>
        <p class="hero-description">
          A passionate Full Stack Developer specializing in Vue.js and Nuxt. I create modern, responsive, and performant web applications.
        </p>
        <template #footer>
          <div class="hero-actions">
            <UButton
              color="primary"
              icon="i-heroicons-document-text"
              to="#projects"
            >
              View Projects
            </UButton>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-envelope"
              to="#contact"
            >
              Contact Me
            </UButton>
          </div>
        </template>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
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

.hero-description {
  font-size: 1.25rem;
  color: var(--color-gray-600);
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-15deg); }
}
</style>
