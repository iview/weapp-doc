let code = {};

code.base = `
<template>
    <Affix>
        <span class="demo-affix">Fixed at the top</span>
    </Affix>
</template>
<script>
    export default {
        
    }
</script>
`;

code.top = `
<template>
    <Affix :offset-top="50">
        <span class="demo-affix">Fixed at the top 50px from the top</span>
    </Affix>
</template>
<script>
    export default {
        
    }
</script>
`;

code.bottom = `
<template>
    <Affix :offset-bottom="20">
        <span class="demo-affix">Fix at the bottom 20px</span>
    </Affix>
</template>
<script>
    export default {
        
    }
</script>
`;

code.change = `
<template>
    <Affix :offset-top="100" @on-change="change">
        <span class="demo-affix">Fix the position at the top of 100px at the top</span>
    </Affix>
</template>
<script>
    export default {
        methods: {
            change (status) {
                this.$Message.info(\`Status: \${status}\`);
            }
        }
    }
</script>
`;

export default code;