import React from 'react'
import styled from 'styled-components'


export default function CheckIdButton({onClick, children}) {
	return (
		<div>
			<StyledButton onClick={onClick}>{children}</StyledButton>
		</div>
	)
}

const StyledButton = styled.button`
	width: 18%;
	outline: none;
	box-sizing: border-box;
	border-radius: 5px;
	color: #fff;
	cursor: pointer;
	background: #bbb;
	height: 25px;
	margin-bottom: 8px;
	font-size: 13px;
	line-height: 25px;
`