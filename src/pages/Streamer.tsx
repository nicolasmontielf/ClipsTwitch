import Header from '../components/Streamer/Header'
import Filters from '../components/Streamer/Filters'
import ClipItem from '../components/Streamer/ClipItem'
import { useEffect, useState } from 'react'
import { getUser } from '../services/Twitch'
import { useParams } from "react-router-dom";
import { UserData } from '../types'

export default function Streamer() {
    const [streamer, setStreamer] = useState<UserData>()
    const [userNotFound, setUserNotFound] = useState(false)
    const { streamerLogin } = useParams();

    useEffect(() => {
        getUser(streamerLogin!).then((streamerData) => {
            setStreamer(streamerData)
        })
        .catch(() => {
            setUserNotFound(true)
        })
    }, [streamerLogin])

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
                            [1, 2, 3, 4, 5, 6, 7, 8].map((_item, index) => (
                                <div key={index} className="p-2">
                                    <ClipItem />
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