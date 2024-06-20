import React from 'react';
import Button from '../button/Button';
import classes from './bookList.module.css';

const BookList = ({ books, onDelete }) => {
    return (
        <div>
            {books.map((book, index) => (
                <div key={index}>
                    <div className={classes.bookItem}>
                        <label className={classes.label}>Название:</label>
                        <input value={book} readOnly className={classes.bookInput} />
                        <Button onClick={() => onDelete(index)} className={classes.deleteButton}>Удалить</Button>
                    </div>
                    {index < books.length - 1 && <hr className={classes.separator} />}
                </div>
            ))}
        </div>
    );
};

export default BookList;