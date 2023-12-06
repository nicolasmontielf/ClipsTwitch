import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="container mx-auto py-8">
                <Outlet />
            </main>
        </>
    )
}

export default App
