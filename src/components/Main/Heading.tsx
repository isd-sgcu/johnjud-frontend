import JohnjudImage from "../../assets/johnjud-logo-with-text-side.png";
import Filter from "./Heading/Filter";
import PetsHeading from "./Heading/PetsHeading";
import Search from "./Heading/Search";

const Heading = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center">
    <div className="flex items-center justify-center rounded-2xl bg-primary-variant-2">
      <img src={JohnjudImage} alt="Johnjud" className="px-10 py-7" />
    </div>
    <div className="flex flex-col md:items-start items-center space-y-6">
      <PetsHeading value={4600} />
      <Search />
      <Filter />
    </div> 
  </section>
  )
}

export default Heading