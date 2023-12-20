const primary = {
  100: "#5061FC",
  200: "#E0E3FF",
  white: "#FFFFFF",
};

const secondary = {
  100: "#F6F5FC",
  200: "#BCBCBC",
  900: "#222222",
};

export const colors = {
  primary: { ...primary },
  secondary: { ...secondary },
} as const;
