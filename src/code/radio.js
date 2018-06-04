let code = {};

code.single = `
<template>
    <Radio v-model="single">Radio</Radio>
</template>
<script>
    export default {
        data () {
            return {
                single: false
            }
        }
    }
</script>
`;

code.group = `
<template>
    <RadioGroup v-model="phone">
        <Radio label="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
    <RadioGroup v-model="animal">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                phone: 'apple',
                animal: '爪哇犀牛'
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <Radio v-model="disabledSingle" disabled>Radio</Radio>
    <RadioGroup v-model="disabledGroup">
        <Radio label="金斑蝶" disabled></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: '爪哇犀牛'
            }
        }
    }
</script>
`;

code.vertical = `
<template>
    <RadioGroup v-model="vertical" vertical>
        <Radio label="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                vertical: 'apple'
            }
        }
    }
</script>
`;

code.button = `
<template>
    <RadioGroup v-model="button1" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup>
    <RadioGroup v-model="button2" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海" disabled></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup>
    <RadioGroup v-model="button3" type="button">
        <Radio label="北京" disabled></Radio>
        <Radio label="上海" disabled></Radio>
        <Radio label="深圳" disabled></Radio>
        <Radio label="杭州" disabled></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                button1: '北京',
                button2: '北京',
                button3: '北京'
            }
        }
    }
</script>
`;

code.size = `
<template>
    <RadioGroup v-model="button4" type="button" size="large">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup>
    <RadioGroup v-model="button5" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup>
    <RadioGroup v-model="button6" type="button" size="small">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                button4: '北京',
                button5: '北京',
                button6: '北京'
            }
        }
    }
</script>
`;

export default code;