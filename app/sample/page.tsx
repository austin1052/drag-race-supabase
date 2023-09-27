import useSWR from "swr";
import {fetcher} from '@/utils/fetcher';

export default function Page() {
    const { 
        data: leagues, 
        error: leaguesError, 
        isLoading: leaguesIsLoading 
    } = useSWR<any[]>('/api/leagues', fetcher);

    if (leaguesIsLoading) return <div>Loading...</div>;
    if (leaguesError) return <pre>{leaguesError}</pre>;

    return (
        <div>
            <h1>Page</h1>
            <ul>
                {leagues?.map((league) => (
                    <li key={league.id}>{league.name}</li>
                ))}
            </ul>
        </div>

    )
}