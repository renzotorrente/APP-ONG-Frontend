import React, { FormEvent } from 'react'
import { SliderData } from '../Slider/interfaceSlider'

export type FileUploadProps = {
  accept?: string
  changeImage: (
    event: React.ChangeEvent<HTMLInputElement>,
    error: (error: string) => void
  ) => void
}
export type onSumitProps = FormEvent<HTMLFormElement>

export type FormSelectorProps = {
  target: number
  setTarget: (target: string) => void
}

export type IndexFormEditHomeProps = {
  SliderData: SliderData
}

export type TestEditSliderHomeProps = {
  sliderData: SliderData
  target: number
  setOpen: () => void
}

export type FormEditProps = {
  target: number
  sliderData: SliderData
  setTarget: (target: string) => void
  editSlider: React.Dispatch<React.SetStateAction<SliderData>>
  open: boolean
  setClose: () => void
  defaultSliderData: SliderData
}

export type FormEditHookProps = {
  editSlider: React.Dispatch<React.SetStateAction<SliderData>>
  target: number
  defaultSliderData: SliderData
  sliderData:SliderData
}

export type FormEditHookReturn = {
  onSubmit: (event: onSumitProps) => void
  handleChangeImage: (
    event: React.ChangeEvent<HTMLInputElement>,
    error: (error: string) => void
  ) => void
  handleResetAll: () => void
  handleResetCurrent: (target: number) => void
  handleChangeTextArea: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}
