import { useEffect, useState } from 'react';

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const tokenFromStorage = localStorage.getItem('accessToken');

        if (tokenFromStorage) {
            setIsLoggedIn(true);
            return;
        }

        const params = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = params.get('access_token');

        if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
            window.location.hash = '';
        }
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Welcome!</h1>

                <div className="mt-4">
                    <p className="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.</p>
                    <div className="mt-8">
                        {
                            isLoggedIn
                            ? <p className="text-gray-700 dark:text-gray-300">You are logged in!</p>
                            : logInButton()
                        }
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

function logInButton() {
    const twitchUrl = 'https://id.twitch.tv/oauth2/authorize';
    const clientId = import.meta.env.VITE_TWITCH_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_TWITCH_REDIRECT_URI;

    const url = `${twitchUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=user:read:email`

    return (
        <a
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
            href={url}
        >
            Iniciar sesion con Twitch
        </a>
    )
}