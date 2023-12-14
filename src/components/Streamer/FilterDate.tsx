import { ChangeEvent, useContext } from 'react'
import { formatRFC3339 as format, subDays } from 'date-fns'
import ClipContext from '@/context/ClipContext'

export default function FilterDate(): JSX.Element {
    const context = useContext(ClipContext)
    const options = [
        { name: 'Todo el tiempo', value: '2001-12-08T00:00:00-00:00' },
        { name: 'Últimas 24 horas', value: format(subDays(new Date(), 1)) },
        { name: 'Última semana', value: format(subDays(new Date(), 7)) },
        { name: 'Último mes', value: format(subDays(new Date(), 30)) },
        { name: 'Último año', value: format(subDays(new Date(), 365)) },
    ]

    function handleDateChange(event: ChangeEvent<HTMLSelectElement>): void {
        context.setClips({
            clips: [],
            cursor: undefined
        })
        context.setFilters((prevState: any) => {
            return {
                ...prevState,
                started_at: event.target.value
            }
        })
    }

    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900">Fecha</label>
            <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                onChange={handleDateChange}
            >
                {
                    options.map((option, index) => (
                        <option
                            key={`options_time_${index}`}
                            value={option.value}
                        >
                            {option.name}
                        </option>
                    ))
                }
            </select>
        </>
    )
}