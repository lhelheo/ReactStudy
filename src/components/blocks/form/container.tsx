"use client";
import { LoadingOverlay } from "@/components/raw/loading/overlay";
import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FormError } from "./error";
import { FormSuccess } from "./success";

interface FormContainerProps {
  className?: string;
  children: ReactNode;
  action: any;
}

let initialState: {
  errorMessage?: string;
  successMessage?: string;
  successRedirect?: string;
} = {
  errorMessage: "",
  successMessage: "",
  successRedirect: "",
};

export const FormContainer = (props: FormContainerProps) => {
  let [formState, formAction] = useFormState<typeof initialState | undefined>(
    props.action,
    initialState,
  );
  const { pending } = useFormStatus();

  const cleanFormState = () => {
    formState = initialState;
  };

  return (
    <form
      action={formAction}
      className={cx("flex flex-col gap-2", props.className)}
      onReset={cleanFormState}
    >
      {props.children}
      {pending && <LoadingOverlay />}
      {!!formState?.errorMessage && (
        <FormError message={formState?.errorMessage} />
      )}
      {!!formState?.successMessage && (
        <FormSuccess
          message={formState?.successMessage}
          redirect={formState?.successRedirect || undefined}
        />
      )}
    </form>
  );
};
