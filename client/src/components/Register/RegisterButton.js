import React from 'react'
import styled from 'styled-components'
export default function RegisterButton({type, children}) {
    return (
        <StyledButton type={type}>{children}</StyledButton>
    )
}



const StyledButton = styled.button`

`