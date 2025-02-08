import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import styles from "./styles";
import { openLink } from "../../utils/common";

const LaunchApp = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  const mobileStyles = {
    wrapper: {
      padding: isMobile ? "20px" : styles.wrapper.padding,
    },
    imageContainer: {
      minHeight: isMobile ? "300px" : styles.imageContainer.minHeight,
      padding: isMobile ? "20px 10px" : styles.imageContainer.padding,
    },
    content: {
      maxWidth: isMobile ? "100%" : styles.content.maxWidth,
      padding: isMobile ? "0" : styles.content.padding,
    },
    typography: {
      fontSize: isMobile ? "2rem" : "3.75rem",
      lineHeight: isMobile ? "2.5rem" : "4.5rem",
      marginBottom: isMobile ? "1rem" : "2rem",
    },
    noteText: {
      fontSize: isMobile ? "1rem" : "1.5rem",
      marginBottom: isMobile ? "1.5rem" : "2rem",
    },
    button: {
      width: isMobile ? "100%" : "auto",
      fontSize: isMobile ? "1rem" : "1.25rem",
      padding: isMobile ? "10px 20px" : "12px 24px",
      background: "white !important",
      color: "black !important",
    },
  };

  return (
    <Box sx={{ ...styles.wrapper, ...mobileStyles.wrapper }}>
      <Box
        style={{
          background: isMobile
            ? "none"
            : "center/contain no-repeat url(/images/ai/launch-app-bg.png)",
        }}
        sx={{ ...styles.imageContainer, ...mobileStyles.imageContainer }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "100%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Box sx={{ ...styles.content, ...mobileStyles.content }}>
            <Typography variant="h1" className="font-bold text-white text-4xl sm:text6xl">
              The Ultimate AI Agent Platform
            </Typography>
            <Typography
              variant="h5"
              className="font-extrabold text-white"
              sx={{ ...styles.noteTextStyles, ...mobileStyles.noteText }}
            >
              Start earning and owning new Agents now
            </Typography>
            <Button
              variant="contained"
              className={`max-w-[170px] text-sm font-bold text-black rounded-xl`}
              style={{
                fontWeight: "500",
                fontSize: "16px",
                fontFamily: "Nohemi",
                borderRadius: "12px",
                boxShadow: "0px 6px 12px 0px #1E1E1E1F",
                border: "1px solid #FFF",
                alignItems: "center",
                justifyContent: "center",
                height: "40px",
                cursor: "pointer",
                background: "#FFF",
                color: "#000000",
              }}
              sx={mobileStyles.button}
              onClick={() => openLink(process.env.NEXT_PUBLIC_REDIRECT_URL)}
            >
              Launch App
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LaunchApp;
