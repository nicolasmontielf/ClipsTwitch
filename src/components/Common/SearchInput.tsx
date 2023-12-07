import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchInput() {
    const [streamer, setStreamer] = useState<string>('')

    return (
        <div className="flex w-full">
            <div className="relative w-full">
                <input
                    value={streamer}
                    onChange={e => setStreamer(e.target.value)}
                    type="search"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300"
                    placeholder="Buscar streamer"
                    required
                />

                <SearchButton streamer={streamer} />
            </div>
        </div>
    )
}

function SearchButton({ streamer }: { streamer: string }) {
    const navigate = useNavigate()

    function searchStreamer() {
        if (!streamer) {
            return;
        }
        const parsed = streamer.trim().toLocaleLowerCase()
        navigate(`/streamer/${parsed}`)
    }

    return (
        <button
            type="button"
            onClick={searchStreamer}
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none"
        >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
        </button>
    )
}