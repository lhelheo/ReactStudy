import { cx } from "@/utils/tailwind";
import { ReactNode, useState } from "react";
import { tv } from "tailwind-variants";

const widgetStyles = tv({
  base: [
    "absolute flex justify-between items-center w-fit py-2 px-4 text-white cursor-pointer rounded bg-primary",
  ],
  variants: {
    placement: {
      topLeft: "top-0 left-0",
      topRight: "top-0 right-0",
      bottomLeft: "bottom-0 left-0",
      bottomRight: "bottom-0 right-0",
    },
  },
  defaultVariants: {
    placement: "bottomLeft",
  },
});

const widgetContentStyles = tv({
  base: "absolute  my-10 bg-white p-4 rounded shadow-lg",
  variants: {
    placement: {
      topLeft: "top-0 left-0",
      topRight: "top-0 right-0",
      bottomLeft: "bottom-0 left-0",
      bottomRight: "bottom-0 right-0",
    },
  },
  defaultVariants: {
    placement: "bottomLeft",
  },
});

interface WidgetProps {
  trigger: ReactNode;
  children: ReactNode;
  placement: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  className?: string;
}

export const Widget = (props: WidgetProps) => {
  const { placement } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={cx(widgetStyles({ placement }), props.className)}
      >
        <div>{props.trigger}</div>
      </div>
      {isOpen && (
        <div className={cx(widgetContentStyles({ placement }))}>
          <div className="flex flex-col">
            <div>{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
};
