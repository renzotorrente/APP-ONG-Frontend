export type MutateActivityFunction = (id:number) => React.MouseEventHandler<HTMLButtonElement>

export type Activity = {
  id: number,
  name: string
}

export type ActivitiesListProps = {
  activities: Activity[],
  onEdit: MutateActivityFunction,
  onDelete: MutateActivityFunction
}
