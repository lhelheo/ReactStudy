"use client";
import { Meta, StoryObj } from "@storybook/react";
import { BuildingCard } from "./building";

const meta: Meta<typeof BuildingCard> = {
  title: "Templates/Card/Building",
  component: BuildingCard,
  parameters: {
    docs: {
      description: {
        component: "Example of a building card.",
      },
    },
  },
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
