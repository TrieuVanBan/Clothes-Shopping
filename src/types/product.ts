export interface Product {
  id?: number,
  cateId: number,
  name: string,
  color: [],
  size: [],
  image: string,
  price: number,
  reprice?: number,
  discount: string,
  quantity: number,
  description: string
}