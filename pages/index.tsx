import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import MainContent from "../components/MainContent/MainContent";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import formReducer from "../components/state";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <title>Webtronics</title>
        <meta name="description" content="Front-end Developer courses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContent />
      <Footer />
    </Provider>
  );
}
