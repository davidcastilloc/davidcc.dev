<template>
  <section
    id="contact"
    class="contact-section"
  >
    <UContainer>
      <h2 class="section-title">
        <UIcon
          name="i-heroicons-envelope"
          class="section-icon"
        />
        Get in Touch
      </h2>
      <UCard class="contact-card">
        <UForm
          :schema="schema"
          :state="form"
          @submit="handleSubmit"
        >
          <div class="form-grid">
            <UFormGroup
              label="Name"
              name="name"
            >
              <UInput
                v-model="form.name"
                placeholder="Your Name"
                required
              />
            </UFormGroup>
            <UFormGroup
              label="Email"
              name="email"
            >
              <UInput
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </UFormGroup>
            <UFormGroup
              label="Subject"
              name="subject"
              class="subject-field"
            >
              <UInput
                v-model="form.subject"
                placeholder="Subject"
                required
              />
            </UFormGroup>
            <UFormGroup
              label="Message"
              name="message"
              class="message-field"
            >
              <UTextarea
                v-model="form.message"
                placeholder="Your message here..."
                required
                :rows="5"
              />
            </UFormGroup>
          </div>
          <div class="form-actions">
            <UButton
              type="submit"
              color="primary"
              :loading="loading"
              icon="i-heroicons-paper-airplane"
            >
              Send Message
            </UButton>
          </div>
        </UForm>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

type Schema = z.output<typeof schema>;

const loading = ref(false);

const handleSubmit = async (event: FormSubmitEvent<Schema>) => {
  console.log(event);
  loading.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    useToast().add({
      title: 'Success!',
      description: 'Your message has been sent successfully.',
      icon: 'i-heroicons-check-circle',
      color: 'green',
    });
  }
  catch (error) {
    console.error(error);
    useToast().add({
      title: 'Error',
      description: 'Failed to send message. Please try again.',
      icon: 'i-heroicons-x-circle',
      color: 'red',
    });
  }
  finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.contact-section {
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

.contact-card {
  max-width: 800px;
  margin: 0 auto;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  .subject-field,
  .message-field {
    grid-column: span 2;

    @media (max-width: 640px) {
      grid-column: span 1;
    }
  }
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
