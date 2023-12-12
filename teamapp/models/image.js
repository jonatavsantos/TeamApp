import prisma from '../db/connect.js'

async function create({ codUser, path }) {
    try {
        const newImage = await prisma.image.create({
            data: {
                path,
                codUser,
            },
        });

        return newImage;
    } catch (error) {
        console.error(error);
    }
}

async function update({ codUser, path }) {
    const newImage = await prisma.image.update({
        where: {
            codUser,
        },
        data: {
            path,
            user: {
                connect: {
                    id: userId,
                },
            },
        },
    });

    return newImage;
}

export default { create, update };