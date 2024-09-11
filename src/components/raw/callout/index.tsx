import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const calloutVariants = tv({
  base: ["flex flex-col overflow-hidden rounded-[6px] p-4 text-sm"],
  variants: {
    color: {
      primary: ["bg-primary-500 bg-opacity-5 text-primary-500"],
      secondary: ["bg-secondary-500 bg-opacity-5 text-secondary-500"],
      success: ["bg-success-500 bg-opacity-5 text-success-500"],
      danger: ["bg-danger-500 bg-opacity-5 text-danger-500"],
      warn: ["bg-warn-500 bg-opacity-5 text-warn-500"],
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

interface CalloutProps {
  className?: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warn";
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
}

export const Callout = (props: CalloutProps) => {
  const { color } = props;

  return (
    <div className={cx(calloutVariants({ color }), props.className)}>
      {props.title && (
        <div className="flex items-center gap-2 mb-2">
          {props.icon}
          <h2 className="font-semibold">{props.title}</h2>
        </div>
      )}
      {props.children}
    </div>
  );
};
