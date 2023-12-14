import axios, { AxiosInstance } from 'axios'
import format from 'date-fns/formatRFC3339'
import type {
    TwitchClipResponse, ClipsRequestParams, UserData, TwitchUserResponse, TwitchCategoryResponse, CategoryData
} from '@/types'

function getInstance(): AxiosInstance {
    return axios.create({
        baseURL: 'https://api.twitch.tv/helix',
        headers: {
            'Client-Id': import.meta.env.VITE_TWITCH_CLIENT_ID,
            'Authorization': 'Bearer ' + localStorage.getItem('twitchToken')
        }
    })
}

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
        const instance = getInstance()
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

export async function getUser(login?: string): Promise<UserData> {
    try {
        const instance = getInstance()
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

export async function searchCategories(query: string): Promise<CategoryData[]> {
    try {
        const instance = getInstance()
        const { data } = await instance.get<TwitchCategoryResponse>('/search/categories', {
            params: {
                query: query
            }
        })

        return data.data
    } catch (error) {
        throw handleError(error)
    }
}