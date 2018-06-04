let code = {};

code.base = `
<template>
    <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value1: 1
            }
        }
    }
</script>
`;

code.step = `
<template>
    <InputNumber :max="10" :min="1" :step="1.2" v-model="value2"></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value2: 1
            }
        }
    }
</script>
`;

code.size = `
<template>
    <InputNumber v-model="value3" size="small"></InputNumber>
    <InputNumber v-model="value4"></InputNumber>
    <InputNumber v-model="value5" size="large"></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value3: 2,
                value4: 2,
                value5: 2
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <InputNumber v-model="value6" :disabled="disabled"></InputNumber>
    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
</template>
<script>
    export default {
        data () {
            return {
                disabled: true,
                value6: 1
            }
        }
    }
</script>
`;

code.readonly = `
<template>
    <InputNumber v-model="value7" readonly></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value7: 1
            }
        }
    }
</script>
`;

code.editable = `
<template>
    <InputNumber v-model="value8" :editable="false"></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value8: 1
            }
        }
    }
</script>
`;

code.formatter = `
<template>
    <div>
        <InputNumber
            :max="10000"
            v-model="value9"
            :formatter="value => \`$ $\{value\}\`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="value => value.replace(/\$\s?|(,*)/g, '')"></InputNumber>
        <InputNumber
            :max="100"
            v-model="value10"
            :formatter="value => \`$\{value\}%\`"
            :parser="value => value.replace('%', '')"></InputNumber>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value9: 1000,
                value10: 100
            }
        }
    }
</script>
`;
export default code;