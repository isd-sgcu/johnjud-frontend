import { Image } from "./common";

type Pet = {
  id: string;
  type: string;
  name: string;
  birthdate: string;
  gender: "male" | "female";
  color: string;
  pattern: string;
  habit: string;
  caption: string;
  status: "findHome" | "adopted";
  is_sterile: boolean;
  is_vaccinated: boolean;
  is_visible: boolean;
  is_club_pet: boolean;
  images: Image[];
};

export type { Pet };
