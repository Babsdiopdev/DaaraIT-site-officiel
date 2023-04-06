import Events from '../pages/events/Events';
import GalleryPage from '../pages/gallery/GalleryPage';
import Home from '../pages/home/Home';
import { EVENTS_PATH, GALLERY_PATH, HOME_PATH } from './app.paths';

export const navigationPaths = [
    {
        path: HOME_PATH,
        element: <Home />
    },
    {
        path: EVENTS_PATH,
        element: <Events />
    },
    {
        path: GALLERY_PATH,
        element: <GalleryPage />
    }
]