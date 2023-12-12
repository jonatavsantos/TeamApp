import prisma from '../db/connect.js';

async function create(user) {
    const newUser = await prisma.user.create({
        data: user
    })

    return newUser
} 

async function readAll(user) {
    const readUser = await prisma.user.readAll({
        data: user
    })

    return readUser
}

async function read(codUser) {
    const user = await prisma.user.findFirst({
      where: {
        codUser,
      },
      include: {
        userId: {
          select: {
            path: true,
          },
        },
      },
    });
  
    return user;
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

async function readByEmail(email) {
    const userEmail = await prisma.user.findFirst({
        where: {
            email,
        },
    })

    return userEmail
}

export default { create, readAll, remove, update, readByEmail, read };