/* eslint-disable @typescript-eslint/no-explicit-any */
export const modifyData = (values: any) => {
  const obj = { ...values };
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);
  return formData;
};
