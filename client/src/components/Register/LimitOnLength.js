import React from 'react'
import styled from 'styled-components'
export default function LimitOnLength({ children }) {
	return (
		<StyledP>{children}</StyledP>
	)
}

const StyledP = styled.p`
  font-size: 12px;
	color: #c62917;
	margin: 5px 0;
`