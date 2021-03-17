import { useCart } from '../lib/cartState';

const MyCart = () => {
  const { openCart } = useCart();
  return (
    <button type="button" onClick={openCart}>
      My Cart
    </button>
  );
};

export default MyCart;
