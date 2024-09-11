"use client";
import { cx } from "@/utils/tailwind";
import { ElementType, ReactNode } from "react";

interface DialogHeaderProps {
  children: ReactNode;
  onClose: () => void;
  icon?: ElementType;
}

export const DialogHeader = (props: DialogHeaderProps) => {
  return (
    <div className={cx("w-full flex items-center justify-between mb-2")}>
      {props.children}
      {props.icon ? (
        <props.icon
          className="h-5 w-5 text-neutral-700 hover:text-danger-500 cursor-pointer ease-linear transition-all"
          onClick={props.onClose}
        />
      ) : (
        <p className="text-neutral-700 hover:text-danger-500 cursor-pointer ease-linear transition-all">
          Fechar
        </p>
      )}
    </div>
  );
};
