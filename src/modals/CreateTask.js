import React, { useState } from 'react';
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
        let taskObj = {
            Name : taskName,
            Description: description
        }
        save(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Create Task</ModalHeader>
            <ModalBody>            
                <div className = "form-group">
                    <label>Task Name</label>
                    <input 
                        type="text" 
                        className = "form-control" 
                        value = {taskName} 
                        onChange = {handleChange} 
                        name = "taskName"
                        id='id'
                    />
                </div>
                <div className = "form-group">
                    <label>Description</label>
                    <textarea 
                        rows = "5" 
                        className = "form-control" 
                        value = {description} 
                        onChange = {handleChange} 
                        name = "description"
                        id='id'
                    ></textarea>
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
    );
};

export default CreateTaskPopup;