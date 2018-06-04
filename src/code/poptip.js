let code = {};

code.base = `
<template>
    <Poptip trigger="hover" title="Title" content="content">
        <Button>Hover</Button>
    </Poptip>
    <Poptip title="Title" content="content">
        <Button>Click</Button>
    </Poptip>
    <Poptip trigger="focus" title="Title" content="content">
        <Button>Focus</Button>
    </Poptip>
    <Poptip trigger="focus" title="Title" content="content">
        <Input placeholder="Input focus" />
    </Poptip>
</template>
<script>
    export default {
        
    }
</script>
`;

code.placement = `
<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
<template>
    <div class="top">
        <Poptip title="Title" content="content" placement="top-start">
            <Button>Top Left</Button>
        </Poptip>
        <Poptip title="Title" content="content" placement="top">
            <Button>Top Center</Button>
        </Poptip>
        <Poptip title="Title" content="content" placement="top-end">
            <Button>Top Right</Button>
        </Poptip>
    </div>
    <div class="center">
        <div class="center-left">
            <Poptip title="Title" content="content" placement="left-start">
                <Button>Left Top</Button>
            </Poptip><br><br>
            <Poptip title="Title" content="content" placement="left">
                <Button>Left Center</Button>
            </Poptip><br><br>
            <Poptip title="Title" content="content" placement="left-end">
                <Button>Left Right</Button>
            </Poptip>
        </div>
        <div class="center-right">
            <Poptip title="Title" content="content" placement="right-start">
                <Button>Right Top</Button>
            </Poptip><br><br>
            <Poptip title="Title" content="content" placement="right">
                <Button>Right Center</Button>
            </Poptip><br><br>
            <Poptip title="Title" content="content" placement="right-end">
                <Button>Right Bottom</Button>
            </Poptip>
        </div>
    </div>
    <div class="bottom">
        <Poptip title="Title" content="content" placement="bottom-start">
            <Button>Bottom Left</Button>
        </Poptip>
        <Poptip title="Title" content="content" placement="bottom">
            <Button>Bottom Center</Button>
        </Poptip>
        <Poptip title="Title" content="content" placement="bottom-end">
            <Button>Bottom Right</Button>
        </Poptip>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.visible = `
<template>
    <Poptip v-model="visible">
        <a>Click</a>
        <div slot="title"><i>Custom title</i></div>
        <div slot="content">
            <a @click="close">close</a>
        </div>
    </Poptip>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            close () {
                this.visible = false;
            }
        }
    }
</script>
`;

code.slot = `
<template>
    <Poptip placement="right" width="400">
        <Button type="ghost">Click</Button>
        <div class="api" slot="content">
            <table>
                <thead>
                    <tr>
                        <th>Version</th>
                        <th>Update Time</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0.9.5</td>
                        <td>2016-10-26</td>
                        <td>Add new components <code>Tooltip</code> and <code>Poptip</code></td>
                    </tr>
                    <tr>
                        <td>0.9.4</td>
                        <td>2016-10-25</td>
                        <td>Add new components <code>Modal</code></td>
                    </tr>
                    <tr>
                        <td>0.9.2</td>
                        <td>2016-09-28</td>
                        <td>Add new components <code>Select</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Poptip>
</template>
<script>
    export default {
        
    }
</script>
`;

code.confirm = `
<template>
    <Poptip
        confirm
        title="Are you sure you want to delete this item?"
        @on-ok="ok"
        @on-cancel="cancel">
        <Button>Delete</Button>
    </Poptip>
    <Poptip
        confirm
        title="Are you sure delete this task?"
        @on-ok="ok"
        @on-cancel="cancel"
        ok-text="yes"
        cancel-text="no">
        <Button>Internationalization</Button>
    </Poptip>
</template>
<script>
    export default {
        methods: {
            ok () {
                this.$Message.info('You click ok');
            },
            cancel () {
                this.$Message.info('You click cancel');
            }
        }
    }
</script>
`;

code.options = `
{
    modifiers: {
        computeStyle:{
            gpuAcceleration: false,
        },
        preventOverflow :{
            boundariesElement: 'window'
        }
    }
}
`;
export default code;