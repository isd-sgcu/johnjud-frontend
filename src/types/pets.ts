type Pet = {
  id: string;
  name: string;
  pattern: string;
  birthdate: string;
  address: string;
  adopt_by: string;
  caption: string;
  color: string;
  contact: string;
  gender: "male" | "female";
  habit: string;
  images: [
    {
      id: string;
      object_key: string;
      url: string;
    },
  ];
  is_sterile: boolean;
  is_vaccinated: boolean;
  is_visible: boolean;
  origin: string;
  status: "findHome" | "adopted";
  type: string;
};

export type { Pet };
