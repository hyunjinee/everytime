import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import logo from "../../assets/index.login.logo.png"
import mlogo from "../../assets/index.login.logo.big.png"
import LoginButton from "./components/LoginButton"
import LoginFind from "./components/LoginFind"
import LoginInput from "./components/LoginInput"
import LoginPersist from "./components/LoginPersist"
import LoginRegister from "./components/LoginRegister"

export default function Login() {
  const isMobile = useMediaQuery({
    query: "(max-width:640px)",
  })
  const [form, setForm] = useState({ id: "", password: "" })
  const { id, password } = form
  const onChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  return (
    <>
      <LoginContainer
        position={isMobile ? "static" : "absolute"}
        mobile={isMobile ? true : false}
        width={isMobile ? "auto" : null}
      >
        <Logo mobile={isMobile ? true : false} />
        <LoginInput
          type="text"
          name="id"
          placeholder="아이디"
          value={id}
          onChange={onChange}
        />
        <LoginInput
          type="text"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChange}
        />
        <LoginButton>로그인</LoginButton>
        <LoginPersist />
        <LoginFind />
        <LoginRegister />
      </LoginContainer>
      <Footer>
        <Links mobile={isMobile ? true : false}>
          <Link>
            <a href="https://everytime.kr/page/serviceagreement">이용약관</a>
          </Link>
          <Link bold={true}>
            <a href="https://everytime.kr/page/privacy">개인정보처리방침</a>
          </Link>
          <Link>
            <a href="https://everytime.kr/page/faq">문의하기</a>
          </Link>
          <Link bold={true}>
            <a href="https://everytime.kr/">© 에브리타임</a>
          </Link>
        </Links>
      </Footer>
    </>
  )
}

const LoginContainer = styled.div`
  position: ${(props) => props.position};
  left: 50%;
  top: 50%;
  margin: ${(props) => props.mobile && "30px 15px"};
  margin-top: ${(props) => !props.mobile && "-170px"};
  margin-left: ${(props) => !props.mobile && "-180px"};
  width: ${(props) => props.width || "360px"};
  height: 280px;
`
const Logo = styled.h1`
  height: 60px;
  width: ${(props) => (props.mobile ? "100%" : "360px")};
  background: transparent url(${(props) => (props.mobile ? mlogo : logo)})
    no-repeat;
  background-size: ${(props) => props.mobile && "60px 60px"};
  background-position: ${(props) => props.mobile && "center center"};
  margin: 0px 0px 15px;
`
const Footer = styled.address`
  position: fixed;
  bottom: 0;
  background-color: #f8f8f8;
  border-top: 1px solid #e3e3e3;
  font-style: normal;
  width: 100%;
  text-align: center;
`
const Links = styled.ul`
  padding: 20px 0;
  padding: ${(props) => (props.mobile ? "15px 0" : "20px 0")};
  font-size: 0;
`
const Link = styled.li`
  display: inline-block;
  margin: 0 5px;
  font-size: 13px;
  > a {
    color: #737373;
    font-weight: ${(props) => props.bold && "bold"};
  }
`
