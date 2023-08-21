import Card from "../cards/Card";
import "./header.css"
import Content from "./Content";
import UserContext from "../Context";
import { useContext, useState } from "react";
const Header = () => {

    const { tickets } = useContext(UserContext);
    
    const [backLog, setBackLog] = useState(tickets.filter((props) => props.status === "Backlog"))
    const [todo, setTodo] = useState(tickets.filter((props) => props.status ==="Todo"))
    const [progress, setProgress] = useState(tickets.filter((props) => props.status === "In progress"))
    const [done, setDone] = useState(tickets.filter((props) => props.status === "Done"))
    const [cancel, setCancel] = useState(tickets.filter((props) => props.status === "Cancel"))
    return (
        <>
            <div className="grid-container">
                <div>
                    <Content name="Backlog" count={backLog.length} />
                    <div className='card-content'>
                        {backLog.map((props) => <Card id={props.id} title={props.title} tag={props.tag} userId={props.userId} priority={props.priority} />)}
                    </div>
                </div>

                <div>
                    <Content name="Todo" count={todo.length} />
                    <div className='card-content'>
                        {todo.map((props) => <Card id={props.id} title={props.title} tag={props.tag} userId={props.userId} priority={props.priority}/>)}
                    </div>
                </div>
                <div>
                    <Content name="In progress" count={progress.length} />
                    <div className='card-content'>
                        {progress.map((props) => <Card id={props.id} title={props.title} tag={props.tag} userId={props.userId} priority={props.priority} />)}
                    </div>
                </div>
                <div>
                    <Content name="Done" count={done.length} />
                    <div className='card-content'>
                        {done.map((props) => <Card id={props.id} title={props.title} tag={props.tag} userId={props.userId} priority={props.priority} />)}
                    </div>
                </div>
                
                <div>
                    <Content name="Cancel" count={cancel.length} />
                    <div className='card-content'>
                        {cancel.map((props) => <Card id={props.id} title={props.title} tag={props.tag} userId={props.userId} priority={props.priority} />)}
                    </div>
                </div>
            </div >








        </>
    )
}

export default Header