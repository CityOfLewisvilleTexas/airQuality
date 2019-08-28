import React from "react";
import { serviceURL } from "../../utils";
import { StyledH1, StyledDiv } from './styles'
import axios from 'axios'

const dispatch = (status, bgColor, txtColor, index, date) => {
    axios.post(serviceURL + 'ITS/uspDispatch_AirQualityIndex', {
        Status: status,
		BgColor: bgColor,
		TxtColor: txtColor,
		Index: index,
		Date: date,
        User: 'cholmes@cityoflewisville.com'
    })
    .then(response => {
        console.log(response)
    })
}

const Header = props => {
    return (
        <StyledDiv>
            <StyledH1>City of Lewisville | Air Quality Index</StyledH1>
            {/* <DispatchButton onMouseDown={dispatch(props.status, props.bgColor, props.txtColor, props.index, props.date)}/> */}
        </StyledDiv>
    )}

    export default Header