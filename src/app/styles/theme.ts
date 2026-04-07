import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366f1",
      light: "#818cf8",
      dark: "#4338ca",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#7c3aed",
      light: "#a78bfa",
      dark: "#5b21b6",
      contrastText: "#ffffff",
    },
    background: {
      default: "#0a0a1a",
      paper: "rgba(15, 15, 35, 0.85)",
    },
    text: {
      primary: "#f1f5f9",
      secondary: "#94a3b8",
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
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
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
          background: "linear-gradient(135deg, #6366f1, #7c3aed)",
          boxShadow: "0 4px 24px rgba(99, 102, 241, 0.4)",
          "&:hover": {
            background: "linear-gradient(135deg, #4f46e5, #6d28d9)",
            boxShadow: "0 8px 32px rgba(99, 102, 241, 0.6)",
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderColor: "rgba(99, 102, 241, 0.6)",
          "&:hover": {
            borderColor: "#6366f1",
            background: "rgba(99, 102, 241, 0.1)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(15, 15, 40, 0.7)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(99, 102, 241, 0.15)",
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
              borderColor: "rgba(99, 102, 241, 0.25)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(99, 102, 241, 0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#6366f1",
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
          background: "rgba(99, 102, 241, 0.15)",
        },
        bar: {
          borderRadius: "10px",
          background: "linear-gradient(90deg, #6366f1, #7c3aed)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(10, 10, 26, 0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(99, 102, 241, 0.15)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
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
