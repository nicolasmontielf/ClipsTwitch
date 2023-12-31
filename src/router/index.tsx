import { createBrowserRouter } from "react-router-dom";
import HomePage from '@/pages/Home';
import StreamerPage from '@/pages/Streamer';
import ContactPage from '@/pages/Contact';
import AboutPage from '@/pages/About';
import TwitchCallbackPage from '@/pages/TwitchCallback';
import App from '@/App'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/streamer/:streamerLogin",
                element: <StreamerPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/twitch/callback",
                element: <TwitchCallbackPage />
            }
        ]
    },
]);

export default router;