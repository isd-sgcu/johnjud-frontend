import { Pet } from "@/types/pets";
import SmallPetCard from "@/components/Card/SmallPetCard";

interface SmallPetCardListProps {
    pets: Pet[];
}

/* 
interface SmallPetCardProps {
  id: string;
  name: string;
  species: string;
  gender: string;
  birthdate: string;
  status: string;
}
*/
const SmallPetCardList: React.FC<SmallPetCardListProps> = ({pets}) => {
    return (
      <div className="flex space-x-6 overflow-x-auto py-6 px-10 bg-primary/50">
          {pets.map((pet: Pet) => (
            <SmallPetCard
              id = {pet.id}
              name = {pet.name}
              species={pet.pattern}
              gender = {pet.gender}
              birthdate = {pet.birthdate}
              status = {pet.status}
            />
          ))}
      </div>
    )
};

export default SmallPetCardList;
