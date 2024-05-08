import instance from "./axiosConfig"

export const getProducts = () => {
  return instance.get('/products')
}

export const readProduct = (id: any) => {
  return instance.get(`/products/${id}`)
}

// export const filterPro = (id: any) => {
//     return instance.get(`/products?cateId=${id}`)
// }
