import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import '../style/MemberList.css';
import { deleteMember } from '../user/userSlice';


const MemberList = () => {

    const user = useSelector(state=>state.user.member);
    

    const dispatch = useDispatch();

  
    return (
        <div>
            <div className='ggub'>
                <h1>이름</h1>
                <h1>나이</h1>
                <h1>지역</h1>
                <h1>상태</h1>
            </div>

             {
                user.map((item,index)=>
                <div key={index} id="column">
                    <b>{item.name}</b>
                    <span>{item.age}</span>
                    <span>{item.region}</span>
                     <span id="deleteBtn" onClick={()=>dispatch(deleteMember(item.id))} >{item.status?'✖':null}</span>
                 </div>
                )
            }
            
        </div>
    );
};

export default MemberList;