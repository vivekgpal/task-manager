import React from 'react';
import './card.css';
import UserContext from "../Context";
import { useContext, useState } from "react";
import { AiOutlineEllipsis } from 'react-icons/ai';

import { MdOutlineCancel } from 'react-icons/md';
import { MdOutlineIncompleteCircle } from 'react-icons/md';
import { BsCircle } from 'react-icons/bs';
import { TbProgress } from 'react-icons/tb';
import { BiSolidCircle } from 'react-icons/bi';
import { BsFillExclamationSquareFill } from 'react-icons/bs';
import { MdSignalCellularAlt1Bar } from 'react-icons/md';
import { MdSignalCellularAlt2Bar } from 'react-icons/md';
import { MdSignalCellularAlt } from 'react-icons/md';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import userName from '../UserNameSeperator';
const Card = (props) => {
  const { user } = useContext(UserContext);
  



  
  return (
    <div className="card">
    <div className='top'>
      <div className='card-first'>
        <span>{props.id}</span>
        {user.filter((p)=>p.id==props.userId).map((p)=>userName(p.name))}
      </div>

       <div className='title-contaner'>
       <div className='title-staus'>
       {props.status == "Todo" && <BsCircle size={13} className="pri-icon" />}
        {props.status == "Backlog" && <TbProgress size={17} className="pri-icon" />}
        {props.status == "Done" && <IoIosCheckmarkCircle size={17}  color='blue' className="pri-icon" />}
        {props.status == "In progress" && <MdOutlineIncompleteCircle color='#F1c949' size={17} className="pri-icon" />}
        {props.status == "Cancel" && <MdOutlineCancel size={17} color="#93A2B3" className="pri-icon" />}
       </div>

        <p className='line'>  
        {props.title}
      </p>
       </div>
       
      </div>
      <span className='card-bottom'>
      {props.priority=="0"  &&  <span className='box'> <AiOutlineEllipsis size={18} /></span>}
      {props.priority=="4"  &&  <span className='box'>  <BsFillExclamationSquareFill size={18} color={"orange"} /> </span>}
      {props.priority=="3"  &&  <span className='box'> <MdSignalCellularAlt size={18}  /></span>}
      {props.priority=="2"  &&  <span className='box'> <MdSignalCellularAlt2Bar size={18} /></span>}
      {props.priority=="1"  &&  <span className='box'> <MdSignalCellularAlt1Bar size={18}/></span>}

      <span className='tag'><span><BiSolidCircle size={13} /></span><span>{props.tag}</span></span>
      </span>
     
    </div>
  );
};

export default Card;
