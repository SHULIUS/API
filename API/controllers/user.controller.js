

class userController {
    constructor({UserService}) {
        this._userService = UserService;
    }

    sayHello(req , res){
        return res.send({message: "Hello world!"})
    }
}

module.exports  = userController