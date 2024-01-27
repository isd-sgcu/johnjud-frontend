type Meta = {
  page: number;
  total_pages: number;
  page_size: number;
  total: number;
};

type Image = {
  id: string;
  object_key: string;
  url: string;
};

export type { Image, Meta };
