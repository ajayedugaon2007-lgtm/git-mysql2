const express = require('express');
const app = express();

app.use(express.json());


let users = [
    { id: 1, name: "Ankit", email:"ankit@gmail.com",password:123456,phone:9876543210 },
    { id: 2, name: "ajay",email:"ajay@gmail.com",password:123457,phone:9876543510 },
    { id: 3, name: "mahfooz",email:"mahfooz@gmail.com",password:123458,phone:9876543519 }

];


app.get('/users', (req, res) => {
    res.json(users);
});


app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
});


app.post('/users', (req, res) => {
    const { name,email,password,phone} = req.body;

    if (!name || !email || !password || !phone) {
        return res.status(400).json({ message: "All fields required" });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
        phone
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email|| user.email;
    user.password = req.body.password || user.password;
    user.phone = req.body.phone || user.phone;

    res.json({ message: "User updated", user });
});


app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1);
    res.json({ message: "User deleted" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});