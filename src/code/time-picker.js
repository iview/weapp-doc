let code = {};

code.base = `
<template>
    <Row>
        <Col span="12">
            <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
        <Col span="12">
            <TimePicker type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.format = `
<template>
    <Row>
        <Col span="12">
            <TimePicker :value="value1" format="HH点mm分ss秒" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
        <Col span="12">
            <TimePicker :value="value2" format="HH’mm’ss" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                value1: '09:41:00',
                value2: ['09:41:00', '12:00:00']
            }
        }
    }
</script>
`;

code.hours = `
<template>
    <Row>
        <Col span="12">
            <TimePicker format="HH:mm" placeholder="Select time" style="width: 112px"></TimePicker>
        </Col>
        <Col span="12">
            <TimePicker format="HH:mm" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
`;

code.disabled = `
<template>
    <Row>
        <Col span="12">
            <TimePicker
                :disabled-hours="[1,5,10]"
                :disabled-minutes="[0,10,20]"
                placeholder="Select time"
                style="width: 168px"></TimePicker>
        </Col>
        <Col span="12">
            <TimePicker
                hide-disabled-options
                :disabled-hours="[1,5,10]"
                :disabled-minutes="[0,10,20]"
                placeholder="Select time"
                style="width: 168px"></TimePicker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
`;

code.confirm = `
<template>
    <Row>
        <Col span="12">
            <TimePicker confirm placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
        <Col span="12">
            <TimePicker confirm type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
`;

code.slot = `
<template>
    <TimePicker
        :open="open"
        :value="value3"
        confirm
        @on-change="handleChange"
        @on-clear="handleClear"
        @on-ok="handleOk">
        <a href="javascript:void(0)" @click="handleClick">
            <Icon type="ios-clock-outline"></Icon>
            <template v-if="value3 === ''">Select time</template>
            <template v-else>{{ value3 }}</template>
        </a>
    </TimePicker>
</template>
<script>
    export default {
        data () {
            return {
                open: false,
                value3: ''
            }
        },
        methods: {
            handleClick () {
                this.open = !this.open;
            },
            handleChange (time) {
                this.value3 = time;
            },
            handleClear () {
                this.open = false;
            },
            handleOk () {
                this.open = false;
            }
        }
    }
</script>
`;

code.size = `
<template>
    <row :gutter="16">
        <Col span="8">
            <TimePicker size="small" placeholder="Select time"></TimePicker>
        </Col>
        <Col span="8">
            <TimePicker placeholder="Select time"></TimePicker>
        </Col>
        <Col span="8">
            <TimePicker size="large" placeholder="Select time"></TimePicker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
`;

code.steps = `
<template>
    <TimePicker :steps="[1, 15, 15]" placeholder="Select time" style="width: 112px"></TimePicker>
</template>
<script>
    export default {

    }
</script>
`;

export default code;