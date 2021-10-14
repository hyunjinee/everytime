import React from 'react'
import styled from 'styled-components'

export default function LoginInput({ type, name, placeholder, onChange, value }) {
	return (
		<StyledInput
			type={type}
			name={name}
			placeholder={placeholder}
			onChange={onChange}
			value={value}
		/>
	)
}

const StyledInput = styled.input`
  width: 100%;
	outline: none;
	border: 1px solid #ededed;
	box-sizing: border-box;
	color: #333;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	background: #fff;
	height: 40px;
	margin-top: 5px;
`