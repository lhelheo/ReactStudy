import { Meta, StoryObj } from "@storybook/react";
import { Callout } from ".";

const meta: Meta<typeof Callout> = {
  title: "Raw/Callout",
  component: Callout,
  parameters: {
    docs: {
      description: {
        component: "Callout component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    title: "MyCalloutTitle",
    children: "MyCalloutContent",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};

export const Success: Story = {
  args: {
    color: "success",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
  },
};

export const Warn: Story = {
  args: {
    color: "warn",
  },
};
