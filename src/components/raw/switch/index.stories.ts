import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";

const meta: Meta<typeof Switch> = {
  title: "Raw/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Essa é a visualização do componente de Toggle.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
  },
};
