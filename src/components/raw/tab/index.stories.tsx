import { Meta, StoryObj } from "@storybook/react";
import { Tab } from ".";

const meta: Meta<typeof Tab> = {
  title: "Raw/Tab",
  component: Tab,
  parameters: {
    docs: {
      description: {
        component: "Tab component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    items: [
      { label: "Tab 1", value: "tab1" },
      { label: "Tab 2", value: "tab2" },
      { label: "Tab 3", value: "tab3" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
  },
};
