import useRefreshToken from "@/hooks/auth/useRefreshToken";
import usePathStyle from "@/hooks/usePathStyle";
import useAuthStore from "@/store/authStore";
import { useEffect, useState } from "react";
import DarkBackground from "./DarkBackground";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const { refreshToken, validateSession } = useAuthStore();
  const { mutate } = useRefreshToken();

  useEffect(() => {
    setIsShow(toggle);
  }, [toggle]);
  const style = usePathStyle();

  useEffect(() => {
    // if there is a refresh token and the session is not valid, refrest the token
    if (refreshToken && !validateSession()) {
      mutate({ refresh_token: refreshToken });
    }
  }, [refreshToken, validateSession]);

  return (
    <>
      <DarkBackground isExist={toggle} isShow={isShow} setToggle={setToggle} />
      <TopBar style={style} setToggle={setToggle} />
      <SideBar
        color={style.color}
        isShow={isShow}
        isExist={toggle}
        setToggle={setToggle}
      />
    </>
  );
};

export default Navbar;
