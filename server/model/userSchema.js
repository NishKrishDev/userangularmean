import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    "id": {
        type: String,
        required: true,
        unique: true
    },
    "name": String,
    "username": String,
    "email": String,
    "address": {
        type: Object,
        "street": String,
        "suite": String,
        "city": String,
        "zipcode": Number,
        "geo": {
            type: Object,
            "lat": Number,
            "lng": Number
        }
    },
    "phone": String,
    "website": String,
    "company": {
        type: Object,
        "name": String,
        "catchPhrase": String,
        "bs": String
    }
})

const Users = mongoose.model('Users', userSchema);

export default Users;