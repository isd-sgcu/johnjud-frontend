import catImage from "../../assets/user-tarot/ANS 4 แมวดำ 1.svg";

const userTarotFirstpage = () => {
    return (
        <div className="min-h-screen w-full shrink-0 bg-primary-variant py-6
        flex flex-col items-center">
            <img className="w-80 h-[428px] rounded-2xl"
                src={catImage} />
            <div className="flex flex-col items-center font-bold my-6">
                <div className="text-primary text-5xl py-3">เกมทายนิสัย</div>
                <div className="text-white text-base">มาหาสัตว์เลี้ยงที่เหมาะกับคุณกัน!</div>
            </div>
            <button className="text-white text-xl font-semibold text-center
            bg-secondary px-6 py-2 rounded-2xl self-stretch mx-6">เล่นเลย</button>
        </div >
    );
};

export default userTarotFirstpage;