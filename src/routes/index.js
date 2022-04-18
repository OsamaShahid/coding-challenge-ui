/* Route declarations for the app */

import * as views from '../views';

const routData = [
    {
        id: 'route-001',
        path: '/',
        component: views.Home,
        requiresAuth: false,
    },
    {
        id: 'route-002',
        path: '/home',
        component: views.Home,
        requiresAuth: false,
    },
    {
        id: 'route-003',
        path: '/posts/:id',
        component: views.PostDetails,
        requiresAuth: false,
    },
    {
        id: 'route-004',
        path: '/posts',
        component: views.Posts,
        requiresAuth: false,
    },
];

export default routData;
