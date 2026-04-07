import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Chip,
  IconButton,
  Tooltip,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "motion/react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: <EmailIcon />,
    label: "Email",
    value: "jhonace.sasutona@email.com",
    href: "mailto:jhonace.sasutona@email.com",
    color: "#6366f1",
  },
  {
    icon: <PhoneIcon />,
    label: "Phone",
    value: "+63 9XX XXX XXXX",
    href: "tel:+639XXXXXXXX",
    color: "#34d399",
  },
  {
    icon: <LocationOnIcon />,
    label: "Location",
    value: "Philippines",
    href: "#",
    color: "#f87171",
  },
];

const socialLinks = [
  { icon: <GitHubIcon />, label: "GitHub", href: "https://github.com/jhonacesasutona", color: "#f1f5f9" },
  { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://linkedin.com", color: "#0a66c2" },
  { icon: <EmailIcon />, label: "Email", href: "mailto:jhonace.sasutona@email.com", color: "#6366f1" },
  { icon: <FacebookIcon />, label: "Facebook", href: "https://facebook.com", color: "#1877f2" },
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSuccess(true);
    setSnackbar(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(15,15,35,0.4) 50%, transparent 100%)",
      }}
    >
      {/* BG accents */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
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
              label="Contact"
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
              Let's Work Together
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
              Have a project in mind? I'd love to hear about it. Let's build something amazing together.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={5} alignItems="stretch">
          {/* Left: Contact Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ height: "100%" }}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                {/* Availability Badge */}
                <Box
                  sx={{
                    p: 3,
                    background: "linear-gradient(135deg, rgba(52,211,153,0.1), rgba(52,211,153,0.05))",
                    border: "1px solid rgba(52,211,153,0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: "#34d399",
                        boxShadow: "0 0 12px #34d399",
                        animation: "pulse 2s infinite",
                        "@keyframes pulse": {
                          "0%, 100%": { opacity: 1, transform: "scale(1)" },
                          "50%": { opacity: 0.7, transform: "scale(1.2)" },
                        },
                      }}
                    />
                    <Typography variant="subtitle1" fontWeight={700} sx={{ color: "#34d399" }}>
                      Available for Work
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    I'm currently open to freelance projects and full-time opportunities. Let's connect!
                  </Typography>
                </Box>

                {/* Contact Info Items */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <Box
                        component="a"
                        href={info.href}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          p: 2,
                          background: "rgba(15,15,40,0.6)",
                          border: "1px solid rgba(99,102,241,0.12)",
                          borderRadius: "14px",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: "rgba(99,102,241,0.08)",
                            border: "1px solid rgba(99,102,241,0.3)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: "12px",
                            background: `${info.color}18`,
                            border: `1px solid ${info.color}30`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: info.color,
                            flexShrink: 0,
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography variant="caption" color="text.secondary" sx={{ display: "block", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                            {info.label}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#f1f5f9", fontWeight: 500 }}>
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>

                {/* Social Links */}
                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ textTransform: "uppercase", letterSpacing: "0.1em", mb: 1.5, display: "block" }}>
                    Follow Me
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1.5 }}>
                    {socialLinks.map((social) => (
                      <Tooltip key={social.label} title={social.label} arrow>
                        <motion.div whileHover={{ scale: 1.15, y: -3 }}>
                          <IconButton
                            href={social.href}
                            target="_blank"
                            size="medium"
                            sx={{
                              color: "rgba(255,255,255,0.5)",
                              background: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(99,102,241,0.15)",
                              borderRadius: "12px",
                              width: 46,
                              height: 46,
                              "&:hover": {
                                color: social.color,
                                background: "rgba(99,102,241,0.15)",
                                border: "1px solid rgba(99,102,241,0.4)",
                                boxShadow: "0 8px 20px rgba(99,102,241,0.3)",
                              },
                              transition: "all 0.3s ease",
                            }}
                          >
                            {social.icon}
                          </IconButton>
                        </motion.div>
                      </Tooltip>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Contact Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3, md: 4 },
                  background: "rgba(15,15,40,0.7)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  borderRadius: "24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative corners */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 200,
                    height: 200,
                    background: "radial-gradient(circle at top right, rgba(99,102,241,0.07), transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <Typography variant="h5" fontWeight={700} sx={{ mb: 3, color: "#f1f5f9" }}>
                  Send Me a Message
                </Typography>

                {success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        p: 2,
                        mb: 3,
                        background: "rgba(52,211,153,0.1)",
                        border: "1px solid rgba(52,211,153,0.3)",
                        borderRadius: "12px",
                      }}
                    >
                      <CheckCircleIcon sx={{ color: "#34d399" }} />
                      <Typography variant="body2" sx={{ color: "#34d399", fontWeight: 600 }}>
                        Message sent successfully! I'll get back to you shortly.
                      </Typography>
                    </Box>
                  </motion.div>
                )}

                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      placeholder="Jhon Doe"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      placeholder="jhon@email.com"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      placeholder="Project Inquiry / Collaboration"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={
                        errors.message ||
                        `${formData.message.length} / 500 characters`
                      }
                      placeholder="Tell me about your project, timeline, and budget..."
                      InputLabelProps={{ shrink: true }}
                      inputProps={{ maxLength: 500 }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={loading}
                        startIcon={
                          loading ? (
                            <CircularProgress size={18} sx={{ color: "#fff" }} />
                          ) : (
                            <SendIcon />
                          )
                        }
                        sx={{
                          py: 1.8,
                          fontSize: "1rem",
                          background: loading
                            ? "rgba(99,102,241,0.4)"
                            : "linear-gradient(135deg, #6366f1, #7c3aed)",
                        }}
                      >
                        {loading ? "Sending Message..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </Grid>
                </Grid>

                <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 2, textAlign: "center" }}>
                  🔒 Your information is secure and will never be shared.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={snackbar}
        autoHideDuration={5000}
        onClose={() => setSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSnackbar(false)}
          sx={{
            borderRadius: "12px",
            background: "linear-gradient(135deg, #059669, #10b981)",
          }}
        >
          Message sent! I'll reply within 24 hours.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
