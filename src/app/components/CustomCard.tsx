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
  glowColor = "rgba(99, 102, 241, 0.3)",
  hoverScale = 1.02,
  gradient = false,
  sx = {},
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: hoverScale, y: -6 }}
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
            ? "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(124,58,237,0.1) 50%, rgba(15,15,40,0.9) 100%)"
            : "rgba(15, 15, 40, 0.7)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(99, 102, 241, 0.2)",
          borderRadius: "20px",
          transition: "all 0.4s ease",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "20px",
            padding: "1px",
            background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(124,58,237,0.2), transparent)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            opacity: 0,
            transition: "opacity 0.4s ease",
          },
          "&:hover::before": {
            opacity: 1,
          },
          "&:hover": {
            boxShadow: `0 20px 60px ${glowColor}, 0 0 0 1px rgba(99,102,241,0.2)`,
            border: "1px solid rgba(99, 102, 241, 0.4)",
          },
          ...sx,
        }}
      >
        {/* Gradient Shimmer Effect */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "60%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.05), transparent)",
            transform: "skewX(-15deg)",
            transition: "left 0.6s ease",
            ".MuiCard-root:hover &": {
              left: "200%",
            },
          }}
        />
        <CardContent sx={{ position: "relative", zIndex: 1 }}>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CustomCard;
