"use server";

export const registerPatient = async (formData: FormData) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/user/create-patient`,
    {
      method: "POST",
      body: formData,
      cache: "no-cache",
    }
  );
  const patientInfo = await data.json();
  return patientInfo;
};
