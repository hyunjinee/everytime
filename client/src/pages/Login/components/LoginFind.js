import React from 'react'
import styled from 'styled-components'

export default function LoginFind() {
	return (
        <StyledP>
					<StyledA href="/forgot">아이디/비밀번호 찾기</StyledA>
				</StyledP>
    )
}

const StyledP = styled.p`
  float: right;
	padding-right: 10px;
	height: 15px;
	line-height: 15px;
	font-size: 13px;
`
const StyledA = styled.a`
	color: #444444;
`