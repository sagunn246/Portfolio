import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_m82zjvv";
  const TEMPLATE_ID = "template_49wdazc";
  const PUBLIC_KEY = "R3n8OiOJkRqzpqx17";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        Swal.fire({
          title: "Message Sent! 🎉",
          text: "Thank you for reaching out. I will get back to you soon!",
          icon: "success",
          background: "#0f172a",
          color: "#ffffff",
          position: "center",
          showConfirmButton: true,
          confirmButtonColor: "#3b82f6",
          showClass: {
            popup: "animate__animated animate__zoomIn",
          },
          hideClass: {
            popup: "animate__animated animate__zoomOut",
          },
        });

        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        Swal.fire({
          title: "Oops! 😢",
          text: "Something went wrong. Please try again.",
          icon: "error",
          background: "#0f172a",
          color: "#ffffff",
          position: "center",
          confirmButtonColor: "#3b82f6",
          showClass: {
            popup: "animate__animated animate__shakeX",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOut",
          },
        })
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-12 bg-black px-4 overflow-x-hidden"
    >
      <RevealOnScroll>
        <div
          className="
            bg-black/70 rounded-lg shadow-lg relative
            w-full max-w-lg
            px-8 py-10
            sm:max-w-xl sm:px-12 sm:py-14
            md:max-w-2xl
            lg:w-[500px] lg:h-auto
            flex flex-col
            border border-blue-500/30
          "
          style={{
            animation: "glowBox 3s infinite ease-in-out",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <form
            className="flex flex-col space-y-6 overflow-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-5 py-3 text-white text-base sm:text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Enter your name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded px-5 py-3 text-white text-base sm:text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-5 py-3 text-white text-base sm:text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none"
              placeholder="Type your message here"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded font-semibold text-base sm:text-lg transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

          {/* 📌 Extra stuffs below */}
          <p className="text-gray-400 text-sm text-center mt-6">
            Or connect with me on:
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-blue-400 text-2xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-blue-400 text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:youremail@gmail.com"
              className="text-gray-300 hover:text-blue-400 text-2xl transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* ✨ Glow Animation */}
      <style>{`
        @keyframes glowBox {
          0%, 100% {
            box-shadow: 0 0 10px rgba(59,130,246,0.4), 0 0 20px rgba(59,130,246,0.2);
          }
          50% {
            box-shadow: 0 0 25px rgba(59,130,246,0.7), 0 0 45px rgba(59,130,246,0.5);
          }
        }
      `}</style>
    </section>
  );
};
