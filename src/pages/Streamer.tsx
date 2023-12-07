import Header from '../components/Streamer/Header'
import Filters from '../components/Streamer/Filters'
import ClipItem from '../components/Streamer/ClipItem'

export default function Streamer() {
    return (
        <>
            <header>
                <Header />
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