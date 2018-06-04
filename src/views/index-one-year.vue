<style scoped lang="less">
    @import "../styles/index.less";
</style>
<style>
    .barrage{
        font-size: 24px;
        text-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .index .ivu-card-shadow{
        box-shadow: 0 2px 2px rgba(0,0,0,.2);
    }
</style>
<style>
    .index-version .ivu-badge-count{
        box-shadow: none;
        right: 0;
        top: -3px;
        color: #f50;
        background: transparent;
    }
</style>
<template>
    <div>
        <div class="bg"></div>
        <div class="index">
            <Row type="flex" justify="center" align="middle" style="position: relative;z-index: 3">
                <i-col span="24">
                    <h1>
                        <img src="../images/logo.png" class="img-logo">
                        <img src="../images/name.png" class="img-name">
                    </h1>
                    <div class="list">
                        <div class="list-a">
                            <router-link :to="'/docs/guide/introduce' + suffix">{{ $t('index.guide') }}</router-link>
                            <router-link :to="'/docs/guide/install' + suffix">{{ $t('index.component') }}</router-link>
                            <router-link :to="'/docs/practice/case' + suffix">{{ $t('index.practice') }}</router-link>
                            <router-link :to="'/cli' + suffix">{{ $t('index.cli') }}</router-link>
                            <router-link :to="'/overview' + suffix">{{ $t('index.overview') }}</router-link>
                            <a href="https://github.com/iview/iview" target="_blank">
                                <Icon type="social-github"></Icon>
                                GitHub
                            </a>
                        </div>
                        <div style="width: 400px;margin: 16px auto 0;">
                            <Input
                                ref="input"
                                autofocus
                                :disabled="counter !== 0"
                                :maxlength="50"
                                v-model="barrage"
                                :placeholder="placeholder"
                                @on-enter="handleSendDanmu"
                                @on-click="handleSendDanmu"
                                icon="ios-paperplane"></Input>
                        </div>
                        <div style="text-align: center;padding-top: 12px;">
                            <a style="text-decoration: underline" href="https://zhuanlan.zhihu.com/p/28090879" target="_blank">阅读 iView 一周年专题文章</a>
                        </div>
                        <!--<div class="index-card">-->
                            <!--<Tooltip content="阅读 iView 一周年专题文章">-->
                                <!--<Card :padding="0" :bordered="false" shadow>-->
                                    <!--<a class="card" href="#" target="_blank">-->
                                        <!--<img src="../images/one-year-logo.png">-->
                                    <!--</a>-->
                                <!--</Card>-->
                            <!--</Tooltip>-->
                        <!--</div>-->
                    </div>
                </i-col>
            </Row>
        </div>
        <div id="barrage" ref="barrage"></div>
        <div class="index-lang">
            <span @click="handleChangeLang">
                <template v-if="lang === 'zh-CN'">EN</template>
                <template v-else>中文</template>
            </span>
        </div>
    </div>
</template>
<script>
    import bus from '../../src/components/bus';
    import axios from 'axios';
    const apiPath = 'https://www.iviewui.com';
//    const apiPath = 'http://127.0.0.1:9800';

    function colorRGB2Hex(color) {
        var rgb = color.split(',');
        var r = parseInt(rgb[0].split('(')[1]);
        var g = parseInt(rgb[1]);
        var b = parseInt(rgb[2].split(')')[0]);

        var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return hex;
    }

    export default {
        data () {
            return {
                lang: this.$lang,
                barrage: '',
                counter: 0,
                endtime: 0,
                myIds: [],
                hideBarrage: false
            }
        },
        computed: {
            suffix () {
                return this.lang === 'zh-CN' ? '' : '-en';
            },
            placeholder () {
                if (this.lang === 'zh-CN') {
                    let msg = 'iView 一周年啦，发条弹幕乐呵乐呵吧！';
                    if (this.counter !== 0 ) {
                        msg += '（等待' + this.counter + '秒）'
                    }
                    return msg;
                } else {
                    return 'Send a barrage to celebrate iView one years old.';
                }
            }
        },
        methods: {
            handleChangeLang () {
                const lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
                bus.$emit('on-change-lang', lang, '/');
            },
            handleSendDanmu () {
                if (this.barrage === '') return false;
                this.sendBarrage(this.barrage);
            },
            sendBarrage (text) {
                const params = new URLSearchParams();
                params.append('text', text);
                axios({
                    method: 'post',
                    url: `${apiPath}/barrage/add`,
                    data: params,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                    }
                }).then(res => {
                    if (res.data.status_code === '0') {
                        this.myIds.push(res.data.data.barrage.id);
                        this.counter = 5;
                        this.barrage = '';
                        this.sendOneBarrage(text);
                        this.goCounter();
                    }
                })
            },
            goCounter () {
                if (this.counter === 0) {
                    return;
                }
                this.counter -= 1;
                if (this.counter === 0) {
                    this.$nextTick(() => {
                        this.$refs.input.focus();
                    });
                }
                setTimeout(() => {
                    this.goCounter();
                }, 1000);
            },
            getBarrage (init = false) {
                const params = new URLSearchParams();
                if (!init) {
                    params.append('starttime', this.endtime - 5000);
                    params.append('endtime', this.endtime);
                }
                axios({
                    method: 'post',
                    url: `${apiPath}/barrage/list`,
                    data: params,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                    }
                }).then(res => {
                    if (res.data.status_code === '0') {
                        if (init) {
                            this.endtime = parseInt(res.data.data.time);
                        } else {
                            this.endtime += 5000;
                            const list = res.data.data.barrages;
                            if (list.length) {
                                const time = parseInt(5000 / list.length);
                                list.forEach(item => {
                                    if (this.myIds.indexOf(item.id) > -1) {

                                    } else {
                                        this.sendOneBarrage(item.text);
                                    }
                                });
                            }
                        }
                        this.getTimer = setTimeout(() => {
                            this.getBarrage();
                        }, 5000);
                    }
                })
            },
            sendOneBarrage (text) {
                const rgb = Math.floor(Math.random () * 255) + ',' + Math.floor(Math.random () * 255) + ',' + Math.floor(Math.random () * 255);
                const color = colorRGB2Hex(`rgb(${rgb})`);
                let speed = 1;
                const len = text.length;
                if (len <= 3) {
                    speed = 5;
                } else if (len <= 10) {
                    speed = 4;
                } else if (len <= 15) {
                    speed = 3;
                } else if (len <= 30) {
                    speed = 2;
                } else {
                    speed = 1;
                }
                const new_text = text.replace(/</g, '');
                if (this.hideBarrage) {
                    return false;
                }
                this.send({
                    text: new_text,
                    color: color,
                    speed: speed
                });
            }
        },
        mounted () {
            this.lang = this.$lang;
            this.send = this.$start(this.$refs.barrage);
            this.getBarrage(true);
        },
        beforeDestroy () {
            if (this.getTimer) {
                clearTimeout(this.getTimer);
            }
        }
    }
</script>
