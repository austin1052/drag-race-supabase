'use client';

import useSWR from "swr";
import React, {useState} from "react";
import Image from 'next/image'
import {fetcher} from '@/utils/fetcher';
import { Box, Card, CardContent, CardHeader, Link, Typography } from '@mui/material';

export default function Page() {
    interface League {
        id: number;
        name: string;
        banner_url: string;
    }
    // 
    const { 
        data: leagues, 
        error: leaguesError, 
        isLoading: leaguesIsLoading 
    } = useSWR<League[]>('/api/leagues', fetcher);

    if (leaguesIsLoading) return <div>Loading...</div>;
    if (leaguesError) return <pre>{leaguesError}</pre>;

    console.log(leagues);

    return (
        <div>
            <h1>My Leagues</h1>
            <Box>
                {leagues?.map((league) => {
                    console.log(league);
                    return (
                        
                        <Card sx={{ width: 350}} key={league.id} style={{backgroundColor: 'lightgrey'}}>
                            <Link href={`/league/${league.id}`}>
                            <CardContent>
                                <Box alignItems="center">
                                    <Typography variant="h5" color="text.secondary" gutterBottom textAlign={"center"}>
                                        {league.name}
                                    </Typography>
                                </Box>
                                <Box alignItems={"center"}>
                                    <Image 
                                        src={league.banner_url} 
                                        alt={league.name}  
                                        width={300}
                                        height={150}                    
                                    />
                                </Box>
                            </CardContent>
                            </Link>
                        </Card>
                    )
                })}
            </Box>
        </div>

    )
}