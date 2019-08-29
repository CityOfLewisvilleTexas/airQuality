import React, {useState} from 'react'
import { Header, Modal, Checkbox,  } from 'semantic-ui-react'
import Snackbar from '@material-ui/core/Snackbar'
import { DispatchButton } from './styles'
import axios from 'axios'
import { serviceURL, useServiceFetch } from '../../utils'

const EmailModal = props => {
    const {emails} = useServiceFetch(`${serviceURL}HR/Get EmployeeEmails`)    
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        color: null,
        msg: null
    })

    const { vertical, horizontal, open, color, msg } = state
    
    const handleClick = newState => () => {
        setState({...state, open:true})
    }

    function handleClose() {
        setState({...state, open:false})
    }
    
    const infoTechEmployees = ['cholmes', 'clarson'].map(addr => addr += '@cityoflewisville.com')
    // 'clarson', 'emayes', 'rvemuri', 'cfaught', 'tahmed', 'plake', 'lfischer' 
    const users = []
    
    return (
  <div>
  <Modal closeIcon style={{'position': 'absolute', 'top': '200px'}} trigger={<DispatchButton/>}>
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
                <div className="ui animated button" tabIndex="0" onClick={() => {
                    if(emails !== null) {
                        axios.post(serviceURL + 'ITS/uspDispatch_AirQualityIndex', {
                            Status: props.status,
                            BgColor: props.bgColor,
                            TxtColor: props.txtColor,
                            Index: props.index,
                            Date: props.date,
                            User: users.map(email => email += ';').join().replace(',','')
                        })
                        .then( response => {
                            setState({open:true, msg: 'Air Quality Index Alert has been sent.', color: 'green'})
                        })
                        .catch(err => {
                            setState({open:true, msg: 'an error occurred', color: 'red'})
                        })
                    }
                }} style={{'backgroundColor': 'green', 'color':'white'}}>
                    <div className="visible content">Send</div>
                        <div className="hidden content">
                        <i className="right arrow icon"></i>
                    </div>
                </div>
            </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
    <Snackbar 
        color={state.color}
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={state.open}
        onClose={handleClose}
        message={<span id="message-id">{state.msg}</span>}
        autoHideDuration={4000}
    />
</div>
  )}

export default EmailModal
