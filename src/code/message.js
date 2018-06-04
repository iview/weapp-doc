let code = {};

code.info = `
<template>
    <Button type="primary" @click="info">Display info prompt</Button>
</template>
<script>
    export default {
        methods: {
            info () {
                this.$Message.info('This is a info tip');
            }
        }
    }
</script>
`;

code.type = `
<template>
    <Button @click="success">Display success prompt</Button>
    <Button @click="warning">Display warning prompt</Button>
    <Button @click="error">Display error prompt</Button>
</template>
<script>
    export default {
        methods: {
            success () {
                this.$Message.success('This is a success tip');
            },
            warning () {
                this.$Message.warning('This is a warning tip');
            },
            error () {
                this.$Message.error('This is an error tip');
            }
        }
    }
</script>
`;

code.loading = `
<template>
    <Button @click="loading">Display loading...</Button>
</template>
<script>
    export default {
        methods: {
            loading () {
                const msg = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                setTimeout(msg, 3000);
            },
        }
    }
</script>
`;

code.time = `
<template>
    <Button @click="time">Displays a 10 second prompt</Button>
</template>
<script>
    export default {
        methods: {
            this.$Message.info({
                content: 'I\'ll be gone in 10 seconds',
                duration: 10
            });
        }
    }
</script>
`;

code.config = `
this.$Message.config({
    top: 50,
    duration: 3
});
`;

code.closable = `
<template>
    <Button @click="closable">Display a closable message</Button>
</template>
<script>
    export default {
        methods: {
            closable () {
                this.$Message.info({
                    content: 'Tips for manual closing',
                    duration: 10,
                    closable: true
                });
            }
        }
    }
</script>
`;

code.render = `
<template>
<Button @click="renderFunc">show message</Button>
</template>
<script>
    export default {
        methods: {
            renderFunc () {
                this.$Message.info({
                    render: h => {
                        return h('span', [
                            'This is created by ',
                            h('a', 'render'),
                            ' function'
                        ])
                    }
                });
            }
        }
    }
</script>
`;

export default code;