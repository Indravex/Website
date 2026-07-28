export interface Web3FormsPayload {
  access_key?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  subject?: string;
  from_name?: string;
  [key: string]: string | undefined;
}

export async function submitToWeb3Forms(payload: Web3FormsPayload): Promise<{ success: boolean; message?: string }> {
  const apiKey = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY || payload.access_key || "YOUR_WEB3FORMS_ACCESS_KEY";
  
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: apiKey,
        from_name: "Indravex Technologies Website",
        ...payload,
      }),
    });

    const data = await response.json();
    if (data.success) {
      return { success: true, message: data.message || "Form submitted successfully" };
    } else {
      return { success: false, message: data.message || "Form submission failed." };
    }
  } catch (error: any) {
    return { success: false, message: error?.message || "An error occurred while submitting." };
  }
}
