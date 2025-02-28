import type { Meta, StoryObj } from '@storybook/vue3';
import DcHelloWorld from './DcHelloWorld.vue';

const meta = {
  title: 'Atom/DcHelloWorld',
  component: DcHelloWorld,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DcHelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { DcHelloWorld },
    setup() {
      return { args };
    },
    template: '<DcHelloWorld v-bind="args" />'
  }),
};
