import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Textarea,
} from '@chakra-ui/react'
import React from 'react'
import {
  ACCEPT_FILE_TYPE,
  BLUE,
  CANCEL,
  EDIT_TEXT_IMAGE,
  MIN_LENGTH_CHARACTER,
  MISSING_CHARACTER,
  NONE,
  PATH_ICON_CANCEL,
  PLACEHOLDER_FORMAT,
  PLACEHOLDER_TEXT_AREA_EDIT_HOME,
  RED,
  RESET_ALL,
  RESET_CURRENT,
  SAVE,
  TYPE_SUBMIT,
} from '../../constants/constants'
import FileUpload from './FileUpload'
import FormSelector from './FormSelector'
import { FormEditProps } from './InterfaceFormEdit'
import classes from './styles/FormEditStyle.module.css'
import useFormEditHook from './hooks/FormEditHook'

const FormEdit = ({
  target,
  sliderData,
  setTarget,
  editSlider,
  open,
  setClose,
  defaultSliderData,
}: FormEditProps): JSX.Element => {
  const {
    onSubmit,
    handleChangeImage,
    handleResetAll,
    handleResetCurrent,
    handleChangeTextArea,
  } = useFormEditHook({ editSlider, defaultSliderData, target,sliderData })

  return (
    <div
      className={`${classes.formEditOptions} ${!open && classes.hidden} ${
        open && classes.slideInRight
      }`}
    >
      <div className={classes.fromEditHomeButtonCancel}>
        <IconButton
          onClick={() => setClose()}
          aria-label={CANCEL}
          background={NONE}
        >
          <img src={PATH_ICON_CANCEL} />
        </IconButton>
      </div>
      <FormSelector target={target} setTarget={setTarget} />
      <form onSubmit={onSubmit}>
        <FormControl isInvalid>
          <FormLabel marginTop="15px">
            {EDIT_TEXT_IMAGE}
            <FormErrorMessage>
              {sliderData[target].text.length < MIN_LENGTH_CHARACTER
                ? MISSING_CHARACTER.replace(
                    PLACEHOLDER_FORMAT,
                    `${MIN_LENGTH_CHARACTER - sliderData[target].text.length}`
                  )
                : null}
            </FormErrorMessage>
          </FormLabel>
          <Textarea
            isInvalid={sliderData[target].text.length < MIN_LENGTH_CHARACTER}
            placeholder={PLACEHOLDER_TEXT_AREA_EDIT_HOME}
            value={sliderData[target].text}
            onChange={handleChangeTextArea}
          />
          <FileUpload
            accept={ACCEPT_FILE_TYPE}
            changeImage={handleChangeImage}
          ></FileUpload>
        </FormControl>
        <div className={classes.fromEditHomeButtonGroup}>
          <div className={classes.fromEditHomeButtonGroupReset}>
            <Button onClick={handleResetAll} colorScheme={RED}>
              {RESET_ALL}
            </Button>
            <Button
              onClick={() => handleResetCurrent(target)}
              colorScheme={RED}
            >
              {RESET_CURRENT}
            </Button>
          </div>
          <Button
            type={TYPE_SUBMIT}
            colorScheme={BLUE}
            disabled={
              !!sliderData.filter(
                (element) => element.text.length < MIN_LENGTH_CHARACTER
              ).length
            }
          >
            {SAVE}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FormEdit
