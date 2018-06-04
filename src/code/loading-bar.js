let code = {};

code.router = `
// 部分代码省略
import iView from 'iview';
Vue.use(iView);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});
`;

code.ajax = `
<script>
// 以jQuery的Ajax为例，部分代码省略
import $ from 'jquery';
export default {
    methods: {
        getData () {
            this.$Loading.start();
            $.ajax({
                url: '/api/someurl',
                type: 'get',
                success: () => {
                    this.$Loading.finish();
                }
                error: () => {
                    this.$Loading.error();
                }
            });
        }
    }
}
</script>
`;

code.base = `
<template>
    <Button @click="start">Start</Button>
    <Button @click="finish">Finish</Button>
    <Button @click="error">Error</Button>
</template>
<script>
    export default {
        methods: {
            start () {
                this.$Loading.start();
            },
            finish () {
                this.$Loading.finish();
            },
            error () {
                this.$Loading.error();
            }
        }
    }
</script>
`;

code.config = `
this.$Loading.config({
    color: '#5cb85c',
    failedColor: '#f0ad4e',
    height: 5
});
`;

export default code;