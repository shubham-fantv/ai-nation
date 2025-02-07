import { Box, Button, Drawer } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useWallet } from "@suiet/wallet-kit";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useIsMobile from "../../hooks/useIsMobile";
import { setSignWalletPopupOpen } from "../../redux/slices/layout";
import { formatWalletAddress, openLink } from "../../utils/common";
import WalletConnectModal from "./WalletConnectModal";
import styles from "./style";
import MenuIcon from "@mui/icons-material/Menu";

const LogOutNavItem = [
  {
    path: "/airdrop",
    title: "Airdrop ",
    icon: "/images/fantv/menu/reward.svg",
    newTag: false,
  },
  {
    path: "/",
    title: "Whitepaper ",
    icon: "/images/fantv/menu/reward.svg",
    newTag: true,
  },
];

const RevampHeader = ({ app }) => {
  const wallet = useWallet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [walletAnchorEl, setWalletAnchorEl] = useState(null);

  const layoutData = useSelector((state) => state.layout);
  const [airdropPoints, setAirdropPoints] = useState(layoutData.airdropPoints);

  useEffect(() => {
    setAirdropPoints(layoutData.airdropPoints);
  }, [layoutData?.airdropPoints]);

  useEffect(() => {
    setWalletAnchorEl(layoutData.isSignWalletPopupOpen);
  }, [layoutData?.isSignWalletPopupOpen]);

  const handleWalletClick = (event) => {
    openLink(process.env.NEXT_PUBLIC_REDIRECT_URL);
  };

  const handleWalletClose = () => {
    setWalletAnchorEl(null);
    dispatch(setSignWalletPopupOpen(false));
  };

  const router = useRouter();
  const dispatch = useDispatch();

  const isLoggedIn = false;
  const isMobile = useIsMobile(app?.deviceParsedInfo?.device?.isMobile);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsMenuOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        background: "white",
        backdropFilter: "blur(40px)",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        display="flex"
        sx={{ gap: 2, alignItems: "center", padding: 2 }}
        onClick={toggleDrawer(false)}
      >
        <img style={{ height: "32px", width: "32px" }} src="/images/close.svg" />
      </Box>
      <Box sx={styles.mobileScroll}>
        <Box
          display="block"
          sx={{
            gap: "10px",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Box sx={styles.pointContainer}>
            <img
              style={{ width: "24px", height: "24px", marginRight: "8px" }}
              src="/images/seasonIcon.png"
              alt="icon"
            />
            <Typography
              variant="h6"
              sx={{
                color: "#000000",
                fontFamily: "Nohemi",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {airdropPoints}
            </Typography>
          </Box>
        </Box>
        {LogOutNavItem?.map((item, i) => (
          <Link key={i} prefetch={false} href={item?.path} passHref>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding={2}
              borderBottom="1px solid #e0e0e0"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Typography
                variant="h6"
                className="nav-item"
                sx={{
                  color: router.pathname === item?.path ? "#000000" : "#000000",
                  fontFamily: "Nohemi",
                  fontSize: "16px",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item?.title}
                {item.newTag && (
                  <Box
                    sx={{
                      marginLeft: "10px",
                      backgroundColor: "rgb(225, 64, 132)",
                      padding: "2px 5px",
                      borderRadius: "10px",
                      fontSize: "8px",
                      fontWeight: 700,
                      color: "rgb(255, 255, 255)",
                      textAlign: "center",
                      display: "inline-block",
                    }}
                  >
                    Coming Soon
                  </Box>
                )}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <Box sx={styles.navbar} onClick={(e) => e.stopPropagation()}>
        <Box className="nav-container">
          <Box display="flex">
            <Box
              className="nav-logo"
              // onClick={() => window?.open(``, '_blank', 'noopener,noreferrer')}
            >
              {isMobile ? (
                <Box className="fan__TigerMobileLogo">
                  <img
                    src={"/images/ai/aiNationLogo.png"}
                    style={{ height: "40px", width: "180px" }}
                    alt="mobile AI Nation logo"
                    loading="eager"
                    decoding="async"
                  />
                </Box>
              ) : (
                <Box className="fan__tigerDekstopLogo">
                  <img
                    src={"/images/ai/aiNationLogo.png"}
                    alt="AI Nation Logo"
                    width={200}
                    height={100}
                    style={{ height: "60px", width: "290px" }}
                    loading="eager"
                    decoding="async"
                  />
                </Box>
              )}
            </Box>
            {!isMobile && (
              <Box display="flex" sx={{ gap: 2, alignItems: "center" }}>
                <Box display={"flex"} height={"auto"} gap="20px" alignItems="center">
                  {/* <Typography
                    onClick={handleWalletClick}
                    variant="h6"
                    className="nav-item"
                    sx={{
                      color: "#FFF",
                      display: "flex",
                      fontFamily: "Nohemi",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Launch App
                  </Typography> */}
                  <Typography
                    onClick={handleWalletClick}
                    variant="h6"
                    className="nav-item"
                    sx={{
                      color: "#FFF",
                      display: "flex",
                      fontFamily: "Nohemi",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Trade
                  </Typography>
                  <Typography
                    onClick={() => openLink("https://marketplace.agentnation.xyz")}
                    variant="h6"
                    className="nav-item"
                    sx={{
                      color: "#FFF",
                      display: "flex",
                      fontFamily: "Nohemi",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Hire
                  </Typography>
                  {/* <Typography
                    variant="h6"
                    className="nav-item"
                    sx={{
                      color: "#FFF",
                      display: "flex",
                      fontFamily: "Nohemi",
                      fontSize: "16px",
                    }}
                  >
                    Hire
                  </Typography>
                  <Typography
                    variant="h6"
                    className="nav-item"
                    sx={{
                      color: "#FFF",
                      display: "flex",
                      fontFamily: "Nohemi",
                      fontSize: "16px",
                    }}
                  >
                    Build New Agent
                  </Typography> */}
                </Box>
              </Box>
            )}
          </Box>

          {isMobile && (
            <Box sx={styles.btnContainer} onClick={handleWalletClick}>
              <img
                src="/images/rocket-launch.svg"
                alt={"rocket-icon"}
                style={{ marginTop: "5px" }}
              />
              <Button
                sx={{
                  color: "#000000",
                  fontFamily: "Nohemi",
                  fontSize: "12px",
                }}
              >
                Launch App
              </Button>
            </Box>
          )}

          {/* {isMobile && (
            <Box sx={styles.profileNavBar} onClick={toggleDrawer(true)}>
              <MenuIcon
                style={{ color: 'white', marginTop: '8px', marginLeft: '10px' }}
              />
            </Box>
          )}

          <Drawer
            anchor='right'
            open={isMenuOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerContent}
          </Drawer> */}

          {!isMobile && (
            <Box display="flex" sx={{ gap: 2, alignItems: "center" }}>
              <Box display={"flex"} height={"auto"} gap="10px" alignItems="center">
                <Box sx={styles.btnContainer} onClick={handleWalletClick}>
                  <img src="/images/rocket-launch.svg" alt={"rocket-icon"} />
                  <Button
                    sx={{
                      color: "#000000",
                      fontFamily: "Nohemi",
                      fontSize: "12px",
                    }}
                  >
                    Launch App
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default memo(RevampHeader);
