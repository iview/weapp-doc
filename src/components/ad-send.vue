<template>
    <div class="advertisement-ad" @click.stop="handleClick"></div>
</template>
<script>
    import bus from './bus';
    export default {
        methods: {
            handleClick () {
                bus.$emit('on-donate-show');
            }
        }
    }
</script>
<style lang="less">
    .advertisement-ad{

        font-size: 20px;
        transform: scale(.5);
        -webkit-transform: scale(.5);
        transform-origin: right bottom;
        -webkit-transform-origin: right bottom;
        padding: 2px 6px;
        border: 1px solid #dddee1;
        background-color: rgba(0,0,0,.2);
        color: #fff;
        border-radius: 3px;
        position: absolute;
        top: -18px;
        right: 0;

        &:before{
            display: inline-block;
            content: '广告';
            cursor: pointer;
        }
        &:hover{
            &:before{
                content: '投放广告';
            }
        }
    }
</style>