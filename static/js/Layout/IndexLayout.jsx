import React from 'react';
import Nabvar from '../Components/Navbar/Navbar'
import Demo from '../Pages/Demo/Demo'
import Developer from '../Components/Developer/Developer'

export default function IndexLayout() {




    return (
        <div className='section-bg-color'>
            <Nabvar />
            <div className='espaciobg'>

            </div>
            <Demo />
            <Developer />
        </div>
    );
}
