import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import styles from "./styles";

const JoinTheRevolutions = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Box>
      <Typography sx={styles.title} variant="h1">
        Join the revolution
      </Typography>

      <Box sx={styles.wrapper}>
        <Box
          style={{
            background: isMobile ? "none" : "center/contain no-repeat url(/images/tokenPoolBg.png)",
            backgroundSize: "cover",
          }}
          sx={styles.imageContainer}
        >
          <Box sx={{ textAlign: "center", width: isMobile ? "100%" : "400px" }}>
            <Box sx={styles.topLeftPadding}>
              <Typography variant="h1">2024 q1</Typography>
            </Box>
          </Box>
          <Box sx={styles.cardContainer}>
            <Box sx={styles.cardWrapContainer}>
              <Box sx={styles.container}>
                <img src="/images/ai/star.svg" width="20px" height="20px" />
                <p>Creator Tipping</p>
              </Box>
              <Box sx={styles.container}>
                <img src="/images/ai/star.svg" width="20px" height="20px" />
                <p>Live Streaming Launch</p>
              </Box>
            </Box>
            <Box sx={styles.cardWrapContainer}>
              <Box sx={styles.container}>
                <img src="/images/ai/star.svg" width="20px" height="20px" />
                <p>Engagement Points</p>
              </Box>
              <Box sx={styles.container}>
                <img src="/images/ai/star.svg" width="20px" height="20px" />
                <p>Content Nodes - Testnet</p>
              </Box>
            </Box>
            <Box sx={styles.cardWrapContainer}>
              <Box sx={styles.container}>
                <img src="/images/ai/star.svg" width="20px" height="20px" />
                <p>Game Zone</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinTheRevolutions;
