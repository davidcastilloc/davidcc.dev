<template>
  <section class="about-section py-12">
    <UContainer>
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="profile-image">
          <img
            src="/images/profile.webp"
            alt="David Castillo"
            class="rounded-lg shadow-lg w-full max-w-md mx-auto"
          >
        </div>
        <div class="about-content">
          <h2 class="text-3xl font-bold mb-4">
            About Me
          </h2>
          <p class="text-lg mb-6">
            Hi, I'm David Castillo, a passionate Full Stack Developer with expertise in modern web
            technologies. I specialize in building scalable and performant web applications using
            Vue.js, Nuxt, and other cutting-edge technologies.
          </p>
          <div class="key-points space-y-4">
            <div class="flex items-start gap-3">
              <UIcon
                name="i-heroicons-code-bracket"
                class="text-primary mt-1"
              />
              <div>
                <h3 class="font-semibold">
                  Technical Expertise
                </h3>
                <p>Proficient in Vue.js, Nuxt.js, TypeScript, and modern web development practices.</p>
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
                <p>Passionate about finding elegant solutions to complex technical challenges.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon
                name="i-heroicons-users"
                class="text-primary mt-1"
              />
              <div>
                <h3 class="font-semibold">
                  Team Collaboration
                </h3>
                <p>Strong communicator with experience in cross-functional team environments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
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
