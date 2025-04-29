 const jwt=require('jsonwebtoken')

const password='123'
 const usertoken=jwt.sign({"username":"Akhand"},password)
 console.log("user",usertoken);
  const verifyToken=jwt.verify(usertoken,password)
  console.log("verifyToken",verifyToken);
  localStorage.setItem("token","verifyToken")
  console.log(localStorage.getItem("token"));
  