const API_URL = "http://localhost:3000/api/post-contact"; // Change this to your backend URL if deployed

export const sendContactForm = async (formData: any) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Something went wrong!");
    }
    return data;
  } catch (error) {
    console.error("Error sending contact form:", error);
    throw error;
  }
};
