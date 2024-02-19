const MiniPetCardFallback = () => {
  return (
    <div className="w-40 rounded-2xl bg-white shadow-md">
      <div className="flex h-28 w-full rounded-2xl bg-gray-300"></div>
      <div className="space-y-2 px-3 py-2">
        <div className="space-y-2">
          <div className="h-4 w-20 rounded-full bg-gray-300"></div>
          <div className="h-4 w-20 rounded-full bg-gray-300"></div>
        </div>

        <div className="flex flex-row space-x-1.5">
          <div className="h-6 w-16 rounded-xl bg-accent-blue-variant"></div>
          <div className="h-6 w-16 rounded-xl bg-accent-light-gray"></div>
        </div>
      </div>
    </div>
  );
};

export default MiniPetCardFallback;
