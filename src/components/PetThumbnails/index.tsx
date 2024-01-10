import PetBadge from "@/components/Admin/Pets/Add/PetBadge";

interface PetThumbnailsProps {
  petLink: string;
}

const PetThumbnails = ({ petLink }: PetThumbnailsProps) => {
  return (
    <div className="relative aspect-square min-w-40 sm:min-w-80 rounded-[20px]">
      <div className="absolute -top-1 right-4">
        {/* Recieved where they're from */}
        <PetBadge value={"fromHome"} setValue={() => {}} isEditabled={false} />
      </div>
      <img
        src={petLink}
        alt="pets"
        className="aspect-square min-w-40 sm:min-w-80 overflow-hidden rounded-2xl object-cover object-center shadow"
      />
    </div>
  );
};

export default PetThumbnails;
