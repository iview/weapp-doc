let code = {};

code.base = `
<template>
    <Tooltip content="Here is the prompt text">
        A balloon appears when the mouse passes over this text
    </Tooltip>
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
        <Tooltip content="Top Left text" placement="top-start">
            <Button>Top Left</Button>
        </Tooltip>
        <Tooltip content="Top Center text" placement="top">
            <Button>Top Center</Button>
        </Tooltip>
        <Tooltip content="Top Right text" placement="top-end">
            <Button>Top Right</Button>
        </Tooltip>
    </div>
    <div class="center">
        <div class="center-left">
            <Tooltip content="Left Top text" placement="left-start">
                <Button>Left Top</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Center text" placement="left">
                <Button>Left Center</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Bottom text" placement="left-end">
                <Button>Left Bottom</Button>
            </Tooltip>
        </div>
        <div class="center-right">
            <Tooltip content="Right Top text" placement="right-start">
                <Button>Right Top</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Center text" placement="right">
                <Button>Right Center</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Bottom text" placement="right-end">
                <Button>Right Bottom</Button>
            </Tooltip>
        </div>
    </div>
    <div class="bottom">
        <Tooltip content="Bottom Left text" placement="bottom-start">
            <Button>Bottom Left</Button>
        </Tooltip>
        <Tooltip content="Bottom Center text" placement="bottom">
            <Button>Bottom Center</Button>
        </Tooltip>
        <Tooltip content="Bottom Right text" placement="bottom-end">
            <Button>Bottom Right</Button>
        </Tooltip>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.content = `
<template>
    <Tooltip placement="top">
        <Button>Multiple lines</Button>
        <div slot="content">
            <p>Display multiple lines of information</p>
            <p><i>Can customize the style</i></p>
        </div>
    </Tooltip>
</template>
<script>
    export default {
        
    }
</script>
`;

code.disabled = `
<template>
    <Tooltip placement="top" content="Can disable text prompts" :disabled="disabled">
        <Button @click="disabled = true">Click to close</Button>
    </Tooltip>
</template>
<script>
    export default {
        data () {
            return {
                disabled: false
            }
        }
    }
</script>
`;

code.delay = `
<template>
    <Tooltip placement="top" content="Tooltip text" :delay="1000">
        <Button @click="disabled = true">Delay 1 second to show</Button>
    </Tooltip>
</template>
<script>
    export default {
        
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