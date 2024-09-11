"use client";
import { Meta, StoryObj } from "@storybook/react";
import { LockedCard } from "./locked";

const meta: Meta<typeof LockedCard> = {
  title: "Templates/Card/Locked",
  component: LockedCard,
  parameters: {
    docs: {
      description: {
        component: "Example of a locked card.",
      },
    },
  },
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
