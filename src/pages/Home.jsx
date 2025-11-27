import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import SkillsCircle from "../components/SkillsCircle";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";
import { portfolioConfig } from "../config.js";
import { FiCode } from "react-icons/fi";

const Home = () => {
  const { personal, resume } = portfolioConfig;

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resume.path;
    link.download = resume.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section with Side Profile Template */}
      <section className="min-h-screen flex items-center px-4 md:px-8 lg:px-16 py-20 relative overflow-hidden">
        {/* Animated Background Grid on Right */}
        <div className="absolute right-0 top-0 w-1/3 h-full hidden xl:block opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-[#77913F]"
              style={{ top: `${i * 12.5}%` }}
              animate={{
                scaleX: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute h-full w-px bg-[#77913F]"
              style={{ left: `${i * 16.6}%` }}
              animate={{
                scaleY: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Floating Code Brackets */}
        <div className="absolute right-10 top-20 hidden xl:block">
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="text-[#77913F] text-6xl font-bold opacity-10"
            style={{ fontFamily: "'VT323', monospace" }}
          >
            {"{ }"}
          </motion.div>
        </div>

        <div className="absolute right-32 bottom-32 hidden xl:block">
          <motion.div
            animate={{
              y: [0, 40, 0],
              rotate: [0, -15, 15, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="text-[#77913F] text-7xl font-bold opacity-10"
            style={{ fontFamily: "'VT323', monospace" }}
          >
            {"< />"}
          </motion.div>
        </div>

        {/* Glowing Orbs */}
        <motion.div
          className="absolute right-20 top-1/3 w-40 h-40 bg-[#77913F] rounded-full blur-3xl opacity-10 hidden xl:block"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-48 bottom-1/4 w-32 h-32 bg-[#77913F] rounded-full blur-3xl opacity-10 hidden xl:block"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />

        {/* Responsive Layout Grid */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-center relative z-10">
          {/* LEFT SIDE - Profile Template (Now Responsive) */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="block w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto lg:mx-0 profile-card"
          >
            <div className="relative">
              {/* Animated Glow Background */}
              <motion.div
                className="absolute inset-0 bg-[#77913F] rounded-2xl blur-xl opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Profile Card */}
              <motion.div
                whileHover={{ rotate: 1, scale: 1.01 }}
                className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-4 border-[#77913F] rounded-2xl p-6 shadow-2xl transform rotate-[-1deg]"
                style={{
                  boxShadow: "0 25px 70px rgba(119, 145, 63, 0.5)",
                  fontFamily: "'VT323', monospace",
                }}
              >
                {/* Handshake Icon */}
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                  <img
                    src="/images/handshake.png"
                    alt="Handshake"
                    className="w-9 h-9 object-contain"
                  />
                </motion.div>

                {/* Corner Decorations */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#77913F] opacity-40"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#77913F] opacity-40"></div>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center mb-6 mt-2"
                >
                  <h4 className="text-white font-bold text-2xl tracking-wider">
                    Abhishek's Portfolio
                  </h4>
                  <p className="text-[#77913F] text-xl">Website</p>
                </motion.div>

                {/* Software Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(119, 145, 63, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#77913F]/20 border-2 border-[#77913F] rounded-lg py-3 px-4 flex items-center justify-between group hover:bg-[#77913F]/30 transition-all"
                  >
                    <span className="text-white font-bold text-lg">
                      Software
                    </span>
                    <motion.div
                      animate={{ rotate: [0, 180, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-6 h-6 bg-black rounded border border-[#77913F] flex items-center justify-center"
                    >
                      <FiCode size={14} className="text-[#77913F]" />
                    </motion.div>
                  </motion.button>
                </motion.div>

                {/* Experience */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mb-6"
                >
                  <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-[#77913F]/30">
                    <h4 className="text-white font-bold text-lg">Experience</h4>
                    <motion.span
                      animate={{ rotate: [0, 90, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-[#77913F] text-2xl font-bold"
                    >
                      +
                    </motion.span>
                  </div>
                  <div className="space-y-2 pl-3">
                    {["Deloitte", "Nagarro", "Jamsfy"].map((company, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        className="flex items-center space-x-2 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.3, rotate: 180 }}
                          className="w-2 h-2 bg-[#77913F] transform rotate-45"
                        />
                        <p className="text-gray-300 text-xl group-hover:text-[#77913F] transition-colors">
                          {company}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* More Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="mb-6"
                >
                  <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-[#77913F]/30">
                    <h4 className="text-white font-bold text-lg">More</h4>
                    <motion.div
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-6 h-6 bg-[#77913F]/20 rounded border border-[#77913F] flex items-center justify-center"
                    >
                      <span className="text-[#77913F] text-sm font-bold">≡</span>
                    </motion.div>
                  </div>
                  <div className="space-y-2 pl-3">
                    {[
                      "3 Years Of Experience",
                      "Software Engineer",
                      "CRM Development",
                      "MS Dynamics 365",
                      "DevOps Tools- Containers",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 + index * 0.1 }}
                        className="flex items-center space-x-2 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.5 }}
                          className="w-3 h-3 rounded-full border-2 border-[#77913F] group-hover:bg-[#77913F] transition-all"
                        />
                        <p className="text-gray-300 text-xl group-hover:text-white transition-colors">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Bottom Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="mt-6 pt-4 border-t-2 border-[#77913F]/30"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                          className="w-3 h-3 bg-[#77913F] rounded-full"
                        />
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm">Portfolio v2.0</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Orbs */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#77913F]/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-[#77913F]/30 rounded-full blur-lg"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE - Main Hero Content */}
          <div className="relative text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ fontFamily: "'VT323', monospace" }}
            >
              <AnimatedText
                text="Hi there,"
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              />
              <motion.div
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                animate={{
                  textShadow: [
                    "3px 3px 0px #ffffff",
                    "-3px -3px 0px #ffffff",
                    "3px 3px 0px #ffffff",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <AnimatedText
                  text={`I'm ${personal.name}`}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#77913F]"
                  delay={0.3}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="space-y-4"
              >
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                  {personal.title}
                </h2>
                <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#77913F]">
                  @{personal.company}
                </p>
                <p className="text-lg md:text-2xl text-gray-300">Speciality in</p>
                <p className="text-xl md:text-3xl font-bold text-[#77913F]">
                  {personal.specialty}
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(119, 145, 63, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleResumeDownload}
                className="mt-8 px-8 py-4 bg-transparent border-2 border-[#77913F] text-[#77913F] font-bold text-lg rounded-lg hover:bg-[#77913F] hover:text-black transition-all duration-300"
                data-testid="resume-download-button"
                style={{ fontFamily: "'VT323', monospace", fontSize: "28px" }}
              >
                &lt; RESUME &gt;
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <Timeline />
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <SkillsCircle />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
