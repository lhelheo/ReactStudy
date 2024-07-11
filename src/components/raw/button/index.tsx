import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

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
      secondary:
        "text-primary bg-white border border-primary hover:bg-opacity-90 disabled:bg-opacity-70",
    },
    size: {
      sm: "text-xs px-2 py-1",
      md: "text-sm px-3 py-2",
      lg: "text-lg px-4 py-3",
    },
  },
  defaultVariants: {
    type: "button",
    color: "primary",
    size: "md",
  },
});

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  icon?: ReactNode;
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  loading?: {
    isActive: boolean;
    text: string;
  };
}

export const Button = (props: ButtonProps) => {
  const { color, size } = props;
  let isLoading = props.loading ? props.loading.isActive : false;

  return (
    <button
      type={props.type}
      className={cx(buttonVariants({ color, size }), props.className)}
      disabled={props.disabled || isLoading}
    >
      {props.icon || null}
      {isLoading && props.loading?.text}
      {!isLoading && props.children}
    </button>
  );
};
