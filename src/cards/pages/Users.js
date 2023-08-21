import Content from "../../Header/Content"
import UserContext from "../../Context";
import { useContext } from "react";
import Card from "../Card";
const Users = ()=>{

    const { user,tickets } = useContext(UserContext);
    

    return(
        <>
            <div className="grid-container">
            {
                user.map((props)=>
                <div>
                    <Content name={props.name} img="user" count ={tickets.filter((p)=>props.id==p.userId).length} />
                    <div className='card-content'>
                     {tickets.filter((p)=>props.id==p.userId).map((prop)=>  <Card id={prop.id} title={prop.title} tag={prop.tag} status={prop.status} priority={prop.priority} /> )}
                    </div>
                </div>)
            }
            </div >
        </>
    )
}

export default Users