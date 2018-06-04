let code = {};

code.base = `
<template>
    <BackTop></BackTop>
</template>
<script>
    export default {
        
    }
</script>
`;

code.custom = `
<style scoped>
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
<template>
    <BackTop :height="100" :bottom="200">
        <div class="top">返回顶端</div>
    </BackTop>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;