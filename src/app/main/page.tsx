import johnjudLogo from "../../assets/main/johnjudLogo.svg";
import catImage from "../../assets/main/catImage.svg";

const Main = () => {
    return (
        <div className="bg-primary mt-auto w-full shrink-0">
            <div className="flex justify-center">
                <img className="h-52 w-52" src={johnjudLogo} alt="Johnjud Logo" />
            </div>
            <div className="mt-1.5">
                <div className="uppercase text-white text-center text-4xl font-bold py-2.5">
                    johnjud
                </div>
                <div className="uppercase text-white text-center text-base font-medium py-1">
                    Best Option - Adoption
                </div>
            </div>
            <div>
                <button className="position absolute border border-solid border-secondary rounded-2xl 
                bg-secondary px-32 py-2.5 opacity-80
                text-white text-2xl font-semibold
                mt-80 mb-20">กดดูเลย</button>
                <img src={catImage} alt="Cat Image" className="mx-auto" />
            </div>
        </div>
    );
};

export default Main;