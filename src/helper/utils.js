"use server";
import emailjs from "@emailjs/browser";
import axios from "axios";

export const sendEmail = async (form, setForm) => {
  try {
    // const response = await emailjs.send(
    //   process.env.SERVICE_ID,
    //   process.env.TEMPLATE_ID,
    //   {
    //     from_name: form.name,
    //     to_name: "Bhavesh",
    //     from_email: form.email,
    //     to_email: "bhaveshy737@gmail.com",
    //     message: form.message,
    //   },
    //   process.env.NEXT_PUBLIC_KEY
    // );

    // setForm({ name: "", email: "", message: "" });

    const response = await axios.post("/api/email", form);

    console.log({ response });
  } catch (error) {
    console.log(error);
    // Todo Error Notification
  }
};
