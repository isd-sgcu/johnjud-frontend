import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import logoPrimary from "../assets/navbar/logoPrimary.svg";
import logoSecondary from "../assets/navbar/logoSecondary.svg";

const usePathStyle = () => {
  const pathname = useLocation().pathname;

  const style = useMemo(() => {
    if (pathname.includes("/admin")) {
      return {
        color: "bg-accent-red",
        download: "primary",
        share: "accent-red",
        logo: logoPrimary,
      };
    } else if (pathname.includes("/horo")) {
      return {
        color: "bg-accent-purple",
        download: "accent-purple",
        share: "accent-yellow",
        logo: logoSecondary,
      };
    } else {
      return {
        color: "bg-primary",
        download: "primary",
        share: "accent-red",
        logo: logoPrimary,
      };
    }
  }, [pathname]);

  return style;
};

export default usePathStyle;
