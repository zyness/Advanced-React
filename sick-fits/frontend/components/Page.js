import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {font-family: "Diodrum"; src: url("//db.onlinewebfonts.com/t/f42a40f289fd237da5d2fd13fee2cc1e.eot"); src: url("//db.onlinewebfonts.com/t/f42a40f289fd237da5d2fd13fee2cc1e.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/f42a40f289fd237da5d2fd13fee2cc1e.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/f42a40f289fd237da5d2fd13fee2cc1e.woff") format("woff"), url("//db.onlinewebfonts.com/t/f42a40f289fd237da5d2fd13fee2cc1e.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/f42a40f289fd237da5d2fd13fee2cc1e.svg#Diodrum") format("svg"); }
  @font-face {font-family: "Museo Cyrl 500"; src: url("//db.onlinewebfonts.com/t/0d14f14ef7089ae17ef0d807d3967ff4.eot"); src: url("//db.onlinewebfonts.com/t/0d14f14ef7089ae17ef0d807d3967ff4.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0d14f14ef7089ae17ef0d807d3967ff4.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/0d14f14ef7089ae17ef0d807d3967ff4.woff") format("woff"), url("//db.onlinewebfonts.com/t/0d14f14ef7089ae17ef0d807d3967ff4.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/0d14f14ef7089ae17ef0d807d3967ff4.svg#Museo Cyrl 500") format("svg"); }
  @font-face {font-family: "Boring Sans B Trial"; src: url("//db.onlinewebfonts.com/t/66693b19e3b970ea27f380170e28f9d5.eot"); src: url("//db.onlinewebfonts.com/t/66693b19e3b970ea27f380170e28f9d5.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/66693b19e3b970ea27f380170e28f9d5.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/66693b19e3b970ea27f380170e28f9d5.woff") format("woff"), url("//db.onlinewebfonts.com/t/66693b19e3b970ea27f380170e28f9d5.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/66693b19e3b970ea27f380170e28f9d5.svg#Boring Sans B Trial") format("svg"); }
  
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --ligthGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    font-family: 'radnika_next', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* font-family: 'Boring Sans B Trial'; */
    padding: 0;
    margin:0;
    font-size:1.5rem;
    line-height:2;
  }
  a {
    text-decoration: none;
    color: var(--black, black)
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'radnika_next', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnserStyle = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

const Page = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    <InnserStyle>{children}</InnserStyle>
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
