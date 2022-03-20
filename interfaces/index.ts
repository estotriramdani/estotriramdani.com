export interface IContents {
  contents: Content[];
}

export interface Content {
  id: string;
  cover: Cover;
  slug: string;
  title: string;
  subtitles: string[];
  category?: string;
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
