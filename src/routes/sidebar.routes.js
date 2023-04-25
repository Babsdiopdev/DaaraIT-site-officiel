import { EVENTS_PATH, GALLERY_PATH, COMMISSION_PATH, HOME_PATH } from "./app.paths";

export const sidebarRoutes = [
    {
        to: HOME_PATH,
        label: "Acceuil"
    },
    // {
    //     to: '',
    //     label: "A propos"
    // },
    // {
    //     to: '',
    //     label: "Forum"
    // },
    {
        to: EVENTS_PATH,
        label: "Evenements"
    },
    {
        to: COMMISSION_PATH,
        label: "Commissions"
    },
    {
        to: GALLERY_PATH,
        label: "Gallery"
    },
    // {
    //     to: '#contact',
    //     label: "Contact"
    // },
]