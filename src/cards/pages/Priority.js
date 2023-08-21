import Content from "../../Header/Content"
import UserContext from "../../Context";
import { useContext } from "react";
import Card from "../Card";
import { HiOutlineExclamationCircle } from 'react-icons/hi';
const Priority=()=>{
    const { tickets } = useContext(UserContext);
    return(
       <>
            <div className="grid-container">
                <div>
                    <Content name="NO Priority"  count={tickets.filter((props)=>props.priority==0).length} />
                    <div className='card-content'>
                        {tickets.filter((props)=>props.priority==0).map((props) => <Card id={props.id} title={props.title} tag={props.tag} status={props.status} userId={props.userId} />)}
                    </div>
                </div>

                <div>
                    <Content name="Urgent" count={tickets.filter((props)=>props.priority==4).length} />
                    <div className='card-content'>
                    {tickets.filter((props)=>props.priority==4).map((props) => <Card id={props.id} title={props.title} tag={props.tag} status={props.status} userId={props.userId} />)}
                    </div>
                </div>
                <div>
                    <Content name="High" count={tickets.filter((props)=>props.priority==3).length} />
                    <div className='card-content'>
                    {tickets.filter((props)=>props.priority==3).map((props) => <Card id={props.id} title={props.title} tag={props.tag} status={props.status} userId={props.userId} />)}
                    </div>
                </div>
                <div>
                    <Content name="Medium" count={tickets.filter((props)=>props.priority==2).length} />
                    <div className='card-content'>
                    {tickets.filter((props)=>props.priority==2).map((props) => <Card id={props.id} title={props.title} tag={props.tag} status={props.status}  userId={props.userId}  />)}
                    </div>
                </div>
                
                <div>
                    <Content name="Low" count={tickets.filter((props)=>props.priority==1).length} />
                    <div className='card-content'>
                    {tickets.filter((props)=>props.priority==1).map((props) => <Card id={props.id} title={props.title} tag={props.tag} status={props.status} userId={props.userId} />)}
                    </div>
                </div>
            </div >
       </>
    )
}

export default Priority