import "./userNameSeperator.css"

const userName = (name) => {
    const nameArray = name.split(" ")
    if (nameArray.length > 1) return <div className="img" > <span className="simg"></span><div className="username">{nameArray[0].charAt(0) + nameArray[1].charAt(0).toUpperCase()}</div></div>;
    else return <div className="img " > <span className="simg"></span><div className="username">{nameArray[0].charAt(0)}</div></div>
}


export default userName