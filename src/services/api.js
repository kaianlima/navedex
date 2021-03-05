import axios from "axios"

const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
})

api.interceptors.response.use((response) => response.data)

export const postUserLogin = async (email, password) => {
  let user = null

  try {
    user = await api.post("users/login", {
      email,
      password,
    })
    axios.defaults.headers.common = { Authorization: `Bearer ${user.token}` }
  } catch (error) {
    user = error.message
  }
  return user
}

export const removeBearerToken = () => {
  axios.defaults.headers.common = {}
}

export default api
