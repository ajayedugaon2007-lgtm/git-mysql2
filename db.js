// console.log ("server is runing");


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


// {
//   "name":"mahfooz alam",
//   "age":"19",
//   "roll":"786",
//   "address":"amnour",
//   "email":"mahfooz25663@gmail.com",
//   "password":"12563485",
//   "pincode":"258963",
//   "phone":"3568923265",
//   "distric":"saran",
//   "country":"bihar"
//   }