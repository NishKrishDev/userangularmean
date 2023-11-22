import axios from "axios";
import Users from "./model/userSchema.js";

const DefaultUsers = async () => {
    let users;
    try {
        users = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log('Api Called Successfully');
    } catch (error) {
        console.log('Error while calling users api', error)
    }

    try {
        await Users.insertMany(users.data);
        console.log('Default Data Inserted in Database')
    } catch (error) {
        console.log('Error while inserting default data', error.code)
    }
}

export default DefaultUsers;