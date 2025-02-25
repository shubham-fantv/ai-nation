import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import { default as React } from "react";
import Marquee from "react-fast-marquee";
import TextReveal from "../TextRevel";
import styles from "./styles";
import { openLink } from "../../utils/common";

const Banner = ({ data }) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box
      className={"min-h rounded-t-[48px] rounded-b-none"}
      sx={{
        background: isMobile
          ? "center/contain no-repeat url(/images/ai/bannerMobileBg.png)"
          : "center/contain no-repeat url(/images/ai/bannerBg.png)",
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ ...styles.landingPage }} className={isMobile ? "p-4" : "p-0"}>
        <Container sx={styles.containerStyle} maxWidth={false}>
          <Box sx={styles.mainPage}>
            <Box sx={styles.middleSection}>
              <Box
                sx={{
                  ...styles.middleLeftSection,
                  ...(isMobile && {
                    width: "100%",
                    textAlign: "center",
                    padding: "2rem 1rem",
                  }),
                }}
                className="animate__animated animate__fadeInLeft animate__delay-0.3s"
              >
                <Box sx={{ display: "block" }}>
                  {isMobile ? (
                    <>
                      <TextReveal delay={0.5}>
                        <Typography
                          variant="h1"
                          style={{
                            fontFamily: "Tiny",
                            color: "#1E1E1E",
                            fontSize: "44px",
                            fontStyle: "normal",
                            textTransform: "uppercase",
                            textAlign: "center",
                            fontWeight: "800",
                            lineHeight: "44px",
                            letterSpacing: "-1.76px",
                          }}
                        >
                          Nation state for AI AGents
                        </Typography>
                      </TextReveal>
                    </>
                  ) : (
                    <>
                      <TextReveal delay={0.5}>
                        <Typography
                          variant="h1"
                          style={{
                            fontFamily: "Tiny",
                            color: "#1E1E1E",
                            fontSize: "80px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "80px",
                            letterSpacing: "-4px",
                            textTransform: "uppercase",
                          }}
                        >
                          Nation state for
                        </Typography>
                      </TextReveal>
                      <TextReveal delay={0.8}>
                        <Typography
                          variant="h1"
                          style={{
                            fontFamily: "Tiny",
                            color: "#1E1E1E",
                            fontSize: "80px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "80px",
                            letterSpacing: "-4px",
                            textTransform: "uppercase",
                          }}
                        >
                          AI AGents
                        </Typography>
                      </TextReveal>
                    </>
                  )}
                </Box>
                <Typography
                  variant="h2"
                  className="mt-3 "
                  sx={
                    isMobile
                      ? {
                          fontSize: "16px",
                          fontFamily: "Nohemi",
                          fontWeight: "500",
                          lineHeight: "16px",
                        }
                      : {}
                  }
                >
                  Discover, build and co-own AI agents
                </Typography>
                <Button
                  variant="contained"
                  className={`px-8 py-2 max-w-[140px] text-sm font-bold text-black rounded-xl mt-3`}
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    fontFamily: "Nohemi",
                    borderRadius: "12px",
                    margin: isMobile ? "auto" : "16px 0px",
                    boxShadow: "0px 6px 12px 0px #1E1E1E1F",
                    border: "1px solid #FFF",
                    paddingInline: isMobile ? "20px" : "0px 0px",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "40px",
                    textTransform: "none",
                    display: "flex",
                    cursor: "pointer",
                    background: "#FFF",
                    color: "#000000",
                  }}
                  sx={isMobile ? { display: "block", margin: "0 auto", fontWeight: "700" } : {}}
                  onClick={() => openLink(process.env.NEXT_PUBLIC_REDIRECT_URL)}
                >
                  Launch App
                </Button>
              </Box>

              <Box
                sx={{
                  ...styles.middleRightSection,
                }}
              >
                <img src="/images/socialiteBanner.png" alt={"banner"} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <div className="w-full">
        <Typography
          className={`mb-6 font-bold font-[nohemi] text-center ${
            isMobile ? "text-2xl" : "text-4xl"
          }`}
          sx={{
            fontWeight: "700 !important",
            fontFamily: "Nohemi !important",
            fontSize: "32px",
          }}
        >
          Featured Agents
        </Typography>
        <Box className="grid w-full gap-10 bg-gradient-to-t from-black via-black/50 to-transparent">
          <div className="w-[95%] mx-2 justify-items-start items-center *:w-full grid grid-cols-0 md:grid-cols-0 lg:grid-cols-0 gap-10">
            <Marquee play={false} pauseOnHover direction="left">
              {data?.data?.topBarAgents?.map((item, index) => (
                <a href={item?.redirectionUrl} rel="noreferrer" key={index}>
                  <Box
                    className={`text-center transition duration-300 rounded-lg hover:shadow-md ${
                      isMobile ? "p-4" : "p-10"
                    }`}
                  >
                    <img
                      src={item?.profilePic}
                      alt="Agent"
                      className={`mx-auto mb-2 self-end rounded-md w-20 h-20`}
                    />
                    <Box className="flex flex-row self-end  justify-center gap-2 text-center align-center">
                      <p
                        className={` font-bold self-end text-white ${
                          isMobile ? "text-sm leading-[18px]" : "text-[20px] leading-[20px]"
                        }`}
                      >
                        {item?.name}
                      </p>
                      <p
                        className={`font-thin self-end text-white leading-[14px] ${
                          isMobile ? "text-xs" : "text-sm"
                        }`}
                      >
                        (M cap -
                      </p>
                      <p
                        className={`font-thin self-end text-[#D2D2D2] leading-[14px] ${
                          isMobile ? "text-xs" : "text-sm"
                        }`}
                      >
                        {item?.marketCap})
                      </p>
                    </Box>
                  </Box>
                </a>
              ))}
            </Marquee>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default Banner;
