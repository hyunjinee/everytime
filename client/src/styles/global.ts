import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    width: 100vw;
    height: 100vh;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none /* Chrome, Safari, Opera */;
    }
  }
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap");

/* * {
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: -0.02rem;
} */

img {
  border: 0;
}

button {
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
}

body {
  background: #fff;
}

img,
input,
select,
textarea {
  vertical-align: middle;
}

body,
div,
nav,
aside,
article,
h1,
h2,
h3,
h4,
ol,
ul,
li,
dl,
dt,
dd,
p,
span,
form,
th,
td,
input,
textarea,
select,
pre,
address {
  color: #666;
  font-family: "맑은 고딕", 돋움, tahoma;
  _font-family: 돋움, tahoma;
  font-size: 12px;
  letter-spacing: -0.5px;
}

input {
  text-decoration: none;
  outline: none;
  border: none;
  box-sizing: border-box;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

li {
  list-style: none;
}

`;

export default GlobalStyle;
