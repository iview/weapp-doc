let code = {};

code.base = `
<template>
    <Row>
        <Col span="12">
            有默认值
            <ColorPicker v-model="color1" />
        </Col>
        <Col span="12">
            无默认值
            <ColorPicker v-model="color2" />
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                color1: '#19be6b',
                color2: ''
            }
        }
    }
</script>
`;

code.alpha = `
<template>
    <ColorPicker v-model="color3" alpha />
</template>
<script>
    export default {
        data () {
            return {
                color3: 'rgba(25, 190,107, .5)'
            }
        }
    }
</script>
`;

code.hue = `
<template>
    <ColorPicker v-model="color7" :hue="false" />
</template>
<script>
    export default {
        data () {
            return {
                color7: '#19be6b'
            }
        }
    }
</script>
`;

code.colors = `
<template>
    <Row>
        <Col span="12">
            <ColorPicker v-model="color4" recommend />
        </Col>
        <Col span="12">
            <ColorPicker v-model="color5" :colors="colors" />
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                color4: '#19be6b',
                color5: '#19be6b',
                colors: ['#311B92', '#512DA8', '#673AB7', '#9575CD', '#D1C4E9']
            }
        }
    }
</script>
`;

code.size = `
<template>
    <Row>
        <Col span="8">
            <ColorPicker v-model="color6" size="large" />
        </Col>
        <Col span="8">
            <ColorPicker v-model="color6" />
        </Col>
        <Col span="8">
            <ColorPicker v-model="color6" size="small" />
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                color6: '#19be6b'
            }
        }
    }
</script>
`;

export default code;