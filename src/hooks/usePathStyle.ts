import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import logoPrimary from "../assets/navbar/logoPrimary.webp";
import logoSecondary from "../assets/navbar/logoSecondary.svg";

type PathStyle = {
  color: string;
  logo: string;
  theme: "primary" | "accent-red" | "accent-purple";
};

const usePathStyle = () => {
  const pathname = useLocation().pathname;

  const style: PathStyle = useMemo(() => {
    if (pathname.includes("/admin")) {
      return {
        color: "bg-accent-red",
        logo: logoPrimary,
        theme: "accent-red",
      };
    } else if (pathname.includes("/horo")) {
      return {
        color: "bg-accent-purple",
        logo: logoSecondary,
        theme: "accent-purple",
      };
    } else {
      return {
        color: "bg-primary",
        logo: logoPrimary,
        theme: "primary",
      };
    }
  }, [pathname]);

  return style;
};

export default usePathStyle;
