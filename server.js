const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {

const { name, email, message } = req.body;

try{

const transporter = nodemailer.createTransport({

service: "gmail",

auth: {
user: process.env.EMAIL,
pass: process.env.PASSWORD
}

});

await transporter.sendMail({

from: email,

to: process.env.EMAIL,

subject: "Portfolio Contact Message",

text: `
Name: ${name}
Email: ${email}
Message: ${message}
`

});

res.json({status:"Message Sent"});

}catch(err){

res.status(500).json({error:"Error sending email"});

}

});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});