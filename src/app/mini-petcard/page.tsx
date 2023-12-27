import MiniPetCard from "../../components/card/MiniPetCard";
import MainLayout from "../../layouts/MainLayout";
import SmallPetCard from "../../components/card/SmallPetCard";

enum genders {
    male,female
  }
enum status
{
    findhome,adopted
}
const SmallPetCard = [
    {
      name: "ลุงเริง",
      species: "ไซบีเรียน",
      gender: genders.male,
      birthdate: "Wed, 14 Jun 2017 07:00:00 GMT",
      is_sterile:false,
      status: status.findhome
    },
    {
      name: "หอมมาก",
      species: "บางแก้ว",
      gender: genders.female,
      birthdate: "Sun, 14 Oct 2003 15:00:00 GMT",
      is_sterile:true,
      status: status.adopted
    },
    ]

const Faq = () => {
    return (SmallPetCard.map