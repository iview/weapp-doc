<style lang="less">
    .anchor{
        & a{
            opacity: 0;
            font-size: 24px;
            transition: opacity .2s ease-in-out;
            margin-left: 5px;
            position: relative;
            top: 2px;
        }
        &:hover a{
            opacity: 1;
        }
    }
</style>
<template>
    <div class="anchor">
        <h1 v-if="h1" :id="title_link">{{ title }}</h1>
        <h2 v-if="h2" :id="title_link">{{ title }}</h2>
        <h3 v-if="h3" :id="title_link">{{ title }}</h3>
        <h4 v-if="h4" :id="title_link">{{ title }}</h4>
        <h5 v-if="h5" :id="title_link">{{ title }}</h5>
        <h6 v-if="h6" :id="title_link">{{ title }}</h6>
        <slot></slot>
        <a :href="`#${title_link}`">#</a>
    </div>
</template>
<script>
    export default {
        props: {
            title: String,
            h1: Boolean,
            h2: Boolean,
            h3: Boolean,
            h4: Boolean,
            h5: Boolean,
            h6: Boolean
        },
        computed: {
            title_link () {
                return this.title.replace(/\s/g, '_');
            }
        }
    }
</script>