import { useEffect, useState } from "react"
import { getProducts } from "../data/data.js"

const useProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.log("Finalizo la promesa")
      })
  }, [])

  return { products }
}

export default useProducts