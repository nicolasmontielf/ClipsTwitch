import Navbar from './components/Navbar'
import { ReactElement } from 'react'

interface Props {
    children: ReactElement
}

function App({ children }: Props) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="container mx-auto py-8">
                { children }
            </main>
        </>
    )
}

export default App
