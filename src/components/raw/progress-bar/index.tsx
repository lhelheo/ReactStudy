import { cx } from "@/utils/tailwind";
import { tv } from "tailwind-variants";

const progressBarStyles = tv({
  base: ["w-full h-2 bg-gray-300 rounded-full"],
  variants: {
    color: {
      primary: ["bg-primary"],
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

interface ProgressBarProps {
  value: number;
  maxValue: number;
  color?: "primary";
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { color } = props;
  const progress = Math.max(
    0,
    Math.min((props.value / props.maxValue) * 100, 100),
  );

  return (
    <div className="bg-white border border-primary shadow rounded">
      <div
        className={cx(progressBarStyles({ color }), `h-2 rounded-full`)}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
