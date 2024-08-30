class UserRepository {
    constructor({ db }) {
        this._db = db;
    }
    getUsers() {
        return this._db.users.findAll();
    }
    createUsers(user){
        return this._db.users.create(user);
    }
}

module.exports = UserRepository;