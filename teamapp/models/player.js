import prisma from '../db/connect.js'

async function create(player) {
    const newPlayer = await prisma.player.create({
        data: player
    })

    return newPlayer
}

async function readAll() {
    const readPlayer = await prisma.player.readAll({
        data: player
    })

    return readPlayer
}

async function remove(cpf) {
    const removePlayer = await prisma.player.remove({
        where: {
            cpf,
        }
    })

    removePlayer
}

async function update(cpf, player) {
    const updatePlayer = await prisma.player.update({
        where: {
            cpf,
        },
        data: player
    })

    return updatePlayer
}

export default { create, readAll, remove, update }; 