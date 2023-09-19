/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        nunito: ["Nunito"]
      },
      fontSize: {
        12: '12px',
        14: '14px',
        15: '15px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        28: '28px',
        32: '32px',
        34: '34px',
        36: '36px',
      },
      colors: {
        bgDark: "#282830",
        dark: "#33333B",
        darkHard: "#3D3D44",
        darkPrimary: "#48484F",
        light: "#2F2F36",
        grayMedium: "#83888D",
        gradBlue: "#71C9EC",
        grayLight: "#969696",
        gray: "#E0E0E0",
        graySecondary: "#D0D0D0",
        greenDark: "#24B26B",
        greenLight: "#31D482",
        blueDark: "#0B1544",
        bluePrimary: "#4267B2",
        redDark: "#E94D3F",
        goldenGrad: "#B9962F",
        purpleGrad: "#833FB4",
        greenGradLight: "#16BF5D",
        greenGradDark: "#0A9141",
        blueGradLight: "rgba(113, 201, 236, 0.90)",
        blueGradDark: "rgba(131, 63, 180, 0.90)"
      },
      borderRadius: {
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        20: "20px"
      },
      margin: {
        8: '8px',
        11: "11px",
        12: "12px",
        14: "14px",
        16: "16px",
        32: "32px",
        '5per': '5%',
      },
      padding: {
        11: "11px",
        12: "12px",
        16: "16px",
        32: '32px',
        24: '24px',
        48: '48px',
        '4per': '4%',
        '5per': '5%',
        '8per': '8%',
      },
      width: {
        130: '130px',
        200: '200px',
        240: '240px',
      },
      height: {
        32: '32px',
        48: '48px',
        300: '300px',
        400: '400px',
      },
      maxWidth: {
        467: '467px'
      },
    },
  },
  plugins: [],
};