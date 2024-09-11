import { cx } from "@/utils/tailwind";
import { tv } from "tailwind-variants";

const loadingOverlayStyles = tv({
  base: ["h-20 w-20 animate-spin rounded-full border-[6px] border-neutral-400"],
  variants: {
    color: {
      primary: ["text-primary-500 border-t-primary-500"],
      secondary: ["text-secondary-500 border-t-secondary-500"],
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

interface LoadingOverlayProps {
  className?: string;
  color?: "primary" | "secondary";
}

export const LoadingOverlay = (props: LoadingOverlayProps) => {
  const { color } = props;

  return (
    <div className="fixed z-20 bg-white bg-opacity-60 inset-0 min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center px-4 py-8">
        <div className={cx(loadingOverlayStyles({ color }), props.className)} />
      </div>
    </div>
  );
};
