import type { Meta, StoryObj } from '@storybook/vue3';
import DcSkills from './DcSkills.vue';

const meta = {
  title: 'Molecule/DcSkills',
  component: DcSkills,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DcSkills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { DcSkills },
    setup() {
      return { args };
    },
    template: '<DcSkills v-bind="args" />'
  }),
};
