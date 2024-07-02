import React, { useState } from 'react';
import TodoList from '../components/TodoList/TodoList';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import classes from './MainPage.module.css';

const MainPage = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [showButtons, setShowButtons] = useState(false);

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodoList([...todoList, newTodo]);
            setNewTodo('');
            setShowButtons(true);
        }
    };

    const handleDeleteTodo = (index) => {
        const updatedTodoList = [...todoList];
        updatedTodoList.splice(index, 1);
        setTodoList(updatedTodoList);
        if (updatedTodoList.length === 0) {
            setShowButtons(false);
        }
    };

    const handleClearAll = () => {
        setTodoList([]);
        setShowButtons(false);
    };

    const isAddDisabled = newTodo.trim() === '';

    return (
        <div className={classes.mainPageContainer}>
            <h2>TO DO</h2>
            <div className={classes.inputContainer}>
                <Input
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className={classes.todoInput}
                />
                <div className={classes.buttonContainer}>
                    {!showButtons ? (
                        <Button
                            onClick={handleAddTodo}
                            className={`${classes.addButton} ${classes.largeButton}`}
                            disabled={isAddDisabled}
                        >
                            Add Task
                        </Button>
                    ) : (
                        <div className={classes.smallButtonsContainer}>
                            <Button
                                onClick={handleAddTodo}
                                className={`${classes.addButton} ${classes.smallButton}`}
                                disabled={isAddDisabled}
                            >
                                Add
                            </Button>
                            <Button
                                onClick={handleClearAll}
                                className={`${classes.clearButton} ${classes.smallButton}`}
                            >
                                Clear All
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            <div className={classes.todoListContainer}>
                <TodoList tasks={todoList} setTasks={setTodoList} onDelete={handleDeleteTodo}/>
            </div>
        </div>
    );
};

export default MainPage;