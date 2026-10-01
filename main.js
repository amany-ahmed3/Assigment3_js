
const { log } = require('console');
const express = require('express');
const fs = require('fs/promises');

const app = express();
app.listen (3000,()=>{
    console.log("server is running on port 3000");
    
});
//                   Q1- add user
 
app.post('/user',
    express.json(),
    async (req, res) => {

        
        const { name, age, email } = req.body;

        let users = await fs.readFile('./users.json', {
            encoding: 'utf-8'
        });

        users = JSON.parse(users);

        // 3. check if email already exists
        const user = users.find((user) => user.email === email);

        if (user) {
            return res.json({
                message: "Email already exists."
            });
        }

        const newUser = {
            id: users.length + 1,
            name,
            age,
            email
        };

        users.push(newUser);

        users = JSON.stringify(users);

        await fs.writeFile('./users.json', users);

        return res.json({
            message: "User added successfully."
        });
    }
);


//                       Q2- PATCH

const { log } = require('console');
const express = require('express');
const fs = require('fs/promises');

const app = express();

app.patch('/user/:id',
    express.json(),
    async (req, res) => {
    
        
        const { id } = req.params;

        let users = await fs.readFile('./users.json', {
            encoding: 'utf-8'
        });

        users = JSON.parse(users);

        const userIdx = users.findIndex(
            (user) => user.id === parseInt(id)
        );


        if (userIdx === -1) {
            return res.json({
                message: "User ID not found.",
                success: false
            });
        }

        Object.assign(users[userIdx], req.body);

        users = JSON.stringify(users);
    
        await fs.writeFile('./users.json', users);

        return res.json({
            message: "User updated successfully.",
            success: true
        });
    }
);

//               Q3- delete by id

const { log } = require('console');
const express = require('express');
const fs = require('fs/promises');

const app = express();

app.listen (3001,()=>{
    console.log("server is running on port 3001");
    
});

app.delete('/user/:id',
    async (req, res) => {

        // 1. get id from req params
        const { id } = req.params;

        // 2. read users from users.json
        let users = await fs.readFile('./users.json', {
            encoding: 'utf-8'
        });

        users = JSON.parse(users);

        // 3. find user by id
        const userIdx = users.findIndex(
            (user) => user.id === parseInt(id)
        );

        if (userIdx === -1) {
            return res.json({
                message: "User ID not found."
            });
        }

        // 4. delete user
        users.splice(userIdx, 1);

        // 5. write users after delete
        users = JSON.stringify(users);

        await fs.writeFile('./users.json', users);

        // 6. send response
        return res.json({
            message: "User deleted successfully."
        });
    }
);


//              Q4- Get user by query params

const { log } = require('console');
const express = require('express');
const fs = require('fs/promises');

const app = express();

app.listen (3001,()=>{
    console.log("server is running on port 3001");
    
});

app.get('/user/getByName',
    async (req, res) => {

        const { name } = req.query;

        let users = await fs.readFile('./users.json', {
            encoding: 'utf-8'
        });

        users = JSON.parse(users);

        const user = users.find(
            (user) => user.name === name
        );

        if (!user) {
            return res.json({
                message: "User name not found."
            });
        }

        return res.json(user);
    }
);


//                  Q5:get all users

app.get('/user',
    async (req, res) => {

        let users = await fs.readFile('./users.json', {
            encoding: 'utf-8'
        });

        users = JSON.parse(users);

        return res.json(users);
    }
);


//                Q6:get user by minimum age


app.get('/user',
    async (req, res) => {


        const { minAge } = req.query;

        let users = await fs.readFile('./users.json', {
            encoding: 'utf-8'
        });

        users = JSON.parse(users);

        const filteredUsers = users.filter(
            (user) => user.age >= parseInt(minAge)
        );

        if (filteredUsers.length === 0) {
            return res.json({
                message: "no user found"
            });
        }

        return res.json(filteredUsers);
    }
);


//            Q7: get user by id


app.get('/user/:id',
    async (req, res) => {


        const { id } = req.params;

        let users = await fs.readFile('./users.json', {
            encoding: 'utf-8'
        });

        users = JSON.parse(users);

        const user = users.find(
            (user) => user.id === parseInt(id)
        );


        if (!user) {
            return res.json({
                message: "User not found."
            });
        }

        return res.json(user);
    }
);
