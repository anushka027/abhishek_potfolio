import React from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiMail, FiHeart } from "react-icons/fi";
import { portfolioConfig } from "../config.js";

const Footer = () => {
  const { social, personal } = portfolioConfig;

  return (
    <footer className="relative bg-black border-t border-gray-800 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left - Tagline */}
          <div className="text-center sm:text-left">
            <motion.h3
              animate={{
                textShadow: [
                  "2px 2px 0px #77913F",
                  "-2px -2px 0px #77913F",
                  "2px 2px 0px #77913F",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4"
              style={{ fontFamily: "'VT323', monospace" }}
            >
              {personal.tagline}
            </motion.h3>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a href="/" className="text-gray-400 hover:text-[#77913F] transition-colors text-sm sm:text-base">
                Home
              </a>
              <a href="/about" className="text-gray-400 hover:text-[#77913F] transition-colors text-sm sm:text-base">
                About
              </a>
              <a href="/contact" className="text-gray-400 hover:text-[#77913F] transition-colors text-sm sm:text-base">
                Contact
              </a>
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="text-center sm:text-right sm:col-span-2 md:col-span-1">
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">Connect</h4>
            <div className="flex justify-center sm:justify-end space-x-3 sm:space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 360 }}
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-[#77913F]/20 border border-[#77913F] rounded-full flex items-center justify-center hover:bg-[#77913F] transition-all"
              >
                <FiLinkedin className="text-white text-sm sm:text-base" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 360 }}
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-[#77913F]/20 border border-[#77913F] rounded-full flex items-center justify-center hover:bg-[#77913F] transition-all"
              >
                <FiGithub className="text-white text-sm sm:text-base" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 360 }}
                href={`mailto:${social.email}`}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-[#77913F]/20 border border-[#77913F] rounded-full flex items-center justify-center hover:bg-[#77913F] transition-all"
              >
                <FiMail className="text-white text-sm sm:text-base" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-gray-800 pt-4 sm:pt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center space-x-2">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="text-[#77913F]" />
            </motion.span>
            <span>by {personal.name}</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;