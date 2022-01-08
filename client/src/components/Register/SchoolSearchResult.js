import React from 'react'
import styled from 'styled-components'
export default function SchoolSearchResult({datas, handleSearchClick}) {
    return (
        <STYLEDUL>
            {datas.map((data,index) => {
                return (
                    <STYLEDLI onClick={handleSearchClick} key={index}>
                        {data}
                    </STYLEDLI>
                )
            })}
        </STYLEDUL>
    )
}


const STYLEDUL = styled.ul`
    
`
const STYLEDLI = styled.li`

`