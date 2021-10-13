import { IMAGE, MESSAGE_ONLY_IMAGE } from '../../../constants/constants'
import { editSliderService } from '../../../services/sliderServices'
import {
  FormEditHookProps,
  FormEditHookReturn,
  onSumitProps,
} from '../InterfaceFormEdit'

const FormEditHook = ({
  editSlider,
  target,
  defaultSliderData,
  sliderData,
}: FormEditHookProps): FormEditHookReturn => {
  const onSubmit = (event: onSumitProps) => {
    event.preventDefault()
    editSliderService(sliderData[0], sliderData[0].id)
    editSliderService(sliderData[1], sliderData[1].id)
    editSliderService(sliderData[2], sliderData[2].id)
    defaultSliderData = sliderData
  }

  const handleChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const currentText = event.target.value
    editSlider((prev) => {
      const copy = [...prev]
      copy[target].text = currentText
      return copy
    })
  }

  const handleResetAll = (): void => {
    editSlider(defaultSliderData.map((e) => ({ ...e })))
  }

  const handleResetCurrent = (target: number): void => {
    editSlider((prev) => {
      const copy = [...prev]
      copy[target] = { ...defaultSliderData[target] }
      return copy
    })
  }

  const handleChangeImage = (
    event: React.ChangeEvent<HTMLInputElement>,
    error: (error: string) => void
  ): void => {
    const currentImage = event.target?.files?.[0]
    
    if (currentImage && currentImage.type.indexOf(IMAGE) !== -1) {
      const readImage = new FileReader()
      readImage.readAsDataURL(currentImage)
      readImage.onload = (event) => {
        const result = event.target?.result
        editSlider((prev) => {
          const copy = [...prev]
          copy[target].imageUrl = `${result}`
          copy[target].image = currentImage;
          return copy
        })
      }
      return
    }
    error(MESSAGE_ONLY_IMAGE)
  }

  return {
    onSubmit,
    handleChangeImage,
    handleResetAll,
    handleResetCurrent,
    handleChangeTextArea,
  }
}

export default FormEditHook
