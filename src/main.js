/**
 * Created by aresn on 16/6/20.
 */
import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app.vue';
import Routers from './router';
import Util from './libs/util';
import iView from 'iview';
import Env from './config/env';
import bus from './components/bus';
import 'iview/dist/styles/iview.css';
// import './styles/theme-christmas/index.less';

import ad from './components/ad.vue';

Vue.use(VueRouter);
Vue.use(iView);

Vue.component('ad', ad);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const RouterConfig = {
    routes: Routers
};
if (Env != 'local') {
    RouterConfig.mode = 'history';
}
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    bus.loading = true;
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    bus.loading = false;
    window.scrollTo(0, 0);
    if (_hmt) {
        _hmt.push(['_trackEvent', 'page', to.path]);
    }
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
