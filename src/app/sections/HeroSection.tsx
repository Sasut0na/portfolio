import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const roles = [
  "Web Developer",
  "Frontend Engineer",
  "UI/UX Enthusiast",
  "React Developer",
  "Full Stack Developer",
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
];

const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayText((prev) => prev.slice(0, -1)),
        50
      );
    } else {
      timeout = setTimeout(
        () => setDisplayText(currentRole.slice(0, displayText.length + 1)),
        80
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 10, md: 8 },
        pb: 6,
      }}
    >
      {/* Gradient BG */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 30%, #0f0820 60%, #0a0a1a 100%)",
          zIndex: 0,
        }}
      />

      {/* Animated Grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Glowing Orbs */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 60%)",
          filter: "blur(60px)",
          zIndex: 0,
          animation: "heroOrb1 6s ease-in-out infinite",
          "@keyframes heroOrb1": {
            "0%, 100%": { transform: "scale(1)" },
            "50%": { transform: "scale(1.2)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 60%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
          px: { xs: 3, md: 6 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: 6, md: 4 },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Text Content */}
        <Box sx={{ flex: 1, maxWidth: { md: "580px" } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Chip
              label="👋 Available for Work"
              size="small"
              sx={{
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.4)",
                color: "#818cf8",
                fontWeight: 600,
                mb: 3,
                fontSize: "0.8rem",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", sm: "3rem", md: "3.8rem" },
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 1.5,
                letterSpacing: "-0.03em",
              }}
            >
              Hi, I'm{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, #818cf8, #c4b5fd, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 4s ease infinite",
                  "@keyframes gradientShift": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                  },
                }}
              >
                Jhon Ace
              </Box>
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", sm: "3rem", md: "3.8rem" },
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 3,
                letterSpacing: "-0.03em",
              }}
            >
              Sasutona
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 3,
                minHeight: "2.5rem",
              }}
            >
              <Box
                sx={{
                  width: 3,
                  height: "2rem",
                  borderRadius: "2px",
                  background: "linear-gradient(180deg, #6366f1, #7c3aed)",
                }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayText}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "1.3rem", md: "1.6rem" },
                      color: "#94a3b8",
                      fontWeight: 500,
                    }}
                  >
                    {displayText}
                    <Box
                      component="span"
                      sx={{
                        display: "inline-block",
                        width: "3px",
                        height: "1.2em",
                        background: "#6366f1",
                        ml: 0.5,
                        verticalAlign: "middle",
                        animation: "blink 1s step-end infinite",
                        "@keyframes blink": {
                          "0%, 100%": { opacity: 1 },
                          "50%": { opacity: 0 },
                        },
                      }}
                    />
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 460, lineHeight: 1.9 }}
            >
              Passionate web developer crafting modern, responsive, and
              high-performance web applications. Turning ideas into reality with
              clean code and exceptional user experiences.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{ px: 4 }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                sx={{ px: 4, borderColor: "rgba(99,102,241,0.5)" }}
              >
                Download CV
              </Button>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
              >
                Connect:
              </Typography>
              {[
                {
                  icon: <GitHubIcon />,
                  label: "GitHub",
                  href: "https://github.com",
                },
                {
                  icon: <LinkedInIcon />,
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                },
                {
                  icon: <EmailIcon />,
                  label: "Email",
                  href: "mailto:jhonace@email.com",
                },
              ].map((social) => (
                <Tooltip key={social.label} title={social.label} arrow>
                  <IconButton
                    href={social.href}
                    target="_blank"
                    size="small"
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      borderRadius: "10px",
                      "&:hover": {
                        color: "#818cf8",
                        background: "rgba(99,102,241,0.15)",
                        border: "1px solid rgba(99,102,241,0.5)",
                        transform: "translateY(-3px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Profile Image Side */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            flex: { xs: "none", md: "0 0 auto" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          >
            <Box sx={{ position: "relative" }}>
              {/* Outer ring */}
              <Box
                sx={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: "50%",
                  border: "2px solid transparent",
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.5), rgba(124,58,237,0.3), transparent 60%) border-box",
                  animation: "rotate 8s linear infinite",
                  "@keyframes rotate": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: -16,
                  borderRadius: "50%",
                  border: "1px solid rgba(99,102,241,0.15)",
                  animation: "rotate 15s linear infinite reverse",
                }}
              />
              {/* Glow */}
              <Box
                sx={{
                  position: "absolute",
                  inset: -20,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <Avatar
                sx={{
                  width: { xs: 200, md: 280 },
                  height: { xs: 200, md: 280 },
                  border: "4px solid rgba(99,102,241,0.4)",
                  boxShadow: "0 0 60px rgba(99,102,241,0.3)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwdGVjaHxlbnwxfHx8fDE3NzU1NTA2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Jhon Ace Sasutona"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Avatar>
            </Box>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 3,
                background: "rgba(15,15,40,0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: "20px",
                p: 2.5,
                px: 3,
              }}
            >
              {stats.map((stat, index) => (
                <Box
                  key={stat.label}
                  sx={{
                    textAlign: "center",
                    borderRight:
                      index < stats.length - 1
                        ? "1px solid rgba(99,102,241,0.15)"
                        : "none",
                    pr: index < stats.length - 1 ? 3 : 0,
                  }}
                >
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
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* Scroll Indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            opacity: 0.5,
          }}
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Scroll Down
          </Typography>
          <Box
            sx={{
              width: 24,
              height: 40,
              borderRadius: "12px",
              border: "2px solid rgba(99,102,241,0.4)",
              display: "flex",
              justifyContent: "center",
              pt: 1,
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 8,
                borderRadius: "2px",
                background: "rgba(99,102,241,0.6)",
                animation: "scrollDown 1.5s ease-in-out infinite",
                "@keyframes scrollDown": {
                  "0%": { transform: "translateY(0)", opacity: 1 },
                  "100%": { transform: "translateY(12px)", opacity: 0 },
                },
              }}
            />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
