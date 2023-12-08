import { ClipData } from '../../types'

interface Props {
    clip: ClipData;
}

export default function ClipItem({ clip }: Props) {
    function formatSeconds(time: number) {
        const minuts = Math.floor(time / 60);
        const seconds = Math.round(time % 60);

        // Crear la cadena en el formato requerido
        return minuts.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="relative">
                <img
                    className="rounded-t-lg"
                    src={clip.thumbnail_url}
                    alt={`Thumbnail for ${clip.title}`}
                />

                <span
                    className="absolute bottom-2 left-2 bg-purple-900 text-white text-sm font-semibold px-2.5 py-0.5 rounded"
                >
                    {formatSeconds(clip.duration)}
                </span>
            </div>

            <div className="p-5">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                    {clip.title}
                </h5>
                
                <div className="flex flex-wrap justify-end mt-5">
                    <button
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800"
                    >
                        Ver Clip
                    </button>
                </div>
            </div>
        </div>
    )
}