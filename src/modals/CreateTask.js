import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggleModal, save, id}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        if(name === "taskName") setTaskName(value)
        else setDescription(value)
    }

    const handleSave = (e) => {
        e.preventDefault()
        if(taskName === '') {
            toast.error("Please enter name")
            return
        }
        if(description === '') {
            toast.error("Please enter description")
            return
        }
        let taskObj = {
            Name : taskName,
            Description: description
        }
        save(taskObj)
    }

    return (
        <>
            <div><Toaster/></div>
            <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Create Task</ModalHeader>
            <ModalBody>            
                <div className = "form-group">
                    <label>Task Name</label>
                    <input 
                        type="text" 
                        className = "form-control" 
                        placeholder='Enter task name'
                        value = {taskName} 
                        onChange = {handleChange} 
                        name = "taskName"
                        maxLength={25}
                        id={id}
                    />
                </div>
                <div className = "form-group">
                    <label>Description</label>
                    <textarea 
                        rows = "5" 
                        className = "form-control" 
                        placeholder={`Enter description ${'\n\n\n\n'}Max 200 characters`}
                        value = {description} 
                        onChange = {handleChange} 
                        name = "description"
                        id={id}
                        style={{resize: 'none'}}
                        maxLength={200}
                    >
                    </textarea>
                </div>
            </ModalBody>
            <ModalFooter>
            <Button 
                color="primary" 
                onClick={handleSave}>Create</Button>
            <Button 
                color="secondary" 
                onClick={toggleModal}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </>
    );
};

export default CreateTaskPopup;