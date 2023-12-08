import { useEffect, useState } from 'react'
import { getClips } from '../../services/Twitch'
import { UserData, ClipData } from '../../types'
import ClipItem from './ClipItem'

type Props = {
    streamer?: UserData
}

export default function ClipsContainer({ streamer }: Props) {
    const [clips, setClips] = useState<ClipData[]>([])
    const [, setCursor] = useState<string>()

    useEffect(() => {
        if (streamer?.id) {
            getClips({ broadcaster_id: streamer.id }).then((clipsData) => {
                setClips((prevState) => {
                    return [...prevState, ...(clipsData.data ?? [])]
                })
                setCursor(clipsData.pagination.cursor ?? undefined)
            })
            .catch(() => {
                console.error("Error getting clips")
            })
        }
    }, [streamer])

    return (
        <div className="grid grid-cols-4">
            {
                clips.map((item) => (
                    <div key={item.id} className="p-2">
                        <ClipItem clip={item} />
                    </div>
                ))
            }
        </div>
    )
}