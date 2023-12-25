import johnjudLogo from "../../assets/main/johnjudLogo.svg";
import catImage from "../../assets/main/catImage.svg";

const Main = () => {
    return (
        <div className="bg-primary w-full shrink-0 pt-7 xl:pt-16">
            <div className="xl:flex xl:flex-row-reverse xl:gap-5 xl:justify-center">
                <img className="h-52 w-52 mx-auto xl:mx-0" src={johnjudLogo} alt="Johnjud Logo" />
                <div className="uppercase text-white text-center mt-1.5 
                xl:flex xl:flex-col xl:content-end">
                    <p className="text-4xl font-bold py-2.5 xl:flex xl:items-center
                    xl:text-[156px] xl:py-0 xl:flex-1 xl:align-middle">
                        johnjud
                    </p>
                    <p className="text-base font-medium py-1 xl:text-2xl xl:ml-96">
                        Best Option - Adoption
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center align-middle">
                <button className="position absolute center cursor-pointer border border-solid border-secondary rounded-2xl 
                bg-secondary px-32 py-2.5 opacity-80
                text-white text-2xl font-semibold
                mt-80 mb-20 hover:ease-in">กดดูเลย</button>
                <img src={catImage} alt="Cat Image" className="mx-auto" />
            </div>
        </div>
    );
};

export default Main;