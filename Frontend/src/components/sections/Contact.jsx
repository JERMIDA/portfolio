import React, { useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";


const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Contact
      </h2>

      <Motion.form
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="space-y-6"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="w-full px-4 py-2 rounded-md bg-background border border-textPrimary/30 text-textPrimary focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="w-full px-4 py-2 rounded-md bg-background border border-textPrimary/30 text-textPrimary focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-4 py-2 rounded-md bg-background border border-textPrimary/30 text-textPrimary focus:outline-none focus:ring-2 focus:ring-accent"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <Button type="submit" variant="primary" className="w-full md:w-fit" disabled={status === "sending"}>
          Send Message
        </Button>

        {status === "sending" && (
          <p className="text-sm text-muted">Sending...</p>
        )}
        {status === "success" && (
          <p className="text-sm text-green-500">Message sent! Thank you.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500">Error sending message. Please try again later.</p>
        )}
      </Motion.form>

      {/* Social Links */}
      {/* <Motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        className="mt-12 flex justify-center gap-6"
      >
        <a
          href="https://github.com/JERMIDA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          GitHub
        </a>
        <a
         href="https://linkedin.com/in/letmeda"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="mailto:jeremydamena98@gmail.com"
          className="text-accent hover:underline"
        >
          Email
        </a>
      </Motion.div> */}
    </section>
  );
};

export default Contact;