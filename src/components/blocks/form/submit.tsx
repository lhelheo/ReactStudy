"use client";
import { Button } from "@/components/raw/button";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface FormSubmitProps {
  icon?: ReactNode;
  children: ReactNode;
  color?: "primary" | "secondary" | "warn" | "danger" | "neutral";
  className?: string;
  disabled?: boolean;
}

export const FormSubmit = (props: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      color={props.color || "primary"}
      icon={props.icon}
      className={props.className}
      loading={{
        isActive: pending,
        text: "Carregando...",
      }}
      disabled={props.disabled || pending}
    >
      {props.children}
    </Button>
  );
};
