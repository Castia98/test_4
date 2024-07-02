import React, { useState } from 'react';
import Button from '../Button/Button';
import editIcon from '../button_img/Vector (2).svg'
import deleteIcon from '../button_img/Vector (3).svg'
import classes from './TodoList.module.css';

const TodoList = ({ tasks, setTasks, onDelete }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedTaskIndex, setEditedTaskIndex] = useState(null);
    const [editedTask, setEditedTask] = useState('');

    const handleEdit = (index) => {
        setEditedTaskIndex(index);
        setEditedTask(tasks[index]);
        setEditMode(true);
    };

    const handleSave = () => {
        const updatedTasks = [...tasks];
        updatedTasks[editedTaskIndex] = editedTask;
        setTasks(updatedTasks);
        setEditMode(false);
        setEditedTaskIndex(null);
        setEditedTask('');
    };

    const handleCancel = () => {
        setEditMode(false);
        setEditedTaskIndex(null);
        setEditedTask('');
    };

    const handleChange = (e) => {
        setEditedTask(e.target.value);
    };

    return (
        <div>
            {tasks.map((task, index) => (
                <div key={index} className={`${classes.taskContainer} ${editMode && editedTaskIndex === index ? classes.editMode : ''}`}>
                    <div className={classes.taskWrapper}>
                        {!editMode || editedTaskIndex !== index ? (
                            <div className={classes.taskText}>{task}</div>
                        ) : (
                            <input
                                type="text"
                                value={editedTask}
                                onChange={handleChange}
                                className={classes.taskInput}
                            />
                        )}
                        <div className={classes.taskButtons}>
                            {!editMode || editedTaskIndex !== index ? (
                                <>
                                    <Button onClick={() => handleEdit(index)} className={classes.editButton}>
                                        <img src={editIcon} alt="Edit" />
                                    </Button>
                                    <Button onClick={() => onDelete(index)} className={classes.deleteButton}>
                                        <img src={deleteIcon} alt="Delete" />
                                    </Button>
                                </>
                            ) : (
                                <div className={classes.saveCancelContainer}>
                                    <Button onClick={handleCancel} className={classes.cancelButton}>
                                        Cancel
                                    </Button>
                                    <Button onClick={handleSave} className={classes.saveButton}>
                                        Save
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;