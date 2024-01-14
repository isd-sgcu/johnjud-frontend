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
        logo: logoPrimary,
      };
    } else if (pathname.includes("/horo")) {
      return {
        color: "bg-accent-purple",
        logo: logoSecondary,
      };
    } else {
      return {
        color: "bg-primary",
        logo: logoPrimary,
      };
    }
  }, [pathname]);

  return style;
};

export default usePathStyle;