<style lang="less">
    @import "../styles/cli.less";
</style>
<template>
    <div>
        <div class="cli-menu">
            <div class="wrapper-header">
                <nav-menu :active-key="activeKey"></nav-menu>
            </div>
        </div>
        <div class="cli" ref="cli">
            <Row type="flex" justify="center" align="middle">
                <Col span="12">
                    <div class="cli-info">
                        <img src="../images/cli-logo.png">
                        <p class="cli-info-title">iView Cli</p>
                        <div class="cli-info-desc">用可视化的方式来创建你的 iView 工程</div>
                        <div class="cli-download">
                            <Row :gutter="16">
                                <Col span="12">
                                    <Button type="ghost" size="large" long icon="social-apple" @click="handleClick('mac')">下载 Mac 版</Button>
                                </Col>
                                <Col span="12">
                                    <Poptip trigger="hover" title="选择版本">
                                        <Button type="ghost" size="large" long icon="social-windows">下载 Windows 版</Button>
                                        <div slot="content">
                                            <Button type="ghost" icon="social-windows" @click="handleClick('windows', 64)">64 位</Button>
                                            <Button type="ghost" icon="social-windows" @click="handleClick('windows', 32)">32 位</Button>
                                        </div>
                                    </Poptip>
                                </Col>
                            </Row>
                            <Row :gutter="16" style="margin-top: 16px;">
                                <Col span="12">
                                    <Poptip trigger="hover" title="选择版本">
                                        <Button type="ghost" size="large" long icon="social-tux">下载 Linux 版</Button>
                                        <div slot="content">
                                            <Button type="ghost" icon="social-tux" @click="handleClick('linux', 64)">64 位</Button>
                                            <Button type="ghost" icon="social-tux" @click="handleClick('linux', 32)">32 位</Button>
                                        </div>
                                    </Poptip>
                                </Col>
                                <Col span="12">
                                    <Button type="ghost" size="large" long icon="social-github" @click="handleClick('github')">GitHub</Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col span="12">
                    <div style="margin-top: 30px">
                        <Carousel dots="outside" :height="height">
                            <Carousel-item class="cli-item">
                                <div class="cli-carousel" :style="{height: height + 'px'}">
                                    <img src="../images/cli-1.png">
                                </div>
                            </Carousel-item>
                            <Carousel-item class="cli-item">
                                <div class="cli-carousel" :style="{height: height + 'px'}">
                                    <img src="../images/cli-2.png">
                                </div>
                            </Carousel-item>
                            <Carousel-item class="cli-item">
                                <div class="cli-carousel" :style="{height: height + 'px'}">
                                    <img src="../images/cli-3.png">
                                </div>
                            </Carousel-item>
                            <Carousel-item class="cli-item">
                                <div class="cli-carousel" :style="{height: height + 'px'}">
                                    <img src="../images/cli-4.png">
                                </div>
                            </Carousel-item>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    import navMenu from '../components/menu.vue'
    import Util from '../libs/util';

    export default {
        components: { navMenu },
        data () {
            return {
                height: 0,
                activeKey: 'cli'
            };
        },
        computed: {

        },
        methods: {
            getHeight () {
                this.height = parseInt(Util.getStyle(this.$refs.cli, 'height')) - 100;
            },
            handleClick (type, bit) {
                if (type === 'mac') {
                    window.open('https://pan.baidu.com/s/1gfCiXpD');
                } else if (type === 'windows') {
                    if (bit === 64) {
                        window.open('https://pan.baidu.com/s/1o7JgdXC');
                    } else if (bit === 32) {
                        window.open('https://pan.baidu.com/s/1nvvbSQd');
                    }
                } else if (type === 'linux') {
                    if (bit === 64) {
                        window.open('https://pan.baidu.com/s/1b1T9Cy');
                    } else if (bit === 32) {
                        window.open('https://pan.baidu.com/s/1hshEPDi');
                    }
                } else if (type === 'github') {
                    window.open('https://github.com/iview/iview-cli');
                }
            }
        },
        mounted () {
            this.getHeight();
        }
    };
</script>