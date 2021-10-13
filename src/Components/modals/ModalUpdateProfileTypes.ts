
type CallbackFunctionType = () => void;

export type ModalStateType ={
    isOpen: boolean,
    onClose: CallbackFunctionType,
    isAdmin:boolean
}