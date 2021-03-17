import Link from 'next/link';
import MyCart from './MyCart';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import useUser from './User';

const Nav = () => {
  const user = useUser();
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut />
          <MyCart />
        </>
      )}
      {!user && <Link href="/signin">Sign In</Link>}
    </NavStyles>
  );
};

export default Nav;
