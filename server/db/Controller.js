import { knexToDB } from "./dbConnection.js";

const getUsers = () => {
    return knexToDB
        .select('*')
        .from('users');
}

const getUserByID = (inputID) => {
    return knexToDB
        .select('*')
        .from('users')
        .where({user_id:inputID});
}

export { getUsers, getUserByID };