import { Product } from "../types/product"
import instance from "./axiosConfig"

export const getCarts = () => {
  return instance.get('/carts')
}

export const addItemCart = (data: Product) => {
  return instance.post('/carts', data)
}

// export const updateItemCart = (data: Product) => {
//   return instance.put(`/carts/${data.id}`, data)
// }

export const removeItemCart = (id: number) => {
  return instance.delete(`/carts/${id}`)
}

