/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    

    extend: {
      borderColor: {
        DEFAULT: "rgba(113, 128, 150, 0.2)", // Define a cor padrão para as bordas
      },
      colors: {
        primary: {
          DEFAULT: "#9f7aea", // Lilás
          10: "rgba(159, 122, 234, 0.1)",
          20: "rgba(159, 122, 234, 0.2)",
          30: "rgba(159, 122, 234, 0.3)",
          40: "rgba(159, 122, 234, 0.4)",
          50: "rgba(159, 122, 234, 0.5)",
          60: "rgba(159, 122, 234, 0.6)",
          70: "rgba(159, 122, 234, 0.7)",
          80: "rgba(159, 122, 234, 0.8)",
          90: "rgba(159, 122, 234, 0.9)",
        },
        secondary: {
          DEFAULT: "#718096", // Cinza
          10: "rgba(113, 128, 150, 0.1)",
          20: "rgba(113, 128, 150, 0.2)",
          30: "rgba(113, 128, 150, 0.3)",
          40: "rgba(113, 128, 150, 0.4)",
          50: "rgba(113, 128, 150, 0.5)",
          60: "rgba(113, 128, 150, 0.6)",
          70: "rgba(113, 128, 150, 0.7)",
          80: "rgba(113, 128, 150, 0.8)",
          90: "rgba(113, 128, 150, 0.9)",
        },
        info: {
          DEFAULT: "#4299e1", // Azul
          10: "rgba(66, 153, 225, 0.1)",
          20: "rgba(66, 153, 225, 0.2)",
          30: "rgba(66, 153, 225, 0.3)",
          40: "rgba(66, 153, 225, 0.4)",
          50: "rgba(66, 153, 225, 0.5)",
          60: "rgba(66, 153, 225, 0.6)",
          70: "rgba(66, 153, 225, 0.7)",
          80: "rgba(66, 153, 225, 0.8)",
          90: "rgba(66, 153, 225, 0.9)",
        },
        danger: {
          DEFAULT: "#e53e3e", // Vermelho
          10: "rgba(229, 62, 62, 0.1)",
          20: "rgba(229, 62, 62, 0.2)",
          30: "rgba(229, 62, 62, 0.3)",
          40: "rgba(229, 62, 62, 0.4)",
          50: "rgba(229, 62, 62, 0.5)",
          60: "rgba(229, 62, 62, 0.6)",
          70: "rgba(229, 62, 62, 0.7)",
          80: "rgba(229, 62, 62, 0.8)",
          90: "rgba(229, 62, 62, 0.9)",
        },
        warning: {
          DEFAULT: "#ecc94b", // Amarelo
          10: "rgba(236, 201, 75, 0.1)",
          20: "rgba(236, 201, 75, 0.2)",
          30: "rgba(236, 201, 75, 0.3)",
          40: "rgba(236, 201, 75, 0.4)",
          50: "rgba(236, 201, 75, 0.5)",
          60: "rgba(236, 201, 75, 0.6)",
          70: "rgba(236, 201, 75, 0.7)",
          80: "rgba(236, 201, 75, 0.8)",
          90: "rgba(236, 201, 75, 0.9)",
        },
        success: {
          DEFAULT: "#48bb78", // Verde
          10: "rgba(72, 187, 120, 0.1)",
          20: "rgba(72, 187, 120, 0.2)",
          30: "rgba(72, 187, 120, 0.3)",
          40: "rgba(72, 187, 120, 0.4)",
          50: "rgba(72, 187, 120, 0.5)",
          60: "rgba(72, 187, 120, 0.6)",
          70: "rgba(72, 187, 120, 0.7)",
          80: "rgba(72, 187, 120, 0.8)",
          90: "rgba(72, 187, 120, 0.9)",
        },
        attention: {
          DEFAULT: "#ed8936", // Laranja
          10: "rgba(237, 137, 54, 0.1)",
          20: "rgba(237, 137, 54, 0.2)",
          30: "rgba(237, 137, 54, 0.3)",
          40: "rgba(237, 137, 54, 0.4)",
          50: "rgba(237, 137, 54, 0.5)",
          60: "rgba(237, 137, 54, 0.6)",
          70: "rgba(237, 137, 54, 0.7)",
          80: "rgba(237, 137, 54, 0.8)",
          90: "rgba(237, 137, 54, 0.9)",
        },
        ground: {
          DEFAULT: "#25293C", // Ground
          10: "rgba(37, 41, 60, 0.1)",
          20: "rgba(37, 41, 60, 0.2)",
          30: "rgba(37, 41, 60, 0.3)",
          40: "rgba(37, 41, 60, 0.4)",
          50: "rgba(37, 41, 60, 0.5)",
          60: "rgba(37, 41, 60, 0.6)",
          70: "rgba(37, 41, 60, 0.7)",
          80: "rgba(37, 41, 60, 0.8)",
          90: "rgba(37, 41, 60, 0.9)",
        },
        card: {
          DEFAULT: "#2F3349",
        },
        light: {
          DEFAULT: "#E1DEF5",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "640px", // Pequeno
        md: "768px", // Médio
        lg: "1024px", // Grande
        xl: "1280px", // Extra Grande
        "2xl": "1536px", // Extra Extra Grande
        lx: "1440px", // Personalizado: Extra Large
      },
    },
  },
  plugins: [],
};
