import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0ea5e9",
      light: "#38bdf8",
      dark: "#0369a1",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f59e0b",
      light: "#fbbf24",
      dark: "#b45309",
      contrastText: "#ffffff",
    },
    background: {
      default: "#020617",
      paper: "rgba(8, 20, 42, 0.85)",
    },
    text: {
      primary: "#f1f5f9",
      secondary: "#9fb0c8",
    },
    info: {
      main: "#38bdf8",
    },
    success: {
      main: "#34d399",
    },
    warning: {
      main: "#fbbf24",
    },
    error: {
      main: "#f87171",
    },
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Sora", "Manrope", sans-serif',
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: '"Sora", "Manrope", sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: '"Sora", "Manrope", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 28px",
          transition: "all 0.3s ease",
        },
        contained: {
          background: "#0ea5e9",
          boxShadow: "none",
          "&:hover": {
            background: "#0284c7",
            boxShadow: "none",
            transform: "none",
          },
        },
        outlined: {
          borderColor: "rgba(56, 189, 248, 0.55)",
          "&:hover": {
            borderColor: "#38bdf8",
            background: "rgba(56, 189, 248, 0.1)",
            transform: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(7, 18, 38, 0.72)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(56, 189, 248, 0.2)",
          borderRadius: "20px",
          transition: "all 0.4s ease",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            background: "rgba(255,255,255,0.03)",
            "& fieldset": {
              borderColor: "rgba(56, 189, 248, 0.24)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(56, 189, 248, 0.55)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0ea5e9",
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontWeight: 500,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          height: "8px",
          background: "rgba(148, 163, 184, 0.2)",
        },
        bar: {
          borderRadius: "10px",
          background: "linear-gradient(90deg, #0ea5e9, #f59e0b)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(3, 12, 32, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(56, 189, 248, 0.16)",
          boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
        },
      },
    },
  },
  shadows: [
    "none",
    "0 2px 8px rgba(0,0,0,0.3)",
    "0 4px 16px rgba(0,0,0,0.3)",
    "0 8px 24px rgba(0,0,0,0.3)",
    "0 8px 32px rgba(0,0,0,0.4)",
    "0 12px 40px rgba(0,0,0,0.4)",
    "0 16px 48px rgba(0,0,0,0.4)",
    "0 20px 56px rgba(0,0,0,0.4)",
    "0 24px 64px rgba(0,0,0,0.5)",
    "0 28px 72px rgba(0,0,0,0.5)",
    "0 32px 80px rgba(0,0,0,0.5)",
    "0 36px 88px rgba(0,0,0,0.5)",
    "0 40px 96px rgba(0,0,0,0.5)",
    "0 44px 104px rgba(0,0,0,0.5)",
    "0 48px 112px rgba(0,0,0,0.5)",
    "0 52px 120px rgba(0,0,0,0.5)",
    "0 56px 128px rgba(0,0,0,0.5)",
    "0 60px 136px rgba(0,0,0,0.5)",
    "0 64px 144px rgba(0,0,0,0.5)",
    "0 68px 152px rgba(0,0,0,0.5)",
    "0 72px 160px rgba(0,0,0,0.5)",
    "0 76px 168px rgba(0,0,0,0.5)",
    "0 80px 176px rgba(0,0,0,0.5)",
    "0 84px 184px rgba(0,0,0,0.5)",
    "0 88px 192px rgba(0,0,0,0.5)",
  ],
});

export default theme;
