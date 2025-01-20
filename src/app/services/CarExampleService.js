import apiService from "./apiService";

const url = "api/v1/";
const endpoint = "cars";

async function getWorkflowTemplatesOfLoggedUser() {
  const service = apiService(url, endpoint);

  const res = await service.getAll();
  return res.data;
}

export default getWorkflowTemplatesOfLoggedUser;
