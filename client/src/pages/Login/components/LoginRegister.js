import React from 'react'
import styled from 'styled-components'

export default function LoginRegister() {
	return (
		<StyledP>
			<StyledSpan>에브리타임에 처음이신가요?</StyledSpan>
			<Register href="/register">회원가입</Register>
		</StyledP>
	)
}

const StyledP = styled.p`
    clear: both;
		padding-top: 30px;
		height: 20px;
		text-align: center;
`
const StyledSpan = styled.span`
	margin-right: 5px;
	color: #a6a6a6;
	font-size: 16px;
`
const Register = styled.a`
	color: #c62917;
	font-size: 16px;
	font-weight: bold;
`