
import React, {  } from "react";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faPencil } from "@fortawesome/free-solid-svg-icons";

const Item = ({text,date}) => {

    return (
        <>
            <div className="mainItemBox">
                <div className="right">
                    <input type="checkbox"  className="myinput large" />
                    <div className="textBox">
                        <div className="itemText">{text}</div>
                        <div className="time">{date}</div>
                    </div>
                </div>
                <div>
                <FontAwesomeIcon className="delete" icon={faTrash} />
                <FontAwesomeIcon className="edit" icon={faPencil} />
                </div>
            </div>
        </>)
}
export default Item;