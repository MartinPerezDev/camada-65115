import { getProducts } from "../../data/data.js"
import { useState, useEffect } from "react"
import ItemList from "./ItemList"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then((dataProducts) => {
        setProducts(dataProducts)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <h1> {saludo} </h1>
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer