import styled from 'styled-components'

export const StyledH1 = styled.h1`
font-weight:600;
color: #AA0395;
display: inline-block;
`

export const DispatchButton = styled.button`
background-color: #FFCC22;
color: #000;
display: inline-block;
float: right;
margin-right:25px;
margin-top:25px;
font-family:'Roboto Mono', arial, sans-serif;
font-size:1.2rem;
padding:12px;
border-radius: 15px;
border:none;
    
    &:before {
        content: 'Dispatch';
    }
    &:hover {
        background-color: #ffbb22;
        cursor:pointer;
        box-shadow: 3px 2px #ddd;
    }
}`