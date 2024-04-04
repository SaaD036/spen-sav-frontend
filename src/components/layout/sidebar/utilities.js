import {
    Home as HomeIcon,
    Group as GroupIcon,
    TextSnippet as EntryIcon,
} from '@mui/icons-material';

export const sideBarItems = [
    {
        title: 'Home',
        icon: HomeIcon,
        route: '/',
    },
    {
        title: 'User',
        icon: GroupIcon,
        route: '/users',
    },
    {
        title: 'Entries',
        icon: EntryIcon,
        route: '/entry',
    },
];
