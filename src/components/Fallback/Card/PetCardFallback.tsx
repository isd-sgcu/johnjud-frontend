const PetCardFallback = () => {
  return (
    <div className="flex w-80 flex-col items-start justify-start rounded-2xl bg-white p-4 shadow">
      <div className="mb-4 h-72 w-72 rounded-2xl bg-gray-300 shadow"></div>
      <div className="mb-2 flex w-72 flex-row items-center justify-between">
        <div className="h-8 w-28 rounded-full bg-gray-300"></div>
        <div className="h-8 w-8 rounded-full bg-gray-300"></div>
      </div>
      <div className="mt-2 flex w-full flex-row items-end justify-between gap-2">
        <div className="space-y-2">
          <div className="h-4 w-32 rounded-full bg-gray-300"></div>
          <div className="h-4 w-32 rounded-full bg-gray-300"></div>
          <div className="h-4 w-32 rounded-full bg-gray-300"></div>
        </div>
        <div>
          <div className="h-8 w-24 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default PetCardFallback;
