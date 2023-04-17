const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Client = db.client;

const register = async(req, res) => {

    const { username, password, email, name, age } = req.body;
    if (!(email && password && username)) {
        res.status(400).send("All input is required");
    }

    const oldUser = await Client.findOne({ email });
    if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    /* const token = jwt.sign({ email },
         process.env.TOKEN_KEY, {
             expiresIn: "2h",
         }
     );*/

    const client = await Client.create({
        username,
        name,
        age,
        email,
        password: encryptedPassword,
        //token: token
    });



    //client.token = token;

    res.status(201).send(client)
    console.log(client)

}

const login = async(req, res) => {
    const { email, password } = req.body;

    if (!(email && password)) {
        res.status(400).send("All input is required");
    }

    const client = await Client.findOne({ email })
    if (client && (await bcrypt.compare(password, client.password))) {

        /* const token = jwt.sign(
          {  email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;*/


        res.status(200).json(client);
    } else {
        res.status(400).send("Invalid Credentials");
    }
}

module.exports = {
    register,
    login
}