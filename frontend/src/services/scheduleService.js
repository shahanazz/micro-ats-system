import { api } from "./api";

export const scheduleInterview = async (payload) => {
  const response = await api.post("/api/schedule", payload);
  return response.data;
};

export const getSchedule = async () => {
  const response = await api.get("/api/schedule");
  return response.data;
};