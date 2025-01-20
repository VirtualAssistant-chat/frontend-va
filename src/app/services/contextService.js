import apiService from "./apiService";
import API_BASE_URL from "../../constants/api/api";

const endpoint = "context";

export async function getAllContextByAUser(idUser) {
  const service = apiService(API_BASE_URL, `${endpoint}/user`);
  return service.getById(idUser);
}

export async function createContextByAUser(context) {
  const service = apiService(API_BASE_URL, endpoint);
  return service.post(context);
}

export async function getContextById(contextId) {
  const service = apiService(API_BASE_URL, endpoint);
  return service.getById(contextId);
}
