class UserService {
    constructor({ UserBusiness }) {
        this._UserBusiness = UserBusiness;
    }
    async getUsers() {
        const users = await this._UserBusiness.getUsers();
        return users;
    }
    async getUser(id) {
        const user = await this._UserBusiness.getUser(id);
        return user;
    }

    async createUser(user) {
        const createdUser = await this._UserBusiness.createUser(user);
        return createdUser;
    }

    async updateUser(id , user){
        const updateUser = await this._UserBusiness.updateUser(id, user);
        return updateUser;
    }

    async deleteUser(id){
        const deletedUser = await this._UserBusiness.deleteUser(id);
        return deletedUser
    }

}

module.exports = UserService;