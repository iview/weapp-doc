let code = {};

code.base = `
<style scoped>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
<template>
    <Badge count="3">
        <a href="#" class="demo-badge"></a>
    </Badge>
</template>
<script>
    export default {
        
    }
</script>
`;

code.dot = `
<template>
    <Badge dot>
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge dot>
        <Icon type="ios-bell-outline" size="26"></Icon>
    </Badge>
    <Badge dot>
        <a href="#">可以是一个链接</a>
    </Badge>
</template>
<script>
    export default {
        
    }
</script>
`;

code.overflow = `
<template>
    <Badge count="100">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge count="1000" overflow-count="999">
        <a href="#" class="demo-badge"></a>
    </Badge>
</template>
<script>
    export default {
        
    }
</script>
`;

code.alone = `
<style>
    .demo-badge-alone{
        background: #5cb85c !important;
    }
</style>
<template>
    <Badge count="10"></Badge>
    <Badge count="20" class-name="demo-badge-alone"></Badge>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;