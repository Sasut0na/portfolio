import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            background: scrolled
              ? "rgba(10, 10, 26, 0.95)"
              : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            borderBottom: scrolled
              ? "1px solid rgba(99, 102, 241, 0.2)"
              : "none",
            boxShadow: scrolled
              ? "0 4px 30px rgba(0,0,0,0.4)"
              : "none",
            transition: "all 0.4s ease",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
                onClick={() => scrollTo("#hero")}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 15px rgba(99,102,241,0.5)",
                  }}
                >
                  <CodeIcon sx={{ fontSize: 20, color: "#fff" }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    background: "linear-gradient(135deg, #818cf8, #c4b5fd)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                  }}
                >
                  JAS.dev
                </Typography>
              </Box>
            </motion.div>

            {/* Desktop Nav */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 0.5,
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "50px",
                    padding: "4px",
                    border: "1px solid rgba(99,102,241,0.15)",
                  }}
                >
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.replace("#", "");
                    return (
                      <Button
                        key={item.href}
                        onClick={() => scrollTo(item.href)}
                        sx={{
                          borderRadius: "50px",
                          px: 2.5,
                          py: 0.8,
                          color: isActive ? "#fff" : "rgba(255,255,255,0.65)",
                          background: isActive
                            ? "linear-gradient(135deg, #6366f1, #7c3aed)"
                            : "transparent",
                          boxShadow: isActive
                            ? "0 4px 15px rgba(99,102,241,0.4)"
                            : "none",
                          fontSize: "0.85rem",
                          fontWeight: isActive ? 600 : 500,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: isActive
                              ? "linear-gradient(135deg, #6366f1, #7c3aed)"
                              : "rgba(99,102,241,0.1)",
                            color: "#fff",
                            transform: "none",
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    );
                  })}
                </Box>
              </motion.div>
            )}

            {/* CTA / Mobile Toggle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {isMobile ? (
                <IconButton
                  onClick={() => setMobileOpen(true)}
                  sx={{
                    color: "#818cf8",
                    background: "rgba(99,102,241,0.1)",
                    "&:hover": { background: "rgba(99,102,241,0.2)" },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => scrollTo("#contact")}
                  sx={{ fontSize: "0.85rem" }}
                >
                  Hire Me
                </Button>
              )}
            </motion.div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: "rgba(10, 10, 30, 0.98)",
            backdropFilter: "blur(20px)",
            borderLeft: "1px solid rgba(99,102,241,0.2)",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                background: "linear-gradient(135deg, #818cf8, #c4b5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 800,
              }}
            >
              JAS.dev
            </Typography>
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{ color: "#818cf8" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            <AnimatePresence>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <ListItem
                    onClick={() => scrollTo(item.href)}
                    sx={{
                      borderRadius: "12px",
                      mb: 0.5,
                      cursor: "pointer",
                      background:
                        activeSection === item.href.replace("#", "")
                          ? "rgba(99,102,241,0.15)"
                          : "transparent",
                      border:
                        activeSection === item.href.replace("#", "")
                          ? "1px solid rgba(99,102,241,0.3)"
                          : "1px solid transparent",
                      "&:hover": {
                        background: "rgba(99,102,241,0.1)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight:
                          activeSection === item.href.replace("#", "")
                            ? 700
                            : 500,
                        color:
                          activeSection === item.href.replace("#", "")
                            ? "#818cf8"
                            : "rgba(255,255,255,0.8)",
                      }}
                    />
                  </ListItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </List>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => scrollTo("#contact")}
            >
              Hire Me
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
