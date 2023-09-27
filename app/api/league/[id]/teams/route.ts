import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET() {
    const testData = Promise.resolve({test: 'test'});
    return NextResponse.json(testData);
}
