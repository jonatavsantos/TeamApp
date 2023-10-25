import user from "../models/user.js";

async function getUser (req, res, next) {
    res.render('index')
};

async function userCreatePost (req, res, next) {
    const userData = req.body
    console.log(userData)

    const newUser = await user.create(userData);

    if (newUser) {
        res.json(newUser)
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