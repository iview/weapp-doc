let code = {};

code.base = `
<template>
    <Slider v-model="value1"></Slider>
    <Slider v-model="value2" range></Slider>
    <Slider v-model="value3" range disabled></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value1: 25,
                value2: [20, 50],
                value3: [20, 50]
            }
        }
    }
</script>
`;

code.step = `
<template>
    <Slider v-model="value4" :step="10"></Slider>
    <Slider v-model="value5" :step="10" range></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value4: 30,
                value5: [20, 50]
            }
        }
    }
</script>
`;

code.stops = `
<template>
    <Slider v-model="value6" :step="10" show-stops></Slider>
    <Slider v-model="value7" :step="10" show-stops range></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value6: 30,
                value7: [20, 50]
            }
        }
    }
</script>
`;

code.input = `
<template>
    <Slider v-model="value8" show-input></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value8: 25
            }
        }
    }
</script>
`;

code.format = `
<template>
    <Slider v-model="value9" :tip-format="format"></Slider>
    <Slider v-model="value10" :tip-format="hideFormat"></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value9: 25,
                value10: 25
            }
        },
        methods: {
            format (val) {
                return 'Progress: ' + val + '%';
            },
            hideFormat () {
                return null;
            }
        }
    }
</script>
`;

export default code;