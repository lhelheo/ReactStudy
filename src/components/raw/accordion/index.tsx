import { cx } from "@/utils/tailwind";
import { ReactNode, useState } from "react";
import { tv } from "tailwind-variants";
import { buttonStyles } from "../button";

const accordionStyles = tv({
  base: ["flex flex-col justify-between"],
  variants: {
    color: {
      primary: ["text-white"],
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

interface AccordionProps {
  title: string;
  children: ReactNode;
  className?: string;
  color?: "primary";
}

export const Accordion = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { color } = props;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cx(accordionStyles({ color }), props.className)}>
      <div className="flex justify-between items-center">
        <div className="cursor-pointer">{props.title}</div>
        <div>
          <button
            onClick={toggleAccordion}
            className={cx(accordionStyles({ color }), props.className)}
          >
            {isOpen ? "Fechar" : "Abrir"}
          </button>
        </div>
      </div>
      {isOpen && <div>{props.children}</div>}
    </div>
  );
};
