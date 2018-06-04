let code = {};

code.base = `
<template>
    <Rate v-model="value"></Rate>
</template>
<script>
    export default {
        data () {
            return {
                value: 0
            }
        }
    }
</script>
`;

code.half = `
<template>
    <Rate allow-half v-model="valueHalf"></Rate>
</template>
<script>
    export default {
        data () {
            return {
                valueHalf: 2.5
            }
        }
    }
</script>
`;

code.text = `
<template>
    <Row>
        <Col span="12">
            <Rate show-text v-model="valueText"></Rate>
        </Col>
        <Col span="12">
            <Rate show-text allow-half v-model="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
            </Rate>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                valueText: 3,
                valueCustomText: 3.8
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <Rate disabled v-model="valueDisabled"></Rate>
</template>
<script>
    export default {
        data () {
            return {
                valueDisabled: 2
            }
        }
    }
</script>
`;

export default code;