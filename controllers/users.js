import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    const newUser = req.body;
    const userWithId = { ...newUser, id: uuidv4() };
    users.push(userWithId)
    res.send(`User with the name  ${newUser.name} is reacted`);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const user = users.filter((user) => user.id !== id);
    res.send(`User with ${user} id was deleted`);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, username, email, phone } = req.body;
    const user = users.find((user) => user.id === id)
    if (name) user.name = name;
    if (username) user.username = username;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    res.send(`User with ${id} id has been updated`)
}