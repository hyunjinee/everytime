import React from 'react'
import styled from 'styled-components'

export default function styledContainer({ children }) {
	return (
		<Container>
			{children}
		</Container>
	)
}

const Container = styled.div`
    width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 80vh;
`