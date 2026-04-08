import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, showFooter = true }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(900px 520px at 10% -20%, rgba(56,189,248,0.12), transparent 58%), radial-gradient(760px 460px at 90% 8%, rgba(245,158,11,0.1), transparent 62%), linear-gradient(170deg, #020617 0%, #061224 55%, #0b1220 100%)",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Edge vignette for depth */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 42%, transparent 34%, rgba(2,6,23,0.34) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Soft ambient lights */}
      <Box
        sx={{
          position: "fixed",
          top: "2%",
          right: "8%",
          width: { xs: "220px", md: "300px" },
          height: { xs: "220px", md: "300px" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.16) 0%, transparent 72%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: "6%",
          left: "6%",
          width: { xs: "200px", md: "260px" },
          height: { xs: "200px", md: "260px" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.14) 0%, transparent 74%)",
          filter: "blur(66px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Navbar />
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
      {showFooter ? <Footer /> : null}
    </Box>
  );
};

export default MainLayout;
