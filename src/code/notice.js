let code = {};

code.open = `
<template>
    <Button type="primary" @click="open(false)">Open notice</Button>
    <Button @click="open(true)">Open notice(only title)</Button>
</template>
<script>
    export default {
        methods: {
            open (nodesc) {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            }
        }
    }
</script>
`;

code.type = `
<template>
    <p>With desc</p>
    <Button @click="info(false)">Info</Button>
    <Button @click="success(false)">Success</Button>
    <Button @click="warning(false)">Warning</Button>
    <Button @click="error(false)">Error</Button>
    <p>Only title</p>
    <Button @click="info(true)">Info</Button>
    <Button @click="success(true)">Success</Button>
    <Button @click="warning(true)">Warning</Button>
    <Button @click="error(true)">Error</Button>
</template>
<script>
    export default {
        methods: {
            info (nodesc) {
                this.$Notice.info({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            success (nodesc) {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            warning (nodesc) {
                this.$Notice.warning({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            error (nodesc) {
                this.$Notice.error({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            }
        }
    }
</script>
`;

code.time = `
<template>
    <Button type="primary" @click="time">Open notice</Button>
</template>
<script>
    export default {
        methods: {
            time () {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: 'This notification does not automatically close, and you need to click the close button to close.',
                    duration: 0
                });
            }
        }
    }
</script>
`;

code.render = `
<template>
    <Button type="primary" @click="renderFunc">Open notice</Button>
</template>
<script>
    export default {
        methods: {
            renderFunc () {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: 'The desc will hide when you set render.',
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

code.config = `
this.$Notice.config({
    top: 50,
    duration: 3
});
`;

export default code;