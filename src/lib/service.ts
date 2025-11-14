// import api from "@/lib/api"

// export const postsServices = {
//   getAll: () => api.get(`/api/articles?populate=*`),
//   getById: (id: number | string) => api.get(`/api/articles/${id}`),
//   create: (data: any) => api.post("/api/articles", data),
//   update: (id: number | string, data: any) => api.put(`/api/articles/${id}`, data),
//   delete: (id: number | string) => api.delete(`/api/articles${id}`),
// }

// export const categoryServices = {
//   getAll: () => api.get("/category"),
//   getById: (id: number | string) => api.get(`/category/${id}`),
//   create: (data: any) => api.post("/category", data),
//   update: (id: number | string, data: any) => api.put(`/category/${id}`, data),
//   delete: (id: number | string) => api.delete(`/category/${id}`),
// }

// export const commentServices = {
//   getAll: () => api.get("/comment"),
//   getById: (id: number | string) => api.get(`/comment/${id}`),
//   create: (data: any) => api.post("/comment", data),
//   update: (id: number | string, data: any) => api.put(`/comment/${id}`, data),
//   delete: (id: number | string) => api.delete(`/comment/${id}`),
// }

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const handleError = (error: any, defaultMessage: string) => {
  console.error("API Error:", error); // Log the error for debugging
  return new Error(error?.message || defaultMessage);
};

export const fetchPostData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/articles?populate=*`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error("RESPONSE ERROR:", errText);
    throw new Error("Failed to fetch article data");
  }

  return await response.json();
};

