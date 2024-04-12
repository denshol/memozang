const express = require("express");
const router = express.Router();

let id=4;

const member =[{
    id:1,
    name:'김준혁',
    age:33,
    region:'부천',
    status:true,

},
{id:2,
    name:'김수진',
    age:28,
    region:'신림',
    status:true,},
{
    id:3,
    name:'양경숙',
    age:23,
    region:'작전',
    status:true,
}];
router.get("/todo",(request,response)=>{
    response.json(member);
})


router.post("/todo",(request,response) => {
    const {id,name,age,region} = request.body;
    console.log(id,name,age,region)

    member.push({id:id,name:name,age:age,region:region});
   
    response.send("데이터수신");


})


module.exports = router;