import User from "../models/user.js";

async function getUser (req, res, next) {
    res.render('index')
};

async function userCreatePost (req, res, next) {
    const user = req.body
    console.log(user)

    const newUser = await User.create(user);

    if (newUser) {
        console.log(newUser)
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