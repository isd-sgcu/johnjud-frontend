import { useMemo } from "react";
import { useLocation } from "react-router-dom";

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
    } else if (pathname.includes("/no-logo")) {
      return {
        color: "bg-primary",
        logo: "",
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