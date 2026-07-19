import { api } from "./api";

export const getInterviewers = async () => {
  const response = await api.get("/interviewers");
  return response.data.data;
};