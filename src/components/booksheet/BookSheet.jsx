import './BookSheet.css'


export function BookSheet(book) {

    return (
        <div className='book'>
            <div className='bookimage'>
                <img src={book.cover} height={230}/>
            </div>
            
            <div className='bookinfo'>
                <div className='centerinfo'>
                    <p><b>Title:</b> {book.title}</p>
                    <p><b>Author:</b> {book.author}</p>
                    <p><b>Score:</b> {book.score}⭐</p>
                </div>
            </div>
        </div>
    )
}