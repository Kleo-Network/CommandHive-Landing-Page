import { MenuItem } from '../models/menu-item';

export const Pages = {
    ROOT: '/',
    HOME: '/',
    ABOUT_US: '/about-us',
};

// TODO: Vaibhav Maheshwari Please update this URL
export const LAUNCH_APP_URL = '/';

// TODO: Vaibhav Maheshwari Please update these URLs
export const SocialHandleLinks = {
    LINKEDIN: '/',
    INSTAGRAM: '/',
    FACEBOOK: '/',
};

export const menuItems: MenuItem[] = [
    {
        link: '/',
        title: 'Home',
    },
    {
        link: '/about',
        title: 'About Us',
    },
    {
        link: LAUNCH_APP_URL,
        title: 'Launch App',
        isOutsideLink: true,
    },
];
