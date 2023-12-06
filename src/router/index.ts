import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/Home';
import StreamerPage from '../pages/Streamer';
import ContactPage from '../pages/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/contact",
        Component: ContactPage,
    },
    {
        path: "/streamer/:id",
        Component: StreamerPage,
    },
]);

export default router;