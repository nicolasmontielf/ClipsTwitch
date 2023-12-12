import axios from 'axios'
import type { TwitchClipResponse, ClipsRequestParams, UserData, TwitchUserResponse } from '../types'
import format from 'date-fns/formatRFC3339'

const instance = axios.create({
    baseURL: 'https://api.twitch.tv/helix',
    headers: {
        'Client-Id': import.meta.env.VITE_TWITCH_CLIENT_ID,
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
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
            params: {
                ended_at: format(new Date()),
                ...params
            }
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

        if (data.data.length === 0) {
            throw new Error('User not found')
        }

        return data.data[0]
    } catch (error) {
        throw handleError(error)
    }
}