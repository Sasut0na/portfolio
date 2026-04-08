import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { motion } from "motion/react";

const roles = [
  "Frontend Developer",
  "Web Developer",
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
];

const profileImage = "/profile.png";

const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => setDisplayText((prev) => prev.slice(0, -1)), 45);
    } else {
      timeout = setTimeout(
        () => setDisplayText(currentRole.slice(0, displayText.length + 1)),
        75
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
        px: { xs: 2.5, md: 4 },
        pt: { xs: 11, md: 12 },
        pb: { xs: 8, md: 6 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(760px 380px at 16% 24%, rgba(56,189,248,0.14), transparent 64%), radial-gradient(640px 320px at 86% 40%, rgba(245,158,11,0.11), transparent 68%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(108deg, rgba(2,6,23,0.02) 0%, rgba(2,6,23,0.16) 48%, rgba(2,6,23,0.04) 100%)",
          zIndex: 0,
          opacity: 1,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          width: "100%",
          maxWidth: "1180px",
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 7, md: 3 },
        }}
      >
        <Box sx={{ width: "100%", maxWidth: { xs: "680px", md: "560px" }, textAlign: { xs: "center", md: "left" } }}>
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Chip
              label="Available for Work"
              size="small"
              sx={{
                color: "#bae6fd",
                background: "rgba(56, 189, 248, 0.14)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                fontWeight: 600,
                letterSpacing: "0.02em",
                mb: 2.5,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3.3rem" },
                fontWeight: 900,
                lineHeight: 1.07,
                letterSpacing: "-0.03em",
                color: "#f2f5ff",
              }}
            >
              Hi, I&apos;m Jhon Ace
              <Box component="span" sx={{ display: "block", color: "#7dd3fc" }}>
                Sasutona
              </Box>
            </Typography>
            <Typography
              sx={{
                minHeight: "2rem",
                mt: 1.5,
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#a5b4fc",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {displayText}
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.1em",
                  ml: 0.5,
                  verticalAlign: "text-top",
                  backgroundColor: "#95a4ff",
                  animation: "heroTypingCursor 1s step-end infinite",
                  "@keyframes heroTypingCursor": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0 },
                  },
                }}
              />
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: "520px",
                mx: { xs: "auto", md: 0 },
                color: "rgba(196, 206, 240, 0.86)",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Passionate web developer crafting modern, responsive, and high-performance web applications with clean code and exceptional user experiences.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45 }}
          >
            <Box
              sx={{
                mt: 3.5,
                display: "flex",
                gap: 1.5,
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                size="large"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  px: 3.2,
                  py: 1.1,
                  borderRadius: "999px",
                  background: "linear-gradient(120deg, #0ea5e9 0%, #22d3ee 100%)",
                  color: "#041226",
                  fontWeight: 700,
                  "&:hover": {
                    background: "linear-gradient(120deg, #0284c7 0%, #06b6d4 100%)",
                  },
                }}
              >
                View Projects
              </Button>
              <Button
                size="large"
                variant="outlined"
                startIcon={<MailOutlineIcon />}
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  px: 3.2,
                  py: 1.1,
                  borderRadius: "999px",
                  color: "#d8efff",
                  borderColor: "rgba(56, 189, 248, 0.45)",
                  "&:hover": {
                    borderColor: "rgba(125, 211, 252, 0.85)",
                    background: "rgba(56, 189, 248, 0.13)",
                  },
                }}
              >
                Contact Me
              </Button>
            </Box>
          </motion.div>
        </Box>

        <Box sx={{ width: "100%", maxWidth: { xs: "560px", md: "520px" }, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 95 }}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Jhon Ace Sasutona"
              sx={{
                width: { xs: 310, sm: 360, md: 420 },
                height: { xs: 330, sm: 390, md: 440 },
                objectFit: "cover",
                objectPosition: "center 18%",
                borderRadius: "14px",
                border: "1px solid rgba(157, 181, 255, 0.45)",
                outline: "1px solid rgba(121, 145, 220, 0.22)",
                outlineOffset: "6px",
                boxShadow: "0 22px 48px rgba(3, 10, 40, 0.45)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <Box
              sx={{
                mt: { xs: 3.5, md: 3.6 },
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                width: "100%",
                maxWidth: { xs: "380px", sm: "470px", md: "520px" },
                borderRadius: "16px",
                border: "1px solid rgba(124, 142, 217, 0.32)",
                background: "linear-gradient(145deg, rgba(9, 13, 44, 0.86) 0%, rgba(8, 10, 33, 0.82) 100%)",
                backdropFilter: "blur(14px)",
                overflow: "hidden",
                boxShadow: "0 16px 38px rgba(2, 8, 32, 0.42)",
              }}
            >
              {stats.map((stat, index) => (
                <Box
                  key={stat.label}
                  sx={{
                    py: 1.9,
                    px: 1,
                    borderRight: index < stats.length - 1 ? "1px solid rgba(122, 140, 217, 0.2)" : "none",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 900,
                      lineHeight: 1,
                      fontSize: { xs: "1.8rem", md: "2rem" },
                      color: "#c1d0ff",
                      mb: 0.5,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(206, 216, 245, 0.82)",
                      fontSize: { xs: "0.77rem", md: "0.83rem" },
                      letterSpacing: "0.02em",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Box>

      <motion.div
        style={{
          position: "absolute",
          bottom: 26,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <Box
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          sx={{
            cursor: "pointer",
            px: 1,
            py: 0.5,
            opacity: 0.55,
            "&:hover": { opacity: 1 },
          }}
        >
    
        </Box>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
