import SmallpetCard from "../../components/card/SmallPetCard";
import MainLayout from "../../layouts/MainLayout";
enum genders {
  male = "male",
  female = "female",
}
enum status {
  findhome = "findhome",
  adopted = "adopted",
}
const smallPetCardArray = [
  {
    id: "009669",
    name: "ลุงเริง",
    species: "ไซบีเรียน",
    gender: genders.male,
    birthdate: "Wed, 14 Jun 2017 07:00:00 GMT",
    is_sterile: false,
    status: status.findhome,
  },
];

const smallpetcard = () => {
  return (
    <>
      {smallPetCardArray.map((petData) => {
        return (
          <SmallpetCard
            key={petData.id}
            id={petData.id}
            name={petData.name}
            species={petData.species}
            gender={petData.gender}
            birthdate={petData.birthdate}
            status={petData.status}
          />
        );
      })}
    </>
  );
};
export default smallpetcard;
export const Layout = MainLayout;
