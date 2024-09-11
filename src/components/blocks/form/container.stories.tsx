import type { Meta, StoryObj } from "@storybook/react";
import { Form } from ".";

const meta: Meta<typeof Form.Container> = {
  title: "Blocks/Form/Form",
  component: Form.Container,
  parameters: {
    docs: {
      description: {
        component: "Form component.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <Form.Wrapper>
          <Form.Input.Label htmlFor="name" required>
            Name
          </Form.Input.Label>
          <Form.Input.Text id="name" name="name" required />
        </Form.Wrapper>
        <Form.Submit>Submit</Form.Submit>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    action: async () => {
      "use server";
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { successMessage: "Success", successRedirect: "/" };
    },
  },
};

export const Error: Story = {
  args: {
    action: async () => {
      "use server";
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { errorMessage: "Error" };
    },
  },
};
