import type { Meta, StoryObj } from "@storybook/react";
import { DialogHeader } from "./header";

const meta: Meta<typeof DialogHeader> = {
  title: "Raw/Dialog/Header",
  component: DialogHeader,
  parameters: {
    docs: {
      description: {
        component: "Header component for dialog.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onClose: {
      action: "onClose",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Dialog Header",
    onClose: () => console.log("Close"),
  },
};
