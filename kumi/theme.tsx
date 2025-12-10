// Theme.js
import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();  // 'light' | 'dark'

// COLOR PALETTE
const LightColors = {
  background: "#F5F5F5",
  card: "#FFFFFF",
  primary: "#3B82F6",
  text: "#000000",
  subtext: "#6B7280",
  bubbleMe: "#3B82F6",
  bubbleOther: "#FFFFFF",
};

const DarkColors = {
  background: "#0D0D0D",
  card: "#1A1A1A",
  primary: "#60A5FA",
  text: "#FFFFFF",
  subtext: "#9CA3AF",
  bubbleMe: "#2563EB",
  bubbleOther: "#1E1E1E",
};

// MAIN THEME OBJECT
export const Theme = {
  mode: colorScheme,
  colors: colorScheme === "dark" ? DarkColors : LightColors,

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },

  text: {
    title: {
      fontSize: 24,
      fontWeight: "bold" as const,
    },
    subtitle: {
      fontSize: 16,
      color: colorScheme === "dark" ? DarkColors.subtext : LightColors.subtext,
    },
    message: {
      fontSize: 16,
    },
  },

  card: {
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  chatBubble: {
    me: {
      backgroundColor:
        colorScheme === "dark"
          ? DarkColors.bubbleMe
          : LightColors.bubbleMe,
      alignSelf: "flex-end" as const,
      padding: 12,
      borderRadius: 20,
      marginVertical: 6,
      maxWidth: "80%" as const,
    },
    other: {
      backgroundColor:
        colorScheme === "dark"
          ? DarkColors.bubbleOther
          : LightColors.bubbleOther,
      alignSelf: "flex-start" as const,
      padding: 12,
      borderRadius: 20,
      marginVertical: 6,
      maxWidth: "80%" as const,
    },
  },

  container: {
    flex: 1,
    padding: 16,
  },
};
