import { createSlice } from "@reduxjs/toolkit"


const initialState= {
    count : 3,
    member : [{
        id:1,
        name:'리액트',
        age:20,
        region:'서울',
        status:true,
    },{
        id:2,
        name:'김준혁',
        age:17,
        region:'부천',
        status:true,
    },{
        id:3,
        name:'자바쓰크립트',
        age:44,
        region:'비양도',
        status:true,
    }]
}



const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addMember : (state,action)=>{
            state.count+=1;
            state.member = [...state.member,action.payload] ;
            
            
        },
                       
        deleteMember : (state,action)=>{
            state.count-=1;
           state.member = state.member.filter(v=>(
                v.id !== action.payload
            ))
           
        }
    }
})

export const {addMember,deleteMember} = userSlice.actions;
export default userSlice.reducer;

