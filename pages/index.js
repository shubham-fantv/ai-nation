import { Box, Container } from "@mui/material";
import { default as React } from "react";
import AIEngines from "../src/component/AIEngine";
import HowItWorks from "../src/component/HowItWork";
import JoinTheRevolutions from "../src/component/JoinTheRevolutions";
import LaunchApp from "../src/component/LaunchApp";
import Banner from "../src/component/banner";
import FeatureCards from "../src/component/featureCard";

const Index = () => {
  return (
    <div>
      <Box sx={{ width: "100%", height: "auto" }}>
        <Container
          sx={{
            width: "auto",
            marginTop: "90px",
            paddingLeft: "10px !important",
            paddingRight: "10px !important",
          }}
          maxWidth={false}
        >
          <Banner />
        </Container>
        <Container
          sx={{
            maxWidth: "1296px",
            width: "auto",
            marginTop: "90px",
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
          }}
          maxWidth={false}
        >
          <FeatureCards />
          <AIEngines />
          <HowItWorks />
          <Box sx={{ marginTop: "120px" }}>
            <JoinTheRevolutions />
          </Box>
        </Container>
        <Box sx={{ marginTop: "120px" }}>
          <LaunchApp />
        </Box>
      </Box>
    </div>
  );
};

export default Index;
