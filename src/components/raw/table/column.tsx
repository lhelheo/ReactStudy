import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const tableColumnStyles = tv({
  base: ["text-left font-medium bg-white p-2 uppercase"],
  variants: {
    color: {
      neutral: ["text-neutral-600"],
    },
    isClickable: {
      true: ["cursor-pointer ease-linear transition-all"],
    },
  },
  compoundVariants: [
    {
      color: "neutral",
      isClickable: true,
      className: ["hover:text-primary-500"],
    },
  ],
  defaultVariants: {
    color: "neutral",
  },
});

interface TableColumnProps {
  color?: "neutral";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const TableColumn = (props: TableColumnProps) => {
  const { color } = props;

  return (
    <th
      scope="col"
      className={cx(
        tableColumnStyles({ color, isClickable: !!props.onClick }),
        props.className,
      )}
      onClick={props.onClick}
    >
      <span className="flex items-center gap-2">{props.children}</span>
    </th>
  );
};
