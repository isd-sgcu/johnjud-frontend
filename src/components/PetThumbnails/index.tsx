import PetBadge from "@/components/Admin/Pets/Add/PetBadge";

interface PetThumbnailsProps {
  petLink: string;
}

const PetThumbnails = ({ petLink }: PetThumbnailsProps) => {
  return (
    <div className="relative aspect-square min-w-40 rounded-[20px] sm:min-w-80">
      <div className="absolute -top-1 right-4">
        {/* Recieved where they're from */}
        <PetBadge value={"fromHome"} setValue={() => {}} isEditabled={false} />
      </div>
      <img
        src={petLink}
        alt="pets"
        className="aspect-square min-w-40 overflow-hidden rounded-2xl object-cover object-center shadow sm:min-w-80"
      />
    </div>
  );
};

export default PetThumbnails;
