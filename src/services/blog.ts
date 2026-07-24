import axios from 'axios';

export interface Blog {
  id: number;
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  category: string;
  image?: string;
  published_at: string;
}

// export interface ListBlogParams {
//   page?: number;
//   limit?: number;
// }

// export interface ListBlogResponse {
//   list: Blog[];
//   total: number;
// }

// export const getBlog = async (params?: ListBlogParams): Promise<ListBlogResponse> => {
//   const { data } = await axios.get<ListBlogResponse>('http://localhost:3001/api/blogs', {
//     params
//   });
//   return data;
// };

export const getBlog = async () => {
  const { data } = await axios.get('http://localhost:3001/api/blogs');
  return data;
};

export const getBlogDetail = async (slug: string) => {
  const { data } = await axios.get(`http://localhost:3001/api/blog/slug/${slug}`);
  return data;
};
