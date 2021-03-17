import { useCart } from '../lib/cartState';
import CartCount from './CartCount';

const MyCart = ({ cartCount }) => {
  const { openCart } = useCart();
  return (
    <button type="button" onClick={openCart}>
      My Cart
      <CartCount count={cartCount} />
    </button>
  );
};

export default MyCart;
