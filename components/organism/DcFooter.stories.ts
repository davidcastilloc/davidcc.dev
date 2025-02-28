import type { Meta, StoryObj } from '@storybook/vue3';
import DcFooter from './DcFooter.vue';

const meta = {
  title: 'Organism/DcFooter',
  component: DcFooter,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DcFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { DcFooter },
    setup() {
      return { args };
    },
    template: '<DcFooter v-bind="args" />'
  }),
};
