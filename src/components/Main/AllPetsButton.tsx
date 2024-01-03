import { Link } from "react-router-dom";

const AllPetsButton = () => {
  return (
    <Link
      className="flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-2 font-bold text-white shadow md:w-auto"
      to="/pets"
    >
      ดูสัตว์เลี้ยงท้งหมด
    </Link>
  );
};

export default AllPetsButton;
