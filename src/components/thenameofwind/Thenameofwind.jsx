import { useEffect, useState } from 'react';
import './Thenameofwind.css'
import { BookSheet } from '../booksheet/BookSheet'


export function Thenameofwind() {
    const [books, setBooks] = useState([])

    const getTheNameOfWindBooks = () => {
        fetch('./PR_name_of_wind.json'
            ,{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then(function(response) {
            return response.json();
        }).then(function(myJson) {
            console.log(myJson)
            setBooks(myJson)
        })
    }

    useEffect(() => {
        getTheNameOfWindBooks()
    }, [])

    return (
        <div>
            <h1>The Name of Wind</h1>
            <div className='grid'>
                {
                    books && books.length > 0 && books.map((book)=><BookSheet {...book} key={book.id}/>)
                }
            </div>
        </div>
    )
}