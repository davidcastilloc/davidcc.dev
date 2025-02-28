import type { Meta, StoryObj } from '@storybook/vue3';
import DcDarkWhiteToggle from './DcDarkWhiteToggle.vue';

const meta = {
  title: 'Atom/DcDarkWhiteToggle',
  component: DcDarkWhiteToggle,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DcDarkWhiteToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { DcDarkWhiteToggle },
    setup() {
      return { args };
    },
    template: '<DcDarkWhiteToggle v-bind="args" />'
  }),
};
