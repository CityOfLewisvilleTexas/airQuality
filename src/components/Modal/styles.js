import styled from 'styled-components'

export const DispatchButton = styled.button`
background-color: #FFCC22;
color: #000;
margin-right: 15px;
margin-top: 15px;
font-family: 'Roboto Mono',arial,sans-serif;
font-size: 1.2rem;
padding: 12px;
border-radius: 15px;
border: none;
position: absolute;
top: 3px;
right: 15px;
    
    &:before {
        content: 'Dispatch ';
        white-space:pre;
    }
    &:hover {
        background-color: #ffbb22;
        cursor:pointer;
        box-shadow: 3px 2px #ddd;
    }
}`