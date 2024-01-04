import catImage from "../../assets/user-tarot/ANS 4 แมวดำ 1.svg";

const userTarotFirstpage = () => {
    return (
        <div className="bg-primary-variant w-full min-h-screen p-6 flex flex-col items-center">
            <img className="w-80 h-[428px] rounded-2xl" src={catImage} />
            <div className="flex flex-col items-center my-6">
                <div className="text-primary text-5xl font-bold py-3">เกมทายนิสัย</div>
                <div className="text-white text-base font-bold">มาหาสัตว์เลี้ยงที่เหมาะกับคุณกัน!</div>
            </div>
            <button className="text-white text-xl font-semibold text-center w-full
                bg-secondary px-6 py-2 rounded-2xl">เล่นเลย</button>
            {/* <div className="w-90 py-6 flex flex-col items-center lg:py-10">
                <img className="w-full h-[428px] rounded-2xl"
                    src={catImage} />
                <div className="flex flex-col items-center font-bold my-6 lg:my-8">
                    <div className="text-primary text-5xl py-3 lg:text-4xl lg:py-4">เกมทายนิสัย</div>
                    <div className="text-white text-base lg:text-xl lg:py-1">มาหาสัตว์เลี้ยงที่เหมาะกับคุณกัน!</div>
                </div>
                <button className="text-white text-xl font-semibold text-center w-full bg-secondary px-6 py-2 rounded-2xl">เล่นเลย</button>
            </div > */}
        </div>
    );
};

// min-h-screen w-full shrink-0 -> biggest div
// self-stretch mx-6 lg:w-80 lg:mx-auto -> btn

export default userTarotFirstpage;