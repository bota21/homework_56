import { React, useState } from 'react';
import './Main.css';
import Modal from '../../component/Modal/Modal';
import Notification from '../../component/Notification/Notification';

const Main = () => {
    const [modalValue, setModalValue] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const alertVal = ['primary', 'success', 'danger', 'warning'];
    const [alertData, setAlertData] = useState(false);
    let continued = () => {
        let copyButVal = [...buttonValue];
        setAlertData(true);
        setModalValue(false);
        showAlert();
        setButtonValue(copyButVal)
    };
    let closed = () => {
        setModalValue(false)
    };
    const [buttonValue, setButtonValue] = useState([
        {id: '1', type: 'primary', label: 'Continue', clicked: continued},
        {id: '2', type: 'danger', label: 'Close', clicked: closed}
    ])
    let showModal = () => {
        setModalValue(true)
    };
    let closeModal = () => {
        setModalValue(false)
    };
    let showPop = () => {
        setPopUp(true)
    }
    let hidePop = () => {
        setPopUp(false)
    }     
    let showAlert = () => {
        setAlertData(true);
    }
    let closeAlert = () => {
        setAlertData(false)
    }
    return (
        <div className='Main'>        
        <button className='show_modal' onClick={showModal}>Show modal</button>
        <Notification 
        type={alertVal[1]} 
        show={alertData}
        dismiss={closeAlert}
        />
        <Modal 
        show={modalValue}
        close={closeModal}
        mouseMove={showPop}
        title='A title'
        mouseOut={hidePop}
        popShow={popUp}
        array={buttonValue}        
        />    
        </div>
        )
    };
    export default Main;