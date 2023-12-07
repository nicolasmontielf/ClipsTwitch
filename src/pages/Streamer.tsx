import Header from '../components/Streamer/Header'
import Filters from '../components/Streamer/Filters'
import ClipItem from '../components/Streamer/ClipItem'
import { useEffect, useState } from 'react'
import { getUser, getClips } from '../services/Twitch'
import { useParams } from "react-router-dom";
import { UserData, TwitchClipResponse } from '../types'

export default function Streamer() {
    const [streamer, setStreamer] = useState<UserData>()
    const [userNotFound, setUserNotFound] = useState(false)
    const { streamerLogin } = useParams();

    // Handle user data
    useEffect(() => {
        getUser(streamerLogin!).then((streamerData) => {
            setStreamer(streamerData)
        })
        .catch(() => {
            setUserNotFound(true)
        })
    }, [streamerLogin])

    // Clips data
    const [clips, setClips] = useState<TwitchClipResponse>()
    useEffect(() => {
        if (streamer?.id) {
            getClips({ broadcaster_id: streamer.id }).then((clipsData) => {
                setClips(clipsData)
            })
            .catch(() => {
                console.error("Error getting clips")
            })
        }
    }, [streamer])

    return (
        userNotFound
            ? <UserNotFoundComponent />
            :
        <>
            <header>
                <Header streamer={streamer} />
            </header>
            <main className="mt-5">
                <div className="flex flex-wrap justify-center">
                    <div className="w-[30%]">
                        <Filters />
                    </div>
                </div>

                <div className="mt-5">
                    <div className="grid grid-cols-4">
                        {
                            (clips?.data ?? []).map((item) => (
                                <div key={item.id} className="p-2">
                                    <ClipItem clip={item} />
                                </div>
                            ))
                        }
                    </div>

                </div>

            </main>
        </>
    )
}

function UserNotFoundComponent() {
    return (
        <div className="flex justify-center items-center h-screen">
            <h2 className="text-4xl font-semibold text-center">
                Usuario no encontrado
            </h2>
        </div>
    )
}