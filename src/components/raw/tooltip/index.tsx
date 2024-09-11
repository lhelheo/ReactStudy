import { ReactNode } from "react";
import { tv } from "tailwind-variants";
import { cx } from "@/utils/tailwind";

const tooltipContentStyles = tv({
  base: [
    "absolute z-10 p-2 rounded-md shadow-lg bg-black text-white whitespace-nowrap",
    "hidden absolute md:group-hover:block md:group-hover:visible",
  ],
  variants: {
    color: {
      primary: ["bg-primary text-white"],
      secondary: ["bg-gray-extradark text-white"],
      danger: ["bg-danger text-white"],
      warn: ["bg-warning text-white"],
    },
    placement: {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      right: "top-1/2 left-full -translate-y-1/2 ml-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "top-1/2 right-full -translate-y-1/2 mr-2",
    },
  },
  defaultVariants: {
    placement: "top",
    color: "primary",
  },
});

interface TooltipProps {
  className?: string;
  children: ReactNode;
  description: string;
  placement?: "top" | "right" | "bottom" | "left";
  color?: "primary" | "secondary" | "danger" | "warn";
}

export const Tooltip = (props: TooltipProps) => {
  const { placement, color } = props;

  return (
    <div className="relative inline-block group cursor-pointer">
      {props.children}
      <div
        className={cx(
          tooltipContentStyles({ placement, color }),
          props.className,
        )}
      >
        {props.description}
      </div>
    </div>
  );
};
