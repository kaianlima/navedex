import axios from "axios"
import { store } from "../redux/store"

import { formDateStringToFormat } from "../utils/time"

let config = {
  baseURL: "https://navedex-api.herokuapp.com/v1",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
}

const api = axios.create(config)

api.interceptors.response.use((response) => response.data)

let user = null

export const postUserLogin = async (email, password) => {
  try {
    user = await api.post("users/login", {
      email,
      password,
    })
  } catch (error) {
    throw error.message
  }
  return user
}

export const removeBearerToken = () => {
  axios.defaults.headers.common = {}
}

export const fetchNavers = async () => {
  let navers = null
  setStoreToken()

  try {
    navers = await api.get("navers")
  } catch (error) {
    throw error.message
  }
  return navers
}

export const postNaver = async (naverData) => {
  setStoreToken()

  let { name, admission_date, job_role, project, birthdate, url } = naverData
  admission_date = formDateStringToFormat(admission_date)
  birthdate = formDateStringToFormat(birthdate)

  try {
    await api.post("navers", {
      name,
      admission_date,
      job_role,
      project,
      birthdate,
      url,
    })
  } catch (error) {
    throw error.message
  }

  const feedback = {
    title: "Naver criado",
    content: "Naver criado com sucesso!",
  }

  return feedback
}

export const putNaver = async (naverData) => {
  setStoreToken()

  let {
    id,
    name,
    admission_date,
    job_role,
    project,
    birthdate,
    url,
  } = naverData
  admission_date = formDateStringToFormat(admission_date)
  birthdate = formDateStringToFormat(birthdate)

  try {
    await api.put(`navers/${id}`, {
      name,
      admission_date,
      job_role,
      project,
      birthdate,
      url,
    })
  } catch (error) {
    throw error.message
  }

  const feedback = {
    title: "Naver atualizado",
    content: "Naver atualizado com sucesso!",
  }

  return feedback
}

export const deleteNaver = async (naverData) => {
  setStoreToken()

  let {
    id,
    name,
    admission_date,
    job_role,
    project,
    birthdate,
    url,
  } = naverData
  admission_date = formDateStringToFormat(admission_date)
  birthdate = formDateStringToFormat(birthdate)

  try {
    await api.delete(`navers/${id}`, {
      name,
      admission_date,
      job_role,
      project,
      birthdate,
      url,
    })
  } catch (error) {
    throw error.message
  }

  const feedback = {
    title: "Naver excluído",
    content: "Naver excluído com sucesso!",
  }

  return feedback
}

export const setStoreToken = () => {
  const token = store.getState().user.currentUser.token
  if (token) {
    api.defaults.headers.common["Authorization"] = "Bearer " + token
  } else {
    api.defaults.headers.common["Authorization"] = null
  }
}

export default api
