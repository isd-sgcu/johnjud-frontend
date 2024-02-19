const SmallPetCardFallback = () => {
  return (
    <div className="min-w-48 space-y-3 rounded-2xl bg-white p-3 shadow-md">
      <div>
        <div className="aspect-[4/3] w-full rounded-2xl bg-gray-300 object-cover object-center shadow-lg"></div>
      </div>
      <div className="space-y-4">
        <div className="h-4 w-24 rounded-full bg-gray-300"></div>
        <div className="space-y-2">
          <div className="h-3 w-24 rounded-full bg-gray-300"></div>
          <div className="h-3 w-24 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SmallPetCardFallback;
