const apiService = (url, endpoint) => {
  const baseUrl = `${url}/${endpoint}`;
  const jsonContentHeader = {
    "Content-type": "application/json; charset=UTF-8",
  };

  return {
    getAll: async (params) => {
      const searchParams = new URLSearchParams({ ...params });
      const response = await fetch(`${baseUrl}?${searchParams}`);
      return response.json();
    },

    getById: async (id) => {
      const response = await fetch(`${baseUrl}/${id}`);
      return response.json();
    },

    post: async (body) => {
      const response = await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          ...jsonContentHeader,
        },
      });
      return response.json();
    },

    postAudio: async (formData) => {
      const response = await fetch(baseUrl, {
        method: "POST",
        body: formData,
      });
      return response.json();
    },

    put: async (id, body) => {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          ...jsonContentHeader,
        },
      });
      return response.json();
    },

    patch: async (id, body) => {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          ...jsonContentHeader,
        },
      });
      return response.json();
    },

    delete: async (id) => {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
      });
      return response.json();
    },
  };
};

export default apiService;
