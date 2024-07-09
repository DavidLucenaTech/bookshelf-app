import './Navbar.css'
import { Link } from 'react-router-dom'

export function Navbar() {

    return (
        <div>
            <ul className='navbar'>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
                <li>
                    <Link to='/cosmere'>Cosmere</Link>
                </li>
                <li>
                    <Link to='/thenameofwind'>The name of wind</Link>
                </li>
                <li>
                    <Link to='/throneofglass'>Throne of glass</Link>
                </li>
                <li>
                    <Link to='/empyrean'>Empyrean</Link>
                </li>
            </ul>
        </div>
    )
}