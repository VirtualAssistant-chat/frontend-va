import apiService from "./apiService";
import API_BASE_URL from "../../constants/api/api";

export async function createTextRequest(requestBody) {
  const endpoint = "textRequest";
  const service = apiService(API_BASE_URL, endpoint);

  return service.post(requestBody);
}

export async function getRequestAndResponses(userId, contextId, numberPage) {
  const endpoint = `users/${userId}/contexts/${contextId}`;
  const service = apiService(API_BASE_URL, endpoint);
  const res = await service.getAll({ page: numberPage });
  return res.reverse();
}
