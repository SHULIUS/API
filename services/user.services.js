const { toDomainEntity } = require('../domain/mappers');
const { toDbEntity } = require("../dal/mappers")

class UserService {
    constructor({ UserRepository }) {
        this._userRepository = UserRepository
    }
    async getUsers() {
        const users = await this._userRepository.getUsers();
        return users.map(toDomainEntity);
    }

    async createUsers(user) {
        user = toDbEntity(user)
        const createdUser = await this._userRepository.createUsers(user);
        return createdUser;
    }

}

module.exports = UserService;