import React from 'react'
import styled from 'styled-components'

export default function LoginButton({children}) {
	return (
		<StyledButton>
			{children}
		</StyledButton>
	)
}

const StyledButton = styled.button`
	background: #c62917;
	font-size: 16px;
	margin-bottom: 15px;
	height: 40px;
	width: 100%;
	cursor: pointer;
	color: white;
`