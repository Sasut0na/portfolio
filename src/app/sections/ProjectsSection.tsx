import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type FilterType = "All" | "Featured" | "Web App" | "System";

const filters: FilterType[] = ["All", "Featured", "Web App", "System"];

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: FilterType[];
  features: string[];
  tech: string[];
  status: string;
  year: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  stars?: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Reservation System",
    subtitle: " Web Application",
    description:
      "A comprehensive online reservation and booking management system built for restaurants, hotels, and service providers.",
    longDescription:
      "A full-featured reservation system that allows users to book appointments, manage reservations in real time, and receive email confirmations. Admins can oversee all bookings through a powerful dashboard.",
    image:
      "https://images.unsplash.com/photo-1564216551162-2af418374807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaG90ZWwlMjByZXNlcnZhdGlvbiUyMGJvb2tpbmclMjBzeXN0ZW0lMjBhcHB8ZW58MXx8fHwxNzc1NTUwNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    category: ["Featured", "Web App", "System"],
    features: [
      "Real-time booking & availability calendar",
      "Admin dashboard with analytics",
      "Email confirmation & notifications",
      "User authentication & profile management",
      "Payment integration support",
      "Responsive design for all devices",
      "Booking history & cancellation system",
      "Export reports to PDF/Excel",
    ],
    tech: ["PHP 8", "MySQL", "JavaScript ES6", "Bootstrap 5", "AJAX", "PHPMailer"],
    status: "Completed",
    year: "2023",
    github: "https://github.com/jhonacesasutona",
    featured: true,
    stars: 12,
  },
  {
    id: 2,
    title: "Developer Portfolio",
    subtitle: "Personal Portfolio Website",
    description:
      "A modern, animated, and fully responsive personal portfolio website built with React and Material UI.",
    longDescription:
      "This very portfolio — designed with glassmorphism, gradient themes, smooth animations, and a clean professional layout.",
    image:
      "https://images.unsplash.com/photo-1763568258605-6783d4fad7b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjBwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzc1NTUwNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "MUI", "Motion", "TypeScript"],
    category: ["Web App"],
    features: [
      "Animated hero with typewriter effect",
      "Interactive skill progress bars",
      "Project showcase with filters",
      "Glassmorphism card design",
      "Responsive for all screen sizes",
      "Contact form with validation",
    ],
    tech: ["React", "Material UI", "Motion", "TypeScript"],
    status: "Live",
    year: "2024",
    github: "https://github.com/jhonacesasutona",
    featured: false,
    stars: 8,
  },
  {
    id: 3,
    title: "Team Collaboration Hub",
    subtitle: "Project Management Tool",
    description:
      "A collaborative project management platform for development teams with real-time task tracking and communication tools.",
    longDescription:
      "Inspired by modern PM tools, this app helps dev teams manage sprints, assign tasks, track progress, and communicate effectively.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBwcm9qZWN0fGVufDF8fHx8MTc3NTU1MDY4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "MySQL", "REST API"],
    category: ["Web App", "System"],
    features: [
      "Kanban board & task management",
      "Team member roles & permissions",
      "Real-time status updates",
      "File sharing & comments",
      "Sprint planning & reports",
    ],
    tech: ["React", "Node.js", "Express", "MySQL", "JWT Auth"],
    status: "In Progress",
    year: "2024",
    github: "https://github.com/jhonacesasutona",
    featured: false,
    stars: 5,
  },
];

