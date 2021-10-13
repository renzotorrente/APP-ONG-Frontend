import React from 'react'
import { Skeleton } from '@chakra-ui/react'
import { ILogoAndOptionFooterComponent } from './InterfaceFooter'
import classes from './styles/logoandoptions.module.css'
import { Link } from 'react-router-dom'

const LogoAndOptionFooterComponent = ({
  firstHalfOptionsFooter,
  SecondHalftOptionsFooter,
}: ILogoAndOptionFooterComponent): JSX.Element => {
  return (
    <div
      className={`${classes.logoAndOptionsContainer} ${classes.flexDirection}`}
    >
      <div
        className={`${classes.logoAndOptionsOptions} ${classes.flexDirection}`}
      >
        {firstHalfOptionsFooter.map((option) => (
          <Link to={option.PATH} key={option.TITLE}>
            {option.TITLE}
          </Link>
        ))}
      </div>

      <div className={classes.logoAndOptionsLogo}>
        <Skeleton width="250px" height="16" />
      </div>

      <div
        className={`${classes.logoAndOptionsOptions} ${classes.flexDirection}`}
      >
        {SecondHalftOptionsFooter.map((option) => (
          <Link to={option.PATH} key={option.TITLE}>
            {option.TITLE}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LogoAndOptionFooterComponent
