import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const loadingInlineStyles = tv({
  base: ["animate-pulse text-sm"],
  variants: {
    color: {
      primary: ["text-primary-500"],
      secondary: ["text-secondary-500"],
      neutral: ["text-neutral-500"],
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

interface LoadingInlineProps {
  className?: string;
  color?: "primary" | "secondary" | "neutral";
  children: ReactNode;
}

export const LoadingInline = (props: LoadingInlineProps) => {
  const { color } = props;

  return (
    <p className={cx(loadingInlineStyles({ color }), props.className)}>
      {props.children}
    </p>
  );
};
