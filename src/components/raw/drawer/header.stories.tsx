import type { Meta, StoryObj } from "@storybook/react";
import { DrawerHeader } from "./header";

const meta: Meta<typeof DrawerHeader> = {
  title: "Raw/Drawer/Header",
  component: DrawerHeader,
  parameters: {
    docs: {
      description: {
        component: "Drawer component with tailwindcss variants.",
      },
    },
  },
  argTypes: {
    description: {
      control: {
        type: "text",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    children: "Drawer Header",
  },
};
