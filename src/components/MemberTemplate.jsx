import React from 'react';
import EnrollForm from './EnrollForm';
import MemberList from './MemberList';


const MemberTemplate = () => {
    return (
        <div className='memberTemplate'>
            <EnrollForm/>
            <MemberList/>
               
        </div>
    );
};

export default MemberTemplate;