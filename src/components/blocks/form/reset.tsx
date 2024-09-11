"use client";
import { Button } from "@/components/raw/button";
import { ReactNode } from "react";

interface FormResetProps {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  onReset?: () => void;
}

export const FormReset = (props: FormResetProps) => {
  return (
    <Button
      type="reset"
      color="warn"
      icon={props.icon}
      className={props.className}
      onClick={props.onReset}
    >
      {props.children}
    </Button>
  );
};
