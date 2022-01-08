import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from '../Common/Header'
import StyledBox from '../Style/styledBox'



export default function BoardView() {
    return (
        <React.Fragment>
          <Header title="자유게시판" link="/board"/>
          <StyledBox backColor="#fafafa"> 
            <Profilebox>
                
            </Profilebox>
          </StyledBox>
        </React.Fragment>
    )
}

const Profilebox = styled.div`
    width: 100%,
`