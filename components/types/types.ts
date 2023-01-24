export type Nullable<T> = null | T;

export type FeedbackType = {
  id: number | null;
  email: string;
  name: string;
  phone: string;
};

export type Fields = {
  name: "name" | "email" | "phone";
  error: boolean;
};
