export interface CommentDataItem {
  id: number;
  documentId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null
}

export interface CategoriesDataItem {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: null
}

export interface Post {
    id: number;
    documentId: string;
    title: string;
    description: string;
    cover_image_url: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    comment: CommentDataItem[];
    category?: CategoriesDataItem;
    localization: any[];
}

export interface PostResponse {
    data: Post[];
}