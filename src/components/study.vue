<template>
    <span>
        <a v-if="type === 'render'" href="https://segmentfault.com/l/1500000008892728" target="_blank">
        <Icon type="social-youtube-outline"></Icon>
        <span> 学习 Render 函数的内容</span>
    </a>
    <a v-if="type === 'component'" href="https://segmentfault.com/l/1500000009448056" target="_blank">
        <Icon type="social-youtube-outline"></Icon>
        <span> 学习组件基础内容</span>
    </a>
        <a v-if="type === 'webpack'" href="https://segmentfault.com/l/1500000009448189" target="_blank">
        <Icon type="social-youtube-outline"></Icon>
        <span> 学习 webpack 内容</span>
    </a>
    </span>
</template>
<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'render'
            }
        }
    };
</script>