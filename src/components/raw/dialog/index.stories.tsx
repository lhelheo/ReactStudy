import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from ".";

const meta: Meta<typeof Dialog.Container> = {
  title: "Raw/Dialog/Dialog",
  component: Dialog.Container,
  parameters: {
    docs: {
      description: {
        component: "Dialog component.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <Dialog.Header onClose={() => {}}>Hello World!</Dialog.Header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          temporibus, iure dolor perspiciatis dolore beatae assumenda saepe,
          animi harum voluptas dolorem facere, voluptates inventore quas quos
          quae! Temporibus, quis amet?
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
