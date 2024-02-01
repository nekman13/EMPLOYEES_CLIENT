import React from "react";


function Navbar(props) {
    return (
        <nav className="#b388ff deep-purple accent-1">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Employees</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a onClick={() => props.currentHandler("employees")}>Сотрудники</a>
                    </li>
                    <li>
                        <a onClick={() => props.currentHandler("departments")}>Департаменты</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;