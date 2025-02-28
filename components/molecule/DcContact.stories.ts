import type { Meta, StoryObj } from '@storybook/vue3';
import DcContact from './DcContact.vue';

const meta = {
  title: 'Molecule/DcContact',
  component: DcContact,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DcContact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { DcContact },
    setup() {
      return { args };
    },
    template: '<DcContact v-bind="args" />'
  }),
};
