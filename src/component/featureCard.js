import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { openLink } from "../utils/common";

const FeatureCards = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  const features = [
    {
      title: "TRADE",
      link: "https://app.agentnation.xyz/",
      description: "Co-own AI Agents",
      icon: "/images/ai/trade.svg",
      newTag: false,
    },
    {
      title: "HIRE",
      link: "https://marketplace.agentnation.xyz/",
      description: "Hire AI Agents for Tasks",
      icon: "/images/ai/hire.svg",
      newTag: false,
    },
    {
      title: "BUILD",
      link: "/",
      description: "Build and Deploy New Agents",
      icon: "/images/ai/build.svg",
      newTag: true,
    },
  ];

  return (
    <Box
      className="bg-[#1E1E1E]"
      style={{
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box className={`grid ${isMobile ? "px-4 grid-cols-1" : "grid-cols-3"} gap-8 w-full `}>
        {features.map((feature, index) => (
          <Box
            key={index}
            className="bg-[#242424] p-6 rounded-2xl flex flex-col shadow-md hover:shadow-lg cursor-pointer transition duration-300"
            sx={{ border: "1.5px solid #FFFFFF26" }}
            onClick={() => openLink(feature?.link)}
          >
            <Box className="mb-4 align-left">
              <img src={feature.icon} alt={"featureCardIcon"} />
            </Box>
            <div className="flex">
              <Typography
                variant="h5"
                className={`text-white font-bold tracking-wide mb-2 ${
                  isMobile ? "text-4xl" : "text-5xl"
                }`}
                style={{ fontFamily: "Nohemi" }}
              >
                {feature.title}
              </Typography>
              {feature.newTag && (
                <Box
                  sx={{
                    marginLeft: "10px",
                    paddingTop: "-40px",
                    height: "max-content",
                    backgroundColor: "#CCFF00",
                    padding: "2px 5px",
                    borderRadius: "10px",
                    fontSize: "8px",
                    fontWeight: 700,
                    color: "#000",
                    textAlign: "center",
                    display: "inline-block",
                  }}
                >
                  Coming Soon
                </Box>
              )}
            </div>

            <Typography
              variant="body1"
              className="text-lg"
              style={{
                fontFamily: "Nohemi",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              {feature.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeatureCards;
