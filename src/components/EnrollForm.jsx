import React, { useRef, useState } from 'react';
import '../style/EnrollForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { addMember, changeAge, changeCountDown, changeCountUp, changeName, changeRegion } from '../user/userSlice';
import axios from 'axios';
const EnrollForm = () => {




const user = useSelector(state=>state.user);

let nextId = useRef(4);
const [form,setForm] = useState({name:"",age:"",region:"",status:true,id:nextId.current})



function onChangeHandler(e){
    const nextForm = {...form,[e.target.name]:e.target.value};
    setForm(nextForm);
}


const dispatch = useDispatch();



   const getData = async(member)=>{
    const result = await axios.post("http://localhost:5000/todo",member)
    console.log(result);
    setForm(result.data);
   }

const submitHandler= async(e)=>{
    e.preventDefault();

    
    const member={
        name:e.target.name.value,
        age:e.target.age.value,
        region:e.target.region.value,
        id:nextId.current++,
    }
    
    console.log(member);

    //데이터 추가하기
    await axios.post("http://localhost:5000/todo",member);

    //데이터요청하기
    getData(member);

    
}


    return (
        <div style={{
            margin:'auto',
            width:"768px",
            height:"500px",
            backgroundColor:"dodgerblue",
            textAlign:'center',
        }}>
            <h1>전체 회원 수 : {user.count}</h1>



          <form onSubmit={submitHandler}>
            <h1>이름 : <input type="text" name="name" onChange={onChangeHandler}/></h1>
            <br/>
            <h1>나이 : <input type="number" name="age" onChange={onChangeHandler}/></h1> 
            <br/>
            <h1>지역 : <input type="text" name="region" onChange={onChangeHandler}/></h1> 
            <br/>
            <input className='rounded w-16 h-16 text-white cursor-pointer' type='submit' name='submit'/>
            </form>  
            <button onClick={()=>{dispatch(addMember(form));
            nextId.current+=1}}>추가</button>
            
        </div>
    );
};

export default EnrollForm;