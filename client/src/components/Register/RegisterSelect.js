import React from 'react'
import styled from 'styled-components'
export default function RegisterSelect({ labelName, handleOption, option, dataArr}) {
	return (
		<StyledLabel>
			{labelName}
			<StyledSelect onChange={handleOption} value={option}>
				{dataArr.map((data, index) => {
					return (
						<option value={data} key={index}>
							{data}
						</option>
					)
				})}
			</StyledSelect>
		</StyledLabel>
	)
}

const StyledLabel = styled.label`
	font-size: 12px;
	color: #777;
	padding-left: 5px;
`
const StyledSelect = styled.select`
	width: 100%;
	outline: none;
	border: 1px solid #ededed;
	border-radius: 12px;
	box-sizing: border-box;
	color: #333;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	background: #f9f9f9;
	cd &:focus {
		background: #fff;
	}
	height: 40px;
	margin-top: 4px;
	margin-bottom: 8px;
`