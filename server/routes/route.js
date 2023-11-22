import express, { request, response } from 'express';
import Users from '../model/userSchema.js';

const router = express.Router();

router.get('/', (request, response) => {
    try {
        response.send('Server is running successfully')
    } catch (error) {
        response.status(500).json({error: 'Server is not running'})
        response.send('Server is not running')
    }
})

router.get('/allUsers', async(request, response) => {
    try {
        let users = await Users.find({});
        response.status(200).json(users);
    } catch (error) {
        response.status(500).json({error: 'Errors while fetching all users data'});
        response.send('Errors while fetching all users data')
    }
})

router.get('/singleUser/:id', async(request, response) => {
    try {
        let user = await Users.find({'id':request.params.id});
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json({message : error.message})
    }
})

router.post('/single', async(request, response) => {
    try {
        console.log('API HIT')
        let username = request.body.username;
        let singleUser = await Users.findOne({'username' : username});
        response.status(200).json(singleUser);
        console.log('User Found')
    } catch (error) {
        response.status(500).json({message : error.message})
    }
})

export default router;