/* eslint-disable no-unused-expressions */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Item from '../ui/Item'
import Row from '../ui/Row'
//@TODO: Create Logo to import
// import Logo from '../../public/favicon.ico'

const StyledItem = styled(Item)`
    display:flex;
    flex-direction:column;
    background-color:white;
    border-radius:5px;
    box-shadow: 4px 2px #999;
    max-width:1050px;
`

const StyledH2 = styled.h2`
    font-size:25px;
    color: #24283e;
    text-shadow: 1px 1px 1px #ddd;
    line-height:23px;
`

export default ({ children, title }, ...props) => {
    <StyledItem width={[0.95, 0.8, 0.7]} {...props}>
        <Row justifyContent="center">
            <Link to="/">
                {/* <img src={Logo} alt="airQuality"/> */}
            </Link>
        </Row>
        <Row justifyContent="center">
            <StyledH2>{title}</StyledH2>
        </Row>
        {children}
    </StyledItem>
}
