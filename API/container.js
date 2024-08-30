/* container.js */
const { asClass, createContainer, asFunction, asValue } = require('awilix');

const StartUp = require('./startup');
const Server = require('./server');
const Routes = require('../API/routes');

const { UserController } = require('../API/controllers');
const { UserRepository } = require('../dal/repositories');
const { UserService } = require('../services');
const UserRoutes = require('../API/routes/user.routes');


const config = require('../config/environments');
const container = createContainer();

const db = require("../dal/entities")

container
    .register({
        app: asClass(StartUp).singleton(),
        server: asClass(Server).singleton()
    })

    .register({
        UserController: asClass(UserController).singleton()
    })

    .register({
        router: asClass(Routes).singleton(),
        config: asValue(config)
    })

    .register({
        db: asValue(db)
    })

    .register({
        UserRoutes: asFunction(UserRoutes).singleton()
    })

    .register({
        UserService: asClass(UserService).singleton()
    })

    .register({
        UserRepository: asClass(UserRepository).singleton()
    })

module.exports = container;
