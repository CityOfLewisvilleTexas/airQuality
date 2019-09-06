import React, {useState} from 'react'
import { Header, Modal, Checkbox, Dropdown } from 'semantic-ui-react'
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
        msg: null,
        users: [],
        allEmps: false
    })

    const { vertical, horizontal, open, color, msg, users, allEmps } = state

    const handleClick = newState => () => {
        setState({...state, open:true})
    }

    function handleClose() {
        setState({...state, open:false})
    }
    
    return (
  <div>
  <Modal closeIcon style={{'position': 'absolute', 'top': '200px'}} trigger={<DispatchButton/>}>
    <Modal.Header>Send Status Report</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Select Recipients:</Header>
            {emails !== null && allEmps !== true ? 
                  <Dropdown 
                            placeholder="Search and select recipients"
                            fluid
                            search
                            selection
                            onChange ={(...e) => {
                                setState({...state, users:[...users, e[1].value]})
                                console.log(users)
                            }}
                            options={emails.map(email => {
                                return {
                                    key: email.EmailAddress.substr(0, email.EmailAddress.indexOf('@')),
                                    value: email.EmailAddress.toLowerCase(),
                                    text: email.EmailAddress.toLowerCase()
                                }
                            })}
                        />
                    : ''
            }
            {state.users.length > 0 && allEmps === false ?
               <div style={{'marginTop':'12px', 'padding':'8px 40px', 'backgroundColor':'rgba(117,235,56,0.1)', 'borderRadius':'25px'}}> 
                    <h3>Selected employees:</h3>
                    {state.users.map(user => {
                       return (
                       <div style={{'paddingTop':'12px'}}>
                            <Checkbox checked={users.includes(user)} onChange={() => {
                                debugger;
                                  setState({...state, users: state.users.filter(u => u !== user)})
                                  console.log(users)
                                  }} 
                              style={{'display':'inline-block'}} id={user}/>
                              <label htmlFor={user}>
                                  <h3 style={{'display':'inline-block', 'verticalAlign': 'bottom', 'marginLeft': '8px'}}>{user}</h3>
                              </label>
                        </div>
                       )
                    })}
               </div>
               : ''
            }
            <Checkbox style={{'marginTop': '18px'}} toggle checked={allEmps === true} onChange={() => {
                        setState({...state,
                         users: users.length >= 1 ? [] : ['everyone@cityoflewisville.com'],
                         allEmps: allEmps === false ? true : false
                         })}
                        } id="all_emps"
                    />
                    <label htmlFor="all_emps">
                        <h3 style={{'display':'inline-block', 'verticalAlign': 'bottom', 'marginLeft': '8px'}}><b>Toggle for all employees</b></h3>
                    </label>
            <div style={{'marginTop':'18px'}}>
                <div className="ui animated button" tabIndex="0" onClick={() => {
                    if(emails !== null) {
                        axios.post(serviceURL + 'ITS/uspDispatch_AirQualityIndex', {
                            Status: props.status,
                            BgColor: props.bgColor,
                            TxtColor: props.txtColor,
                            Index: props.index,
                            Date: props.date,
                            User: users ? users.map(email => email += ';').join().replace(',','') : 'cholmes@cityoflewisville.com'
                        })
                        .then( response => {
                            setState({open:true, msg: 'Air Quality Index Alert has been sent.', color: 'green', users: [], allEmps: false})
                        })
                        .catch(err => {
                            if(users.length < 1) {
                                setState({open:true, msg: 'Please select at least one employee', color: 'red', users: [], allEmps: false})
                            } else {
                                setState({open:true, msg: `An error occurred, ${err}`, color: 'red', users: [], allEmps: false})
                            }
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
