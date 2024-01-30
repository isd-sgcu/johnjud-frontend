import { OptionType } from "@/components/Admin/Pets/Add/DropdownInputInfo";

const genderOption: OptionType[] = [
  {
    label: "ชาย",
    value: "male",
  },
  {
    label: "หญิง",
    value: "female",
  },
];

const typeOption: OptionType[] = [
  {
    label: "สุนัข",
    value: "dog",
  },
  {
    label: "แมว",
    value: "cat",
  },
];

const color: string[] = ["ครีม", "ดำ", "เทา", "น้ำตาล"];
const colorOption: OptionType[] = color.map((col) => {
  return {
    label: col,
    value: col,
  };
});

export { genderOption, typeOption, colorOption };
