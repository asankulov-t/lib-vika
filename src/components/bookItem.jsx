import React from 'react'
import styles from './bookItem.module.sass'
import BookCart from "./BookCart";


const BookItem = (props) => {

  return (
    <section className={styles.bookSection}>
        <h1>Мои  книги </h1>
        <div className={styles.wrapper}>
            {props.data.map((item)=>{
                //метод map создать столько BookCart сколько есть книги
                return <BookCart image={item.image}
                                 title={item.title}
                                 author={item.author}
                                 pages={item.pages}
                                 days={item.days}
                />
            })}
        </div>


    </section>
  )
}

export default BookItem