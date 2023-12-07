import axios from 'axios'
import type { TwitchClipResponse, ClipsRequestParams, UserData, TwitchUserResponse } from '../types'

const instance = axios.create({
    baseURL: 'https://api.twitch.tv/helix',
    headers: {
        'Client-Id': import.meta.env.VITE_TWITCH_REDIRECT_URI,
        'Authorization': localStorage.getItem('accessToken')
    }
})

function handleError(error: any) {
    if (error?.response?.status === 401) {
        throw new Error('Unauthorized')
    } else if (error?.response?.status === 404) {
        throw new Error('Not Found')
    }
    throw new Error(error.message ?? 'Something went wrong')
}

export async function getClips(params: ClipsRequestParams): Promise<TwitchClipResponse> {
    try {
        const { data } = await instance.get<TwitchClipResponse>('/clips', {
            params: params
        })
        return data
    } catch (error) {
        throw handleError(error)
    }
}

export async function getUser(login: string): Promise<UserData> {
    try {
        const { data } = await instance.get<TwitchUserResponse>('/users', {
            params: {
                login
            }
        })
        return data.data[0]
    } catch (error) {
        throw handleError(error)
    }
}