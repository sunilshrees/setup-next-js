"use client";

import clsx from "clsx";
import { AlertTriangle, CheckCircle, Info, X, XCircle } from "lucide-react";
import { toast } from "react-toastify";

interface IMessage {
  text?: string;
  heading?: string;
  icon?: any;
  type: "success" | "error" | "info" | "warning";
  [key: string]: any;
}

const Message = ({ text, icon, heading, type, ...props }: IMessage) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        toast.dismiss(props.toastProps.toastId);
      }}
      className={clsx(
        "flex flex-col  gap-1 items-start bg-white dark:bg-black dark:border-ui-border/20 flex-1 h-full px-4 py-3  rounded-md  "
      )}
    >
      <div className="flex flex-row justify-between gap-2 items-start flex-1 w-full">
        {icon}
        <div className="gap-1 flex-col flex-1 items-start justify-start">
          {heading && (
            <h1 className="font-medium text-base  -mt-1 mb-0 text-text-300 dark:text-white">
              {heading}
            </h1>
          )}

          <p className="font-normal mb-0 text-sm   text-text-200 dark:text-white">
            {text}
          </p>
        </div>
        <X size={20} />
      </div>
    </div>
  );
};

const CustomToast = {
  success: (message: string, heading?: string) =>
    toast.success(
      <Message
        text={message}
        heading={heading}
        icon={
          <CheckCircle
            size={20}
            style={{
              color: "#3ecc62",
            }}
          />
        }
        type="success"
      />,
      {
        icon: () => null,
      }
    ),
  error: (message: string, heading?: string) =>
    toast.error(
      <Message
        text={message}
        heading={heading}
        icon={
          <XCircle
            style={{
              color: "#f73746",
            }}
            size={20}
          />
        }
        type="error"
      />,
      {
        icon: () => null,
      }
    ),
  warning: (message: string, heading?: string) =>
    toast.warning(
      <Message
        text={message}
        heading={heading}
        icon={
          <AlertTriangle
            style={{
              color: "#fde965",
            }}
            size={20}
          />
        }
        type="warning"
      />,
      {
        icon: () => null,
      }
    ),
  info: (message: string, heading?: string) =>
    toast.info(
      <Message
        text={message}
        heading={heading}
        icon={
          <Info
            size={20}
            style={{
              color: "#266ede",
            }}
          />
        }
        type="info"
      />,
      {
        icon: () => null,
      }
    ),
};

export { CustomToast };
