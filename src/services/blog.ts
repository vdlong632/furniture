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

export const getBlog = async () => {
  const { data } = await axios.get<Blog[]>('/data/blogs.json');
  return data;
};

export const getBlogDetail = async (slug: string) => {
  const blogs = await getBlog();
  return blogs.find((blog) => blog.slug === slug) ?? null;
};
