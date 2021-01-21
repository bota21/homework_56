import React from 'react';
import './Backdrop.css';

const Backdrop = ({show, close}) => (
  show ? <div className="Backdrop" onClick={close} /> : null
);

export default Backdrop;
