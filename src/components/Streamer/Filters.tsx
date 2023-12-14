import FilterDate from '@/components/Streamer/FilterDate'

export default function Filters(): JSX.Element {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
                <FilterDate />
            </div>

            <div className="col-span-1 relative">
                
            </div>
        </div>
    )
}