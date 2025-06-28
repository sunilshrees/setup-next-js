import { AxiosError } from "axios";

import { CustomToast } from "../toast";

export const handleError = (error: AxiosError<any, any>) => {
  if (typeof error?.response?.data === "string") {
    return CustomToast.error(error?.response?.data ?? "SOMETHING WENT WRONG");
  }

  const message =
    error?.response?.data?.message ??
    error?.response?.data?.error?.message ??
    error?.response?.data?.error ??
    "SOMETHING WENT WRONG";
  return message;
};
