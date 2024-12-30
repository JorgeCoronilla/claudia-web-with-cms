interface Contact {
  email: string;
  name: string;
  phone: string;
  message: string;
}

interface ContactWarnings {
  name: boolean;
  email: boolean;
  phone: boolean;
  message: boolean;
  allFields: boolean;
}

type ContentType = "home" | "logros" | "prensa" | "espectaculos" | "actuaciones" | "biografia" | "masterClasses"
