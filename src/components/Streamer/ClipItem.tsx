import { ClipData } from '../../types'

interface Props {
    clip: ClipData;
}

export default function ClipItem({ clip }: Props) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img className="rounded-t-lg" src={clip.thumbnail_url} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {clip.title}
                    </h5>
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                    Ver Clip
                </a>
            </div>
        </div>
    )
}