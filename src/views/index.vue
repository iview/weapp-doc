<style scoped lang="less">
    @import "../styles/index.less";
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
        <div class="index">
            <div class="index-main">
                <router-link to="/">
                    <img src="../images/logo.png" class="index-logo">
                </router-link>
                <row type="flex" justify="center" align="middle" class="index-container">
                    <i-col span="24">
                        <img src="../images/index-title.png" class="index-title">
                        <div class="index-content">一套高质量的</div>
                        <div class="index-content">微信小程序 UI 组件库</div>
                        <div class="index-actions">
                            <Button class="index-btn" size="large" type="primary" shape="circle">开始使用</Button>
                            <Poptip title="使用微信扫描体验" trigger="hover">
                                <Button class="index-btn" size="large" type="ghost" shape="circle">扫描体验</Button>
                                <div slot="content">
                                    <img src="../images/code.jpg" class="index-code">
                                </div>
                            </Poptip>
                            <Button size="large" class="index-btn" type="ghost" shape="circle" icon="social-github" @click="handleGitHub">GitHub</Button>
                        </div>
                    </i-col>
                </row>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            handleGitHub () {
                window.open('https://github.com/TalkingData/iview-weapp');
            }
        }
    }
</script>
