import React, {useState} from 'react'
import {Button} from './Button'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Dropdown from './Dropdown'


function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    function handleClick (){
        setClick(!click)
    }
    function closeMobileMenu(){
        setClick(false)
    }

    return (
        <>
            <nav className="navbar">
                    <Link
                        to='/'
                        className="navbar-logo">
                        BOOKCLUB
                    </Link>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links"
                              onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/services" className="nav-links"
                              onClick={closeMobileMenu}>
                            Services <i className='fas fa-caret-down'/>
                        </Link>
                    </li>
                    {dropdown && <Dropdown/>

                    }


                </ul>

                    {/*<Link*/}
                    {/*    to='/profile'*/}
                    {/*    className="text-link">*/}
                    {/*    <li>profile</li>*/}
                    {/*</Link>*/}

                    {/*<Link*/}
                    {/*    to='/login'*/}
                    {/*    className="text-link">*/}
                    {/*    <li>login</li>*/}
                    {/*</Link>*/}


                    {/*<Link*/}
                    {/*    to='/reading-list'*/}
                    {/*    className="text-link">*/}
                    {/*    <li>books</li>*/}
                    {/*</Link>*/}


            </nav>
        </>
    )

}




export default Navbar;