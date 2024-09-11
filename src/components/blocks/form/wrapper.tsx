import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";

interface FormWrapperProps {
  className?: string;
  children: ReactNode;
}

export const FormWrapper = (props: FormWrapperProps) => {
  return (
    <div className={(cx("flex flex-col gap-1"), props.className)}>
      {props.children}
    </div>
  );
};
