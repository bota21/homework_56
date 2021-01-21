import React from 'react';
import Backdrop from './Backdrop/Backdrop';
import './Modal.css';

const Modal = ({
    array,
    show, 
    close, 
    popShow, 
    title, 
    mouseMove, 
    mouseOut
}) => {
    let addButton = array.map(i => {
        return <button key={i.id} className={i.type} onClick={i.clicked}>{i.label}</button>
    })
    return(
        <>
        <Backdrop show={show} close={close}/>
        <div className="Modal"
        style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'            
        }}
        >
        <button onClick={close} className='close'>X</button>
        <h3 className='popUp'
        style={{
            opacity: popShow ? 1 : 0
        }}
        >{title}</h3>
        <h3 className='title' onMouseMove={mouseMove} onMouseOut={mouseOut}>{title}</h3>
        <p>Some content</p>
        <div className="button_wrapper">
        {addButton}
        </div>   
        </div>
        </>
        )
    };
    
    export default Modal;
    