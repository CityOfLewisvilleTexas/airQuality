import styled from 'styled-components'

export const Container = styled.div`
font-family: 'Roboto Mono', arial, sans-serif;
font-weight:400;
color:#fff;

& > div {
    margin: 20px 10px;
    
    & > div {
        padding: 20px;
    }
}
`

export const StyledH1 = styled.h1`
font-weight:600;
color: #AA0395;
`