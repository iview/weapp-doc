let code = {};

code.base = `
<template>
    <Circle :percent="80">
        <span class="demo-Circle-inner" style="font-size:24px">80%</span>
    </Circle>
    <Circle :percent="100" stroke-color="#5cb85c">
        <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
    </Circle>
    <Circle :percent="35" stroke-color="#ff5500">
        <span class="demo-Circle-inner">
            <Icon type="ios-close-empty" size="50" style="color:#ff5500"></Icon>
        </span>
    </Circle>
</template>
<script>
    export default {
        
    }
</script>
`;

code.percent = `
<template>
    <Circle :percent="percent" :stroke-color="color">
        <Icon v-if="percent == 100" type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
        <span v-else style="font-size:24px">{{ percent }}%</span>
    </Circle>
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
        computed: {
            color () {
                let color = '#2db7f5';
                if (this.percent == 100) {
                    color = '#5cb85c';
                }
                return color;
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
<style lang="less">
    .demo-Circle-custom{
        & h1{
            color: #3f414d;
            font-size: 28px;
            font-weight: normal;
        }
        & p{
            color: #657180;
            font-size: 14px;
            margin: 10px 0 15px;
        }
        & span{
            display: block;
            padding-top: 15px;
            color: #657180;
            font-size: 14px;
            &:before{
                content: '';
                display: block;
                width: 50px;
                height: 1px;
                margin: 0 auto;
                background: #e0e3e6;
                position: relative;
                top: -15px;
            };
        }
        & span i{
            font-style: normal;
            color: #3f414d;
        }
    }
</style>
<template>
    <Circle
        :size="250"
        :trail-width="4"
        :stroke-width="5"
        :percent="75"
        stroke-linecap="square"
        stroke-color="#43a3fb">
        <div class="demo-Circle-custom">
            <h1>42,001,776</h1>
            <p>消费人群规模</p>
            <span>
                总占人数
                <i>75%</i>
            </span>
        </div>
    </Circle>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;