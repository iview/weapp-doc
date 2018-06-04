<template>
    <div>
        <!--<div class="advertisement" id="API">-->
            <!--<row :gutter="32">-->
                <!--<i-col span="12">-->
                    <!--<div class="advertisement-main">-->
                        <!--<a href="https://github.com/TalkingData/inmap" target="_blank" @click="handleAd('ad-inmap')">-->
                            <!--<img src="../images/ad-inmap.png">-->
                        <!--</a>-->
                        <!--<ad-send></ad-send>-->
                    <!--</div>-->
                <!--</i-col>-->
                <!--<i-col span="12">-->
                    <!--<div class="advertisement-main">-->
                        <!--<a href="https://edu.talkingdata.com" target="_blank" @click="handleAd('ad-tdu')">-->
                            <!--<img src="../images/ad-tdu.png">-->
                        <!--</a>-->
                        <!--<ad-send></ad-send>-->
                    <!--</div>-->
                <!--</i-col>-->
            <!--</row>-->
        <!--</div>-->
        <!--<div class="advertisement">-->
            <!--<row :gutter="32">-->
                <!--<i-col span="12">-->
                    <!--<div class="advertisement-main">-->
                        <!--<a href="https://github.com/TalkingData/inmap" target="_blank" @click="handleAd('ad-inmap')">-->
                            <!--<img src="../images/ad-inmap.png">-->
                        <!--</a>-->
                        <!--<ad-send></ad-send>-->
                    <!--</div>-->
                <!--</i-col>-->
            <!--</row>-->
        <!--</div>-->
        <div class="advertisement">
            <row :gutter="32">
                <i-col span="12">
                    <div class="advertisement-main">
                        <!--<a v-if="ad_index === 1" href="https://item.jd.com/12215519.html" target="_blank" @click="handleAd('ad-vuebook')">-->
                            <!--<img src="../images/ad-vuebook.png">-->
                        <!--</a>-->
                        <a href="https://item.jd.com/12215519.html" target="_blank" @click="handleAd('ad-vuebook')">
                            <img src="../images/ad-vuebook.png">
                        </a>
                        <ad-send></ad-send>
                    </div>
                </i-col>
                <i-col span="12">
                    <!--<div class="advertisement-main" @click="handleSendAd">-->
                        <!--<a href="javascript:void(0)" @click="handleAd('ad-buy')">-->
                            <!--<img src="../images/ad-buy.png">-->
                        <!--</a>-->
                        <!--<ad-send></ad-send>-->
                    <!--</div>-->
                    <div class="advertisement-main">
                        <a href="https://segmentfault.com/ls/1650000011074057" target="_blank" @click="handleAd('ad-vuelearning')">
                            <img src="../images/ad-learning-vue.png">
                        </a>
                        <!--<a href="https://github.com/TalkingData/inmap" target="_blank" @click="handleAd('ad-inmap')">-->
                            <!--<img src="../images/ad-inmap.png">-->
                        <!--</a>-->
                        <ad-send></ad-send>
                    </div>
                </i-col>
            </row>
        </div>
    </div>
</template>
<script>
    import adSend from './ad-send.vue';
    import bus from './bus';

    export default {
        components: { adSend },
        data () {
            return {
                ad_index: 1  // 随机广告索引，更好地显示一类广告
            }
        },
        methods: {
            handleAd (name) {
                _hmt.push(['_trackEvent', name, 'click']);
            },
            handleSendAd () {
                bus.$emit('on-donate-show');
            }
        },
        mounted () {
            // 随机广告索引
            this.ad_index = Math.floor(Math.random () * 2 + 1);
        }
    }
</script>
<style lang="less">
    .advertisement{
        margin: 32px 0;
        padding: 6px;
        border: 1px solid #dddee1;
        border-radius: 6px;

        &-main{
            position: relative;
            padding: 8px;
        }

        a{
            opacity: 0.8;
            transition: opacity .2s ease-in-out;
        }
        a:hover{
            opacity: 1;
        }
        a:after{
            display: none;
        }
        img{
            width: 100%;
        }
    }
</style>