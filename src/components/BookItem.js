import React from 'react'

const BookItem = ({ book }) => (
    <li className=''>
      <a target='_blank' href={book.amazon_url}>{book.title}</a>
      <p>
        <p>
            By {book.author}, {book.publication_date}.
            <p>{book.description}</p>
            <p>Worth reading: {book.worth_reading}</p>
        </p>
      </p>
      <br></br>
    </li>
  )

export default BookItem