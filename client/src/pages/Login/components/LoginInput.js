import React from 'react'
import styled from 'styled-components'

export default function LoginInput({ type, name, placeholder, value, onChange }) {
	return (
		<StyledInput
			type={type}
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	)
}

const StyledInput = styled.input`
  width: 100%;
	height: 40px;
	line-height: 28px;
	margin-bottom: 5px;
	padding: 5px 10px;
	border: 1px solid #d6d6d6;
	color: #292929;
	font-size: 16px;
	background-color: #fff;
	outline: none;
`