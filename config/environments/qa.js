/*qa.js */
module.exports = {
    PORT: process.env.PORT,
    DB:{
         user: "postgres",
         password: process.env.DB_PASSWORD,
         database: "qa",
         host: process.env.DB_HOST,
         dialect: "postgres",
     } 
}