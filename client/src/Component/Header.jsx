import React from 'react';
import Logo from '../assets/image/react.svg'
const Header = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-3">
                    <a href="/"><img src={Logo} alt="Logo" /></a>
                </div>
                <div className="col-9">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/create">Create Food</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;