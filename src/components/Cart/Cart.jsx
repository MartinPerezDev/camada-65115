import { useContext } from "react"
import { cartContext } from "../../context/CartContext"

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(cartContext)

  return (
    <div>
      {
        cart.map((productCart)=> (
          <div key={productCart.id} style={{ display: "flex", justifyContent: "space-around" }}>
            <img src={productCart.image} alt="" width={100} />
            <p>{productCart.name}</p>
            <p>Precio c/u: {productCart.price}</p>
            <p>Cantidad: {productCart.quantity}</p>
            <p>Precio parcial: {productCart.quantity * productCart.price}</p>
            <button onClick={ () => deleteProductById(productCart.id) } >eliminar producto</button>
          </div>
        ))
      }

      <p>Precio total: {totalPrice()}</p>
      <button onClick={deleteCart} >Vaciar carrito</button>
    </div>
  )
}
export default Cart