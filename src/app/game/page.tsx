import catImage from "../../assets/user-tarot/ANS 4 แมวดำ 1.svg";

const userTarotFirstpage = () => {
    return (
        <div className="min-h-screen w-full shrink-0 bg-primary-variant py-10
        flex flex-col items-center">
            <img className="w-80 h-[428px] rounded-2xl"
                src={catImage} />
            <div className="flex flex-col items-center font-bold py-8">
                <div className="text-primary text-4xl py-2">เกมทายนิสัย</div>
                <div className="text-white text-xl py-1.5">มาหาสัตว์เลี้ยงที่เหมาะกับคุณกัน!</div></div>
            <div w-10 h-10 bg-red></div>
            <button className="text-white text-xl font-semibold text-center
            bg-secondary px-6 py-2 w-80 rounded-2xl">เล่นเลย</button>
        </div >
    );
};

export default userTarotFirstpage;