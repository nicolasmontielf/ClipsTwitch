export default function Home() {
    return (
        <div className="flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Welcome!</h1>

                <div className="mt-4">
                    <p className="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.</p>
                    <div className="mt-3">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                            Iniciar sesion con Twitch
                        </button>
                    </div>
                </div>

                
            </div>
        </div>
    )
}