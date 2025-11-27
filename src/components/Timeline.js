import React from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "../config.js";
import { FiChevronDown, FiBriefcase } from "react-icons/fi";

const Timeline = () => {
  const experience = portfolioConfig.experience;

  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 sm:mb-16"
      >
        <motion.div
          className="inline-flex items-center space-x-2 sm:space-x-3 mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiChevronDown size={28} className="text-[#77913F] sm:w-8 sm:h-8" />
          <FiChevronDown size={28} className="text-[#77913F] sm:w-8 sm:h-8" />
          <FiChevronDown size={28} className="text-[#77913F] sm:w-8 sm:h-8" />
        </motion.div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
          WORKING TIMELINE
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-[#77913F] mx-auto"></div>
      </motion.div>

      {/* Timeline Items */}
      <div className="relative">
        {/* Vertical Line - Desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#77913F]/30 h-full"></div>

        {/* Vertical Line - Mobile/Tablet */}
        <div className="md:hidden absolute left-6 sm:left-8 w-1 bg-[#77913F]/30 h-full"></div>

        {experience.map((job, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 sm:mb-16 last:mb-0"
            >
              {/* Desktop Layout (md and up) */}
              <div className="hidden md:flex items-center">
                {/* LEFT SIDE */}
                <div className="w-5/12 pr-6 lg:pr-8 text-right flex justify-end items-center">
                  {isEven ? (
                    // Even items: Show job details on left
                    <motion.div
                      whileHover={{ scale: 1.03, x: 5 }}
                      className="bg-black/60 border-2 border-[#77913F] rounded-xl p-4 lg:p-6 w-full"
                    >
                      <div className="flex items-center justify-end space-x-3 lg:space-x-4 mb-3">
                        <div className="text-right">
                          <h3 className="text-base lg:text-lg font-bold text-white">
                            {job.position}
                          </h3>
                          <p className="text-[#77913F] font-semibold text-sm lg:text-base">
                            @{job.company}
                          </p>
                        </div>
                        {/* Company Logo Box */}
                        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gray-800 border-2 border-[#77913F] rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                          {job.logo ? (
                            <img
                              src={job.logo}
                              alt={job.company}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                          ) : null}
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs lg:text-sm italic text-right">
                        {job.location}
                      </p>
                      {job.type && (
                        <div className="flex justify-end mt-2">
                          <span className="inline-block bg-[#77913F]/20 text-[#77913F] text-xs px-3 py-1 rounded-full">
                            {job.type}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    // Odd items: Show period/status on left
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block"
                    >
                      {job.period && (
                        <div className="bg-black/60 border-2 border-[#77913F] rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-2">
                          <span className="text-[#77913F] font-bold text-sm lg:text-base">
                            {job.period}
                          </span>
                        </div>
                      )}
                      {job.status && (
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="bg-[#77913F] text-black text-xs lg:text-sm font-bold px-4 lg:px-6 py-2 rounded-full inline-block"
                        >
                          {job.status}
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* CENTER DOT */}
                <div className="w-2/12 flex justify-center z-10">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-6 h-6 bg-[#77913F] border-4 border-black rounded-full"
                    style={{ boxShadow: "0 0 20px rgba(119, 145, 63, 0.8)" }}
                  />
                </div>

                {/* RIGHT SIDE */}
                <div className="w-5/12 pl-6 lg:pl-8 text-left flex justify-start items-center">
                  {isEven ? (
                    // Even items: Show period/status on right
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block"
                    >
                      {job.period && (
                        <div className="bg-black/60 border-2 border-[#77913F] rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-2">
                          <span className="text-[#77913F] font-bold text-sm lg:text-base">
                            {job.period}
                          </span>
                        </div>
                      )}
                      {job.status && (
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="bg-[#77913F] text-black text-xs lg:text-sm font-bold px-4 lg:px-6 py-2 rounded-full inline-block"
                        >
                          {job.status}
                        </motion.div>
                      )}
                    </motion.div>
                  ) : (
                    // Odd items: Show job details on right
                    <motion.div
                      whileHover={{ scale: 1.03, x: -5 }}
                      className="bg-black/60 border-2 border-[#77913F] rounded-xl p-4 lg:p-6 w-full"
                    >
                      <div className="flex items-center space-x-3 lg:space-x-4 mb-3">
                        {/* Company Logo Box */}
                        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gray-800 border-2 border-[#77913F] rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                          {job.logo ? (
                            <img
                              src={job.logo}
                              alt={job.company}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                          ) : null}
                        </div>
                        <div>
                          <h3 className="text-base lg:text-lg font-bold text-white">
                            {job.position}
                          </h3>
                          <p className="text-[#77913F] font-semibold text-sm lg:text-base">
                            @{job.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs lg:text-sm italic">
                        {job.location}
                      </p>
                      {job.type && (
                        <span className="inline-block bg-[#77913F]/20 text-[#77913F] text-xs px-3 py-1 rounded-full mt-2">
                          {job.type}
                        </span>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Mobile/Tablet Layout */}
              <div className="md:hidden flex items-start space-x-4 sm:space-x-6">
                {/* Dot */}
                <div className="flex-shrink-0 mt-2">
                  <motion.div
                    className="w-5 h-5 sm:w-6 sm:h-6 bg-[#77913F] border-4 border-black rounded-full"
                    style={{ boxShadow: "0 0 15px rgba(119, 145, 63, 0.8)" }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-black/60 border-2 border-[#77913F] rounded-xl p-4 sm:p-6"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4 mb-3">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 border-2 border-[#77913F] rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                        {job.logo ? (
                          <img
                            src={job.logo}
                            alt={job.company}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        ) : null}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {job.position}
                        </h3>
                        <p className="text-[#77913F] font-semibold text-sm sm:text-base">
                          @{job.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm italic mb-2">
                      {job.location}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {job.period && (
                        <span className="bg-black/60 border-2 border-[#77913F] rounded-full px-3 sm:px-4 py-1 text-[#77913F] font-bold text-xs sm:text-sm">
                          {job.period}
                        </span>
                      )}
                      {job.status && (
                        <motion.span
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="bg-[#77913F] text-black text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 rounded-full"
                        >
                          {job.status}
                        </motion.span>
                      )}
                      {job.type && (
                        <span className="bg-[#77913F]/20 text-[#77913F] text-xs px-3 py-1 rounded-full">
                          {job.type}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center items-center mt-8 sm:mt-12 space-x-2 sm:space-x-3"
      >
        <FiChevronDown size={20} className="text-[#77913F] sm:w-6 sm:h-6" />
        <FiBriefcase size={24} className="text-[#77913F] sm:w-7 sm:h-7" />
        <FiChevronDown size={20} className="text-[#77913F] sm:w-6 sm:h-6" />
      </motion.div>
    </div>
  );
};

export default Timeline;