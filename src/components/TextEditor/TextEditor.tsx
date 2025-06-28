import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { getPlainTextFromHtml } from "@/utils/textEditor";
import { CustomToast } from "@/utils/toast";
import { Icon } from "@iconify/react/dist/iconify.js";
import { cn } from "@/lib/utils";

const ReactQuill: any = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = (props: any) => {
  const {
    value,
    maxCharacters,
    onChange,
    setIsMoreError,
    isMoreError,
    errors,
    message,
    isAdmin,
    disabled,
  } = props;
  const [plainText, setPlainText] = useState<string>("");

  useEffect(() => {
    if (value) {
      setPlainText(getPlainTextFromHtml(value));
    }
  }, [value]);

  useEffect(() => {
    if (plainText?.length > maxCharacters) {
      setIsMoreError?.(true);
    } else {
      setIsMoreError?.(false);
    }
  }, [plainText, maxCharacters, setIsMoreError]);

  const modules = {
    toolbar: disabled
      ? false
      : [
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
        ],
  };

  const formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "align",
    "size",
  ];

  const handlePaste = (e: React.ClipboardEvent) => {
    if (disabled) return;

    const clipboardData = e.clipboardData; // Correct usage
    const pastedData =
      clipboardData?.getData("text/html") ||
      clipboardData?.getData("text/plain");

    if (pastedData && /<img[^>]*>/g.test(pastedData)) {
      e.preventDefault(); // Prevent default paste behavior
      const filteredContent = pastedData.replace(/<img[^>]*>/g, "");
      document.execCommand("insertHTML", false, filteredContent);
    }
  };
  const toastShown = useRef(false);
  return (
    <div>
      <div
        className={
          props?.className === "no-border"
            ? cn(
                "border w-full break-all rounded-md border-grey200 overflow-y-auto",
                disabled && "cursor-not-allowed text-[#838385ff]",
                errors && "border-destructive shadow-error",
                isAdmin
                  ? "min-h-[400px] max-h-[500px]"
                  : "min-h-[100px] max-h-[200px]"
              )
            : ""
        }
      >
        <ReactQuill
          onPaste={handlePaste}
          modules={modules}
          formats={formats}
          placeholder={props?.placeholder}
          className={props?.className}
          value={value}
          readOnly={disabled}
          onChange={(content: any) => {
            if (disabled) return;
            console.log(getPlainTextFromHtml(content)?.length, "contet");
            if (getPlainTextFromHtml(content)?.length <= maxCharacters) {
              toastShown.current = false;
              const filteredContent = content.replace(/<img[^>]*>/g, "");
              onChange(filteredContent);
            } else {
              setIsMoreError(true);
              onChange(value);
              if (!toastShown.current) {
                CustomToast.error("Max character limit reached", "Error");
                toastShown.current = true; // Prevent multiple toasts
              }
            }
          }}
        />
      </div>
      <div className="flex items-center justify-between">
        <div>
          {errors &&
            (value == undefined || value == "" || value == "<p><br></p>") && (
              <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                <Icon
                  icon="solar:close-square-bold"
                  width="14"
                  height="14"
                  className="text-destructive"
                />
                <span>{message}</span>
              </p>
            )}
          {plainText?.length > maxCharacters && isMoreError && (
            <small className="error-text">Max character limit reached</small>
          )}
        </div>
        <div>
          {maxCharacters && (
            <div className="flex items-center justify-between py-1 px-1">
              <small className="block text-right opacity-50 ml-auto">
                {`${plainText?.length ?? 0}/${maxCharacters}`} characters
              </small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
