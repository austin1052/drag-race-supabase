'use client';

import useSWR from "swr";
import React, {useState} from "react";
import Image from 'next/image'
import {fetcher} from '@/utils/fetcher';
import { Box, Card, CardContent, CardHeader, Link, Typography } from '@mui/material';
import { leagueWithInfo } from "@/app/api/league/[id]/route";


interface League {

}

export default function Page({ params: {id} }: { params: { id: string } }) {
    const { 
        data: league, 
        error: leagueError, 
        isLoading: leagueIsLoading 
    } = useSWR<leagueWithInfo[]>(`/api/league/${id}`, fetcher);

    if (leagueIsLoading) return <div>Loading...</div>;
    if (!league || leagueError) return <pre>{JSON.stringify(leagueError)}</pre>;

    console.log(league);
    return (
        <div>
            <pre>{JSON.stringify(league, null, 2)}</pre>
        </div>
    )
}