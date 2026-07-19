import { api } from "./api";

export const getCandidates = async () => {
  const response = await api.get("/candidates");
  return response.data.data;
};

export const updateCandidateStatus = async (id, status) => {
  const response = await api.patch(
    `/candidates/${id}/status`,
    {
      status,
    }
  );

  return response.data;
};