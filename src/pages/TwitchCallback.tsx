import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { getUser } from '@/services/Twitch'

export default function TwitchCallback() {
    const [errorMessage, setErrorMessage] = useState<string>()
    const navigate = useNavigate()

    function goToHome() {
        navigate('/')
    }
    
    useEffect(() => {
        if (localStorage.getItem('twitchToken')) {
            goToHome()
        }

        const queryParams = new URLSearchParams(location.search);
        const errorMessageFromUrl = queryParams.get('error_description')
        
        if (errorMessageFromUrl) {
            setErrorMessage(errorMessageFromUrl)
            return;
        }

        const params = new URLSearchParams(location.hash.substring(1));
        const accessToken = params.get('access_token');

        if (!accessToken) {
            setErrorMessage('No se pudo obtener el token de acceso')
            return;
        }

        localStorage.setItem('twitchToken', accessToken)

        ;(async () => {
            try {
                const user = await getUser()
                localStorage.setItem('twitchUser', JSON.stringify(user))
                goToHome()
            } catch {
                localStorage.removeItem('twitchToken')
            }
        })()

    })

    return (
        <div className="flex w-full text-center flex-col gap-3 mt-5">
            {
                errorMessage && (
                    <div className="w-full">
                        <h3 className="text-4xl w-full font-semibold text-red-600">
                            { errorMessage }
                        </h3>

                        <div className="mt-7">
                            <button
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800"
                                onClick={goToHome}
                            >
                                Ir al home
                            </button>
                        </div>
                    </div>
                )
            }
            {
                !errorMessage && (
                    <div className="w-full">
                        <h3 className="text-2xl w-full font-semibold">Estamos logeando, por favor no cierres esta pestaña...</h3>
                        <p className="w-full">Serás redireccionado automaticamente</p>
                    </div>
                )
            }
        </div>
    )
}