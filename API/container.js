/* container.js */
const { asClass, createContainer, asFunction, asValue } = require('awilix');

// app start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');
//business
const { UserBusiness } = require('../domain')
// Routes
const Routes = require('../API/routes');
const UserRoutes = require('../API/routes/user.routes');

// controllers
const { UserController } = require('../API/controllers');

//repositories
const { UserRepository } = require('../dal/repositories');

// services
const { UserService } = require('../services');

//db
const db = require("../dal/entities")

const container = createContainer();

container
    .register({
        app: asClass(StartUp).singleton(),
        router: asClass(Routes).singleton(),
        server: asClass(Server).singleton(),
        UserController: asClass(UserController).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton()
    })
    .register({
        config: asValue(config)
    })

    .register({
        db: asValue(db)
    })

    .register({
        UserService: asClass(UserService).singleton()
    })

    .register({
        UserRepository: asClass(UserRepository).singleton()
    })

    .register({
        UserBusiness: asClass(UserBusiness).singleton()
    })

module.exports = container;
