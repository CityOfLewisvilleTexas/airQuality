import React from 'react'
import { Header, Modal, Checkbox, Button } from 'semantic-ui-react'
import { DispatchButton } from './styles'
import axios from 'axios'
import { serviceURL, useServiceFetch } from '../../utils'

const EmailModal = props => {
    const {emails} = useServiceFetch(`${serviceURL}HR/Get EmployeeEmails`)    
    const infoTechEmployees = ['cholmes'].map(addr => addr += '@cityoflewisville.com')
    // 'clarson', 'emayes', 'rvemuri', 'cfaught', 'tahmed', 'plake', 'lfischer' 
    const users = []

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
                          <div style={{'padding':'12px', 'borderBottom': '1px solid #ddd', 'marginTop': '12px'}}>
                              <Checkbox onMouseUp={() => {
                                  users.indexOf(email.EmailAddress) === -1 
                                  ? users.push(email.EmailAddress) 
                                  : users.splice(users.indexOf(email.EmailAddress))
                                  console.log(users)
                              }} 
                              toggle style={{'display':'inline-block'}} id={email.EmailAddress}/>
                              <label htmlFor={email.EmailAddress}>
                                  <h3 style={{'display':'inline-block', 'verticalAlign': 'bottom', 'marginLeft': '8px'}}>{email.EmailAddress}</h3>
                              </label>
                          </div>
                )
            })
             : ''
            }
            <div style={{'marginTop':'18px'}}>
                <Button onClick={() => {
                    if(emails !== null) {
                        axios.post(serviceURL + 'ITS/uspDispatch_AirQualityIndex', {
                            Status: props.status,
                            BgColor: props.bgColor,
                            TxtColor: props.txtColor,
                            Index: props.index,
                            Date: props.date,
                            User: users
                        })
                    }
                }} style={{'backgroundColor': 'green', 'color':'white'}}>Send</Button>
            </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  )}

export default EmailModal
