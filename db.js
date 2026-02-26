const mysql=require('mysql2');
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"hospital"
});
db.getConnection((error)=>{
    if (error){
        console.log("database connection fqaild");
    }
    else{
        console.log("database connection successfully..");
    }
});
module.exports=db;

