import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(cartContext)

  return (
    <Link to="/cart" className="cartwidget">
      <PiShoppingCartBold className="icon-cartwidget" />
      <p className="number-cartwidget">{totalQuantity()}</p>
    </Link>
  )
}
export default CartWidget