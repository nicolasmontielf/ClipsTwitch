import type { ClipData } from '../../types'
import ClipModal from './ClipModal'
import { useState } from 'react'

interface Props {
    clip: ClipData;
}

export default function ClipItem({ clip }: Props) {
    const [openModal, setOpenModal] = useState<boolean>(false)

    function formatSeconds(time: number): string {
        const minutes = Math.floor(time % 3600 / 60).toString().padStart(2,'0');
        const seconds = Math.floor(time % 60).toString().padStart(2,'0');

        // Crear la cadena en el formato requerido
        return `${minutes}:${seconds}`
    }

    function DurationLabel(): JSX.Element {
        return (
            <span
                className="absolute bottom-2 left-2 bg-purple-700 text-white text-sm font-semibold px-2.5 py-0.5 rounded"
            >
                {formatSeconds(clip.duration)}
            </span>
        )
    }

    function ViewCountLabel(): JSX.Element {
        return (
            <span
                className="absolute bottom-2 right-2 bg-purple-700 text-white text-sm font-semibold px-2.5 py-0.5 rounded"
            >
                {clip.view_count.toLocaleString()} views
            </span>
        )
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="relative">
                <img
                    className="rounded-t-lg"
                    src={clip.thumbnail_url}
                    alt={`Thumbnail for ${clip.title}`}
                />

                <DurationLabel />

                <ViewCountLabel />

            </div>

            <div className="p-5">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                    {clip.title}
                </h5>
                
                <div className="flex flex-wrap justify-end mt-5">
                    <button
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800"
                        onClick={() => setOpenModal(true)}
                    >
                        Ver Clip
                    </button>
                </div>
            </div>

            {openModal && (
                <div className="flex fixed justify-center items-center w-screen h-screen z-10 bg-gray-700/90 top-0 left-0 right-0 bottom-0 overflow-y-hidden">
                    <dialog className="flex p-8 border shadow">
                        <ClipModal clip={clip} onClose={() => setOpenModal(false)} />
                    </dialog>
                </div>
            )}
        </div>
    )
}