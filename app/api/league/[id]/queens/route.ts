import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { QueenWithScore } from './types';

export async function GET() {
    // const data = await getQueensWithScores()
    // if (!data) throw "No queens found.";
    // return NextResponse.json(data);

    const testData: string[] = ['test', 'test2'];
    return NextResponse.json(testData);
}

// async function getQueensWithScores() {
//     const contestants = await prisma.$queryRaw<QueenWithScore[]>`
//         SELECT 
//             q.id,
//             q.season_id,
//             q.first_name,
//             q.last_name,
//             q.display_name,
//             q.bio,
//             q.color,
//             q.is_active,
//             coalesce(SUM(et.point_value), 0) as score,
//             ARRAY_AGG(json_build_object(
//                     'id', e.id,
//                     'round_id', e.round_id,
//                     'display_name', e.display_name,
//                     'event_type_id', e.event_type_id,
//                     'contestant_id', e.contestant_id,
//                     'created_at', e.created_at,
//                     'event_type_name', et.name, 
//                     'point_value', et.point_value,
//                     'round_name', r.display_name,
//                     'round_number', r.number,
//                     'episode_number', ep.episode_number
//             ) ORDER BY r.number DESC) as events
//         FROM queen q
//         JOIN season s ON c.season_id = s.id
//         JOIN league l ON s.id = l.season_id
//         LEFT JOIN event e ON c.id = e.contestant_id
//         LEFT JOIN event_type et ON e.event_type_id = et.id
//         LEFT JOIN round r ON e.round_id = r.id
//         LEFT JOIN episode ep 
//             ON ep.id = e.episode_id
//         WHERE l.status = 'active'
//             AND coalesce(ep.air_date_time_start + interval '1 hour', date '2023-01-01') < NOW()
//         GROUP BY c.id, c.season_id, c.first_name, c.last_name, c.display_name, c.is_active, c.color
//     `;

//     return contestants.map(c => ({...c, score: Number(c.score)}));
// }