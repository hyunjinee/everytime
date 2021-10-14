import React from 'react'
import styled from 'styled-components'
import StyledContainer from '../components/Style/styledContainer'
import logo from '../assets/logo.png'
import LoginInput from '../components/Login/LoginInput'
export default function Login() {
	return (
		<StyledContainer>
			<div>
				<FlexBox>
					<Logo src={logo} alt='logo'/>
					<LogoTitle>지금 
            <strong> 에브리타임</strong>
            을 시작하세요!
          </LogoTitle>
				</FlexBox>
				<form>
					<LoginInput
						type="text"
						name="userId"
						placeholder="아이디"
						// onChange={onChange}
						// value={userId}
					/>
					<LoginInput
						type="password"
						name="userPw"
						placeholder="비밀번호"
						// onChange={onChange}
						// value={userPw}
					/>
				</form>
			</div>
		</StyledContainer>
	)
}

const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 50px 0px 12px 0px;
`
const Logo = styled.img`
	display: inline-block;
	width: 48px;
	height: 52px;
`
const LogoTitle = styled.h2`
	color: #757575;
	font-size: 16px;
	font-weight: normal;
	padding: 28px 8px 0px 0px;
	letter-spacing: -0.045rem;
`