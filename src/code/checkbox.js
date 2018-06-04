let code = {};

code.single = `
<template>
    <Checkbox v-model="single">Checkbox</Checkbox>
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
    <CheckboxGroup v-model="social">
        <Checkbox label="twitter">
            <Icon type="social-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
            <Icon type="social-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
            <Icon type="social-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
            <Icon type="social-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
    </CheckboxGroup>
    <CheckboxGroup v-model="fruit">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
</template>
<script>
    export default {
        data () {
            return {
                social: ['facebook', 'github'],
                fruit: ['苹果']
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>
    <CheckboxGroup v-model="disabledGroup">
        <Checkbox label="香蕉" disabled></Checkbox>
        <Checkbox label="苹果" disabled></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: ['苹果']
            }
        }
    }
</script>
`;

code.communication = `
<template>
    <Checkbox v-model="checked" :disabled="disabled">
        <span v-if="checked">Checked</span>
        <span v-else>Unchecked</span>
         - 
        <span v-if="!disabled">Usable</span>
        <span v-else>Disabled</span>
    </Checkbox>
    <br>
    <Button type="primary" @click="checked = !checked">
        <span v-if="!checked">Checked</span>
        <span v-else>Unchecked</span>
    </Button>
    <Button type="primary" @click="disabled = !disabled">
        <span v-if="disabled">Usable</span>
        <span v-else>Disabled</span>
    </Button>
</template>
<script>
    export default {
        data () {
            return {
                checked: true,
                disabled: false
            }
        }
    }
</script>
`;

code.indeterminate = `
<template>
    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
        <Checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll">全选</Checkbox>
    </div>
    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
</template>
<script>
    export default {
        data () {
            return {
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜']
            }
        },
        methods: {
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        }
    }
</script>
`;

export default code;