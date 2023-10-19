import Player from '../models/player.js';

async function playerCreateGet (req, res, next) {
    const player = req.body
    console.log(player)

    const newPlayer = await Player.create(player)

    if(newPlayer) {
        res.sendStatus(204)
    } else {
        throw new HTTPError('Invalid create Player, 400');
    }
}

async function playerReadAll (req, res, next) {
    const players = await Player.readAll()
    console.log(players)
    res.json(players)
}

async function playerDelete (req, res, next) {
    const id = Number(req.params.id)
    player.cpf = id

    if(id && (await Player.remove(id))) {
        res.sendStatus(204) //res.redirect
    } else {
        throw new HTTPError('Invalid delete Player, 400');
    }
}

async function playerUpdate (req, res, next) {
    const id = Number(req.params.id)
    Player.cpf = id

    if(id && (await Player.update(id))) {
        res.sendStatus(204) //res.redirect
    } else {
        throw new HTTPError('Invalid update Player, 400');
    }
}

export default { playerCreateGet, playerDelete, playerReadAll, playerUpdate }