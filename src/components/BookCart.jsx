import React, {useState} from 'react';
import BookTitle from "./bookTitle";
import BookAuthor from "./bookAuthor";
import BookPages from "./bookPages";
import BookReadTime from "./bookReadTime";
import BookRating from "./bookRating";
import BookReview from "./bookReview";
import BookLike from "./bookLike";
import BookImage from "./bookImage";
import styles from "./bookItem.module.sass";

const BookCart = (props) => {
    let [readed,setReaded]=useState(false)
    // сколько книг столько и readed

    //className теперь зависим от readed если readed будет false применяется класс bookItemBlock если true то класс readed
    return (
        <div className={readed?styles.bookItemBlockActive:styles.bookItemBlock} key = {props.id}>


            <BookImage image = {props.image}/>
            <BookTitle  title={props.title} />
            <BookAuthor author={props.author} />
            <BookPages pages={props.pages} />
            <BookReadTime days={props.days} />
            <BookRating  />
            <BookReview changeStatusRead={setReaded} />// В компоненту BookReview предаем функцию CallBack чтобы мы потом могли поменять readed
            <BookLike />
        </div>
    )}

export default BookCart;