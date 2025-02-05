import { Box, Container } from "@mui/material";
import { default as React, useEffect, useState } from "react";
import AIEngines from "../src/component/AIEngine";
import HowItWorks from "../src/component/HowItWork";
// import JoinTheRevolutions from '../src/component/JoinTheRevolutions';
import LaunchApp from "../src/component/LaunchApp";
import { parseCookies } from "nookies";

import Banner from "../src/component/banner";
import FeatureCards from "../src/component/featureCard";
import AIUniverseGrid from "../src/component/AIUniverseGrid";
import { useMutation } from "react-query";
import fetcher from "../src/dataProvider";
import { useMediaQuery } from "@mui/system";
import { FANTV_API_URL } from "../src/constant/constants";
import KeyboardSimulator from "../src/component/KeyboardSimulator";

const Index = () => {
  const [aiAgentData, setAIAgentData] = useState();
  const { mutate: getHomeFeedData } = useMutation(
    () => fetcher.get(`${FANTV_API_URL}/v1/homefeed`, {}, "raw"),
    {
      onSuccess: (response) => {
        if (!response?.data?.errorCode) {
          setAIAgentData(response?.data);
          setError(false);
        }
      },
      onError: (error) => {},
    }
  );

  useEffect(() => {
    getHomeFeedData();
  }, []);

  const isMobile = useMediaQuery("(max-width:768px)");

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
          <Banner data={aiAgentData} />
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
          {/* <Box
            sx={{
              marginTop: isMobile ? "10px" : "120px",
              marginBottom: "40px",
            }}
          >
            <JoinTheRevolutions />
          </Box> */}
        </Container>
        <AIUniverseGrid data={aiAgentData} />
        <Box sx={{ marginTop: isMobile ? "10px" : "120px" }}>
          <LaunchApp />
        </Box>
      </Box>
    </div>
  );
};

export default Index;

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);
  // if (cookies.isLaunched !== "true") {
  //   return {
  //     redirect: {
  //       destination: "/launch-app",
  //       permanent: false,
  //     },
  //   };
  // }
  return { props: {} };
}
