const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "510px",
    margin: "auto",
    aspectRatio: "1200 / 526",
    marginBottom: "120px",
    marginTop: "40px",

    "@media (max-width: 767px)": {
      aspectRatio: "0",
      height: "100%",
      width: "100%",
      marginBottom: "20px",
    },
  },
  boxContainer: {
    marginTop: "24px",
    marginLeft: "24px",
    "@media (max-width: 767px)": {
      marginLeft: "0px",
    },
  },
  topLeftPadding: {
    paddingTop: "64px",
    paddingLeft: "32px",
    paddingRight: "32px",
  },
  topRightPadding: {
    paddingTop: "64px",
    paddingLeft: "64px",
    paddingRight: "64px",
  },

  cardWrapContainer: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    "@media (max-width:767px)": {
      flexWrap: "wrap",
      marginTop: "16px",
      marginBottom: "16px",
    },
  },
  container: {
    display: "flex",
    height: "120px",
    padding: "20px",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    background: "rgba(255, 255, 255, 0.3)",
    boxShadow: "0px 2px 0px 0px rgba(255, 255, 255, 0.25) inset",
    display: "block",
    width: "45%",
    padding: "24px",
    borderRadius: "32px",
    margin: "8px",
    "& p": {
      fontSize: "px",
      fontWeight: "600",
      lineHeight: "18px",
      color: "#1E1E1E",
      paddingTop: "10px",
    },
    "& h4": {
      color: "#C102C1",
      fontFamily: "Nohemi",
      fontSize: "36px",
      lineHeight: "18px",
      fontWeight: "600",
    },
    "@media(max-width:767px)": {
      width: "100%",
      marginTop: "10px",
      marginBottom: "10px",
      flexDirection: "column",
      "& p": {
        fontSize: "32px",
        fontWeight: "700",
        fontFamily: "Nohemi",
        lineHeight: "24px",
        color: "#1E1E1E",
      },
      "& h4": {
        color: "#C102C1",
        fontFamily: "Nohemi",
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: "24px",
      },
    },
  },
  imageStyle: {
    "& img": {
      maxWidth: "none",
      "@media (max-width: 767px)": {
        maxWidth: "187px",
        float: "right",
      },
    },
  },
  imageContainer: {
    position: "relative",
    borderRadius: "12px",
    height: "100%",
    width: "100%",
    display: "flex",
    "@media (max-width: 767px)": {
      display: "block",
      height: "100%",
    },
    "& h1": {
      color: "rgba(0, 0, 0, 1)",
      fontFamily: "Bricolage Grotesque",
      fontSize: "64px",
      fontWeight: "600",
      fontStyle: "normal",
      lineHeight: "51.2px",
    },
    "& h5": {
      color: "rgba(0, 0, 0, 0.7)",
      fontFamily: "Nohemi",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500",
      paddingTop: "16px",
      textTransform: "uppercase",
    },
  },
  marginLeft24: {
    marginLeft: "24px",
    "@media (max-width: 767px)": {
      marginLeft: "0px",
    },
  },
  noteTextStyles: {
    paddingTop: "97px",
    "@media(max-width:767px)": {
      paddingTop: "16px",
    },
  },
  cardContainer: {
    width: "750px",
    borderRadius: "40px",
    textAlign: "left",
    padding: "20px",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    "@media(max-width:767px)": {
      width: "100%",
      padding: "0px",
      marginTop: "16px",
      border: `1px solid rgba(255, 255, 255, 0.85)`,
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.16) 100%)",
      boxShadow: "0px 6px 12px 0px rgba(30, 30, 30, 0.12)",
      backdropFilter: "blur(14px)",
    },
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Bricolage Grotesque",
    fontSize: "32px",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: "41.2px",
  },
};

export default styles;