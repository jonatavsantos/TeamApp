import prisma from '../db/connect.js';

async function create(user) {
    const newUser = await prisma.user.create({
        data: user
    })

    return newUser
} 

async function readAll() {
    const readUser = await prisma.user.readAll({
        data: user
    })

    return readUser
}

async function remove(id) {
    const removeUser = await prisma.user.remove({
        where: {
            id,
        }
    })

    return removeUser
}

async function update(id, user) {
    const updateUser = await prisma.user.update({
        where: {
            id,
        },
        data: user
    })

    return updateUser
}

export default { create, readAll, remove, update };