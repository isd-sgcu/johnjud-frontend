// import all 9 cards from assets/horo/9-card-for-horo
import card1 from "@/assets/horo/9-card-for-horo/1.png";
import card2 from "@/assets/horo/9-card-for-horo/2.png";
import card3 from "@/assets/horo/9-card-for-horo/3.png";
import card4 from "@/assets/horo/9-card-for-horo/4.png";
import card5 from "@/assets/horo/9-card-for-horo/5.png";
import card6 from "@/assets/horo/9-card-for-horo/6.png";
import card7 from "@/assets/horo/9-card-for-horo/7.png";
import card8 from "@/assets/horo/9-card-for-horo/8.png";
import card9 from "@/assets/horo/9-card-for-horo/9.png";


interface HoroData {
    img: string;
    title: string;
    content: string;
}

const HoroDatas : HoroData[]= [
    {
        img: card1, 
        title: "The High Priestess", 
        content: "คุณเป็นคนสวยมีสเน่ห์ น่าดึงดูด และน่่าค้นหาต่อเพศตรงข้าม แถมยังมีลางสังหรณ์ที่แม่นยำอีกด้วย แต่ช่วงนี้อารมณ์ของคุณจะแปรปรวนได้ง่าย เดี๋ยวดีเดี๋ยวร้าย ไพ่ขอแนะนำว่า คุณควรลองมองหาที่ยึดเหนี่ยวจิตใจดูบ้าง สิ่งนั้นจะช่วยทำให้จิตใจของคุณสงบมากขึ้น"
    },
    {
        img: card2,
        title: "The Empress",
        content: "ช่วงนี้คุณค่อนข้างสบาย ไม่ค่อยมีอุปสรรค ทำสิ่งใดมักสำเร็จได้ง่าย มีคนขอดูแลเอาใจใส่ ไม่ให้ลำบาก จนคุณแทบจะไม่ต้องทำอะไรเลย ไพ่ขอแนะนำว่า แม้ว่าคุณจะมีชีวิตที่เพียบพร้อมแล้ว แต่คุณก็ควรใช้และพอใจในสิ่งที่มีอยู่ นำประโยชน์และสิ่งที่มี มอบให้ผู้ที่ด้อยโอกาสกว่า จะทำให้ชีวิตของคุณมีค่าและสมบูรณ์ยิ่งขึ้นไปอีก"
    },
    {
        img: card3,
        title: "The Emperor",
        content: "ช่วงนี้การงาน การเรียนจะดีมาก มีโอกาสได้ไปต่างประเทศ เป็นช่วงที่ทำอะไรก็ดีไปหมด มีโอกาสก้าวหน้าในชีวิต ไม่ว่าจะเป็นด้านอาชีพการงาน หรือความรัก ไพ่ขอแนะนำว่า คุณควรระวังอุปสรรคซึ่งเกิดจากความใจร้อนและความประมาทของคุณเอง คุณควรใช้โอกาสที่ดีและรู้จักประยุกต์ใช้โอกาสที่มีให้เกิดประโยชน์สูงสุดแก่ตนเองและช่วยเหลือผู้ที่ด้อยโอกาสหรือมีปัญหา"
    },
    {
        img: card4,
        title: "Wheel of Fortune",
        content: "ช่วงนี้คุณจะโชคดีเป็นอย่างมาก อาจจะโชคดีในเรื่องชื่อเสียง โชคลาภ การงาน หรือความรัก ไม่ว่าจะอะไรก็ตาม เตรียมรอฟังข่าวดีได้เลย โดยเฉพาะอะไรที่เกี่ยวกับการเสี่ยงโชค ในช่วงนี้คุณมีเกณฑ์ที่จะได้เป็นส่วนใหญ่ แต่ไพ่ขอแนะนำว่า อย่าพึ่งแต่โชคมากเกินไปนะ ควรที่จะก้าวไปข้างหน้าด้วยความพยายามของตนเองด้วยเช่นกัน"
    },
    {
        img: card5,
        title: "Judgement",
        content:  "ช่วงนี้จะเป็นช่วงที่คุณจะได้พบกับการตัดสินใจครั้งสำคัญ เป็นช่วงฟื้นตัวจากเรื่องแย่ๆ พลิกร้ายกลายเป็นดี อาจจะมีข่าวดี หรือสิ่งที่รอคอยจะสมหวัง ไพ่ขอแนะนำว่า หากมีใครบางคนหรือบางสิ่งมาคอยบอกคอยเตือนคุณ คุณควรจะรับฟังไว้บ้างก็ดีนะ"
    },
    {
        img: card6,
        title: "Wands",
        content: "ช่วงนี้เป็นช่วงของความพัฒนาก้าวหน้า โดยเฉพาะเรื่องการงานและการเรียน จะได้รับผิดชอบงานมากขึ้น หากเป็นพนักงานก็จะมีโอกาสได้เลื่อนตำแหน่ง หากเป็นนักเรียน นักศึกษา จะมีผลการเรียนที่ดีขึ้น แต่ไพ่ขอแนะนำว่า คุณควรพึงระวังไว้ว่า โอกาสดีๆ ไม่ได้มีมาบ่อยๆ อย่ารอช้า คุณควรขยันหมั่นเพียรอย่างต่อเนื่อง แล้วทุกสิ่งทุกอย่างจะสำเร็จสมประสงค์"
    },
    {
        img: card7,
        title: "Pentacles",
        content: "ช่วงนี้จะเป็นช่วงที่คุณมีฐานะการเงินดีมาก ทำงาน หยิบจับอะไรก็เป็นเงินเป็นทองพอกพูนขึ้นมา ไม่ใช่แค่ด้านการเงินเท่านั้น ด้านความรักก็ดีเช่นกัน คุณอาจจะได้พบกับคนรักที่ดี เพียบพร้อมทั้งความรู้ความสามาารถ ฐานะชาติตระกูล เป็นความสุขที่เกิดขึ้นแบบถาวรยั่งยืนตลอดไป"
    },
    {
        img: card8,
        title: "Knight",
        content: "ช่วงนี้จะเป็นช่วงที่คุณมีปัญหา อุปสรรคเข้ามาบ้าง แต่ในท้ายที่สุด ด้วยความอดทนและความพยายามของคุณ คุณก็จะสามารถผ่านปัญหาต่างๆไปได้ด้วยดีหรือบางทีก็อาจจะมีคนเข้ามาช่วยแก้ไขปัญหาความติดขัดให้หมดไป"
    },
    {
        img: card9,
        title: "Cups",
        content: "หากคุณเป็นคนโสด ช่วงนี้คุณจะมีโอกาสที่จะได้พบคนรักและพัฒนาความสัมพันธ์ ขยับจากคนรู้จักไปเป็นคนรู้ใจ สำหรับคนมีคู่ ช่วงนี้ชีวิตคู่ของคุณจะรักกันหวานชื่น เข้าใจซึ่งกันและกันเป็นอย่างดี"
    }
]

export default HoroDatas;