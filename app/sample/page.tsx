'use client';

import useSWR from "swr";
import React, {useState} from "react";
import Image from 'next/image'
import {fetcher} from '@/utils/fetcher';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';

export default function Page() {
    const { 
        data: leagues, 
        error: leaguesError, 
        isLoading: leaguesIsLoading 
    } = useSWR<any[]>('/api/leagues', fetcher);

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
                        </Card>
                    )
                })}
            </Box>
        </div>

    )
}