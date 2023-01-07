import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
// import { nanoid } from 'nanoid';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList([...obj])
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggleModal = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    // console.log(taskList)

    return (
        <>
            <div className = "header">
                <h2 className='header-heading'>Todo List</h2>
                <button 
                    className= "btn btn-primary mt-2" 
                    onClick = {() => setModal(true)} 
                >Create Task</button>
            </div>
            <div className = "task-container">
                {taskList && taskList.map((obj, index) => (
                    <Card 
                        taskObj = {obj} 
                        index = {index} 
                        deleteTask = {deleteTask} 
                        updateListArray = {updateListArray}
                    />))
                }
            </div>
            <CreateTask 
                toggleModal = {toggleModal} 
                modal = {modal} 
                save = {saveTask}
            />
        </>
    );
};

export default TodoList;