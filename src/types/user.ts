export interface User {
  id?: number,
  name: string,
  email: string,
  password: string,
  phone: string
}

export interface loginUser {
  email: string,
  password: string
}