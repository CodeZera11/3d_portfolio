"use client";

import { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../../models/fox";
import Loader from "../../components/Loader";
import useAlert from "../../hooks/useAlert";
import Alert from "../../components/Alert";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Bhavesh",
          from_email: form.email,
          to_email: "bhaveshy737@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_KEY
      );
      showAlert({
        show: true,
        text: "I'll contact your very soon!",
        type: "success",
      });

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation("idle");
        setForm({ name: "", message: "", email: "" });
      }, 3000);
    } catch (error) {
      setCurrentAnimation("idle");
      console.log({ error });
      showAlert({ text: "Oops! Didn't got your message", type: "danger" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex flex-col lg:flex-row max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-7 mt-14"
        >
          <label className="text-black font-semibold">
            Name
            <input
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              type="text"
              name="name"
              placeholder="John Wick"
              className="input"
            />
          </label>
          <label className="text-black font-semibold">
            Email
            <input
              onChange={handleChange}
              value={form.email}
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
              type="email"
              name="email"
              placeholder="john@gmail.com"
              className="input"
            />
          </label>
          <label className="text-black font-semibold">
            Your Message
            <textarea
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="message"
              onChange={handleChange}
              value={form.message}
              required
              rows={4}
              placeholder="Let me know how can i help you!"
              className="input"
            />
          </label>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="w-full lg:w-1/2 h-[350px] md:h-[550px] lg:h-auto">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
