import React from 'react'
import styled from 'styled-components'

export default function StyledBox({children, padding, lineHeight, backColor}) {
    return (
        <MenuBox backColor={backColor} padding={padding} lineHeight={lineHeight}>
            {children}
        </MenuBox>
    )
}

const MenuBox = styled.ul`
    color: #212121;
    width: 100%;
    
`