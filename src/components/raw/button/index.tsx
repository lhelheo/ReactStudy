import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

export const buttonStyles = tv({
  base: [
    "relative flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] px-3 py-2 text-center text-sm font-medium transition-all ease-linear",
    "disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-secondary-500 disabled:hover:text-secondary-500",
    "outline-none focus:outline-none",
  ],
  variants: {
    color: {
      primary: [
        "bg-primary-500 border-transparent text-white",
        "hover:bg-opacity-90",
      ],
      secondary: ["bg-secondary-500 text-white", "hover:bg-opacity-90"],
      neutral: [
        "bg-none border-none text-neutral-700",
        "hover:text-primary-500",
      ],
      warn: [
        "bg-transparent border-neutral-300 text-neutral-700",
        "hover:bg-warn-500 hover:border-warn-500 hover:text-white",
      ],
      danger: [
        "bg-transparent border-neutral-300 text-neutral-700",
        "hover:bg-danger-500 hover:border-danger-500 hover:text-white",
      ],
    },
    size: {
      sm: "text-xs px-[10px] py-[8px]",
      md: "text-sm px-[14px] py-[10px]",
      lg: "text-lg px-[18px] py-[12px]",
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
  color?: "primary" | "secondary" | "warn" | "danger" | "neutral";
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
      className={cx(buttonStyles({ color, size }), props.className)}
      disabled={props.disabled || isLoading}
      onClick={props.onClick}
    >
      {props.icon || null}
      {isLoading && props.loading?.text}
      {!isLoading && props.children}
    </button>
  );
};
