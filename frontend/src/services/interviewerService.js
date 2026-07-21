import { api } from "./api";

export const getInterviewers = async () => {
  const response = await api.get("/api/interviewers");
  return response.data.data;
};