export type NewsType = {
  title: string;
  text?: string;
  imageUrl: string;
};

export type NewType = {
  id?: number,
  name: string,
  content: string,
  image: string,
  text: string,
  createdAt: string,
  categoryId: number
}