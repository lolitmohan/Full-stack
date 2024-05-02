import React from 'react';
import MasterLayout from './../Component/MasterLayout';
import Foods from '../Component/Foods';

const Products = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <MasterLayout>
                            <Foods/>
                        </MasterLayout>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;