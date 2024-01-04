import catImage from "@/assets/main/catImage.svg";
import johnjudLogo from "@/assets/main/johnjudLogo.svg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full shrink-0 flex-col justify-between bg-primary pt-7 xl:pt-16">
        <div className="xl:flex xl:flex-row-reverse xl:justify-center xl:gap-5">
          <img
            className="mx-auto h-52 w-52 xl:mx-0"
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

        <div className="flex items-center justify-center align-middle">
          <button
            className="position center border-secondary bg-secondary absolute mb-20 mt-80 cursor-pointer 
                rounded-2xl border border-solid px-32
                py-2.5 text-2xl font-semibold
                text-white opacity-80 hover:ease-in"
          >
            กดดูเลย
          </button>
          <img src={catImage} alt="Cat Image" className="mx-auto" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;

// This Components Doesn't use Layout
