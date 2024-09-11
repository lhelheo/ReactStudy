import { Meta, StoryObj } from "@storybook/react";
import { AnchorLink } from ".";

const meta: Meta<typeof AnchorLink> = {
  title: "Raw/AnchorLink",
  component: AnchorLink,
  parameters: {
    docs: {
      description: {
        component: "AnchorLink component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    href: "#",
    children: "Anchor Link",
    underline: true,
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

export const Neutral: Story = {
  args: {
    color: "neutral",
  },
};
