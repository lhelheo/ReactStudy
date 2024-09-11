import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from ".";

const meta: Meta<typeof Menu> = {
  title: "Raw/Menu",
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: "Menu component with tailwindcss variants.",
      },
    },
    layout: "centered",
  },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Menu",
    onClick: (item) => console.log(item),
    items: [
      {
        label: "Item 1",
      },
      {
        label: "Item 2",
      },
    ],
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "Menu",
    items: [
      {
        label: "Item 1",
        onClick: () => {
          console.log("Item 1 clicked");
        },
      },
      {
        label: "Item 2",
        onClick: () => {
          console.log("Item 2 clicked");
        },
      },
    ],
  },
};

export const Neutral: Story = {
  args: {
    color: "neutral",
    children: "Menu",
    items: [
      {
        label: "Item 1",
        onClick: () => {
          console.log("Item 1 clicked");
        },
      },
      {
        label: "Item 2",
        onClick: () => {
          console.log("Item 2 clicked");
        },
      },
    ],
  },
};

export const Warn: Story = {
  args: {
    color: "warn",
    children: "Menu",
    items: [
      {
        label: "Item 1",
        onClick: () => {
          console.log("Item 1 clicked");
        },
      },
      {
        label: "Item 2",
        onClick: () => {
          console.log("Item 2 clicked");
        },
      },
    ],
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    children: "Menu",
    items: [
      {
        label: "Item 1",
        onClick: () => {
          console.log("Item 1 clicked");
        },
      },
      {
        label: "Item 2",
        onClick: () => {
          console.log("Item 2 clicked");
        },
      },
    ],
  },
};
