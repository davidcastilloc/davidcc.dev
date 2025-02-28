import type { Meta, StoryObj } from '@storybook/vue3';
import DcHeader from './DcHeader.vue';

const meta = {
  title: 'Organism/DcHeader',
  component: DcHeader,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DcHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { DcHeader },
    setup() {
      return { args };
    },
    template: '<DcHeader v-bind="args" />'
  }),
};
