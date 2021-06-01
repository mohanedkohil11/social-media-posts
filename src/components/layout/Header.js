import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {

    return (
        <header>
            <div className="container headerContainer">
                <h1>
                    <Link to="/"> Social Media Posts </Link>
                </h1>
                <h3 style={{ cursor: 'pointer' }} onClick={props.directionHandle}>Change Direction</h3>
            </div>
        </header>
    )

}
export default Header;