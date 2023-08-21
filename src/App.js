
import UserContext from "./Context";
import { useContext } from "react";
import Nav from "./Nav/Nav";
import { useState,useEffect } from "react";

function App() {

const[loading,setLoading]=useState(false);
const[tickets,setTickets] = useState([])
const[user,setUser] = useState([])



  useEffect(()=>{

    const fetchData = async ()=>{
     const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await res.json();
        setTickets(data.tickets);
       setUser(data.users)
       console.log(data)
       console.log("tickets" + data.tickets)
       console.log( data.users)
      setLoading(true)
    } 
    fetchData();
  },[])

 
 
  


  return (


    <>
   { loading ?
      (
        <UserContext.Provider value={{ user, tickets }}>

        <Nav  />
      </UserContext.Provider>) :"loading" }
    </>

  );
}

export default App;
