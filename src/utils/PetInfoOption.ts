import { OptionType } from "@/components/Admin/Pets/Add/DropdownInputInfo";

const genderOption: OptionType[] = [
  {
    label: "ตัวผู้",
    value: "male",
  },
  {
    label: "ตัวเมีย",
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

const colorOption: OptionType[] = [
  {
    label: "ขาว",
    value: "white",
  },
  {
    label: "ดำ",
    value: "black",
  },
  {
    label: "น้ำตาล",
    value: "brown",
  },
  {
    label: "บลอนด์",
    value: "blonde",
  },
];

export { colorOption, genderOption, typeOption };
