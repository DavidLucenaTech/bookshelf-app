import { useEffect, useState } from 'react';
import './Cosmere.css'
import { BookSheet } from '../booksheet/BookSheet'

export function Cosmere() {

    const [books, setBooks] = useState([])

    const getStormlightArchiveBooks = () => {
        fetch('./BS_stormlight_archive.json'
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
        getStormlightArchiveBooks()
    }, [])

    return (
        <div>
            <h1>Stormlight Archive</h1>
            <div className='grid'>
                {
                    books && books.length > 0 && books.map((book)=><BookSheet {...book} key={book.id}/>)
                }
            </div>
        </div>
    )
}