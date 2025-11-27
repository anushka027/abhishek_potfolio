import React from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiMail, FiPhone } from "react-icons/fi";
import { portfolioConfig } from "../config.js";
import Footer from "../components/Footer";

const Contact = () => {
  const { social, personal } = portfolioConfig;

  const contactMethods = [
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: social.linkedin,
      link: social.linkedin,
      color: "#0077B5",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: social.github,
      link: social.github,
      color: "#FFFFFF",
    },
    {
      icon: FiMail,
      label: "Email",
      value: social.email,
      link: `mailto:${social.email}`,
      color: "#EA4335",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: social.phone,
      link: `tel:${social.phone}`,
      color: "#77913F",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="py-20 px-8 md:px-16 lg:px-24 min-h-[calc(100vh-200px)]">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="inline-block text-8xl mb-8"
            >
              🤝
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              style={{ fontFamily: "'VT323', monospace" }}
              animate={{
                textShadow: [
                  "3px 3px 0px #77913F",
                  "-3px -3px 0px #77913F",
                  "3px 3px 0px #77913F",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              GET IN
              <br />
              TOUCH
            </motion.h1>
            <p className="text-xl text-gray-400 mt-6">
              {personal.tagline}
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  target={method.label !== "Phone" && method.label !== "Email" ? "_blank" : "_self"}
                  rel={method.label !== "Phone" && method.label !== "Email" ? "noopener noreferrer" : ""}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    x: 20,
                    backgroundColor: "rgba(119, 145, 63, 0.15)",
                  }}
                  className="flex items-center space-x-6 p-6 bg-black/40 border-2 border-gray-800 hover:border-[#77913F] rounded-lg transition-all duration-300 backdrop-blur-sm group"
                  data-testid={`contact-${method.label.toLowerCase()}`}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-[#77913F]/20 border-2 border-[#77913F] flex items-center justify-center"
                    style={{
                      boxShadow: `0 0 20px ${method.color}40`,
                    }}
                  >
                    <IconComponent size={28} className="text-[#77913F]" />
                  </motion.div>

                  <div className="flex-grow">
                    <p className="text-gray-400 text-sm mb-1">{method.label}</p>
                    <p className="text-white text-base md:text-lg font-medium break-all">
                      {method.value}
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-[#77913F] text-2xl"
                  >
                    →
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
