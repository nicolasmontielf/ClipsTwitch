import { useEffect, useContext } from 'react'
import { getClips } from '../../services/Twitch'
import ClipItem from './ClipItem'
import ClipContext from '../../context/ClipContext'

export default function ClipsContainer() {
    const context = useContext(ClipContext)

    useEffect(() => {
        const fn = async () => await getMoreClips()
        fn()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.filters])

    async function getMoreClips() {
        try {
            const { data, pagination } = await getClips({
                ...context.filters,
                after: context.clips.cursor
            })
    
            context.setClips((prevState: any) => {
                return {
                    clips: [...(prevState.clips ?? []), ...(data ?? [])],
                    cursor: pagination.cursor
                }
            })
        } catch (error) {
            console.error("Error getting clips")
        }
    }

    return (
        <>
            <div className="grid grid-cols-4">
                {
                    (context.clips.clips ?? []).map((item: any) => (
                        <div key={item.id} className="p-2">
                            <ClipItem clip={item} />
                        </div>
                    ))
                }
            </div>

            {
                context.clips.cursor && (
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