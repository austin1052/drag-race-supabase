import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(req: NextRequest, params: { id: string }) {
    const data = await prisma.league.findMany({
        include: {
            team: {
                include: {
                    app_user: true, 
                    draft_position: {
                        include: {
                            queen: {
                                include: {
                                    scoring_event: {
                                        include: {event_type: true}
                                    }
                                }
                            }
                        }
                    }
                }
            },
            season: {
                include: {queen: true}
            }
        }
    });
    return NextResponse.json(data);
}
