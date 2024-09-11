import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const tableContainerStyles = tv({
  base: ["w-full overflow-auto whitespace-nowrap bg-white h-auto flex"],
});

const tableStyles = tv({
  base: ["w-full h-full overflow-auto"],
});

interface TableContainerProps {
  children: ReactNode;
  className?: string;
  tableClassName?: string;
}

export const TableContainer = (props: TableContainerProps) => {
  return (
    <div className={cx(tableContainerStyles(), props.className)}>
      <table className={cx(tableStyles(), props.tableClassName)}>
        {props.children}
      </table>
    </div>
  );
};
