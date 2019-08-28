import React, { useState } from 'react'
import { Header, Modal, Checkbox } from 'semantic-ui-react'
import { DispatchButton } from './styles'
import axios from 'axios'
import { serviceURL, useServiceFetch } from '../../utils'



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

const EmailModal = () => {
    const {emails} = useServiceFetch(`${serviceURL}HR/Get EmployeeEmails`)
    const infoTechEmployees = ['cholmes', 'clarson', 'emayes', 'rvemuri', 'cfaught', 'tahmed', 'plake', 'lfischer'].map(addr => addr += '@cityoflewisville.com')
    
    return (
  <Modal style={{'position': 'absolute', 'top': '200px'}} trigger={<DispatchButton/>}>
    <Modal.Header>Send Status Report</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Select Recipients:</Header>
            {emails !== null ? emails
            .filter(email => infoTechEmployees.indexOf(email.EmailAddress) !== -1)
            .map(email => {
                return (
                          <div style={{'padding':'12px', 'borderBottom': '1px solid #ddd'}}>
                              <Checkbox toggle style={{'display':'inline-block'}} id={email.EmailAddress}/>
                              <label for={email.EmailAddress}>
                                  <h3 style={{'display':'inline-block', 'verticalAlign': 'bottom', 'margin-left': '8px'}}>{email.EmailAddress}</h3>
                              </label>
                          </div>
                )
            })
             : ''
            }
      </Modal.Description>
    </Modal.Content>
  </Modal>
  )}

export default EmailModal
