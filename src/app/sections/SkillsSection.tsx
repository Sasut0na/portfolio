import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  LinearProgress,
  Chip,
  Avatar,
} from "@mui/material";
import { motion, useInView } from "motion/react";
import CustomCard from "../components/CustomCard";

const technicalSkills = [
  { name: "HTML5 & CSS3", level: 92, icon: "🌐", color: "#f97316" },
  { name: "JavaScript (ES6+)", level: 85, icon: "⚡", color: "#eab308" },
  { name: "React.js", level: 82, icon: "⚛️", color: "#38bdf8" },
  { name: "PHP", level: 80, icon: "🐘", color: "#818cf8" },
  { name: "MySQL / Database", level: 78, icon: "🗄️", color: "#34d399" },
  { name: "Tailwind CSS / MUI", level: 88, icon: "🎨", color: "#a78bfa" },
  { name: "Node.js", level: 68, icon: "🟢", color: "#22c55e" },
  { name: "Git & Version Control", level: 80, icon: "🔧", color: "#f87171" },
];

const techStack = [
  { name: "React", emoji: "⚛️", bg: "#0ea5e9" },
  { name: "JavaScript", emoji: "JS", bg: "#eab308", text: "dark" },
  { name: "PHP", emoji: "🐘", bg: "#8b5cf6" },
  { name: "MySQL", emoji: "🗄️", bg: "#0891b2" },
  { name: "HTML5", emoji: "H5", bg: "#f97316", text: "dark" },
  { name: "CSS3", emoji: "C3", bg: "#3b82f6" },
  { name: "Tailwind", emoji: "🌊", bg: "#14b8a6" },
  { name: "Git", emoji: "⑂", bg: "#f87171", text: "dark" },
  { name: "Node.js", emoji: "⬡", bg: "#22c55e", text: "dark" },
  { name: "Bootstrap", emoji: "B", bg: "#7c3aed" },
  { name: "VS Code", emoji: "📝", bg: "#2563eb" },
  { name: "Figma", emoji: "🎯", bg: "#f472b6" },
];

const softSkills = [
  { name: "Communication", level: 90, icon: "💬" },
  { name: "Problem Solving", level: 88, icon: "🧠" },
  { name: "Teamwork", level: 92, icon: "🤝" },
  { name: "Adaptability", level: 87, icon: "🔄" },
  { name: "Time Management", level: 82, icon: "⏰" },
  { name: "Creativity", level: 85, icon: "✨" },
];

interface SkillBarProps {
  name: string;
  level: number;
  icon: string;
  color: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, icon, color, delay = 0 }) => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimated(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <Box ref={ref} sx={{ mb: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ fontSize: "1.1rem" }}>{icon}</Typography>
          <Typography variant="body2" fontWeight={600} sx={{ color: "#f1f5f9" }}>
            {name}
          </Typography>
        </Box>
        <Typography
          variant="caption"
          sx={{ color: color, fontWeight: 700, fontSize: "0.85rem" }}
        >
          {level}%
        </Typography>
      </Box>
      <Box sx={{ position: "relative" }}>
        <LinearProgress
          variant="determinate"
          value={animated ? level : 0}
          sx={{
            height: 8,
            borderRadius: "8px",
            background: "rgba(255,255,255,0.05)",
            "& .MuiLinearProgress-bar": {
              borderRadius: "8px",
              background: `linear-gradient(90deg, ${color}cc, ${color})`,
              transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1) !important",
              boxShadow: `0 0 12px ${color}60`,
            },
          }}
        />
      </Box>
    </Box>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(15,15,35,0.5) 50%, transparent 100%)",
      }}
    >
      {/* BG accents */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 6 } }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Chip
              label="My Skills"
              size="small"
              sx={{
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.35)",
                color: "#818cf8",
                fontWeight: 600,
                mb: 2,
                fontSize: "0.8rem",
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
                fontWeight: 800,
                background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1.5,
              }}
            >
              Technical Arsenal
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 3,
                background: "linear-gradient(90deg, #6366f1, #7c3aed)",
                mx: "auto",
                borderRadius: "2px",
                mb: 2,
              }}
            />
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: "auto" }}>
              Technologies and tools I use to bring ideas to life
            </Typography>
          </Box>
        </motion.div>

        {/* Tech Stack Bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              justifyContent: "center",
              mb: 8,
            }}
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 1,
                    borderRadius: "50px",
                    background: `${tech.bg}18`,
                    border: `1px solid ${tech.bg}40`,
                    cursor: "default",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: `${tech.bg}28`,
                      border: `1px solid ${tech.bg}70`,
                      boxShadow: `0 8px 20px ${tech.bg}30`,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: tech.emoji.length <= 2 ? "0.8rem" : "1rem",
                      fontWeight: 700,
                      color: tech.bg,
                      lineHeight: 1,
                    }}
                  >
                    {tech.emoji}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, color: "#e2e8f0", fontSize: "0.8rem" }}
                  >
                    {tech.name}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Technical Skills */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <CustomCard>
                <Box sx={{ p: 1 }}>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 3, color: "#f1f5f9" }}>
                    Technical Proficiency
                  </Typography>
                  {technicalSkills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      delay={i * 0.12}
                    />
                  ))}
                </Box>
              </CustomCard>
            </motion.div>
          </Grid>

          {/* Soft Skills + Stats */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {/* Soft Skills */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <CustomCard gradient>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 3, color: "#f1f5f9" }}>
                    Soft Skills
                  </Typography>
                  <Grid container spacing={1.5}>
                    {softSkills.map((skill, i) => (
                      <Grid key={skill.name} size={{ xs: 6 }}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Box
                            sx={{
                              p: 1.5,
                              background: "rgba(99,102,241,0.07)",
                              border: "1px solid rgba(99,102,241,0.15)",
                              borderRadius: "12px",
                              textAlign: "center",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                background: "rgba(99,102,241,0.15)",
                                border: "1px solid rgba(99,102,241,0.35)",
                              },
                            }}
                          >
                            <Typography sx={{ fontSize: "1.5rem", mb: 0.3 }}>{skill.icon}</Typography>
                            <Typography variant="caption" sx={{ fontWeight: 600, display: "block", color: "#e2e8f0", fontSize: "0.72rem" }}>
                              {skill.name}
                            </Typography>
                            <Typography variant="caption" sx={{ color: "#818cf8", fontWeight: 700 }}>
                              {skill.level}%
                            </Typography>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </CustomCard>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box
                  sx={{
                    p: 3,
                    background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(124,58,237,0.1))",
                    border: "1px solid rgba(99,102,241,0.25)",
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: -30,
                      right: -30,
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(99,102,241,0.2), transparent)",
                    }}
                  />
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 2.5 }}>
                    At a Glance
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      { num: "12+", label: "Technologies", emoji: "🛠️" },
                      { num: "10+", label: "Projects", emoji: "🚀" },
                      { num: "2+", label: "Yrs Exp", emoji: "📅" },
                      { num: "100%", label: "Dedication", emoji: "🎯" },
                    ].map((item) => (
                      <Grid key={item.label} size={{ xs: 6 }}>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography sx={{ fontSize: "1.4rem", mb: 0.2 }}>{item.emoji}</Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 800,
                              background: "linear-gradient(135deg, #818cf8, #c4b5fd)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              lineHeight: 1,
                            }}
                          >
                            {item.num}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {item.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SkillsSection;
