import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/Home';
import StreamerPage from '../pages/Streamer';
import ContactPage from '../pages/Contact';
import App from '../App'

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
                path: "/streamer/:id",
                element: <StreamerPage />,
            },
        ]
    },
]);

export default router;