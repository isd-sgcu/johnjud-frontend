interface StoryProps {
  headerText: string;
  answers: string[];
  storyTexts: string[];
}

const Storys: StoryProps[] = [
  {
    headerText: "หากวันพรุ่งนี้เป็นวันหยุด คุณจะเลือกทำอะไร",
    answers: [
      "ออกไปเที่ยวสิ รออะไร",
      "ต้องปาร์ตี้! เปิดตี้เท่านั้น!!!",
      "อยู่บ้าน ดูหนัง ฟังเพลง พักผ่อนชิว ๆ ดีกว่า",
      "ลองโทรหาเพื่อน ออกไปเดินเล่นห้างง่าย ๆ",
    ], 
    storyTexts: [
      "ติ๊ง แจ้งเตือนแอพพลิเคชั่น\nโรงหนังชื่อดังดังขึ้น",
      "ว้าว! หนังใหม่ที่สนใจจะฉายวันแรก\nพรุ่งนี้แล้ว สงสัยต้องไปแล้วสิ ไม่อยากโดนสปอยล์ด้วย",
      "ว่าแต่ จะหาคนไปดูด้วยดีไหมนะ",
    ],
  },
  {
    headerText: "หากอยากไปดูหนังที่เพิ่งออกใหม่ คุณจะเลือกชวนใครไป",
    answers: [
      "ใครก็ได้ หาเพื่อนใหม่เอาหน้างานละกัน",
      "ไม่เพื่อนสนิ้ททท ก็ครอบครัวหน่ะสิ",
      "ขอไปดูคนเดียวดีกว่า ไม่ต้องวุ่นวาย",
      "แค่รู้จักกัน จะใครก็ได้ทั้งนั้นแหละ",
    ],
    storyTexts: [
      "ส่วนวันนี้เพิ่งทำงานเสร็จ\nนอนพักผ่อน เล่นโทรศัพท์ดีกว่า",
      "ตริ้ง* เสียงโทรศัพท์ดังขึ้น",
      "เพื่อนทักแชทมาว่า\n“แก มันมีเกมทดสอบใหม่ ลองเล่นไหม”",
      "*กดลิงค์*\nเล่นเกมไปสักพัก"
    ],
  }
];


export default Storys;
