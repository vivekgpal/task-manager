import Card from '../cards/Card';
import userName from '../UserNameSeperator';
import { TbProgress } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineEllipsis } from 'react-icons/ai';
import './content.css'
import UserContext from '../Context';
import { useContext,useState } from 'react';

import { MdOutlineDone } from 'react-icons/md';
import { MdOutlineCancel } from 'react-icons/md';
import { MdOutlineIncompleteCircle } from 'react-icons/md';
import { BsCircle } from 'react-icons/bs';
import { BsFillExclamationSquareFill } from 'react-icons/bs';
import { MdSignalCellularAlt1Bar } from 'react-icons/md';
import { MdSignalCellularAlt2Bar } from 'react-icons/md';
import { MdSignalCellularAlt } from 'react-icons/md';
import { IoIosCheckmarkCircle } from 'react-icons/io';


const Content = (props)=>{

    return(
        <>  
    <div className="grid-item">
                <div className="header-left">
                    {props.name == "NO Priority" && <AiOutlineEllipsis className="header-icon"/>}
                    {props.name == "Urgent" && <BsFillExclamationSquareFill color={"orange"} className="header-icon"/>}
                    {props.name == "High" && <MdSignalCellularAlt  className="header-icon"/>}
                    {props.name == "Medium" && <MdSignalCellularAlt2Bar className="header-icon"/>}
                    {props.name == "Low" && <MdSignalCellularAlt1Bar className="header-icon"/>}

                    {props.name=="Todo" && <BsCircle className="header-icon"/> }
                    {props.name=="Backlog" && <TbProgress className="header-icon"/> }
                    {props.name=="Done" && <IoIosCheckmarkCircle color='blue'  className="header-icon"/> }
                    {props.name=="In progress" && <MdOutlineIncompleteCircle color='#F1c949' className="header-icon"/> }
                    {props.name=="Cancel" && <MdOutlineCancel color="#93A2B3" className="header-icon"/> }

                    <div >{props.img == "user" && userName(props.name) }</div>
                    <span className="header-name">{props.name}</span>
                    <span className="header-count">{props.count}</span>
                </div>
                <div className="header-right">
                    <AiOutlinePlus className="header-icon"/>
                    <AiOutlineEllipsis className="header-icon"/>
                </div>
                
              </div>
             
        
             
             
        </>
    )
}

export default Content

