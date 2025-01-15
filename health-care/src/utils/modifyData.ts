/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
export const modifyData = (values: any) => {
  const obj = { ...values };
  const file = obj["file"] || obj["doctor"].profilePhoto;
  delete obj["file"];
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);
  formData.append("file", file as Blob);
  return formData;
};
