import React from "react";
import classes from "./styles/styles.module.css";
import users from "./exampleList.json";
import { Text, IconButton, Center, Spinner } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleteUserService, getUsersService } from "../../services/userService";
import { useMutation, useQuery, useQueryClient} from 'react-query';
import { Link } from "react-router-dom";
import { questionAlert } from "../alertBox";
import { userType } from "../FormComponents/formEditUser/types";

const UsersList = () => {
  //get all users
  const {isLoading, isError, data, error} = useQuery('getAllUsers', getUsersService);

  const queryClient = useQueryClient()

  //delete user by id
  const deleteUserMutation = useMutation((id:string) => deleteUserService(id), {
    onSuccess: (data, variable) => {
      //I get the users cached from the getAllUsers query
      let users = queryClient.getQueryData<userType[]>('getAllUsers');
      
      //if it was deleted correctly
      if( data.deleted === true && users != undefined ){
        // I delete the user deleted from the cache
        users = users.filter((element:userType) => element.id !== Number(variable))
        queryClient.setQueryData('getAllUsers', users);
      }


    },
    onError: error => {
      console.log(error)
    }
  })

  const showAlert = (userDelete: userType) => {
    const data = {
      title: 'Eliminar novedad',
      text: `Estas seguro que deseas eliminar el usuario "${userDelete.firstName} ${userDelete.lastName}" ?`
    }

    const callbacks = {
      async confirmed (){ 
        await deleteUserMutation.mutate(userDelete.id);
      },
      denied () {}
    }

    //create the alert
    questionAlert(data, callbacks);
  }


  if( isLoading ) return <Center w="100%"> <Spinner m="10px" size="xl" color="blue" thickness="5px" /></Center>

  if( isError ) return <Text w="100%" align='center' fontSize="3xl" color="blue.800">Ha ocurrido un error</Text>

  return (
    <div className={classes.container}>
      <ul>
        <li className={classes.tableHeader}>
          <div className={`${classes.col} ${classes.col1}`}>
            <Text fontWeight="bold">Nombre</Text>
          </div>
          <div className={`${classes.col} ${classes.col2}`}>
            <Text fontWeight="bold">Apellido</Text>
          </div>
          <div className={`${classes.col} ${classes.col3}`}>
            <Text fontWeight="bold">Email</Text>
          </div>
          <div className={`${classes.col} ${classes.col4}`}>
            <Text fontWeight="bold">Administrar</Text>
          </div>
        </li>
        {data.map((el) => (
          <li className={classes.listItem} key={el.id}>
            <div
              className={`${classes.col} ${classes.col1}`}
              data-label="Nombre"
            >
              {el.firstName}
            </div>
            <div
              className={`${classes.col} ${classes.col2}`}
              data-label="Apellido"
            >
              {el.lastName}
            </div>
            <div
              className={`${classes.col} ${classes.col3}`}
              data-label="Email"
            >
              {el.email}
            </div>
            <div
              className={`${classes.col} ${classes.col4}`}
              data-label="Administrar"
            >
              <span className={classes.buttons}>
                <Link to={`/backoffice/edit/users/${el.id}`}>
                  <IconButton
                    colorScheme="facebook"
                    aria-label="Search database"
                    icon={<EditIcon />}
                  />
                </Link>
                <IconButton
                  colorScheme="red"
                  aria-label="Search database"
                  icon={<DeleteIcon />}
                  marginLeft="0.5"
                  onClick={() => showAlert(el)}
                />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
