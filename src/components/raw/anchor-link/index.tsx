import { cx } from "@/utils/tailwind";
import Link from "next/link";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const anchorLinkStyles = tv({
  base: ["cursor-pointer ease-linear transition-all"],
  variants: {
    color: {
      primary: ["text-neutral-700", "hover:text-primary-500"],
      secondary: ["text-secondary-500", "hover:text-primary-500"],
      neutral: ["text-neutral-600", "hover:text-primary-500"],
    },
    underline: {
      true: ["underline"],
    },
  },
  compoundVariants: [
    {
      color: "primary",
      underline: true,
      className: ["decoration-neutral-700", "hover:decoration-primary-500"],
    },
    {
      color: "secondary",
      underline: true,
      className: ["decoration-secondary-500", "hover:decoration-primary-500"],
    },
    {
      color: "neutral",
      underline: true,
      className: ["decoration-neutral-600", "hover:decoration-primary-500"],
    },
  ],
});

interface AnchorLinkProps {
  href: string;
  className?: string;
  color?: "primary" | "secondary" | "neutral";
  underline?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  children: ReactNode;
}

export const AnchorLink = (props: AnchorLinkProps) => {
  const { color, underline } = props;

  return (
    <Link
      href={props.href}
      className={cx(anchorLinkStyles({ color, underline }), props.className)}
      target={props.target || "_self"}
    >
      {props.children}
    </Link>
  );
};
