import React, { useState } from 'react';
import BookList from '../bookList/BookList';
import Input from '../input/Input';
import Button from '../button/Button';
import classes from './mainPage.module.css';

const MainPage = () => {
    const [bookList, setBookList] = useState([]);
    const [newBook, setNewBook] = useState('');

    const handleAddBook = () => {
        if (newBook.trim() !== '') {
            setBookList([...bookList, newBook]);
            setNewBook('');
        }
    };

    const handleDeleteBook = (index) => {
        const updatedBookList = [...bookList];
        updatedBookList.splice(index, 1);
        setBookList(updatedBookList);
    };

    return (
        <div className={classes.mainPageContainer}>
            <h2>Добавить книгу</h2>
            <div className={classes.inputContainer}>
                <label className={classes.label}>Название:</label>
                <Input
                    value={newBook}
                    onChange={e => setNewBook(e.target.value)}
                    className={classes.bookInput}
                />
                <Button onClick={handleAddBook} className={classes.addButton}>Добавить</Button>
            </div>
            <hr className={classes.separator} />
            <BookList books={bookList} onDelete={handleDeleteBook} />
        </div>
    );
};

export default MainPage;