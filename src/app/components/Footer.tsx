import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Grid,
  Button,
  Tooltip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import CodeIcon from "@mui/icons-material/Code";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { motion } from "motion/react";

const socialLinks = [
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    href: "https://github.com/jhonacesasutona",
    color: "#f1f5f9",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "#0a66c2",
  },
  {
    icon: <EmailIcon />,
    label: "Email",
    href: "mailto:jhonace.sasutona@email.com",
    color: "#38bdf8",
  },
  {
    icon: <FacebookIcon />,
    label: "Facebook",
    href: "https://facebook.com",
    color: "#1877f2",
  },
];

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(180deg, rgba(2,6,23,0) 0%, rgba(2,6,23,0.85) 30%, rgba(3,10,28,0.98) 100%)",
        position: "relative",
        overflow: "hidden",
        pt: 10,
        pb: 4,
        mt: -2,
      }}
    >
      {/* Decorative top gradient line */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.6), rgba(245,158,11,0.55), transparent)",
        }}
      />

      {/* Background glow */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.13) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 6 } }}>
        <Grid container spacing={6} sx={{ mb: 6 }}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #0ea5e9, #0891b2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 20px rgba(14,165,233,0.35)",
                  }}
                >
                  <CodeIcon sx={{ color: "#fff", fontSize: 24 }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    background: "linear-gradient(135deg, #bae6fd, #fef3c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 800,
                  }}
                >
                  JAS
                </Typography>
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.8, mb: 3, maxWidth: 300 }}
              >
                Crafting modern, performant, and visually stunning web
                experiences. Passionate about clean code and elegant solutions.
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {socialLinks.map((social) => (
                  <Tooltip key={social.label} title={social.label} arrow>
                    <IconButton
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{
                        color: "rgba(255,255,255,0.5)",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(56,189,248,0.2)",
                        borderRadius: "10px",
                        width: 40,
                        height: 40,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: social.color,
                          background: "rgba(56,189,248,0.16)",
                          border: "1px solid rgba(56,189,248,0.4)",
                          transform: "translateY(-3px)",
                          boxShadow: `0 8px 20px rgba(14,165,233,0.28)`,
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: "#7dd3fc",
                  mb: 2.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.75rem",
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {quickLinks.map((link) => (
                  <Button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    sx={{
                      justifyContent: "flex-start",
                      color: "rgba(255,255,255,0.55)",
                      p: 0,
                      fontSize: "0.9rem",
                      fontWeight: 400,
                      textTransform: "none",
                      "&:hover": {
                        color: "#7dd3fc",
                        background: "transparent",
                        transform: "translateX(5px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    → {link.label}
                  </Button>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: "#7dd3fc",
                  mb: 2.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.75rem",
                }}
              >
                Get In Touch
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Typography variant="body2" color="text.secondary">
                  📧 jhonace.sasutona@email.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  📍 Philippines
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  💼 Open to opportunities
                </Typography>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 1,
                    px: 2,
                    py: 0.8,
                    borderRadius: "50px",
                    background: "rgba(52, 211, 153, 0.1)",
                    border: "1px solid rgba(52, 211, 153, 0.3)",
                    width: "fit-content",
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#34d399",
                      boxShadow: "0 0 8px #34d399",
                      animation: "pulse 2s infinite",
                      "@keyframes pulse": {
                        "0%, 100%": { opacity: 1 },
                        "50%": { opacity: 0.5 },
                      },
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ color: "#34d399", fontWeight: 600 }}
                  >
                    Available for Work
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider
          sx={{
            borderColor: "rgba(99,102,241,0.15)",
            mb: 4,
          }}
        />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            © {new Date().getFullYear()} Jhon Ace Sasutona. Made with{" "}
            <FavoriteIcon sx={{ fontSize: 14, color: "#f87171" }} /> in
            Philippines
          </Typography>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
