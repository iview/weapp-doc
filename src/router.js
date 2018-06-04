/**
 * Created by aresn on 16/8/22.
 */
const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/components/scroll-en',
        meta: {
            title: 'Scroll'
        },
        component: (resolve) => require(['./views/components/scroll-en.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/'
    }
];

export default routers;
