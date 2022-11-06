import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

let users = [];


router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    const userId = uuidv4();

    users.push({ ...user, id: userId });

    res.send(`User with the name ${user.firstName} added to the database!`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database`);
});

export default router;