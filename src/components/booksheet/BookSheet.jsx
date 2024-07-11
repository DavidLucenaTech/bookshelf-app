import './BookSheet.css'
import logo from '../../assets/logo.svg'

export function BookSheet(book) {

    return (
        <div className='book'>
            <div className='bookimage'>
                <img src={logo}/>
            </div>
            <div className='bookinfo'>
                <p><b>Title:</b> {book.title}</p>
                <p><b>Author:</b> {book.author}</p>
                <p><b>Score:</b> {book.score}⭐</p>
            </div>
        </div>
    )
}