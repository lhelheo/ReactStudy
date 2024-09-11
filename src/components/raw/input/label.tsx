import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const labelStyles = tv({
  base: ["font-medium w-fit flex gap-2 items-center"],
  variants: {
    color: {
      primary: ["text-neutral-700"],
      secondary: ["text-neutral-600"],
    },
    size: {
      sm: ["text-sm"],
      md: ["text-base"],
      lg: ["text-lg"],
    },
  },
  defaultVariants: {
    color: "primary",
    size: "sm",
  },
});

interface LabelProps {
  htmlFor: string;
  className?: string;
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  required?: boolean;
}

export const Label = (props: LabelProps) => {
  const { color, size } = props;

  return (
    <label
      htmlFor={props.htmlFor}
      className={cx(labelStyles({ color, size }), props.className)}
    >
      {props.children}
      {props.required && <span className="text-warn-500 ml-1">*</span>}
    </label>
  );
};
