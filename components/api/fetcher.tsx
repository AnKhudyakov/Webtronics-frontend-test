import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3004/",
});

type dataPostObj = {
  id: number;
  email: string;
  name: string;
  phone: string;
}

export const Fetcher = {
  PostFeedback(dataPost: dataPostObj) {
    return instance
      .post(`feedback`, { ...dataPost })
      .then((response) => response.data);
  },
  GetFeedback() {
    return instance.get(`feedback`).then((response) => response.data);
  },
};
