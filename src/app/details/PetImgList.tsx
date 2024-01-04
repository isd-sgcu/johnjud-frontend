import plusIcon from "../../assets/details/plusIcon.svg";
import petImg from "../../assets/details/pet.svg";

const PetImgList = () => {
    return (  
        <div className="flex gap-6 mx-auto w-full overflow-hidden px-6 xl:px-0 xl:w-[80rem]">
            <img
                src={petImg}
                alt="pet-img"
                className="w-48 h-48 rounded-3xl shadow-zinc-300 bg-zinc-300 shadow-[0_0_4px_2px]"
            />
            <img
                src={petImg}
                alt="pet-img"
                className="w-48 h-48 rounded-3xl shadow-zinc-300 bg-zinc-300 shadow-[0_0_4px_2px]"
            />
            <div className="flex items-center justify-center w-48 h-48 bg-white shadow-zinc-300 shadow-[0_0_4px_2px] rounded-3xl ">
                <img src={plusIcon} alt="plus-icon" />
            </div>
        </div>
    );
}
 
export default PetImgList;