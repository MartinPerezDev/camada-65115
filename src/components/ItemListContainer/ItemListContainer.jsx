import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { getProducts, getProductById, addProduct, modProduct, deleteProduct } from "../../utils/fetchApi.js"
import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])

  const newProduct = {
    nombre: "Remera Extreme",
    descripcion: "",
    precio: 400,
    stock: 10,
    imagen: "/img/remera-h.jpg",
    categoria: "remeras"
  }

  const mod = {
    precio: 10
  }

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))

    getProductById(2)
      .then((data) => console.log(data))
  }, [])

  const clickEvento = () => {

    deleteProduct(2)
      .then((data)=> setProducts(data))

    /*
    modProduct(1, mod)
      .then((data)=> setProducts(data))

    addProduct(newProduct)
      .then((data)=> setProducts(data) )
    */
  }

  return (
    <div className="itemlistcontainer">
      <h1>{saludo}</h1>
      <button onClick={clickEvento} >eliminar producto</button>
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer