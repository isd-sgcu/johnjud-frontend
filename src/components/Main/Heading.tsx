import JohnjudImage from "../../assets/johnjud-logo-with-text-side.png";
import Filter from "./Heading/Filter";
import PetsHeading from "./Heading/PetsHeading";
import Search from "./Heading/Search";

const Heading = () => {
  return (
    <section className="flex flex-col items-center justify-center md:flex-row md:space-x-9">
      <div className="flex items-center justify-center rounded-2xl bg-primary-variant-2 md:w-6/12 ">
        <img src={JohnjudImage} alt="Johnjud" className="px-10 py-7" />
      </div>
      <div className="flex w-full flex-col items-center space-y-6 md:items-start">
        <PetsHeading value={4600} />
        <Search />
        <Filter />
      </div>
    </section>
  );
};

export default Heading;
