export function isFileList(object: any): object is FileList {
  return object instanceof FileList;
}

export function isFile(object: any): object is File {
  return object instanceof File;
}

export const isString = (value: any) => typeof value === "string";

export const allowedImageExtensions = ["jpg", "jpeg", "png"];

export const enum IDEA_SUBMISSION_REAPPLY_ROUTE {
  IDEA_SUBMISSION_REAPPLY = "/idea-submission/reapply",
}