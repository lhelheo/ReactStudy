import { ReactNode, useState } from "react";
import { tv } from "tailwind-variants";
import { cx } from "@/utils/tailwind";

const toastContainerStyle = tv({
  base: ["rounded-md bg-white shadow-lg"],
  variants: {
    category: {
      info: "bg-primary text-white",
      error: "bg-danger text-white",
      success: "bg-success text-white",
      warn: "bg-warning text-white",
      danger: "bg-danger text-white",
    },
  },
  defaultVariants: {
    color: "info",
    category: "info",
  },
});

interface ToastMessage {
  className?: string;
  toastClassName?: string;
  children?: ReactNode;
  id?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
  category: "info" | "error" | "success" | "warn" | "danger";
}

export const Toast = (props: ToastMessage) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const { category } = props;
  const toastCategory = {
    info: {
      // icon: <IoInformationCircleSharp size={20} />,
    },
    success: {
      // icon: <HiCheckCircle size={20} />,
    },
    warn: {
      // icon: <BiSolidError size={20} />,
    },
    danger: {
      // icon: <HiMiniXCircle size={20} />,
    },
    error: {
      // icon: <IoIosWarning size={20} />,
    },
  };

  const setNewToast = () => {
    const newToast: ToastMessage = {
      id: new Date().toISOString(),
      icon: props.icon,
      title: props.title,
      category: props.category,
      description: props.description,
    };

    setToasts((prevToasts) => {
      setTimeout(() => {
        setToasts((currentToasts) =>
          currentToasts.filter((toast) => toast.id !== newToast.id),
        );
      }, 2500);
      return [...prevToasts, newToast];
    });
  };

  return (
    <>
      <div onClick={setNewToast}>{props.children}</div>
      <div className="h-[400px] overflow-auto">
        {toasts.length > 0 && (
          <div
            className={cx(
              toastContainerStyle({ category }),
              props.className,
              "fixed top-0 right-0 mt-2 mr-2 space-y-2 max-h-[300px] overflow-auto w-[500px]",
            )}
          >
            {toasts.map((toast) => (
              <div
                key={toast.id}
                className={cx(
                  "flex items-center p-2 rounded-md",
                  toastContainerStyle({ category }),
                  props.toastClassName,
                )}
              >
                <div className="mr-2">
                  {toastCategory[category].icon || "Falha ao carregar ícone"}
                </div>
                <div>
                  <p className="font-bold">{toast.title}</p>
                  <p>{toast.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
