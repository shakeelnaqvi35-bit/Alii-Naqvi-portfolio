var typed = new Typed(".typing", {

strings:[
"Frontend Developer",
"Java Developer",
"Machine Learning Learner"
],

typeSpeed:100,
backSpeed:50,
loop:true

});


// contact form

document.getElementById("contactForm").addEventListener("submit",async e=>{

e.preventDefault()

const name=document.getElementById("name").value
const email=document.getElementById("email").value
const message=document.getElementById("message").value

await fetch("http://localhost:5000/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({name,email,message})

})

alert("Message sent!")

})