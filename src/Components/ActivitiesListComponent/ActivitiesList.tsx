import React from "react";
import classes from "./styles/styles.module.css";
import { Text, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ActivitiesListProps } from './types'
import { Link, useHistory } from "react-router-dom";

const ActivitiesList = ({activities, onEdit, onDelete}:ActivitiesListProps):JSX.Element => {

  const history = useHistory();
  
  return (
    <div className={classes.container}>
      <ul>
        <li className={classes.tableHeader}>
          <div className={`${classes.col} ${classes.col1}`}>
            <Text fontWeight="bold">Actividades</Text>
          </div>
          <div className={`${classes.col} ${classes.col4}`}>
            <Text fontWeight="bold"></Text>
          </div>
        </li>
        {activities.map((el) => (
          <li className={classes.listItem} key={el.id}>
            <div
              className={`${classes.col} ${classes.col1}`}
              data-label="Nombre"
            >
              {el.name}
            </div>
            <div
              className={`${classes.col} ${classes.col2}`}
              
            >
              <span className={classes.buttons}>
              <IconButton
                colorScheme="facebook"
                aria-label="Editar actividad"
                onClick={() => history.push(`/backoffice/edit/activities/${el.id}`)}
                icon={<EditIcon />}
              />

              <IconButton
                colorScheme="red"
                aria-label="Eliminar actividad"
                onClick={onDelete(el.id)}
                icon={<DeleteIcon />}
                marginLeft="0.5"
              />

              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivitiesList;
