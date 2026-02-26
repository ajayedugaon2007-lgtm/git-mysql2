const express = require('express');
const app = express();
const db = require('./db');
const multer = require('multer');
const path = require('path');
const { error } = require('console');


app.use(express.json());

app.post('/register/user', (req, res) => {
    const { name, email, password, phone} = req.body;

    const sqlQ = "INSERT INTO users(name,email,password,phone) VALUES(?,?,?,?)";

    db.query(sqlQ, [name, email, password, phone], (error, result) => {
        if (error) {
            return res.status(500).json({
                message: "Server Internal Error",
                error: error
            });
        }

        res.status(201).json({
            message: "userr Register Successfully"
        });
    });
});

app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
app.post('/image_upload', upload.single('image'),(req, res) => {
    const { name, email, password, phone} = req.body;
const image=req.file.filename;

    const sqlQ = "INSERT INTO users(name,email,password,phone,image) VALUES(?,?,?,?,?)";

    db.query(sqlQ, [name, email, password, phone,image], (error, result) => {
        if (error) {
            return res.status(500).json({
                message: "Server Internal Error",
                error: error
            });
        }

        res.status(201).json({
            message: "Student Register Successfully"
        });
    });
});

app.listen(3000,()=>{
    console.log("server is runing...")
});