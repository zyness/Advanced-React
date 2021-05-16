import styled from 'styled-components';

export const Separator = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const CartStyles = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  background-image: url('https://waveride.qodeinteractive.com/wp-content/uploads/2020/02/sidearea-bg-img-2.png');
  background-color: #181818;
  width: 540px;
  height: 100%;
  min-height: 100%;
  padding: 55px 135px 36px 65px;
  background-position: right !important;
  transform: translateX(100%);
  transition: all 0.3s;
  text-align: left;
  z-index: 100;
  box-sizing: border-box;
  box-shadow: -3px 0 3px rgba(0, 0, 0, 0.04);
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 5px solid var(--black);
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    height: 20%;
  }
  footer {
    border-top: 10px double var(--black);
    bottom: 0;
    margin-top: 2rem;
    padding-top: 2rem;
    font-size: 3rem;
    font-weight: 900;
    display: flex;
    justify-content: flex-end;
    a {
      padding-right: 10px;
    }
  }
  ul {
    list-style: none outside;
    height: 60%;
    margin: 0;
    padding: 0;
    border: 0;
    letter-spacing: 0px;
    color: #181818;
    .logout {
      padding-top: 30px;
    }
    a {
      line-height: 70px;
      display: block;
      padding: 0 20px;
      white-space: nowrap;
      text-align: center;
      color: #b2b2b2;
      font-size: 20px;
      font-weight: bold;
      &:hover,
      &:focus {
        outline: none;
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;
// const CartStyles = styled.div`
//   padding: 20px;
//   position: relative;
//   background: white;
//   position: fixed;
//   height: 100%;
//   top: 0;
//   right: 0;
//   width: 40%;
//   min-width: 500px;
//   bottom: 0;
//   transform: translateX(100%);
//   transition: all 0.3s;
//   box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
//   z-index: 5;
//   display: grid;
//   grid-template-rows: auto 1fr auto;
//   ${(props) => props.open && `transform: translateX(0);`};
//   header {
//     border-bottom: 5px solid var(--black);
//     margin-bottom: 2rem;
//     padding-bottom: 2rem;
//   }
//   footer {
//     border-top: 10px double var(--black);
//     margin-top: 2rem;
//     padding-top: 2rem;
//     /* display: grid;
//     grid-template-columns: auto auto; */
//     align-items: center;
//     font-size: 3rem;
//     font-weight: 900;
//     p {
//       margin: 0;
//     }
//   }
//   ul {
//     margin: 0;
//     padding: 0;
//     list-style: none;
//     overflow: scroll;
//   }
// `;
// export default CartStyles;
