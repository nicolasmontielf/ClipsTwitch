export interface ClipData {
    id: string
    url: string
    embed_url: string
    broadcaster_id: string
    broadcaster_name: string
    creator_id: string
    creator_name: string
    video_id: string
    game_id: string
    language: "en",
    title: string
    view_count: number
    created_at: string
    thumbnail_url: string
    duration: number
    vod_offset: number
    is_featured: boolean
}

export interface UserData {
    id: string
    login: string
    display_name: string
    type: 'admin' | 'staff' | 'global_mod' | ''
    broadcaster_type: string
    description: string
    profile_image_url: string
    offline_image_url: string
    view_count: number,
    email: string
    created_at: string
}

export interface TwitchUserResponse {
    data: UserData[]
}

export interface TwitchClipResponse {
    data: ClipData[]
    pagination: {
        cursor: string
    }
}

export interface ClipsRequestParams {
    broadcaster_id: string
    started_at?: string
    ended_at?: string
    before?: string
    after?: string
}