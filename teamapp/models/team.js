import prisma from '../db/connect.js'
import user from './user.js'

async function create(team) {
    const newTeam = await prisma.team.create({
        data: team
    })

    return newTeam
}

async function readAll() {
    const readTeam = await prisma.team.readAll({
        data: team
    })

    return readTeam
}

async function remove(codTeam) {
    const removeTeam = await prisma.team.remove({
        where: {
            codTeam,
        }
    })

    return removeTeam
}

async function update(codTeam, team) {
    const updateTeam = await prisma.team.update({
        where: {
            codTeam,
        },
        data: team
    })

    return updateTeam
}

export default { create, readAll, remove, update };