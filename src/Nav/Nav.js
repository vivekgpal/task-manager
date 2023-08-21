import { useContext, useState } from "react";
import './nav.css'
import Header from "../Header/Header";
import Priority from "../cards/pages/Priority";
import Users from "../cards/pages/Users";
import { Context } from "react";
import UserContext from "../Context";
import { ImEqualizer } from 'react-icons/im';
import { BiChevronDown } from 'react-icons/bi';

const Nav = () => {

  const {tickets} = useContext(UserContext)
    const [myGroup, setMyGroup] = useState(localStorage.getItem("Group") || "Status");
    const [myOrder, setMyOrder] = useState(localStorage.getItem("Order") || "Priority");
    const [display,setDisplay]  =useState("none");
  const handleChangeGroup = (event) => {
    localStorage.setItem("Group",event.target.value)
    setMyGroup(event.target.value)
    setDisplay("none")
    
  }
  const handleChangeOrder = (event) => {
    localStorage.setItem("Order",event.target.value)
    setMyOrder(event.target.value)
    setDisplay("none")
 
  }

   const handleDisplay=() =>{
        (display=="none") ? setDisplay("block") : setDisplay("none")
    }


    {myOrder=="Title"  && tickets.sort((a,b)=>{
      const first = a.title.toUpperCase();
      const second = b.title.toUpperCase();
      if(first>second)return 0
      else return -1
    
    })}
    {myOrder=="Priority" && tickets.sort((a,b)=>b.priority-a.priority)}


    return (
        <>
        <div className="nav-bar">
            <button className="btn" onClick={handleDisplay}><ImEqualizer />Display <BiChevronDown size={20}/></button>
            <div style={{display:display}} className="btn-container" >
            <div >
                <div className="group">
                   <span> Grouping </span>
                    <select value={myGroup} className="select" onChange={handleChangeGroup}>
                      <option value="Status">Status</option>
                      <option value="User">User</option>
                      <option value="Priority">Priority</option>
                    </select>
                </div>
                <div className="group" >
                <span> Order </span>
                    <select value={myOrder} className="select" onChange={handleChangeOrder}>
                      <option value="Title">Title</option>
                      <option value="Priority">Priority</option>
                    </select>
                </div>
              </div>
            </div>
          </div>

          <div className="body-container">
            {myGroup == "Status" && myOrder=="Title"  && <Header />}
            {myGroup == "Status" && myOrder=="Priority"  && <Header />}
            {myGroup == "User" && myOrder=="Title" && <Users />}
            {myGroup == "User" && myOrder=="Priority" && <Users />}
            {myGroup == "Priority" && myOrder=="Title" &&  <Priority />}
            {myGroup == "Priority" && myOrder=="Priority" &&  <Priority />}
          </div>
            
        </>
        
    );
  };
  

export default Nav;