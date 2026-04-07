import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0a0a1a",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Global ambient background */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 80%, rgba(124,58,237,0.08) 0%, transparent 50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Animated Orbs */}
      <Box
        sx={{
          position: "fixed",
          top: "15%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "float1 8s ease-in-out infinite",
          "@keyframes float1": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "33%": { transform: "translate(-30px, -20px) scale(1.05)" },
            "66%": { transform: "translate(20px, 10px) scale(0.95)" },
          },
        }}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: "20%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "float2 10s ease-in-out infinite",
          "@keyframes float2": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "50%": { transform: "translate(20px, -30px) scale(1.1)" },
          },
        }}
      />

      <Navbar />
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
