import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import logoPrimary from "../assets/navbar/logoPrimary.webp";
import logoSecondary from "../assets/navbar/logoSecondary.svg";

const usePathStyle = () => {
  const pathname = useLocation().pathname;

  const style = useMemo(() => {
    if (pathname.includes("/admin")) {
      return {
        color: "bg-accent-red",
        logo: logoPrimary,
        theme: "#C81425",
      };
    } else if (pathname.includes("/horo")) {
      return {
        color: "bg-accent-purple",
        logo: logoSecondary,
        theme: "#3D0D40",
      };
    } else {
      return {
        color: "bg-primary",
        logo: logoPrimary,
        theme: "#08878E",
      };
    }
  }, [pathname]);

  return style;
};

export default usePathStyle;
