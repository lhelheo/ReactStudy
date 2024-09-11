import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from ".";

const meta: Meta<typeof Toast> = {
  title: "Raw/Toast",
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: "Toast component with tailwindcss variants.",
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    icon: {
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    children: "Toast",
    title: "Title",
    description: "Description of the toast message goes here.",
    category: "success",
  },
};

export const Danger: Story = {
  args: {
    children: "Toast",
    title: "Title",
    description: "Description of the toast message goes here.",
    category: "info",
  },
};

export const Warn: Story = {
  args: {
    children: "Toast",
    title: "Title",
    description: "Description of the toast message goes here.",
    category: "warn",
  },
};

export const Info: Story = {
  args: {
    children: "Toast",
    title: "Title",
    description: "Description of the toast message goes here.",
    category: "info",
  },
};

export const Error: Story = {
  args: {
    children: "Toast",
    title: "Title",
    description: "Description of the toast message goes here.",
    category: "error",
  },
};
