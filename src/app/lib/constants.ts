export const data_INITIAL_STATE: Contact = {
  email: '',
  name: '',
  phone: '',
  message: '',
};

export const warnings_INITIAL_STATE: ContactWarnings = {
  name: false,
  email: false,
  phone: false,
  message: false,
  allFields: false,
};

export const content: Record<ContentType, ContentType> = {
  home: "home",
  logros: "logros",
  prensa: "prensa",
  espectaculos: "espectaculos",
  actuaciones: "actuaciones",
  biografia: "biografia",
  masterClasses: "masterClasses",
};