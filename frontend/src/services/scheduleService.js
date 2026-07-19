import { api } from "./api";

export const scheduleInterview = async (payload) => {
  const response = await api.post("/schedule", payload);
  return response.data;
};

export const getSchedule = async () => {
  const response = await api.get("/schedule");
  return response.data;
};