const statusColors: Record<string, string> = {
  Completed: "#34d399",
  Live: "#38bdf8",
  "In Progress": "#fbbf24",
};

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.category.includes(activeFilter)
  );

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG accents */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          right: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
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
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              label="My Projects"
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
                background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1.5,
              }}
            >
              Featured Work
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
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480, mx: "auto" }}>
              A selection of projects I've built — from full-stack systems to polished frontends
            </Typography>
          </Box>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mb: 6,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                size="small"
                sx={{
                  borderRadius: "50px",
                  px: 2.5,
                  py: 0.8,
                  fontSize: "0.83rem",
                  fontWeight: activeFilter === filter ? 600 : 500,
                  color: activeFilter === filter ? "#fff" : "rgba(255,255,255,0.55)",
                  background:
                    activeFilter === filter
                      ? "linear-gradient(135deg, #0ea5e9, #0891b2)"
                      : "rgba(255,255,255,0.04)",
                  border:
                    activeFilter === filter
                      ? "none"
                      : "1px solid rgba(56,189,248,0.25)",
                  boxShadow:
                    activeFilter === filter
                      ? "0 4px 15px rgba(14,165,233,0.35)"
                      : "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background:
                      activeFilter === filter
                        ? "linear-gradient(135deg, #0ea5e9, #0891b2)"
                        : "rgba(56,189,248,0.12)",
                    color: "#fff",
                    transform: "none",
                  },
                }}
              >
                {filter}
              </Button>
            ))}
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Grid container spacing={4}>
              {filtered.map((project, i) => (
                <Grid
                  key={project.id}
                  size={{
                    xs: 12,
                    md: project.featured ? 12 : 6,
                    lg: project.featured ? 12 : 6,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: "24px",
                        overflow: "hidden",
                        background: "rgba(15,15,40,0.8)",
                        border: "1px solid rgba(99,102,241,0.15)",
                        backdropFilter: "blur(20px)",
                        transition: "all 0.4s ease",
                        cursor: "pointer",
                        "&:hover": {
                          border: "1px solid rgba(99,102,241,0.4)",
                          boxShadow: "0 20px 60px rgba(99,102,241,0.2)",
                          transform: "translateY(-6px)",
                        },
                      }}
                      onClick={() =>
                        setExpandedId(
                          expandedId === project.id ? null : project.id
                        )
                      }
                    >
                      {/* Featured Banner */}
                      {project.featured && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 16,
                            left: 16,
                            zIndex: 10,
                            display: "flex",
                            alignItems: "center",
                            gap: 0.8,
                            px: 2,
                            py: 0.6,
                            borderRadius: "50px",
                            background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                            boxShadow: "0 4px 20px rgba(99,102,241,0.5)",
                          }}
                        >
                          <StarIcon sx={{ fontSize: 14, color: "#fbbf24" }} />
                          <Typography variant="caption" sx={{ color: "#fff", fontWeight: 700, fontSize: "0.72rem" }}>
                            Featured Project
                          </Typography>
                        </Box>
                      )}

                      <Grid container={project.featured}>
                        {/* Image */}
                        <Grid size={{ xs: 12, md: project.featured ? 6 : 12 }}>
                          <Box
                            sx={{
                              position: "relative",
                              height: { xs: 220, md: project.featured ? 400 : 220 },
                              overflow: "hidden",
                            }}
                          >
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.6s ease",
                              }}
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(to top, rgba(10,10,26,0.9) 0%, rgba(10,10,26,0.2) 60%, transparent 100%)",
                              }}
                            />
                          </Box>
                        </Grid>

                        {/* Content */}
                        <Grid size={{ xs: 12, md: project.featured ? 6 : 12 }}>
                          <Box sx={{ p: { xs: 3, md: project.featured ? 4 : 3 } }}>
                            {/* Status + Year */}
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Box
                                  sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: statusColors[project.status] || "#818cf8",
                                    boxShadow: `0 0 8px ${statusColors[project.status] || "#818cf8"}`,
                                  }}
                                />
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: statusColors[project.status] || "#818cf8",
                                    fontWeight: 600,
                                    fontSize: "0.75rem",
                                  }}
                                >
                                  {project.status}
                                </Typography>
                              </Box>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                                <CalendarTodayIcon sx={{ fontSize: 13, color: "#94a3b8" }} />
                                <Typography variant="caption" color="text.secondary">
                                  {project.year}
                                </Typography>
                                {project.stars && (
                                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.3, ml: 1 }}>
                                    <StarIcon sx={{ fontSize: 13, color: "#fbbf24" }} />
                                    <Typography variant="caption" sx={{ color: "#fbbf24" }}>
                                      {project.stars}
                                    </Typography>
                                  </Box>
                                )}
                              </Box>
                            </Box>

                            <Typography variant="caption" sx={{ color: "#818cf8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                              {project.subtitle}
                            </Typography>
                            <Typography
                              variant={project.featured ? "h4" : "h6"}
                              fontWeight={700}
                              sx={{ mt: 0.5, mb: 1.5, color: "#f1f5f9" }}
                            >
                              {project.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8 }}>
                              {project.description}
                            </Typography>

                            {/* Tags */}
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 3 }}>
                              {project.tags.map((tag) => (
                                <Chip
                                  key={tag}
                                  label={tag}
                                  size="small"
                                  sx={{
                                    background: "rgba(99,102,241,0.12)",
                                    border: "1px solid rgba(99,102,241,0.25)",
                                    color: "#a78bfa",
                                    fontSize: "0.72rem",
                                    height: 24,
                                  }}
                                />
                              ))}
                            </Box>

                            {/* Expanded Features */}
                            <AnimatePresence>
                              {expandedId === project.id && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.4 }}
                                >
                                  <Box
                                    sx={{
                                      mb: 3,
                                      p: 2,
                                      background: "rgba(99,102,241,0.07)",
                                      border: "1px solid rgba(99,102,241,0.15)",
                                      borderRadius: "12px",
                                    }}
                                  >
                                    <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1.5, color: "#818cf8" }}>
                                      Key Features
                                    </Typography>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
                                      {project.features.map((feat) => (
                                        <Box key={feat} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                                          <CheckCircleIcon sx={{ fontSize: 15, color: "#34d399", mt: 0.2, flexShrink: 0 }} />
                                          <Typography variant="caption" sx={{ color: "#cbd5e1", lineHeight: 1.6 }}>
                                            {feat}
                                          </Typography>
                                        </Box>
                                      ))}
                                    </Box>
                                  </Box>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {/* Action Buttons */}
                            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                              <Button
                                variant="outlined"
                                size="small"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedId(
                                    expandedId === project.id ? null : project.id
                                  );
                                }}
                                sx={{
                                  borderRadius: "50px",
                                  fontSize: "0.78rem",
                                  px: 2,
                                  borderColor: "rgba(99,102,241,0.4)",
                                  color: "#818cf8",
                                  "&:hover": {
                                    background: "rgba(99,102,241,0.1)",
                                    borderColor: "#6366f1",
                                    transform: "none",
                                  },
                                }}
                              >
                                {expandedId === project.id ? "Show Less" : "View Details"}
                              </Button>
                              <Tooltip title="GitHub">
                                <IconButton
                                  href={project.github || "#"}
                                  target="_blank"
                                  size="small"
                                  onClick={(e) => e.stopPropagation()}
                                  sx={{
                                    color: "#94a3b8",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(99,102,241,0.2)",
                                    borderRadius: "10px",
                                    "&:hover": {
                                      color: "#f1f5f9",
                                      background: "rgba(99,102,241,0.15)",
                                      border: "1px solid rgba(99,102,241,0.4)",
                                    },
                                  }}
                                >
                                  <GitHubIcon sx={{ fontSize: 18 }} />
                                </IconButton>
                              </Tooltip>
                              {project.demo && (
                                <Tooltip title="Live Demo">
                                  <IconButton
                                    href={project.demo}
                                    target="_blank"
                                    size="small"
                                    onClick={(e) => e.stopPropagation()}
                                    sx={{
                                      color: "#94a3b8",
                                      background: "rgba(255,255,255,0.05)",
                                      border: "1px solid rgba(99,102,241,0.2)",
                                      borderRadius: "10px",
                                      "&:hover": {
                                        color: "#6366f1",
                                        background: "rgba(99,102,241,0.15)",
                                        border: "1px solid rgba(99,102,241,0.4)",
                                      },
                                    }}
                                  >
                                    <OpenInNewIcon sx={{ fontSize: 18 }} />
                                  </IconButton>
                                </Tooltip>
                              )}
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box sx={{ textAlign: "center", mt: 8 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 2,
                px: 4,
                py: 2.5,
                background: "rgba(15,15,40,0.8)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
              }}
            >
              <GitHubIcon sx={{ color: "#818cf8", fontSize: 28 }} />
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="body2" fontWeight={600} sx={{ color: "#f1f5f9" }}>
                  See More on GitHub
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  github.com/jhonacesasutona
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="small"
                href="https://github.com/jhonacesasutona"
                target="_blank"
                sx={{ ml: 1 }}
              >
                Visit
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ProjectsSection;