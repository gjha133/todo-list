import React, {useState} from 'react';
import EditTask from '../modals/EditTask'
import { MdDeleteForever, MdEditNote } from "react-icons/md"

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {primaryColor : "#5D93E1", secondaryColor : "#ECF3FC"},
        {primaryColor : "#F9D288", secondaryColor : "#FEFAF1"},
        {primaryColor : "#5DC250", secondaryColor : "#F2FAF1"},
        {primaryColor : "#F48687", secondaryColor : "#FDF1F1"},
        {primaryColor : "#B964F7", secondaryColor : "#F3F0FD"},
        { primaryColor: "#7377bf", secondaryColor: "#ebecff" },
        { primaryColor: "#50ab8b", secondaryColor: "#7db09e" },
        { primaryColor: "#663754", secondaryColor: "##e670dc" },
        { primaryColor: "#5a1a96", secondaryColor: "#d2bae8" },
        { primaryColor: "#914404", secondaryColor: "#dea77a" },
    ]

    let size = colors.length
    // let randIndex = Math.ceil(index * Math.random()) % size
    let randIndex = index % size
    let iconColor = { 
        "color": colors[randIndex % size].primaryColor 
    }

    const toggle = () => setModal(!modal);

    const updateTask = obj => updateListArray(obj, index)

    const handleDelete = () => deleteTask(index)

    return (
        <div className = "card-wrapper">
            <div 
                className = "card-top" 
                style={{"backgroundColor": colors[randIndex % size].primaryColor}}
            ></div>
            <div className = "task-holder">
                <div 
                    className = "card-header" 
                    style={{"backgroundColor": colors[randIndex % size].secondaryColor, "borderRadius": "10px"}}>{taskObj.Name}
                </div>
                <p className = "mt-3">{taskObj.Description}</p>
                <div className = "card-footer">
                    <MdEditNote 
                        style={iconColor}
                        className="card-footer-icons"
                        onClick={() => setModal(true)}
                        size='1.25rem'
                    />
                    <MdDeleteForever
                        onClick={handleDelete}
                        style={iconColor}
                        className="card-footer-icons"
                        size='1.25rem'
                    />
                </div>
            </div>
            <EditTask 
                modal = {modal} 
                toggle = {toggle} 
                updateTask = {updateTask} 
                taskObj = {taskObj}
            />
        </div>
    );
};

export default Card;
