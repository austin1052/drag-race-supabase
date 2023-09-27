import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import Prisma from '@prisma/client';

export async function GET() {
  const leagues = await prisma.league.findMany({
    include: { team: {
      include: { app_user: true }
    } },
  });
  if (!leagues) throw "No leagues found.";
  return NextResponse.json(leagues);
}   

export function getLeagues() {
  return prisma.league.findMany({
    include: { team: {
      include: { app_user: true }
    } },
  });
};
