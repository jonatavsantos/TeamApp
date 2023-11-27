import user from "../models/user.js";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = Number(process.env.SALT_ROUNDS);

async function getUser (req, res, next) {
    res.redirect('index.html')
};

async function getStart (req, res, next) {
    res.redirect('start.html');
}

async function userCreatePost (req, res, next) {
    const userData = req.body
    console.log(userData)

    const hash = await bcrypt.hash(userData.password, saltRounds);

    userData.password = hash;

    const newUser = await user.create(userData);

    if (newUser) {
        res.redirect('/login');
    } else {
        throw new HTTPError('Invalid create user, 400');
    }
};

async function getLogin (req, res, next) {
    res.redirect('login.html')
}

async function SignIn (req, res, next) {
    try{
        const { email, password } = req.body

    const userCompare = await user.readByEmail(email);

    const { cod: codUser, password: hash } = userCompare;

    const match = bcrypt.compare(password, hash);

    if(match) {
        const token = jwt.sign({ codUser }, process.env.JWT_SECRET, {
            expiresIn: 3600,
        });
        console.log({ auth: true, token });
    } else {
        throw new Error('Token not found')
    }
    } catch (error) {
        res.status(401).json({ error: 'User not exist' })
    }
}

async function userReadAll (req, res, next) {
    const users = await user.readAll()
    console.log(users)
    res.json(users)
}

export default { userCreatePost, getUser, getStart, getLogin, userReadAll, SignIn }