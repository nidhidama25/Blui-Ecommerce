function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgb(var(${variableName}))`;
    }
  };
}
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarygray: "#f8f8f8",
        qblack: "rgb(var(--secondary-color))",
        qyellow: "rgb(var(--primary-color))",
        qyellowlow: withOpacity("--primary-color"),
        qred: "#EF262C",
        qgray: "#797979",
        qblacktext: "#1D1D1D",
        qgraytwo: "#8E8E8E",
        "qgray-border": "#EFEFEF",
        "qblue-white": "#CBECFF",
        "qh2-green": "#2D6F6D",
        "custom-blue": "#0B3B72",
        gg: "rgba(0, 0, 0, 0.65)",
        trend: "#OB3B72",
      },
      scale: {
        60: "0.6",
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "custom-image": "url('/public/assets/images/brand-10.pngs')",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["focus-within"],
      borderColor: ["last"],
      space: ["responsive", "direction"],
    },
  },
};
