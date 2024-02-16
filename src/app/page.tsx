import catImage from "@/assets/main/catImage.svg";
import johnjudLogo from "@/assets/main/johnjudLogo.svg";
import Button from "@/components/Button";
import GameLayout from "@/layouts/GameLayout";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="relative flex min-h-[70svh] w-full shrink-0 flex-col justify-between bg-primary pt-7 xl:pt-16">
      <div className="xl:flex xl:flex-row-reverse xl:justify-center xl:gap-5">
        <img
          className="mx-auto h-48 w-48 xl:mx-0"
          src={johnjudLogo}
          alt="Johnjud Logo"
        />
        <div
          className="mt-1.5 text-center uppercase text-white 
                xl:flex xl:flex-col xl:content-end"
        >
          <p
            className="py-2.5 text-4xl font-bold xl:flex xl:flex-1
                    xl:items-center xl:py-0 xl:align-middle xl:text-[156px]"
          >
            johnjud
          </p>
          <p className="py-1 text-base font-medium xl:ml-96 xl:text-2xl">
            Best Option - Adoption
          </p>
        </div>
      </div>
      <img src={catImage} alt="Cat Image" className="mx-auto" />

      <div className="relative flex items-center justify-center">
        <div className="absolute bottom-16 left-1/2 w-full -translate-x-1/2 transform px-6 lg:bottom-8 lg:w-auto">
          <Link to={"/home"}>
            <Button
              text="กดดูเลย"
              variant={"accent-red"}
              className=" w-full 
                cursor-pointer rounded-2xl py-2.5 text-2xl
                font-semibold text-white opacity-80
                hover:ease-in lg:px-32"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;

export const Layout = GameLayout;
