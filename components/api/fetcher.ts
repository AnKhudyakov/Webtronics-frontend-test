import axios from "axios";
import type { NewFeedback } from "../types/types";

const instance = axios.create({
  baseURL: "http://localhost:3004/",
});

export const Fetcher = {
  PostFeedback(dataPost: NewFeedback) {
    return instance
      .post(`feedback`, { ...dataPost })
      .then((response) => response.data);
  },
  GetFeedback() {
    return instance.get(`feedback`).then((response) => response.data);
  },
};
