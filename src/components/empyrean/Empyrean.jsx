import { useEffect, useState } from 'react';
import './Empyrean.css'
import { BookSheet } from '../booksheet/BookSheet'

export function Empyrean() {
    const [books, setBooks] = useState([])

    const getEmpyreanBooks = () => {
        fetch('./RY_empyrean.json'
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
            <h1>Empyrean</h1>
            <div className='grid'>
                {
                    books && books.length > 0 && books.map((book)=><BookSheet {...book} key={book.id}/>)
                }
            </div>
        </div>
    )
}

