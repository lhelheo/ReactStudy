import type { Meta, StoryObj } from "@storybook/react";
import { DialogContainer } from "./container";

const meta: Meta<typeof DialogContainer> = {
  title: "Raw/Dialog/Container",
  component: DialogContainer,
  parameters: {
    docs: {
      description: {
        component: "Dialog Container component.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          incidunt laborum, et iste voluptate aliquid labore. Impedit quaerat
          natus repellat doloribus laboriosam velit explicabo, nobis distinctio!
          Eos nemo id quas?
        </p>
      </>
    ),
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
