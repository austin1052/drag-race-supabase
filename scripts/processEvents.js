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
        
        let [headers, totals, eliminated, ...events] = fs.readFileSync(path.join(__dirname, './RPDR15_report_card.csv'), 'utf8')
            .split('\n')
            .map(arr => arr.split(',')
                .map(str => str.trim())
            );
        
        const [_episode, _airDate, _challenge, ...queens] = headers;

        const queenObjs = await prisma.queen.findMany({});
        const [league] = await prisma.league.findMany({});
        const eventTypes = await prisma.event_type.findMany({});
        const [season] = await prisma.season.findMany({});
        const episodes = await prisma.episode.findMany({where: {season_id: season.id}});
        const episodeMap = _.keyBy(episodes, 'episode_number');
        const queenMap = _.keyBy(queenObjs, 'display_name');
        const eventTypeMap = _.keyBy(eventTypes, 'name');

        const eventsArr = events.map((event, i) => {
            if (!event[0] || !event[1]) {
                event[0] = events[i-1][0];
                event[1] = events[i-1][1];
            }
            const [episode, air_date, challenge, ...scores] = event;
            return scores.map((score, j) => ({
                queen_id: queenMap[queens[j]].id,
                episode_id: episodeMap[episode].id,
                event_type_id: eventTypeMap[score]?.id,
                event_subtitle: score,
                event_display_name: challenge,
            })).filter(e => !!e.event_type_id);
        }).flat();
        // console.log(eventsArr);

        // const episodes = _.uniqBy(eventsArr, 'episode_number').map(({episode_number}) => ({episode_number, season_id: season.id}));

        // const epRes = await prisma.episode.createMany({data: episodes});
        // console.log(epRes);

        // const etRes = await prisma.scoring_event.createMany({
        //     data: eventsArr,
        // });
        // const evts = await prisma.scoring_event.findMany({include: {episode: true, queen: true, event_type: true}});
        // console.log(evts);

    } catch (err) {
        console.log('Error: ', err);
    }
}

processDraftForms();


