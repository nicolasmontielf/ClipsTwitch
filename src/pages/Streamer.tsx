import Header from '../components/Streamer/Header'
import Filters from '../components/Streamer/Filters'
import ClipsContainer from '../components/Streamer/ClipsContainer'
import { useEffect, useState } from 'react'
import { getUser } from '../services/Twitch'
import { useParams } from "react-router-dom";
import { UserData } from '../types'

export default function Streamer() {
    const [streamer, setStreamer] = useState<UserData>()
    const [userNotFound, setUserNotFound] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const { streamerLogin } = useParams();

    // Handle user data
    useEffect(() => {
        getUser(streamerLogin!).then((streamerData) => {
            setStreamer(streamerData)
        })
        .catch(() => {
            setUserNotFound(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [streamerLogin])

    return (
        isLoading
            ? isLoadingComponent()
            :
                userNotFound
                    ? <UserNotFoundComponent />
                    : (
                        <>
                            <header>
                                <Header streamer={streamer} />
                            </header>

                            {/* Clips container */}
                            <main className="mt-5">
                                {/* Filters for clips */}
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-[30%]">
                                        <Filters />
                                    </div>
                                </div>

                                {/* Clips */}
                                <div className="mt-5">
                                    {
                                        streamer?.id && (
                                            <ClipsContainer streamer={streamer} />
                                        )
                                    }
                                </div>
                            </main>
                        </>
                    )
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

function isLoadingComponent() {
    return (
        <div className="flex justify-center">
            <h1 className="text-center text-2xl">Loading...</h1>
        </div>
    )
}