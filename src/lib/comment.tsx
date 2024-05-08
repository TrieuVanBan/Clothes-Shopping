import instance from "./axiosConfig"

export const getComments = () => {
  return instance.get('/comments')
}

export const createComment = (data: any) => {
  return instance.post(`/comments`, data)
}

