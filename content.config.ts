import { defineContentConfig, defineCollection } from '@nuxt/content';
import { schemaResume } from './content/models/resume'
export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
    resume: defineCollection({
      type: 'data',
      source: 'resumes/**/*.json',
      schema: schemaResume,
    }),
  },
});
