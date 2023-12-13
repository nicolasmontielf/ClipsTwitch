import { useState, KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchInput(): JSX.Element {
    const [streamer, setStreamer] = useState<string>('')
    const navigate = useNavigate()

    function searchStreamer(): void {
        if (!streamer) {
            return;
        }
        const parsed = streamer.trim().toLocaleLowerCase()
        navigate(`/streamer/${parsed}`)
    }

    function handleKeyPress(e: KeyboardEvent<HTMLInputElement>): void {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchStreamer()
        }
    }

    return (
        <form
            className="flex w-full"
            onSubmit={searchStreamer}
        >
            <div className="relative w-full">
                <input
                    value={streamer}
                    onChange={e => setStreamer(e.target.value)}
                    onKeyDown={handleKeyPress}
                    type="search"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Buscar streamer"
                    required
                />

                <SearchButton />
            </div>
        </form>
    )
}

function SearchButton(): JSX.Element {
    return (
        <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-purple-700 rounded-e-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none"
        >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
        </button>
    )
}