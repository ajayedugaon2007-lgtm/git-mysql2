
const mys=require('mysql2');
const md=mys.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"mys"
})

md.getConnection((error)=>{
    if(error){
        console.log("database is conection failed.."+error)
    }
    else{
         console.log("database is conection successfuly..")
    }
})
module.exports=md;
