import './Header.css'
import logo from '../../assets/logo.svg'

export function Header() {
    return (
        <div className="header">
            <div className='logo'>
                <img src={logo} width='150' height='150'></img>
            </div>
            <div className='title'>
                <h1>The N&D bookshelf</h1>
            </div>
        </div>
    )
}