import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioConfig } from "../config.js";
import { FiAward, FiBookOpen, FiX, FiExternalLink } from "react-icons/fi";
import Footer from "../components/Footer";

const About = () => {
  const { about, personal } = portfolioConfig;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="min-h-screen text-white">
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <motion.div
                  animate={{
                    borderColor: ["#77913F", "#ffffff", "#77913F"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="border-4 rounded-lg overflow-hidden bg-gray-800"
                  style={{
                    borderColor: "#77913F",
                    boxShadow: "0 0 30px rgba(119, 145, 63, 0.4)",
                  }}
                >
                  {personal.profileImage ? (
                    <img 
                      src={personal.profileImage} 
                      alt={personal.name}
                      className="w-full h-full object-cover aspect-[3/4]"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center" style={{ display: personal.profileImage ? 'none' : 'flex' }}>
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#77913F]/20 border-2 border-[#77913F] flex items-center justify-center">
                        <span className="text-6xl">👤</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Profile Picture
                      </p>
                    </div>
                  </div>
                </motion.div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-[#77913F] rounded-full opacity-50"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#77913F] rounded-full opacity-50"></div>
              </div>
            </motion.div>

            {/* Introduction Text */}
            <div className="flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6">
              {about.intro.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`${
                    index === 0
                      ? "font-bold text-[#77913F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                      : "text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300"
                  }`}
                  style={
                    index === 0 
                      ? { fontFamily: "'VT323', monospace" } 
                      : index >= 1 && index <= 3
                      ? { fontFamily: "'Lucid Console', monospace", fontWeight: '600', lineHeight: '1.4' }
                      : {}
                  }
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Certifications Section - Redesigned */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-8 sm:mb-10 md:mb-12">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <FiAward size={24} className="sm:hidden text-[#77913F]" />
                <FiAward size={36} className="hidden sm:block text-[#77913F]" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide">
                CERTIFIED WITH
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {about.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => cert.pdfPath && setSelectedCert(cert)}
                >
                  {/* Card with hexagon clip path effect */}
                  <div className="relative h-full">
                    {/* Animated border glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "linear-gradient(135deg, #77913F 0%, transparent 50%, #77913F 100%)",
                        filter: "blur(8px)",
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Main card */}
                    <div className="relative h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-[#77913F]/30 group-hover:border-[#77913F] rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 overflow-hidden">
                      {/* Animated background particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                          className="absolute w-20 h-20 bg-[#77913F]/10 rounded-full"
                          style={{ top: "10%", right: "10%" }}
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.div
                          className="absolute w-16 h-16 bg-[#77913F]/5 rounded-full"
                          style={{ bottom: "20%", left: "5%" }}
                          animate={{
                            y: [0, 10, 0],
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon with rotating border */}
                        <div className="flex justify-center mb-3 sm:mb-4">
                          <div className="relative">
                            {/* Rotating border effect */}
                            <motion.div
                              className="absolute inset-0 rounded-xl"
                              style={{
                                background: "conic-gradient(from 0deg, #77913F, transparent, #77913F)",
                              }}
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-black to-gray-900 rounded-xl flex items-center justify-center m-0.5">
                              {cert.icon ? (
                                <img 
                                  src={cert.icon} 
                                  alt={cert.name}
                                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                />
                              ) : (
                                <FiAward className="text-[#77913F] text-2xl sm:text-3xl" />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Certificate name */}
                        <h3 className="text-white text-sm sm:text-base font-semibold text-center mb-2 sm:mb-3 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center group-hover:text-[#77913F] transition-colors duration-300">
                          {cert.name}
                        </h3>

                        {/* Bottom badge */}
                        <div className="mt-auto">
                          <motion.div
                            className="flex items-center justify-center gap-1.5 sm:gap-2 text-[#77913F] text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 bg-[#77913F]/10 rounded-lg border border-[#77913F]/30 group-hover:border-[#77913F]/60 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            <FiExternalLink size={12} className="sm:hidden" />
                            <FiExternalLink size={14} className="hidden sm:block" />
                            <span className="font-medium">View Certificate</span>
                          </motion.div>
                        </div>

                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#77913F]/20 to-transparent rounded-bl-full" />
                      </div>

                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 1,
                          ease: "easeInOut"
                        }}
                        style={{ transform: "skewX(-20deg)" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-8 sm:mb-10 md:mb-12">
              <motion.div
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                <FiBookOpen size={24} className="sm:hidden text-[#77913F]" />
                <FiBookOpen size={36} className="hidden sm:block text-[#77913F]" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide">
                STUDIED AT
              </h2>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {about.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 15px 30px rgba(119, 145, 63, 0.3)"
                  }}
                  className="relative group"
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#77913F]/20 via-[#77913F]/10 to-transparent rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-black via-gray-900 to-black border-2 border-[#77913F]/40 group-hover:border-[#77913F] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm overflow-hidden transition-all duration-300">
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-[#77913F] rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-[#77913F] rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-[#77913F] rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-[#77913F] rounded-br-lg"></div>
                    
                    {/* Animated background pattern */}
                    <motion.div
                      className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#77913F]/5 rounded-full blur-2xl sm:blur-3xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    ></motion.div>

                    <div className="relative z-10">
                      {/* Number badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                        className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 bg-[#77913F]/20 border border-[#77913F] rounded-full"
                      >
                        <span className="text-[#77913F] font-bold text-xs sm:text-sm">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </motion.div>

                      <h3 className="text-[#77913F] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300">
                        {edu.institution}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg italic">
                          📍 {edu.location}
                        </p>
                        {edu.year && (
                          <>
                            <span className="text-[#77913F] hidden sm:inline">•</span>
                            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                              📅 {edu.year}
                            </p>
                          </>
                        )}
                      </div>
                      
                      <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#77913F]/20 to-transparent border-l-2 sm:border-l-4 border-[#77913F] rounded-r-lg">
                        <p className="text-white font-semibold text-sm sm:text-base md:text-lg">
                          {edu.degree}
                        </p>
                      </div>
                    </div>

                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: "easeInOut"
                      }}
                      style={{ transform: "skewX(-20deg)" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />

      {/* Certificate Overlay - Higher z-index than navbar */}
      <AnimatePresence>
        {selectedCert &&(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999] flex items-center justify-center p-2 sm:p-4 "
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: 90 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: -90 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#77913F] shadow-2xl"
              style={{ boxShadow: "0 0 60px rgba(119, 145, 63, 0.5)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCert(null);
                }}
                className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10 bg-[#77913F] hover:bg-[#8ba54a] text-white p-2 sm:p-3 rounded-full transition-colors shadow-lg"
              >
                <FiX size={20} className="sm:hidden" />
                <FiX size={24} className="hidden sm:block" />
              </motion.button>

              {/* Certificate Title */}
              <div className="bg-gradient-to-r from-black via-gray-900 to-black p-3 sm:p-6 border-b-2 border-[#77913F]">
                <motion.h3 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-sm sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3 pr-8 sm:pr-0"
                >
                  <FiAward className="text-[#77913F] flex-shrink-0" size={20} />
                  <span className="line-clamp-2">{selectedCert.name}</span>
                </motion.h3>
              </div>

              {/* Certificate Image Viewer */}
              <div className="w-full h-[calc(95vh-80px)] sm:h-[calc(90vh-120px)] overflow-auto bg-gray-800 flex items-center justify-center p-2 sm:p-4">
                <img
                  src={selectedCert.pdfPath}
                  alt={selectedCert.name}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap" rel="stylesheet" />
    </div>
  );
};

export default About;