import { Meta, StoryObj } from "@storybook/react";
import { FormReset } from "./reset";

const meta: Meta<typeof FormReset> = {
  title: "Blocks/Form/Reset",
  component: FormReset,
  parameters: {
    docs: {
      description: {
        component: "Reset button component for forms.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: "Reset",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
