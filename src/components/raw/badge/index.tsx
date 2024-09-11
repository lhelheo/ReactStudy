import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

export const badgeStyles = tv({
  base: [
    "w-fit font-medium flex items-center justify-center text-center gap-2 whitespace-nowrap rounded-[6px] px-2.5 py-1",
  ],
  variants: {
    color: {
      primary: ["bg-primary-500 bg-opacity-10 text-primary-500"],
      secondary: ["bg-secondary-500 bg-opacity-10 text-secondary-500"],
      success: ["bg-success-500 bg-opacity-10 text-success-500"],
      warn: ["bg-warn-500 bg-opacity-10 text-warn-500"],
      danger: ["bg-danger-500 bg-opacity-10 text-danger-500"],
      neutral: ["bg-neutral-500 bg-opacity-10 text-secondary-500"],
    },
  },
});

interface BadgeProps {
  className?: string;
  color?: "primary" | "secondary" | "success" | "warn" | "danger" | "neutral";
  children: ReactNode;
}

export const Badge = (props: BadgeProps) => {
  const { color } = props;

  return (
    <div className={cx(badgeStyles({ color }), props.className)}>
      {props.children}
    </div>
  );
};
