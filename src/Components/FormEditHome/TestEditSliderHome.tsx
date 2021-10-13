import { Box, Button, IconButton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import MainSlider from '../Slider/MainSlider'
import { TestEditSliderHomeProps } from './InterfaceFormEdit'
import classes from './styles/TestEditSliderHomeStyle.module.css'
import {
  ON,
  OFF,
  RED,
  GREEN,
  NONE,
  SETTINGS,
  PATH_ICON_SETTINGS,
  TEST_ES,
} from '../../constants/constants'

const TestEditSliderHome = ({
  sliderData,
  target,
  setOpen,
}: TestEditSliderHomeProps): JSX.Element => {
  const [demo, setDemo] = useState(false)

  const handleDemoState = () => {
    setDemo((prev) => !prev)
  }

  return (
    <div className={classes.TestEditSliderHomeContainer}>
      {!demo && (
        <Box
          className={classes.boxStyle}
          backgroundImage={`url(${sliderData[target].imageUrl})`}
        >
          <Text fontSize="3xl" className={classes.textStyle}>
            {sliderData[target].text}
          </Text>
        </Box>
      )}
      {demo && <MainSlider SliderData={sliderData} />}
      <div className={classes.ContinaerMobileButtons}>
        <Button onClick={handleDemoState} colorScheme={demo ? GREEN : RED}>
          {TEST_ES}: {demo ?  ON  : OFF }
        </Button>
        <IconButton onClick={setOpen} aria-label={SETTINGS} background={NONE}>
          <img src={PATH_ICON_SETTINGS} />
        </IconButton>
      </div>
    </div>
  )
}

export default TestEditSliderHome
