export type Flower = {
  _id: string,
  name: string,
  unit: string,
  image: string[],
  price: number,
  stockQuantity: number
}

export type FlowerTableProps = {
  flowersList: Flower[]
}