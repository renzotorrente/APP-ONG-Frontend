export type MutateCategoryFunction = (id:number) => React.MouseEventHandler<HTMLButtonElement>

export type Category = {
  id: number,
  name: string,
  description: string
}

export type CategoryItemProps = {
  category: Category,
  onDelete: MutateCategoryFunction,
  onEdit: MutateCategoryFunction
}

export type CategoriesListProps = {
  categories: Category[],
  onDelete: MutateCategoryFunction,
  onEdit: MutateCategoryFunction
}