export interface IContents {
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  contents: Content[];
}

export interface Content {
  id: string;
  cover: Cover;
  slug: string;
  title: string;
  subtitles: string[];
  description: Description;
  createdAt: string;
  updatedAt: string;
}

export interface Cover {
  id: string;
  url: string;
}

export interface Description {
  html: string;
}
