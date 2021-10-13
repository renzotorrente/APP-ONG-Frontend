import { useEffect, useState } from "react";
import { errorAlert, successAlert } from "../components/alertBox";
import { Category } from "../components/CategoriesListComponent/types";
import { getCategories } from "../services/categoriesService";
import { createNew, GetDetailsNews, updateNew } from "../services/newsService";
import { NEWS_ACTIONS_CONSTANTS } from '../constants/constants';
const { 
  CREATE_ERROR_MESSAGE,
  CREATE_SUCCESS_MESSAGE,
  EMPTY_CATEGORY,
  EMPTY_STRING,
  ERROR_MESSAGE_TITLE,
  FETCH_NEWS_ERROR,
  MISSING_FIELDS_MESSAGE,
  SUCCESS_MESSAGE_TITLE,
  UPDATE_ERROR_MESSAGE,
  UPDATE_SUCCESS_MESSAGE } = NEWS_ACTIONS_CONSTANTS;

type formType = {
  name: string,
  categoryId: number,
  image: string,
  imageFile?: File
  content?: string
}

type CategoriesState = {
  isLoading: boolean,
  categories: Category[]
}

const useNewsFormScreenHook = (newsId: string) => {
  const [formContent, setFormContent] = useState<string>("");
  const [formData, setFormData] = useState<formType>({
    name: EMPTY_STRING,
    categoryId: EMPTY_CATEGORY,
    image: EMPTY_STRING
  });
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<CategoriesState>({
    isLoading: true,
    categories: []
  })
  const [newsState, setNewsState] = useState({
    isLoading: true,
    error: {
      isError: false,
      message: EMPTY_STRING
    }
  });
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    //If ID is passed to this component, we edit the new. Otherwise, we create a new one.
    let editForm = false;
    if (newsId) {
      editForm = true;
      setEditMode(true);
    } else {
      setEditMode(false);
    }
    getCategories()
      .then(({ data }) => {
        setCategories({
          isLoading: false,
          categories: data
        })
      })
      .catch((err) => {
        console.log(err);
      })
    if (editForm) {
      GetDetailsNews(newsId)
        .then(({ data }) => {
          const newData = data
          setFormData({
            name: newData.name,
            image: newData.image,
            categoryId: newData.categoryId,
          });
          setFormContent(newData.content);
          setNewsState((prevState) => ({
            ...prevState,
            isLoading: false
          }))
        })
        .catch((err) => {
          setNewsState({
            isLoading: false,
            error: {
              isError: true,
              message: FETCH_NEWS_ERROR
            }
          })
        })
    }
    setLoading(false);
  }, []);


  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const inputName = event.target.name;
    setFormData({ ...formData, [inputName]: event.target.value });
  }

  const verifyData = (data: formType) => {
    type formDataKey = keyof typeof formData;
    return !Object.keys(data).some((key: string) => {
      const keyk = key as formDataKey
      data[keyk] === "" || data[keyk] === 0
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = { ...formData, content: formContent };

    const validation = verifyData(data);
    if (validation) {
      data.image = EMPTY_STRING;
      if (editMode) {
        updateNew({ ...data, id: +newsId })
          .then((data) => {
            successAlert({ title: SUCCESS_MESSAGE_TITLE, text: UPDATE_SUCCESS_MESSAGE })
          })
          .catch((data) => {
            errorAlert({ title: ERROR_MESSAGE_TITLE, text: UPDATE_ERROR_MESSAGE });
          })
      } else {
        createNew(data)
          .then((data) => {
            successAlert({ title: SUCCESS_MESSAGE_TITLE, text: CREATE_SUCCESS_MESSAGE })
          })
          .catch((data) => {
            errorAlert({ title: ERROR_MESSAGE_TITLE, text: CREATE_ERROR_MESSAGE });
          })
      }
    } else {
      errorAlert({ title: ERROR_MESSAGE_TITLE, text: MISSING_FIELDS_MESSAGE });
    }
  }

  return {
    editMode,
    newsState,
    handleSubmit,
    handleChange,
    formData,
    formContent,
    categories,
    loading,
    setFormData,
    setFormContent
  }
}

export default useNewsFormScreenHook;