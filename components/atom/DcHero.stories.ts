import type { Meta, StoryObj } from '@storybook/vue3';
import DcHero from './DcHero.vue';

const meta = {
  title: 'Atom/DcHero',
  component: DcHero,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DcHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: 'https://picsum.photos/536/354',
    userName: 'David',
    role: 'frontend',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};
