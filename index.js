const container = require('./API/container');

const application = container.resolve("app");

application.start().catch(err =>{
    console.log(err);
    process.exit();
});