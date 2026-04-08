import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid, Chip } from "@mui/material";
import { motion, useInView } from "motion/react";
import CustomCard from "../components/CustomCard";

const sectionPalette = {
  sky: "#38bdf8",
  cyan: "#22d3ee",
  amber: "#f59e0b",
  text: "#e2e8f0",
  muted: "#94a3b8",
};

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

const quickSignals = [
  { label: "Core Stack", value: "Frontend + API" },
  { label: "Primary Focus", value: "React Ecosystem" },
  { label: "Delivery Style", value: "Clean + Fast" },
];

interface SkillOrbProps {
  name: string;
  level: number;
  icon: string;
  color: string;
  delay?: number;
  compact?: boolean;
}

const SkillOrb: React.FC<SkillOrbProps> = ({
  name,
  level,
  icon,
  color,
  delay = 0,
  compact = false,
}) => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimated(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const progress = animated ? level : 0;

  if (compact) {
    return (
      <Box
        ref={ref}
        sx={{
          height: "100%",
          p: 1.25,
          borderRadius: "12px",
          border: "1px solid rgba(56,189,248,0.18)",
          background: "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(15,23,42,0.28))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1.2,
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            background: `conic-gradient(${sectionPalette.sky} ${progress}%, rgba(148,163,184,0.2) 0%)`,
            display: "grid",
            placeItems: "center",
            flexShrink: 0,
            transition: "all 1s ease",
          }}
        >
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "rgba(6,18,38,0.95)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "0.95rem" }}>{icon}</Typography>
          </Box>
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
            <Typography
              variant="caption"
              sx={{
                color: sectionPalette.text,
                fontWeight: 600,
                fontSize: "0.78rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </Typography>
            <Typography variant="caption" sx={{ color: sectionPalette.sky, fontWeight: 700, fontSize: "0.72rem", flexShrink: 0 }}>
              {level}%
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      ref={ref}
      sx={{
        p: 2,
        borderRadius: "14px",
        border: "1px solid rgba(56,189,248,0.16)",
        background: "linear-gradient(135deg, rgba(15,23,42,0.58), rgba(15,23,42,0.32))",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: 76,
          height: 76,
          borderRadius: "50%",
          background: `conic-gradient(${color} ${progress}%, rgba(148,163,184,0.2) 0%)`,
          mx: "auto",
          mb: 1.3,
          p: "6px",
          transition: "all 1s ease",
          boxShadow: `0 0 18px ${color}32`,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(6,18,38,0.95)",
            display: "grid",
            placeItems: "center",
            border: "1px solid rgba(56,189,248,0.16)",
          }}
        >
          <Typography sx={{ fontSize: "1rem" }}>{icon}</Typography>
          <Typography sx={{ color, fontWeight: 700, fontSize: "0.72rem", lineHeight: 1 }}>
            {progress}%
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ color: sectionPalette.text, fontWeight: 600, fontSize: "0.83rem" }}>
        {name}
      </Typography>
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
          "radial-gradient(circle at 12% 16%, rgba(34,211,238,0.05), transparent 40%), radial-gradient(circle at 88% 84%, rgba(245,158,11,0.06), transparent 42%), linear-gradient(180deg, rgba(2,6,23,0.08), rgba(2,6,23,0.24) 45%, rgba(2,6,23,0.08))",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "4%",
          left: "-8%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
          filter: "blur(68px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          right: "-12%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
          filter: "blur(72px)",
          pointerEvents: "none",
        }}
      />

      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 6 } }}>
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
                background: "rgba(56,189,248,0.12)",
                border: "1px solid rgba(56,189,248,0.35)",
                color: "#7dd3fc",
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
                fontFamily: '"Sora", "Space Grotesk", sans-serif',
                background: "linear-gradient(125deg, #f8fafc 0%, #7dd3fc 55%, #fbbf24 100%)",
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
                background: "linear-gradient(90deg, #0ea5e9, #f59e0b)",
                mx: "auto",
                borderRadius: "2px",
                mb: 2,
              }}
            />
            <Typography variant="body1" sx={{ maxWidth: 500, mx: "auto", color: sectionPalette.muted }}>
              My practical toolkit and professional strengths for shipping quality products
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <Grid container spacing={1.5} sx={{ mb: 4 }}>
            {quickSignals.map((item, i) => (
              <Grid key={item.label} size={{ xs: 12, sm: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Box
                    sx={{
                      p: 1.8,
                      borderRadius: "14px",
                      border: "1px solid rgba(56,189,248,0.16)",
                      background: "linear-gradient(140deg, rgba(7,18,38,0.76), rgba(7,18,38,0.42))",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="caption" sx={{ color: sectionPalette.muted, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ mt: 0.5, color: sectionPalette.text, fontWeight: 700, fontSize: "0.95rem" }}>
                      {item.value}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <CustomCard sx={{ mb: 6 }}>
            <Box sx={{ px: 1, pt: 0.5 }}>
              <Typography sx={{ color: sectionPalette.text, fontWeight: 700, mb: 2 }}>
                Technology Stack
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.2,
                  justifyContent: "center",
                }}
              >
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ y: -3, scale: 1.04 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        px: 1.8,
                        py: 0.8,
                        borderRadius: "999px",
                        background: `${tech.bg}14`,
                        border: `1px solid ${tech.bg}36`,
                        transition: "all 0.25s ease",
                        "&:hover": {
                          background: `${tech.bg}22`,
                          border: `1px solid ${tech.bg}66`,
                          boxShadow: `0 8px 18px ${tech.bg}2a`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: 22,
                          height: 22,
                          borderRadius: "8px",
                          display: "grid",
                          placeItems: "center",
                          background: `${tech.bg}24`,
                          color: tech.bg,
                          fontWeight: 700,
                          fontSize: "0.78rem",
                        }}
                      >
                        {tech.emoji}
                      </Box>
                      <Typography variant="caption" sx={{ color: sectionPalette.text, fontWeight: 600, fontSize: "0.78rem" }}>
                        {tech.name}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </CustomCard>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ width: "100%", height: "100%" }}
            >
              <CustomCard sx={{ height: "100%" }}>
                <Box sx={{ p: 1, height: "100%" }}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2.2 }}>
                    <Typography variant="h6" fontWeight={700} sx={{ color: sectionPalette.text }}>
                      Technical Proficiency
                    </Typography>
                    <Chip
                      label="8 Core Skills"
                      size="small"
                      sx={{
                        background: "rgba(56,189,248,0.12)",
                        border: "1px solid rgba(56,189,248,0.3)",
                        color: sectionPalette.sky,
                        fontSize: "0.68rem",
                      }}
                    />
                  </Box>
                  <Typography variant="caption" sx={{ color: sectionPalette.muted, display: "block", mb: 2.4 }}>
                    Based on project depth, production usage, and delivery confidence
                  </Typography>
                  <Grid container spacing={1.5}>
                    {technicalSkills.map((skill, i) => (
                      <Grid key={skill.name} size={{ xs: 6, sm: 4 }}>
                        <SkillOrb {...skill} delay={i * 0.12} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </CustomCard>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ width: "100%", height: "100%" }}
            >
              <CustomCard gradient sx={{ height: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 2.2, color: sectionPalette.text }}>
                    Soft Skills
                  </Typography>
                  <Grid
                    container
                    spacing={1.5}
                    sx={{
                      flex: 1,
                      alignContent: "space-between",
                    }}
                  >
                    {softSkills.map((skill, i) => (
                      <Grid key={skill.name} size={{ xs: 6, md: 6 }} sx={{ display: "flex" }}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.015 }}
                          style={{ width: "100%" }}
                        >
                          <SkillOrb {...skill} color={sectionPalette.sky} delay={i * 0.09} />
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </CustomCard>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ display: "flex" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ width: "100%" }}
            >
              <Box
                sx={{
                  p: 3,
                  background: "linear-gradient(145deg, rgba(14,165,233,0.14), rgba(15,23,42,0.85) 65%, rgba(245,158,11,0.12))",
                  border: "1px solid rgba(56,189,248,0.2)",
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
                    background: "radial-gradient(circle, rgba(245,158,11,0.28), transparent)",
                  }}
                />
                <Typography variant="h6" fontWeight={700} sx={{ mb: 2.5 }}>
                  At a Glance
                </Typography>
                <Grid container spacing={0} sx={{ border: "1px solid rgba(56,189,248,0.18)", borderRadius: "14px", overflow: "hidden" }}>
                  {[
                    { num: "12+", label: "Technologies", emoji: "🛠️" },
                    { num: "10+", label: "Projects", emoji: "🚀" },
                    { num: "2+", label: "Yrs Exp", emoji: "📅" },
                    { num: "100%", label: "Dedication", emoji: "🎯" },
                  ].map((item) => (
                    <Grid key={item.label} size={{ xs: 6 }}>
                      <Box
                        sx={{
                          textAlign: "center",
                          py: 2,
                          borderRight: "1px solid rgba(56,189,248,0.12)",
                          borderBottom: "1px solid rgba(56,189,248,0.12)",
                        }}
                      >
                        <Typography sx={{ fontSize: "1.4rem", mb: 0.2 }}>{item.emoji}</Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 800,
                            background: "linear-gradient(130deg, #38bdf8, #fbbf24)",
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
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SkillsSection;
