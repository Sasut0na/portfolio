import React from "react";
import { Card, CardContent, Box } from "@mui/material";
import { motion } from "motion/react";

interface CustomCardProps {
  children: React.ReactNode;
  elevation?: number;
  glowColor?: string;
  hoverScale?: number;
  gradient?: boolean;
  sx?: object;
  onClick?: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  children,
  elevation = 4,
  glowColor = "rgba(14, 165, 233, 0.14)",
  hoverScale = 1.005,
  gradient = false,
  sx = {},
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: hoverScale, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ height: "100%" }}
      onClick={onClick}
    >
      <Card
        elevation={elevation}
        sx={{
          height: "100%",
          position: "relative",
          overflow: "hidden",
          cursor: onClick ? "pointer" : "default",
          background: gradient
            ? "linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(8,47,73,0.12) 50%, rgba(6,18,38,0.9) 100%)"
            : "rgba(6, 18, 38, 0.68)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(56, 189, 248, 0.14)",
          borderRadius: "20px",
          transition: "all 0.25s ease",
          "&:hover": {
            boxShadow: `0 10px 28px ${glowColor}`,
            border: "1px solid rgba(56, 189, 248, 0.2)",
          },
          ...sx,
        }}
      >
        <CardContent sx={{ position: "relative", zIndex: 1 }}>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CustomCard;
