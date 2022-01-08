import React from 'react'
import styled from 'styled-components'

export default function LoginPersist() {
	return (
		<StyledLabel>
			<StyledInput type="checkbox" />
			로그인 유지
		</StyledLabel>
	)
}


const StyledLabel = styled.label`
	float: left;
	padding-left: 10px;
	height: 15px;
	line-height: 15px;
	font-size: 13px;
	color: #a6a6a6;
	cursor: default;
`
const StyledInput = styled.input`
	margin-right: 5px;
`