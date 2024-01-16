type Pet = {
  id: string;
  type: string;
  species: string;
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
};

export type { Pet };
