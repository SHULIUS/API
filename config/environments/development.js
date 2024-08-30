/*development.js */
module.exports = {
    PORT: process.env.PORT,
    DB:{
         user: "postgres",
         password: "mysecrectpassword",
         database: "dev",
         host: "localhost",
         dialect: "postgres",
     } 
}