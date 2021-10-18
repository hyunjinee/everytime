import React from 'react'
import styled from 'styled-components'
export default function Login() {
	return (
		<LoginContainer>
			{/* <h1>
				<a href="/">에브리타임</a>
			</h1> */}
			{/* <Logo></Logo> */}
			{/* <h1 style={{backgroundImage: url('../assets/index.login.logo.png')}}>

			</h1> */}
			<img src="../../assets/index.login.logo.png"/>
		</LoginContainer>
	)
}

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: pink; */
    min-height: 100vh;
`
const Logo = styled.h1`
	background: transparent url("../assets/index.login.logo.png");
	height: 60px;
`