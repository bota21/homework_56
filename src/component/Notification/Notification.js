import React from 'react';
import './Notification.css';
import { Alert } from 'reactstrap';

const Notification = ({show, type, dismiss}) => (
<Alert className={`Alert ${type}`}  
        style={{
            display: show ? 'flex' : 'none'
        }}
        onclick={dismiss}
        >
        <h3 className={type}>This is a {type} type alert</h3>
        <div className='close_alert'>X</div>
        </Alert>
);
    
    export default Notification;
    