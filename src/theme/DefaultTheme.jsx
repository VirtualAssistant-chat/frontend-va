import { createTheme } from "@mui/material";

export const shades = {
  primary: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },
  secondary: {
    100: "#f7ccd2",
    200: "#ef99a4",
    300: "#e66677",
    400: "#de3349",
    500: "#d6001c",
    600: "#ab0016",
    700: "#800011",
    800: "#56000b",
    900: "#2b0006",
  },
  neutral: {
    100: "#f5f5f5",
    200: "#ecebeb",
    300: "#e2e1e1",
    400: "#d9d7d7",
    500: "#cfcdcd",
    600: "#a6a4a4",
    700: "#7c7b7b",
    800: "#535252",
    900: "#292929",
  },
};

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#625DF5",
      contrastText: "#FCFCFF",
    },
    primaryDark: {
      main: "#0E0F34",
      contrastText: "#FCFCFF",
    },
    background: {
      main: "#FBFBFE",
      faded: "rgba(255, 255, 255, 0.49)",
      hoverItem: "#E7E8EC",
      selectedItem: "#D2D1E0",
    },
    grey: {
      main: "#BFC2CA",
      dark: "#969BAC",
      light: "#E7E8EC",
    },
    white: {
      main: "#FFFFFF",
    },
    selectedOption: {
      main: "#E8E7FE",
    },
    text: {
      primary: "#15163D",
      secondary: "#FCFCFF",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1_64_v2: {
      fontSize: "7.69vmin",
      fontWeight: "bold",
      lineHeight: "7.71vmin",
      marginBottom: "0px",
      marginTop: "0px",
      width: "60%",
    },
    h1_26: {
      fontWeight: 800,
      fontSize: "39px",
      lineHeight: "43px",
      fontStyle: "normal",
    },
    h2_20: {
      fontWeight: 600,
      fontSize: "30px",
      lineHeight: "34px",
      fontStyle: "normal",
    },
    h3_18: {
      fontWeight: 500,
      fontSize: "27px",
      lineHeight: "31px",
      fontStyle: "normal",
    },
    h4_16: {
      fontWeight: 500,
      fontSize: "19.2px",
      lineHeight: "28px",
      fontStyle: "normal",
    },
    h5_15: {
      fontWeight: 300,
      fontSize: "22.5px",
      lineHeight: "26.5px",
      fontStyle: "normal",
    },
    h6_14: {
      fontWeight: 300,
      fontSize: "16.8px",
      lineHeight: "25px",
      fontStyle: "normal",
    },
    h7_12: {
      fontWeight: 300,
      fontSize: "18px",
      lineHeight: "22px",
      fontStyle: "normal",
    },
    h8_10: {
      fontWeight: 500,
      fontSize: "15px",
      lineHeight: "19px",
      fontStyle: "normal",
    },
    h9_26: {
      fontWeight: 500,
      fontSize: "39px",
      lineHeight: "43px",
      fontStyle: "normal",
    },
    h1_64: {
      fontWeight: 700,
      fontSize: "96px",
      lineHeight: "100px",
      fontStyle: "normal",
    },
    h2_32: {
      fontWeight: 700,
      fontSize: "48px",
      lineHeight: "52px",
      fontStyle: "normal",
    },
    h3_28: {
      fontWeight: 700,
      fontSize: "42px",
      lineHeight: "46px",
      fontStyle: "normal",
    },
    title_20: {
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: "34px",
      fontStyle: "normal",
    },
    p_16: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "28px",
      fontStyle: "normal",
    },
    mini_bold_14: {
      fontWeight: 700,
      fontSize: "21px",
      lineHeight: "25px",
      fontStyle: "normal",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          padding: "4px",
        },
      },
    },
  },
  rectangle: {
    shadow: {
      boxShadow: "6px 6px 18px 0 rgba(43, 45, 115, 0.15)",
    },
  },
});

export default defaultTheme;
