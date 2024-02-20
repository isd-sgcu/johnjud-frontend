import Container from "@/components/Container";
import { Icon } from "@iconify/react/dist/iconify.js";

const ThumbnailFallback = () => {
  return (
    <Container className="flex flex-col gap-8">
      <div className="flex items-center justify-between text-primary">
        <button type="button" onClick={() => window.history.back()}>
          <Icon icon="ion:chevron-back" className="h-8 w-8 cursor-pointer" />
        </button>
        <div className="md:hidden">
          <div className="h-8 w-32 rounded-full bg-gray-300"></div>
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col items-center justify-between gap-8 md:h-80 md:flex-row md:items-start">
        <div className="aspect-square w-80 rounded-2xl bg-gray-300"></div>
        <div className="flex w-full flex-col items-start gap-8 overflow-auto md:h-full md:flex-1">
          <div className="h-8 w-32 rounded-full bg-gray-300"></div>
          <div className="min-h-60 w-full rounded-2xl bg-gray-300 md:h-full md:min-h-0"></div>
        </div>
      </div>
    </Container>
  );
};

export default ThumbnailFallback;
