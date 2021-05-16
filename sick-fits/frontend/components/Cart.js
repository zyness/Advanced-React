import Link from 'next/link';
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import formatMoney from '../lib/formatMoney';
import CartItem from './CartItem';
import Checkout from './Checkout';
import { CartStyles, Separator } from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import Supreme from './styles/Supreme';
import useUser from './User';

const Cart = () => {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();
  if (!me) return null;
  return (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>{me.name}'s Cart</Supreme>
      </header>
      <CloseButton onClick={closeCart}>&times;</CloseButton>
      <ul>
        <Link href="/sell">Meine Kurs</Link>
        <Link href="/orders">Meine Rechnung</Link>
        <Link href="/account">Mein Einkaufswagen</Link>
        <Link href="/account">Konto Einstellungen</Link>
        <Separator />
        <Link href="/account">Logout</Link>
      </ul>
      <footer>
        <a href="http://facebook.com">
          <FacebookOutlined style={{ color: '#b2b2b2' }} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/katharina_fitnesss/"
        >
          <InstagramOutlined style={{ color: '#b2b2b2' }} />
        </a>
      </footer>
    </CartStyles>
  );
};

export default Cart;
