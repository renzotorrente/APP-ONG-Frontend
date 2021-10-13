import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import classes from './styles/slider.module.css'
import SliderResponsiveSettings from './SliderResponsiveSettings'
import { MainSliderProps } from './interfaceSlider'

export default function MainSlider({
  SliderData,
}: MainSliderProps): JSX.Element {
  return (
    <Carousel
      ssr
      itemClass="image-item"
      responsive={SliderResponsiveSettings}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      arrows={false}
      customTransition={"transform 800ms ease-in-out"}
      transitionDuration={800}
    >
      {SliderData.map((slider) => {
        return (
          <Box
            className={classes.boxStyle}
            style={{
              backgroundImage: "url(" + slider.imageUrl + ")",
            }}
            key={slider.id}
          >
            <Text fontSize="3xl" className={classes.textStyle}>
              {slider.text}
            </Text>
          </Box>
        );
      })}
    </Carousel>
  );
}
