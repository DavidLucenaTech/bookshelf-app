import { useEffect, useState } from 'react';
import './Throneofglass.css'
import { BookSheet } from '../booksheet/BookSheet'

export function Throneofglass() {
    const [books, setBooks] = useState([])

    const getEmpyreanBooks = () => {
        fetch('./SM_throne_of_glass.json'
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
        getEmpyreanBooks()
    }, [])

    return (
        <div>
            <h1>Throne of Glass</h1>
            <div className='grid'>
                {
                    books && books.length > 0 && books.map((book)=><BookSheet {...book} key={book.id}/>)
                }
            </div>
        </div>
    )
}