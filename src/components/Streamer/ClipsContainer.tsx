import { useEffect, useState } from 'react'
import { getClips } from '../../services/Twitch'
import { UserData, ClipData } from '../../types'
import ClipItem from './ClipItem'

type Props = {
    streamer: UserData
}

export default function ClipsContainer({ streamer }: Props) {
    const [clips, setClips] = useState<ClipData[]>([])
    const [cursor, setCursor] = useState<string>()

    useEffect(() => {
        (async () => getMoreClips())()
    }, [])

    function getMoreClips() {
        getClips({ broadcaster_id: streamer.id, after: cursor }).then((clipsData) => {
            setClips((prevState) => {
                return [...prevState, ...(clipsData.data ?? [])]
            })
            setCursor(clipsData.pagination.cursor ?? undefined)
        })
        .catch(() => {
            console.error("Error getting clips")
        })
    }

    return (
        <>
            <div className="grid grid-cols-4">
                {
                    clips.map((item) => (
                        <div key={item.id} className="p-2">
                            <ClipItem clip={item} />
                        </div>
                    ))
                }
            </div>

            {
                cursor && (
                    <div className="flex w-full justify-center mt-5">
                        <button
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-purple-700 border-purple-800 border bg-transparent rounded-lg hover:bg-purple-800 hover:text-white"
                            onClick={getMoreClips}
                        >
                            Cargar mas
                        </button>
                    </div>
                )
            }
        </>
    )
}