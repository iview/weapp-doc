let code = {};

code.base = `
<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.shortcuts = `
<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                options1: {
                    shortcuts: [
                        {
                            text: 'Today',
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click today');
                            }
                        },
                        {
                            text: 'Yesterday',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click yesterday');
                            }
                        },
                        {
                            text: 'One week',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click a week ago');
                            }
                        }
                    ]
                },
                options2: {
                    shortcuts: [
                        {
                            text: '1 week',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '1 month',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '3 months',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        }
    }
</script>
`;

code.format = `
<template>
    <Row>
        <Col span="12">
            <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                value1: '2016-01-01',
                value2: ['2016-01-01', '2016-02-15']
            }
        }
    }
</script>
`;

code.datetime = `
<template>
    <DatePicker type="datetime" placeholder="Select date and time" style="width: 200px"></DatePicker>
    <br>
    <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 200px"></DatePicker>
    <br>
    <DatePicker type="datetimerange" placeholder="Select date and time" style="width: 300px"></DatePicker>
    <br>
    <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 300px"></DatePicker>
</template>
<script>
    export default {
        
    }
</script>
`;

code.type = `
<template>
    <Row>
        <Col span="12">
            <DatePicker type="year" placeholder="Select year" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="month" placeholder="Select month" style="width: 200px"></DatePicker>
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
            <DatePicker type="date" :options="options3" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="date" :options="options4" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                options3: {
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now() - 86400000;
                    }
                },
                options4: {
                    disabledDate (date) {
                        const disabledDay = date.getDate();
                        return disabledDay === 15;
                    }
                }
            }
        }
    }
</script>
`;

code.confirm = `
<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" confirm placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" confirm placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
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
    <DatePicker
        :open="open"
        :value="value3"
        confirm
        type="date"
        @on-change="handleChange"
        @on-clear="handleClear"
        @on-ok="handleOk">
        <a href="javascript:void(0)" @click="handleClick">
            <Icon type="ios-calendar-outline"></Icon>
            <template v-if="value3 === ''">Select date</template>
            <template v-else>{{ value3 }}</template>
        </a>
    </DatePicker>
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
            handleChange (date) {
                this.value3 = date;
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
    <Row>
        <Col span="8">
            <DatePicker size="small" type="date" placeholder="Select date"></DatePicker>
        </Col>
        <Col span="8">
            <DatePicker type="date" placeholder="Select date"></DatePicker>
        </Col>
        <Col span="8">
            <DatePicker size="large" type="date" placeholder="Select date"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
`;

code.split_panels = `
<template>
    <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
</template>
<script>
    export default {

    }
</script>
`;

code.multiple = `
<template>
    <DatePicker type="date" multiple placeholder="Select date" style="width: 300px"></DatePicker>
</template>
<script>
    export default {

    }
</script>
`;

code.weeks = `
<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" show-week-numbers placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
`;

code.start_date = `
<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" :start-date="new Date(1991, 4, 14)" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" :start-date="new Date(1991, 4, 14)" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
`;

export default code;