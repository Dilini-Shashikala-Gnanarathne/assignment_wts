export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  institute: string;
  details: string;
  duration: string;
}

export interface Contact {
  label: string;
  value: string;
  href?: string;
  icon: string;
}