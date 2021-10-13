import {
    Button,
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Spinner,
} from "@chakra-ui/react";
import FormEditUser from '../FormComponents/formEditUser/IndexFormEditUser'
import React, { useState } from "react";


import { ModalStateType } from "./ModalUpdateProfileTypes";

export const ModalUpdateProfile = ({isOpen, onClose, isAdmin}:ModalStateType): JSX.Element => {

    const [isLoading, setIsLoading] = useState(false);
  
    const onSubmit = ()=> {
  
        //send the form
        // mutation.mutate(data);
        //we simulate the request
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false)
        },2000)
  
    };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar Perfil</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <FormEditUser onSubmit={onSubmit} isAdmin={isAdmin} defaultValues={{}}/>
        </ModalBody>

        {isLoading ? (
          <Center mb={4}>
            <Spinner size="xl" color="green" thickness="5px" />
          </Center>
        ) : (
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="green" type="submit" form="updateUserForm">
              Guardar Cambios
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};
