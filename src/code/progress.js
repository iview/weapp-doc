let code = {};

code.base = `
<template>
    <Progress :percent="25"></Progress>
    <Progress :percent="45" status="active"></Progress>
    <Progress :percent="65" status="wrong"></Progress>
    <Progress :percent="100"></Progress>
    <Progress :percent="25" hide-info></Progress>
</template>
<script>
    export default {
        
    }
</script>
`;

code.vertical = `
<template>
    <div style="height: 100px;">
        <Progress vertical :percent="25"></Progress>
        <Progress vertical :percent="45" status="active"></Progress>
        <Progress vertical :percent="65" status="wrong"></Progress>
        <Progress vertical :percent="100"></Progress>
        <Progress vertical :percent="25" hide-info></Progress>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.percent = `
<template>
    <Progress :percent="percent"></Progress>
    <ButtonGroup size="large">
        <Button icon="ios-plus-empty" @click="add"></Button>
        <Button icon="ios-minus-empty" @click="minus"></Button>
    </ButtonGroup>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>
`;

code.custom = `
<template>
    <Progress :percent="25" :stroke-width="5"></Progress>
    <Progress :percent="100">
        <Icon type="checkmark-circled"></Icon>
        <span>成功</span>
    </Progress>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;