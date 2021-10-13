export const BASEPATH_ORGANIZATION = "/api/organizations/";
export const PATHPUBLIC = "/public";
export const PASSWORD_MIN_LENGTH = 3;
export const PATH_URL_CATEGORY = "/api/categories";

//FORM REGISTER CONST
export const ValidationsRegister = {
  email: {
    PATTERNEMAIL: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    MSGERROREMAIL:
      "El texto ingresado no se corresponde con una dirección de email",
    MSGREQUIRED: "Debe ingresar su email",
  },
  name: {
    MAXLONGNAME: 15,
    MINLONGNAME: 3,
    MSGERRMINAME: "El nombre ingresado es demasiado.",
    MSGERRMAXNAME: "El nombre ingresado es demasiado.",
    MSGREQUIRED: "Debe ingresar su nombre",
  },
  lastname: {
    MAXLONGLNAME: 15,
    MINLONGLNAME: 3,
    MSGERRMINAME: "El apellido ingresado es demasiado corto.",
    MSGERRMAXNAME: "El apellido ingresado es demasiado largo.",
    MSGREQUIRED: "Debe ingresar su apellido",
  },
  password: {
    MSGREQUIRED: "Debe ingresar su contraseña",
    MSGERR: "La contraseña debe tener 8 caracteres como mínimo.",
    TYPE: "password",
    MINVALUE: 8,
  },
};

//FORM LOGIN

export const PATTERN_EMAIL = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

// Footer const

export const OptionsFooter = [
  { TITLE: "Contribuye", PATH: "/contribute" },

  { TITLE: "Actividades", PATH: "/activities" },
  {
    TITLE: "Novedades",
    PATH: "/novedades",
  },
  { TITLE: "Testimonios", PATH: "/testimonies" },
  { TITLE: "Contacto", PATH: "/contact" },
  { TITLE: "Nosotros", PATH: "/about" },
];

export const NEWS_ACTIONS_CONSTANTS = {
  EMPTY_STRING: "",
  EMPTY_CATEGORY: 0,
  FETCH_NEWS_ERROR: "Error al buscar la novedad",
  SUCCESS_MESSAGE_TITLE: "Exito!",
  ERROR_MESSAGE_TITLE: "Error",
  UPDATE_SUCCESS_MESSAGE: "Novedad editada exitosamente",
  UPDATE_ERROR_MESSAGE: "Error al editar novedad",
  CREATE_SUCCESS_MESSAGE: "Novedad creada exitosamente",
  CREATE_ERROR_MESSAGE: "Error al crear novedad",
  MISSING_FIELDS_MESSAGE: "Faltan campos por completar"
}

export const firstHalfOptionsFooter = OptionsFooter.slice(
  0,
  OptionsFooter.length / 2
);

export const SecondHalftOptionsFooter = OptionsFooter.slice(
  OptionsFooter.length / 2
);

export const socialMedias = [
  {
    NAME: "Facebook",
    PATH: "https://www.facebook.com/",
    ICON: "/socialmedia/Facebook.svg",
  },
  {
    NAME: "Instagram",
    PATH: "https://instagram.com/",
    ICON: "/socialmedia/Instagram.svg",
  },
  {
    NAME: "Twitter",
    PATH: "https://twitter.com/",
    ICON: "/socialmedia/Twitter.svg",
  },
];

export const TARGET_BLANK = "_blank";

export const REL = "nofollow noopener";

// Local storage key user
export const LOCAL_STORAGE_KEY = "user";
// Form Edit Home

export const FILE = "file";
export const UPLOAD_IMAGE = "Cargar Imagen";
export const MESSAGE_ONLY_IMAGE = "Solo se puede subir imagenes";
export const IMAGE = "image";
export const CANCEL = "cancel";
export const NONE = "none";
export const PATH_ICON_CANCEL = "/assets/cancel.svg";
export const PATH_ICON_SETTINGS = "/assets/settings.svg";
export const MISSING_CHARACTER = "Faltan {{placeholder}} caracteres.";
export const PLACEHOLDER_FORMAT = "{{placeholder}}";
export const MIN_LENGTH_CHARACTER = 20;
export const PLACEHOLDER_TEXT_AREA_EDIT_HOME = "Texto en la imagen.";
export const EDIT_TEXT_IMAGE = "Editar texto en la imagen.";
export const ACCEPT_FILE_TYPE = "image/*";
export const RESET_ALL = "Resetear todas";
export const RESET_CURRENT = "Resetear actual";
export const RED = "red";
export const TYPE_SUBMIT = "submit";
export const BLUE = "blue";
export const SAVE = "Guardar";
export const SELECT_IMAGE = "Seleccionar imagen";
export const FIRST_IMAGE = "Primera imagen";
export const SECOND_IMAGE = "Segunda imagen";
export const THIRD_IMAGE = "Tercera imagen";
export const ON = "ON";
export const OFF = "OFF";
export const GREEN = "green";
export const SETTINGS = "settings";
export const TEST_ES = "Probar";
export const PATH_URL_ACTIVITY = "/api/activities/";
export const NAME_ES = "Nombre";
export const REQUIRE_ES = "Requerido";

//screen edit organization
export let ValidateName = {
  Register: "name",
  Required: "El nombre es obligatorio",
  MinLong: 4,
  MinLongMsg: "El campo debe contener más de 3 caracteres",
  MaxLong: 30,
  MaxLongMsg: "El campo supera el maximo de caracteres",
};
export let ValidateWelcomeText= {
  Register: "welcomeText",
  Required: "El texto de bienvenida es obligatorio",
  MinLong: 4,
  MinLongMsg: "El campo debe contener más de 3 caracteres",
  MaxLong: 30,
  MaxLongMsg: "El campo supera el maximo de caracteres",
};
export let ValidateImg = {
  Register: "image",
  MsgErr: "inserta un logo en formato .jpg , .jpeg o png",
  type: "type",
  imgJPEG: "image/jpeg",
  imgJPG: "image/jpg",
  imgPNG: "image/png",
};
export const EditOrganization = "/api/organizations";

export const ROLES = {
  ADMIN: "admin",
  MEMBER: "member",
};

//Screen New Detail

export const Loadedtype = "error";
export const PATH_NOVEDAD = "/api/novedad/";

//auth
export const AUTH = "auth";

export const ErroRegister =
  "Error al registrarse: verifique los datos ingresados y vuelva a intentarlo";
export const PATH_REGISTER = "api/register";
export const PATH_LOGIN = "api/login";
export const ErrorLogin = "Error: usuario o contraseña incorrecta";
// Contact List

export const PATH_CONTACTLIST = "api/contacts";
export const PATH_TESTIMONIAL = "api/testimonial";

//Validación Categorias
export const CatgValid = {
  name: {
    req: "El nombre de la categoria es obligatorio",
    maxnum: 15,
    maxMsg: "superaste el maximo de 15 caracteres",
    minnum: 3,
    minMsg: "El nombre de la categoria debe contener más de 3 caracteres",
  },
  descrip: {
    req: "La descripcción es obligatoria",
    maxnum: 250,
    maxMsg: "superaste el maximo de 250 caracteres",
    minnum: 7,
    minMsg: "la descripcción debe contener más de 7 caracteres",
  },
};
