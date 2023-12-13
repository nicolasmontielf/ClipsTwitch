import type { ClipData } from '../../types'

type Props = {
    clip: ClipData
    onClose: () => void
}

export default function ClipModal({ clip, onClose }: Props): JSX.Element {
    const URL_PARENT = import.meta.env.VITE_DOMAIN;

    function getEmbedUrl(url: string): string {
        return `${url}&parent=${URL_PARENT}&autoplay=true`
    }

    function CloseModalButton(): JSX.Element {
        return (
            <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800"
                onClick={onClose}
            >
                Cerrar
            </button>
        )
    }

    return (
        <div className="w-auto">
            <h3 className="text-2xl font-semibold">{clip.title}</h3>

            <div className="mt-5">
                <iframe
                    src={getEmbedUrl(clip.embed_url)}
                    height="600"
                    width="800"
                    allowFullScreen
                />
            </div>

            <div className="mt-6 flex justify-end">
                <CloseModalButton />
            </div>

        </div>
    )
}