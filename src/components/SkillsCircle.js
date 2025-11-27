import React from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "../config.js";

const SkillsCircle = () => {
  const skills = portfolioConfig.skills;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          TECHNICAL SKILLS
        </h2>
        <div className="w-32 h-1 bg-[#77913F] mx-auto"></div>
      </motion.div>

      {/* Mobile/Tablet Grid Layout (below md breakpoint) */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 30px rgba(119, 145, 63, 0.8)",
              }}
              className="relative aspect-square rounded-2xl bg-black border-2 border-[#77913F] flex items-center justify-center cursor-pointer group"
              style={{
                boxShadow: "0 0 20px rgba(119, 145, 63, 0.3)",
              }}
            >
              {/* Skill Content */}
              <div className="text-center px-3">
                <p className="text-white font-semibold text-sm sm:text-base leading-tight">
                  {skill}
                </p>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#77913F] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

              {/* Corner Decorations */}
              <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#77913F] opacity-40"></div>
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#77913F] opacity-40"></div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Desktop Circular Layout (md breakpoint and above) */}
      <div className="hidden md:block">
        <div className="relative w-[600px] h-[600px] md:w-[700px] md:h-[700px] mx-auto">
          
          {/* Central Sphere */}
          <div className="absolute top-1/2 left-1/2 z-20" style={{ transform: "translate(-50%, -50%)" }}>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-56 h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
              style={{
                background: "radial-gradient(circle at 30% 30%, #9ab859, #77913F 50%, #5a6e2f 100%)",
                boxShadow: "0 0 80px rgba(119, 145, 63, 0.6), inset 0 0 60px rgba(154, 184, 89, 0.3)",
              }}
            >
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full" style={{
                background: "radial-gradient(circle at 30% 30%, rgba(154, 184, 89, 0.4), transparent 70%)",
              }}></div>
              <h3 className="text-white text-3xl md:text-4xl font-bold relative z-10">SKILLS</h3>
            </motion.div>
          </div>

          {/* Orbital Rings */}
          <div
            className="absolute top-1/2 left-1/2 rounded-full border border-[#77913F] opacity-20"
            style={{
              width: "500px",
              height: "500px",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 rounded-full border border-[#77913F] opacity-10"
            style={{
              width: "600px",
              height: "600px",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Connecting Lines - Static, under the rotating elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            {skills.map((skill, index) => {
              const totalSkills = skills.length;
              const angle = (index * 360) / totalSkills;
              const radius = 250;
              
              return (
                <div
                  key={`line-${index}`}
                  className="absolute top-1/2 left-1/2 h-0.5 bg-[#77913F] opacity-20 origin-left"
                  style={{
                    width: `${radius - 80}px`,
                    transform: `translate(0, -50%) rotate(${angle}deg)`,
                  }}
                />
              );
            })}
          </div>

          {/* Rotating Skills Container */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full"
          >
            {skills.map((skill, index) => {
              const totalSkills = skills.length;
              const angle = (index * 360) / totalSkills;
              const angleRad = (angle * Math.PI) / 180;
              const radius = 250; // Distance from center
              
              // Calculate position
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: -360,
                    }}
                    transition={{
                      opacity: { delay: index * 0.1 },
                      scale: { delay: index * 0.1 },
                      rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                    }}
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 30px rgba(119, 145, 63, 0.8)",
                    }}
                    className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-black border-2 border-[#77913F] flex items-center justify-center cursor-pointer group"
                    style={{
                      boxShadow: "0 0 20px rgba(119, 145, 63, 0.3)",
                    }}
                  >
                    {/* Skill Content */}
                    <div className="text-center px-2">
                      <p className="text-white font-semibold text-xs md:text-sm leading-tight">
                        {skill}
                      </p>
                    </div>

                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 rounded-full bg-[#77913F] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCircle;