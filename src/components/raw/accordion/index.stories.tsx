import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from ".";

const meta: Meta<typeof Accordion> = {
  title: "Raw/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: "Acordion component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    color: "primary",
  },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Accordion 1",
    children: "Accordion 1 content",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
