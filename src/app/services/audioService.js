import apiService from "./apiService";
import API_BASE_URL from "../../constants/api/api";

async function sendAudioRequest(audioFile, idUser, idChat) {
  const endpoint = "audio";
  const formData = new FormData();
  formData.append("idUser", idUser);
  formData.append("idChat", idChat);
  formData.append("audioFile", audioFile);
  const service = apiService(API_BASE_URL, endpoint);
  return service.postAudio(formData);
}

export default sendAudioRequest;
