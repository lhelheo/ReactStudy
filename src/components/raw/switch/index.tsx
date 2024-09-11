import { cx } from "@/utils/tailwind";
import { useState } from "react";
import { tv } from "tailwind-variants";

interface SwitchProps {
  state: boolean;
  onClick?: () => void;
  translate?: string;
  className?: string;
  color?: "primary";
}

export const switchStyles = tv({
  base: ["rounded-full w-14 bg-gray-extradark"],
  variants: {
    color: {
      primary: ["bg-white border border-gray shadow"],
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export const Switch = (props: SwitchProps) => {
  const { color } = props;
  const [data, setData] = useState(props.state);
  const toggleData = () => {
    setData(!data);
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <div className="flex flex-col">
      <button
        className={cx(
          switchStyles({ color }),
          props.className,
          `ease-linear transition-all ${data ? "bg-primary" : "bg-white"}`,
        )}
        onClick={toggleData}
      >
        <div
          className={`flex h-6 w-6 bg-white border border-gray rounded-full ease-linear transition-all transform
            ${data ? ` ${props.translate || "translate-x-8"}` : `translate-x-0`
            }`}
        ></div>
      </button>
    </div>
  );
};
