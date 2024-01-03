import catImage from "../../assets/user-tarot/ANS 4 แมวดำ 1.svg";

const userTarotFirstpage = () => {
    return (
        <div className="min-h-screen w-full shrink-0 bg-primary-variant 
        flex flex-col items-center">
            <img className="w-80 h-[428px] mt-10"
                src={catImage} />
            <div className="text-primary text-4xl font-bold mt-8">เกมทายนิสัย</div>
            <div className="text-white text-xl font-bold mb-8">มาหาสัตว์เลี้ยงที่เหมาะกับคุณกัน!</div>
            <div w-10 h-10 bg-red></div>
            <button className="text-white text-xl font-semibold text-center mt-10
            bg-secondary px-6 py-2 w-80 rounded-2xl">เล่นเลย</button>
        </div >
    );
};

export default userTarotFirstpage;