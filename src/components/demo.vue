<style lang="less">
    @import '../styles/demo.less';
</style>
<template>
    <Row class="example" :class="{'example-vertical': vertical}" :id="title">
        <i-col class="example-demo" :span="vertical ? 24 : 12">
            <div class="example-case">
                <slot name="demo"></slot>
            </div>
            <header class="example-header">
                <span>
                    {{ title }}
                    <a :href="`#${title}`">#</a>
                </span>
            </header>
            <div class="example-desc">
                <slot name="desc"></slot>
            </div>
        </i-col>
        <div class="example-split"></div>
        <i-col class="example-code" :style="codeHeight" :span="vertical ? 24 : 12">
            <div :style="style"><slot name="code"></slot></div>
            <div class="example-code-more" v-if="showMore" @click="showCode = !showCode">
                <Icon type="ios-arrow-down" v-show="!showCode"></Icon>
                <Icon type="ios-arrow-up" v-show="showCode"></Icon>
                <i-button type="text" v-show="hideCode && !showCode">
                    <template v-if="lang === 'zh-CN'">显示代码</template>
                    <template v-else>Show Code</template>
                </i-button>
            </div>
        </i-col>
    </Row>
</template>
<script>

    export default {
        name: 'Demo',
        props: {
            title: {
                type: String,
                default: ''
            },
            vertical: {
                type: Boolean,
                default: false
            },
            hideCode: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                showCode: false,
                showMore: true,
                demo_height: 0,
                code_height: 0,
                ready: false,
                lang: this.$lang
            }
        },
        computed: {
            codeHeight () {
                let style = {};

                if (this.ready) {
                    if (this.showCode) {
                        style.height = `${this.code_height}px`;
                    } else {
                        style.height = `${this.demo_height}px`;
                    }
                }

                return style;
            },
            style () {
                let style = {
                    opacity: 1
                };
                if (this.hideCode && !this.showCode) {
                    style.opacity = 0;
                }
                return style;
            }
        },
        mounted () {
            this.$nextTick(() => {
                const demo_height = this.$children[0].$children[0].$el.clientHeight;
                const code_height = this.$children[0].$children[1].$el.clientHeight + 20;

                this.code_height = code_height;

                if ((code_height <= demo_height) && !this.hideCode) {
                    this.showMore = false;
                }

                this.demo_height = this.hideCode ? 30 : demo_height;
                this.ready = true;
            });

        }
    }
</script>
