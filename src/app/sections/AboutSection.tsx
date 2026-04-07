import React from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Avatar,
  Divider,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VerifiedIcon from "@mui/icons-material/Verified";
import { motion } from "motion/react";
import CustomCard from "../components/CustomCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const timeline = [
  {
    year: "2022 – Present",
    title: "Web Developer",
    org: "Freelance / Self-Employed",
    icon: <WorkIcon sx={{ fontSize: 18 }} />,
    color: "#6366f1",
    description:
      "Building modern web applications, client portals, and reservation systems using React, PHP, and MySQL.",
  },
  {
    year: "2020 – 2024",
    title: "BS Information Technology",
    org: "University – Philippines",
    icon: <SchoolIcon sx={{ fontSize: 18 }} />,
    color: "#7c3aed",
    description:
      "Studied core CS principles, web development, databases, and software engineering fundamentals.",
  },
  {
    year: "2019",
    title: "Started Coding Journey",
    org: "Self-taught",
    icon: <EmojiObjectsIcon sx={{ fontSize: 18 }} />,
    color: "#a78bfa",
    description:
      "Discovered a passion for web development and began learning HTML, CSS, JavaScript, and PHP.",
  },
];

const highlights = [
  { icon: "🚀", label: "Fast Learner", desc: "Quickly adapts to new technologies" },
  { icon: "🎯", label: "Detail-Oriented", desc: "Pixel-perfect implementations" },
  { icon: "🤝", label: "Team Player", desc: "Collaborative & communicative" },
  { icon: "💡", label: "Problem Solver", desc: "Creative solutions to complex challenges" },
];

