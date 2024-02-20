import logo from "@/assets/details/logo.png";

const DetailFallback = () => {
  return (
    <div className="my-8 flex gap-20 xl:justify-between xl:pr-24">
      <div className="flex w-full flex-col justify-between border-2 border-accent-gray-variant border-opacity-50 bg-white px-6 py-6 lg:rounded-r-2xl lg:py-8 lg:pl-[12.5%] lg:pr-0">
        <div className="h-8 w-48 rounded-full bg-gray-300"></div>
        <div className="space-y-4 py-2">
          <div className="h-6 w-48 rounded-full bg-gray-300"></div>
          <div className="h-6 w-48 rounded-full bg-gray-300"></div>
          <div className="h-6 w-48 rounded-full bg-gray-300"></div>
        </div>
      </div>
      <img src={logo} alt="logo" className="hidden h-64 w-64 xl:block" />
    </div>
  );
};

export default DetailFallback;
