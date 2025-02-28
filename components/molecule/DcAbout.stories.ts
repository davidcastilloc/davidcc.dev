import type { Meta, StoryObj } from '@storybook/vue3';
import DcAbout from './DcAbout.vue';

const meta = {
  title: 'Molecule/DcAbout',
  component: DcAbout,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DcAbout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { DcAbout },
    setup() {
      return { args };
    },
    template: '<DcAbout v-bind="args" />'
  }),
};
