import MinipetCard from "../../components/card/MiniPetCard";
import MainLayout from "../../layouts/MainLayout";

enum genders {
  male = "male",
  female = "female",
}
enum status {
  findhome = "findhome",
  adopted = "adopted",
}
const minipetcardArray = [
  {
    id: "009669"
    name: "ลุงเริง",
    species: "ไซบีเรียน",
    gender: genders.male,
    birthdate: "Wed, 14 Jun 2017 07:00:00 GMT",
    is_sterile: false,
    status: status.findhome,
  },
];

const minipetcard = () => {
  return (
    <>
      {minipetcardArray.map((petData) => {
        return (
          <MinipetCard
            key={petData.id}
            id = {petData.id}
            name={petData.name}
            species={petData.species}
            gender={petData.gender}
            birthdate={petData.birthdate}
          />
        );
      })}
    </>
  );
};

export default minipetcard;

// Layout
export const Layout = MainLayout;
