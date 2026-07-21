import { api } from "./api";

export const getCandidates = async () => {
  const response = await api.get("/api/candidates");
  return response.data.data;
};

export const updateCandidateStatus = async (id, status) => {
  const response = await api.patch(
    `/api/candidates/${id}/status`,
    { status }
  );
  return response.data;
};