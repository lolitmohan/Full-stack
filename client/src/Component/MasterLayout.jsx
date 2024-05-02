import React from 'react';
import Header from './header';
import Footer from './Footer';

const MasterLayout = (p) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <Header/>
                        {p.children}
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default MasterLayout;