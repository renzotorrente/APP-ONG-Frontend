export type TestimonialsType = {
  title: string;
  text?: string;
  imageUrl: string;
};

export type TestimonialType = {
  id?: number;
  name: string;
  content: string;
  image: string;
  text: string;
  createdAt: string;
  categoryId: number;
};
