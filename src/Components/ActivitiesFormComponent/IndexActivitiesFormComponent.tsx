import React, { FormEvent, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Button, Input } from '@chakra-ui/react'
import classes from './styles/IndexActivities.module.css'
import { IndexActivitiesFormComponentProps } from './IActivitiesForm'
import {
  creatNewActivity,
  updateActivity,
} from '../../services/activitiesServices'
import {
  GREEN,
  MIN_LENGTH_CHARACTER,
  NAME_ES,
  PASSWORD_MIN_LENGTH,
  SAVE,
  TYPE_SUBMIT,
} from '../../constants/constants'
import { useHistory } from 'react-router-dom'
import ImageInputComponent from '../ImageInputComponent/ImageInputComponent'
const IndexActivitiesFormComponent = ({
  Activitie,
  UploadUrl,
}: IndexActivitiesFormComponentProps): JSX.Element => {
  const history = useHistory();
  const [ActivitiesContent, setActivitiesContent] = useState<string>(
    Activitie?.content || '<br>'.repeat(10)
  )
  const [name, setName] = useState(Activitie?.name || '');
  const [image, setImage] = useState({
    image: Activitie?.image || "",
    imageFile: new Object() as File
  })

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (typeof Activitie === 'undefined') {
      
      creatNewActivity({ name, content: ActivitiesContent, imageFile: image.imageFile})
    }
    if (typeof Activitie?.id !== 'undefined') {
      await updateActivity({ ...Activitie, name, content: ActivitiesContent , imageFile: image.imageFile})
      history.push(`/activities`)
    }
  }

  return (
    <form
      className={classes.indexActivitiesFormContainer}
      onSubmit={handleSubmit}
    >
      <div className={classes.ActivitiesIndexAndButton}>
        <Input value={name} placeholder={NAME_ES} onChange={handleNameChange} />
        <ImageInputComponent name="image" src={image.image} setImgForm={setImage}/>
        <CKEditor
          editor={ClassicEditor}
          data={ActivitiesContent}
          config={{
            ckfinder: {
              uploadUrl: UploadUrl,
            },
          }}
          onChange={(event: React.ChangeEvent, editor: any) => {
            const data = editor.getData()
            setActivitiesContent(data)
          }}
        />
        <Button
          type={TYPE_SUBMIT}
          colorScheme={GREEN}
          disabled={
            name.length < PASSWORD_MIN_LENGTH ||
            ActivitiesContent.length < MIN_LENGTH_CHARACTER ||
            !image.image
          }
        >
          {SAVE}
        </Button>
      </div>
    </form>
  )
}

export default IndexActivitiesFormComponent
