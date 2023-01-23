import axios from "axios";
import type { newFeedback } from "../state";

const instance = axios.create({
  baseURL: "http://localhost:3004/",
});

export const Fetcher = {
  PostFeedback(dataPost: newFeedback) {
    return instance
      .post(`feedback`, { ...dataPost })
      .then((response) => response.data);
  },
  GetFeedback() {
    return instance.get(`feedback`).then((response) => response.data);
  },
};
