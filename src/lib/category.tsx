import instance from "./axiosConfig"

export const getCategories = () => {
  return instance.get('/category')
}


