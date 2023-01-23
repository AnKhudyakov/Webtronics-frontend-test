import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../pages/index";

interface menuObj {
  href: string;
  name: string;
}

interface mentorsObj {
  icon: string;
  name: string;
  desc: string;
}

interface newFeedback {
  id: number | null;
  email: string;
  name: string;
  phone: string;
}

interface Steps {
  name: string;
  title: string;
  desc: string;
}

interface Questions {
  id: number;
  name: string;
  desc: string;
  open: boolean;
}

interface Fields {
  name: string;
  error: boolean;
}

interface FormState {
  id: number | null;
  menu: Array<menuObj>;
  menuFooter: Array<menuObj>;
  mentors: Array<mentorsObj>;
  fields: Array<Fields>;
  techs: Array<string>;
  newFeedback: newFeedback;
  stepsLeft: Array<Steps>;
  stepsRight: Array<Steps>;
  questions: Array<Questions>;
}

const initialState: FormState = {
  id: null,
  newFeedback: { id: null, email: "", name: "", phone: "" },
  menu: [
    { href: "about", name: "About" },
    { href: "programs", name: "Programs" },
    { href: "steps", name: "Steps" },
    { href: "questions", name: "Questions" },
    { href: "getInTouch", name: "Get in touch" },
  ],
  menuFooter: [
    { href: "about", name: "About Us" },
    { href: "review", name: "Review" },
    { href: "steps", name: "Steps" },
    { href: "gallery", name: "Gallery" },
    { href: "questions", name: "FAQs" },
  ],
  mentors: [
    {
      name: "Wade Warren",
      icon: "WadeWarren",
      desc: "Front-end engineers work closely with designers",
    },
    {
      name: "Kristin Watson",
      icon: "KristinWatson",
      desc: "Front-end engineers work closely with designers",
    },
    {
      name: "Robert Fox",
      icon: "RobertFox",
      desc: "Front-end engineers work closely with designers",
    },
  ],
  fields: [
    { name: "Name", error: false },
    { name: "Phone", error: false },
    { name: "Email", error: false },
  ],
  techs: ["Angular", "React", "Vue", "JavaScript"],
  stepsLeft: [
    {
      name: "Step1",
      title: "Introduction to Front-End",
      desc: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
    },

    {
      name: "Step3",
      title: "Introduction to Front-End",
      desc: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
    },

    {
      name: "Step5",
      title: "Introduction to Front-End ",
      desc: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
    },
  ],
  stepsRight: [
    {
      name: "Step2",
      title: "Overview of Development",
      desc: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
    },

    {
      name: "Step4",
      title: "Overview of Development",
      desc: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
    },

    {
      name: "Step6",
      title: "Overview of Development",
      desc: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
    },
  ],
  questions: [
    {
      id: 1,
      name: "What is the price?",
      desc: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
      open: false,
    },
    {
      id: 2,
      name: "What is the price?",
      desc: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
      open: false,
    },
    {
      id: 3,
      name: "What is the price?",
      desc: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
      open: false,
    },
    {
      id: 4,
      name: "What is the price?",
      desc: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
      open: false,
    },
    {
      id: 5,
      name: "What is the price?",
      desc: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
      open: false,
    },
  ],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    setErrorName: (state) => {
      state.fields[0].error = !state.fields[0].error;
    },
    setErrorPhone: (state) => {
      state.fields[1].error = !state.fields[1].error;
    },
    setErrorEmail: (state) => {
      state.fields[2].error = !state.fields[2].error;
    },
  },
});

export const { setId,setErrorName,setErrorPhone,setErrorEmail } = formSlice.actions;

export const selectId = (state: RootState) => state.form.id;
export const selectMenu = (state: RootState) => state.form.menu;
export const selectMentors = (state: RootState) => state.form.mentors;
export const selectFields = (state: RootState) => state.form.fields;
export const selectTechs = (state: RootState) => state.form.techs;

export default formSlice.reducer;
