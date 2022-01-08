import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function UserProfile(props) {
    return (
        <div>
            <Link to="/MyPage">
            </Link>
        </div>
    )
}

const ProfileImage = styled.img`
    width:  76px;
`