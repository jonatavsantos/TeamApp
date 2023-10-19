import Team from '../models/team.js';

async function teamCreateGet (req, res, next) {
    try {
        const team = req.body
        console.log(team)

        const newTeam = await Team.create(team)
        
        if(newTeam) {
            //res.redirect
        } 
    } catch {
        throw new HTTPError('Invalid create Team, 400');
    }
}

async function teamReadAll (req, res, next) {
    const teams = await Team.readAll()
    console.log(teams)
    res.json(teams)
}

async function teamDelete (req, res, next) {
    const id = Number(req.params.id)
    Team.codTeam = id

    if(id && (await Team.remove(id))){
        res.sendStatus(204);
    } else {
        throw new HTTPError('Invalid delete Team, 400');
    }
}

async function teamUpdate (req, res, next) {
    const id = Number(req.params.id)
    Team.codTeam = id

    if(id && (await Team.update(id))) {
        res.sendStatus(204)
    } else {
        throw new HTTPError('Invalid update Team, 400');
    }
}

export default { teamCreateGet, teamDelete, teamReadAll, teamUpdate };