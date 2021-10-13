export type SliderData = { id: number; text: string; imageUrl: string, order?:number, image?:File}[]
export interface MainSliderProps {
    SliderData: SliderData
  }