import user from "../models/user.js";
import bcrypt from 'bcrypt';

const saltRounds = Number(process.env.SALT_ROUNDS);

async function getUser (req, res, next) {
    res.render('index')
};

async function userCreatePost (req, res, next) {
    const userData = req.body
    console.log(userData)

    const hash = await bcrypt.hash(user.password, saltRounds);

    user.password = hash;

    const newUser = await user.create(userData);

    if (newUser) {
        res.send('User success created')
    } else {
        throw new HTTPError('Invalid create user, 400');
    }
};

async function userReadAll (req, res, next) {
    const users = await User.readAll()
    console.log(users)
    res.json(users)
}

export default { userCreatePost, userReadAll, getUser }