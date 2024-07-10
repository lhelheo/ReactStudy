import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: [
    "relative inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-2 text-center text-sm font-medium shadow-sm transition-all ease-linear",
    "disabled:cursor-not-allowed disabled:shadow-none",
    "outline-none focus:outline-none",
  ],
  variants: {
    color: {
      primary:
        "text-white bg-primary hover:bg-opacity-80 disabled:bg-opacity-70",
    },
    size: {
      sm: "text-xs px-2 py-1",
      md: "text-sm px-3 py-2",
      lg: "text-lg px-4 py-3",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

interface ButtonProps {
  type?: HTMLButtonElement["type"];
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  icon?: ReactNode;
  variant?: VariantProps<typeof buttonVariants>;
  loading?: {
    isActive: boolean;
    text: string;
  };
}

export const Button = (props: ButtonProps) => {
  let isLoading = props.loading ? props.loading.isActive : false;

  return (
    <button
      type={props.type}
      className={cx(buttonVariants({ ...props.variant }), props.className)}
      disabled={props.disabled || isLoading}
    >
      {props.icon || null}
      {isLoading && props.loading?.text}
      {!isLoading && props.children}
    </button>
  );
};
