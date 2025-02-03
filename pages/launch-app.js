import { default as React } from "react";
import { useMediaQuery } from "@mui/system";
import KeyboardSimulator from "../src/component/KeyboardSimulator";
import { parseCookies } from "nookies";

const Index = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div>
      <KeyboardSimulator />
    </div>
  );
};

export default Index;

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);
  return {
    props: {
      asLayout: "EmptyLayout",
    },
  };
  // if (cookies.isLaunched == "true") {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }
  // return {
  //   props: {
  //     asLayout: "EmptyLayout",
  //   },
  // };
}