const AboutSection: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG Accent */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
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
              label="About Me"
              size="small"
              sx={{
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.35)",
                color: "#818cf8",
                fontWeight: 600,
                mb: 2,
                fontSize: "0.8rem",
                letterSpacing: "0.05em",
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
              Who Am I?
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 3,
                background: "linear-gradient(90deg, #6366f1, #7c3aed)",
                mx: "auto",
                borderRadius: "2px",
              }}
            />
          </Box>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          {/* Left: Profile & Bio */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ height: "100%" }}
            >
              <CustomCard gradient>
                <Box sx={{ textAlign: "center", mb: 3 }}>
                  <Box sx={{ position: "relative", display: "inline-block", mb: 2 }}>
                    <Avatar
                      sx={{
                        width: 120,
                        height: 120,
                        mx: "auto",
                        border: "3px solid rgba(99,102,241,0.5)",
                        boxShadow: "0 0 30px rgba(99,102,241,0.3)",
                      }}
                    >
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwdGVjaHxlbnwxfHx8fDE3NzU1NTA2NzN8MA&ixlib=rb-4.1.0&q=80&w=400"
                        alt="Jhon Ace"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Avatar>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 4,
                        right: 4,
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "#34d399",
                        border: "2px solid #0a0a1a",
                        boxShadow: "0 0 8px #34d399",
                      }}
                    />
                  </Box>
                  <Typography variant="h5" fontWeight={700} sx={{ mb: 0.5 }}>
                    Jhon Ace Sasutona
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Web Developer & IT Graduate
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 0.8 }}>
                    <Chip
                      icon={<VerifiedIcon sx={{ fontSize: 14 }} />}
                      label="Open to Work"
                      size="small"
                      sx={{
                        background: "rgba(52,211,153,0.12)",
                        border: "1px solid rgba(52,211,153,0.3)",
                        color: "#34d399",
                        fontSize: "0.72rem",
                      }}
                    />
                    <Chip
                      icon={<LocationOnIcon sx={{ fontSize: 14 }} />}
                      label="Philippines"
                      size="small"
                      sx={{
                        background: "rgba(99,102,241,0.12)",
                        border: "1px solid rgba(99,102,241,0.25)",
                        color: "#818cf8",
                        fontSize: "0.72rem",
                      }}
                    />
                  </Box>
                </Box>

                <Divider sx={{ borderColor: "rgba(99,102,241,0.15)", my: 2 }} />

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9, textAlign: "center" }}>
                  I'm a passionate web developer from the Philippines with a strong
                  foundation in building modern web applications. I specialize in
                  creating clean, efficient, and visually appealing digital experiences
                  using the latest web technologies.
                </Typography>

                <Divider sx={{ borderColor: "rgba(99,102,241,0.15)", my: 2.5 }} />

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {[
                    { icon: <CalendarTodayIcon sx={{ fontSize: 16 }} />, label: "Born", value: "2002" },
                    { icon: <LocationOnIcon sx={{ fontSize: 16 }} />, label: "Location", value: "Philippines" },
                    { icon: <SchoolIcon sx={{ fontSize: 16 }} />, label: "Degree", value: "BS Information Technology" },
                    { icon: <WorkIcon sx={{ fontSize: 16 }} />, label: "Email", value: "jhonace.sasutona@email.com" },
                  ].map((info) => (
                    <Box
                      key={info.label}
                      sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#818cf8" }}>
                        {info.icon}
                        <Typography variant="caption" sx={{ color: "#94a3b8", fontWeight: 500 }}>
                          {info.label}
                        </Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: "#f1f5f9", fontWeight: 500 }}>
                        {info.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CustomCard>
            </motion.div>
          </Grid>

          {/* Right: Timeline & Highlights */}
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ mb: 3, color: "#f1f5f9" }}
              >
                My Journey
              </Typography>
              <Box sx={{ position: "relative", mb: 5 }}>
                {/* Timeline Line */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 22,
                    top: 24,
                    bottom: 24,
                    width: 2,
                    background: "linear-gradient(180deg, #6366f1, #7c3aed, rgba(124,58,237,0))",
                    borderRadius: "2px",
                  }}
                />
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {timeline.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                    >
                      <Box sx={{ display: "flex", gap: 2.5 }}>
                        <Avatar
                          sx={{
                            width: 46,
                            height: 46,
                            background: `linear-gradient(135deg, ${item.color}30, ${item.color}15)`,
                            border: `2px solid ${item.color}50`,
                            color: item.color,
                            flexShrink: 0,
                            zIndex: 1,
                          }}
                        >
                          {item.icon}
                        </Avatar>
                        <Box
                          sx={{
                            flex: 1,
                            background: "rgba(15,15,40,0.6)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(99,102,241,0.12)",
                            borderRadius: "16px",
                            p: 2.5,
                            "&:hover": {
                              border: "1px solid rgba(99,102,241,0.3)",
                              background: "rgba(15,15,50,0.8)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                              mb: 0.5,
                            }}
                          >
                            <Typography variant="subtitle2" fontWeight={700}>
                              {item.title}
                            </Typography>
                            <Chip
                              label={item.year}
                              size="small"
                              sx={{
                                background: `${item.color}15`,
                                color: item.color,
                                border: `1px solid ${item.color}30`,
                                fontSize: "0.65rem",
                                height: 22,
                              }}
                            />
                          </Box>
                          <Typography
                            variant="caption"
                            sx={{ color: "#818cf8", fontWeight: 600, display: "block", mb: 1 }}
                          >
                            {item.org}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.82rem" }}>
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2.5, color: "#f1f5f9" }}>
                What Defines Me
              </Typography>
              <Grid container spacing={2}>
                {highlights.map((h, i) => (
                  <Grid key={h.label} size={{ xs: 6 }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          background: "rgba(15,15,40,0.6)",
                          border: "1px solid rgba(99,102,241,0.12)",
                          borderRadius: "14px",
                          textAlign: "center",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            border: "1px solid rgba(99,102,241,0.3)",
                            background: "rgba(99,102,241,0.08)",
                            transform: "translateY(-3px)",
                          },
                        }}
                      >
                        <Typography sx={{ fontSize: "2rem", mb: 0.5 }}>
                          {h.icon}
                        </Typography>
                        <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 0.3 }}>
                          {h.label}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {h.desc}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutSection;
