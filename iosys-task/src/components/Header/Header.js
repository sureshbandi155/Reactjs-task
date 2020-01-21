import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const header = (props) => {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="left-col">
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink to="/">All</NavLink>
                            </li>
                            <li>
                                <NavLink to="/videos">videos</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ebooks">Ebooks</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right-col">
                    <form>
                        <input type="text" 
                               className="search" 
                               placeholder="Search.." 
                               onChange={props.changed} 
                               value={props.search} />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default header;