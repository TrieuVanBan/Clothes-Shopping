import { User, loginUser } from "../types/user"
import instance from "./axiosConfig"

export const getUsers = () => {
  return instance.get('/users')
}

export const createUser = (data: any) => {
  return instance.post(`/users`, data)
}

export const register = (data: User) => {
  return instance.post(`/register`, data)
}

export const login = (data: loginUser) => {
  return instance.post(`/signin`, data)
}

