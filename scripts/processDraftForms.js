const process = require('process');
const { readFile, writeFile } = require('node:fs/promises');
const { resolve } = require('node:path');
const { PrismaClient } = require('@prisma/client')
const _ = require('lodash');

const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function processDraftForms() {
    try {

        const [headers, ...draftForms] = fs.readFileSync(path.join(__dirname, './draft-forms.csv'), 'utf8')
            .split('\n')
            .map(arr => arr.split(',')
                .map(str => str.trim())
            );
        
        const [_email, _manager, ...queens] = headers;

        const queenObjs = await prisma.queen.findMany({});
        const leagues = await prisma.league.findMany({});
        const app_users = await prisma.app_user.findMany({include: {team: true}});
        const queenMap = _.keyBy(queenObjs, 'display_name');
        // console.log(leagues, app_users, queenMap)
        // console.log(headers, ...draftForms)
        const teams = draftForms.map((form, i) => {
            const [email, managerStr, ...picks] = form;

            const manager = app_users.find(user => user.email === email);
            const team = manager.team[0];
            
            return ({
                // manager: {
                //     email,
                //     name: manager,
                //     display_name: manager && manager.split(' ')[0],
                // },
                manager_id: manager.id,
                league_id: leagues[0].id,
                name: `${manager.display_name}'s Girlies`,
                picks: picks.map((pick, j) => ({
                    queen_id: queenMap[queens[j]].id,
                    multiplier: Number(pick),
                    team_id: team.id,
                }))
            });
        });


        // CREATE APP USERS
        // const createdAppUsers = await prisma.app_user.createMany({ 
        //     data: teams.map(({manager: {name, email, display_name}}) => ({name, email, display_name}))
        // })
        // console.log(createdAppUsers)

        // CREATE TEAMS
        // const createdTeams = await prisma.team.createMany({
        //     data: teams
        // });
        // console.log(createdTeams)

        // CREATE PICKS
        // const createdPicks = await prisma.draft_position.createMany({
        //     data: teams.map((t) => t.picks).flat()
        // });
        // console.log(createdPicks)



    } catch (err) {
        console.log('Error: ', err);
    }
}

processDraftForms();

