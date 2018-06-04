let code = {};

code.type = `
<template>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
</template>
<script>
    export default {
        
    }
</script>
`;

code.icon = `
<template>
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle">Circle</Button>
    <br><br>
    <Button type="ghost" shape="circle" icon="ios-search"></Button>
    <Button type="ghost" icon="ios-search">Search</Button>
    <Button type="ghost" shape="circle" icon="ios-search">Search</Button>
    <Button type="ghost" shape="circle">Circle</Button>
</template>
<script>
    export default {
        
    }
</script>
`;

code.size = `
<template>
    <Button type="primary" size="large">Large</Button>
    <Button type="primary">Default</Button>
    <Button type="primary" size="small">Small</Button>
    <br><br>
    <Button type="primary" shape="circle" size="large">Large</Button>
    <Button type="primary" shape="circle">Default</Button>
    <Button type="primary" shape="circle" size="small">Small</Button>
</template>
<script>
    export default {
        
    }
</script>
`;

code.long = `
<template>
    <Button type="success" long>SUBMIT</Button>
    <br><br>
    <Button type="error" long>DELETE</Button>
</template>
<script>
    export default {
        
    }
</script>
`;

code.disabled = `
<template>
    <Button>Default</Button>
    <Button disabled>Default(Disabled)</Button>
    <br>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(Disabled)</Button>
    <br>
    <Button type="ghost">Ghost</Button>
    <Button type="ghost" disabled>Ghost(Disabled)</Button>
    <br>
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(Disabled)</Button>
    <br>
    <Button type="text">Text</Button>
    <Button type="text" disabled>Text(Disabled)</Button>
</template>
<script>
    export default {
        
    }
</script>
`;

code.loading = `
<template>
    <Button type="primary" loading>Loading...</Button>
    <Button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
    <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
</template>
<script>
    export default {
        data () {
            return {
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>
`;
code.group = `
<template>
    <h4>Basic</h4>
    <br><br>
    <ButtonGroup>
        <Button>Cancel</Button>
        <Button type="primary">Confirm</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button disabled>Yesterday</Button>
        <Button disabled>Today</Button>
        <Button disabled>Tomorrow</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button type="ghost">M</Button>
        <Button type="dashed">R</Button>
    </ButtonGroup>
    <br><br>
    <h4>Icons</h4>
    <br><br>
    <ButtonGroup>
        <Button type="primary">
            <Icon type="chevron-left"></Icon>
            Backward
        </Button>
        <Button type="primary">
            Forward
            <Icon type="chevron-right"></Icon>
        </Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary" icon="ios-skipbackward"></Button>
        <Button type="primary" icon="ios-skipforward"></Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="ghost" icon="ios-color-wand-outline"></Button>
        <Button type="ghost" icon="ios-sunny-outline"></Button>
        <Button type="ghost" icon="ios-crop"></Button>
        <Button type="ghost" icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br><br>
    <h4>Circle</h4>
    <br><br>
    <ButtonGroup shape="circle">
        <Button type="primary">
            <Icon type="chevron-left"></Icon>
            Backward
        </Button>
        <Button type="primary">
            Forward
            <Icon type="chevron-right"></Icon>
        </Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button type="primary" icon="ios-skipbackward"></Button>
        <Button type="primary" icon="ios-skipforward"></Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button type="ghost" icon="ios-color-wand-outline"></Button>
        <Button type="ghost" icon="ios-sunny-outline"></Button>
        <Button type="ghost" icon="ios-crop"></Button>
        <Button type="ghost" icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br><br>
    <h4>Size</h4>
    <br><br>
    <ButtonGroup size="large">
        <Button type="ghost">Large</Button>
        <Button type="ghost">Large</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="ghost">Default</Button>
        <Button type="ghost">Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small">
        <Button type="ghost">Small</Button>
        <Button type="ghost">Small</Button>
    </ButtonGroup>
    <br><br>
    <ButtonGroup size="large" shape="circle">
        <Button type="ghost">Large</Button>
        <Button type="ghost">Large</Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button type="ghost">Default</Button>
        <Button type="ghost">Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small" shape="circle">
        <Button type="ghost">Small</Button>
        <Button type="ghost">Small</Button>
    </ButtonGroup>
</template>
<script>
    export default {
        
    }
</script>
`;

code.vertical = `
<template>
    <ButtonGroup vertical>
        <Button type="ghost" icon="social-facebook"></Button>
        <Button type="ghost" icon="social-twitter"></Button>
        <Button type="ghost" icon="social-googleplus"></Button>
        <Button type="ghost" icon="social-tumblr"></Button>
    </ButtonGroup>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;