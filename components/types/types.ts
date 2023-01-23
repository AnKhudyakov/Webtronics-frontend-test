export type MenuObj = {
    href: string;
    name: string;
  };
  
  export type MentorsObj = {
    icon: string;
    name: string;
    desc: string;
  };
  
  export type NewFeedback = {
    id: number | null;
    email: string;
    name: string;
    phone: string;
  };
  
  export type Steps = {
    name: string;
    title: string;
    desc: string;
  };
  
  export type Questions = {
    id?: number;
    name: string;
    desc: string;
  };
  
  export type Fields = {
    name: "name" | "email" | "phone";
    error: boolean;
  };
  
  export type FormState = {
    id: number | null;
    menu: Array<MenuObj>;
    menuFooter: Array<MenuObj>;
    mentors: Array<MentorsObj>;
    fields: Array<Fields>;
    techs: Array<string>;
    newFeedback: NewFeedback;
    stepsLeft: Array<Steps>;
    stepsRight: Array<Steps>;
    questions: Array<Questions>;
  };