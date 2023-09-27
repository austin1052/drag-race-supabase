export interface QueenEvent {
    id: number;
    display_name: string;
    event_type_id: number;
    queen_id: number;
    created_at: Date;
    event_type_name: string;
    point_value: number;
    episode_id: number;
    episode_number: number;
}
export interface QueenWithScore {
    id: number;
    full_drag_name: string;
    display_name: string;
    score: number;
    bio: JSON;
    events: QueenEvent[];
    color: string;
    is_active: boolean;
}