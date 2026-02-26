const exp=require('express');
const app=exp();
const pen=require('./db');
app.use(exp.json());


app.post('/idea',(req,res)=>{
    const { name, email, password }=req.body;

    if( !name || !email || !password ){
    return res.status(400).json({ message: "ERROR Please provide => name, email, password.." });
  }
  const mkmk='INSERT INTO qul2(name,email,pasword) VALUES(?,?,?)';

  
  pen.query(mkmk, [name, email, password ], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ message: "Database insert failed" });    
    }

    res.status(201).json({
      message: "Student added successfully!",
      studentId: result.insertId
    });
  });

})
 

app.delete('/delete/:id',(req, res) => {
    const id=req.params.id;
    const mkmk = "DELETE FROM  qul2  WHERE id=?";

    pen.query(mkmk, [id], (error, result) => {
        if (error) {
            return res.status(500).json({
                message: "Server Internal Error",
                error: error
            });
        }

        res.status(201).json({
            message: "all details Successfully"
        });
    });
});



app.get('/mahfooz', (req, res) => {
  const mkmk = "SELECT * FROM qul2";

  pen.query(mkmk, (error, result) => {
    if (error) {
      return res.json({ message: "error all details " + error });
    }

    res.json({
      message: "all student success..",
      result
    });
  });
});

app.listen(4040,()=>{
    console.log("server is runing....")
})


  