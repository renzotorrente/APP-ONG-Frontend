import React, { useCallback, useState } from 'react'
import FormEdit from '../components/FormEditHome/FormEdit'
import {
  IndexFormEditHomeProps,
} from '../components/FormEditHome/InterfaceFormEdit'
import classes from '../components/FormEditHome/styles/IndexFormEditStyle.module.css'
import TestEditSliderHome from '../components/FormEditHome/TestEditSliderHome'
import { SliderData } from '../components/Slider/interfaceSlider'

const EditHomeSlider = ({
  SliderData,
}: IndexFormEditHomeProps): JSX.Element => {
  const [targetChangeSlider, setTargetChangeSlider] = useState('0')
  const [sliderData, setSliderData] = useState<SliderData>(
    SliderData.map((e) => ({ ...e }))
  )
  const [openSettings, setSettings] = useState<boolean>(false)

  const handleChangeTarget = useCallback(setTargetChangeSlider, [
    setTargetChangeSlider,
  ])
  const handleCloseSettings = useCallback(() => {
    setSettings(false)
  }, [setSettings])
  const handleOpenSettings = useCallback(() => {
    setSettings(true)
  }, [setSettings])

  return (
    <div className={classes.formEditHomeContainer}>
      <TestEditSliderHome
        sliderData={sliderData}
        target={+targetChangeSlider}
        setOpen={handleOpenSettings}
      />
      <FormEdit
        target={+targetChangeSlider}
        sliderData={sliderData}
        setTarget={handleChangeTarget}
        editSlider={setSliderData}
        open={openSettings}
        setClose={handleCloseSettings}
        defaultSliderData={SliderData}
      />
    </div>
  )
}

export default EditHomeSlider
