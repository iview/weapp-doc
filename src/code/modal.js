let code = {};

code.base = `
<template>
    <Button type="primary" @click="modal1 = true">Display dialog box</Button>
    <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>
`;

code.custom = `
<template>
    <Button @click="modal2 = true">Custom header and footer</Button>
    <Modal v-model="modal2" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="information-circled"></Icon>
            <span>Delete confirmation</span>
        </p>
        <div style="text-align:center">
            <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
            <p>Will you delete it?</p>
        </div>
        <div slot="footer">
            <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>
        </div>
    </Modal>
    <Button @click="modal3 = true">No title bar</Button>
    <Modal v-model="modal3">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal4 = true">Internationalization</Button>
    <Modal
        v-model="modal4"
        title="Modal Title"
        ok-text="OK"
        cancel-text="Cancel">
        <p>Something...</p>
        <p>Something...</p>
        <p>Something...</p>
    </Modal>
    <Button @click="modal5 = true">Set the width</Button>
    <Modal
        v-model="modal5"
        title="Custom width"
        width="300">
        <p>Customize width, unit px, default 520px.</p>
        <p>The width of the dialog box is responsive, and the width becomes <code>auto</code> when the screen size is less than 768px.</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false,
                modal5: false
            }
        },
        methods: {
            del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('Successfully delete');
                }, 2000);
            }
        }
    }
</script>
`;

code.async = `
<template>
    <Button type="primary" @click="modal6 = true">Display dialog box</Button>
    <Modal
        v-model="modal6"
        title="Title"
        :loading="loading"
        @on-ok="asyncOK">
        <p>After you click ok, the dialog box will close in 2 seconds.</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal6: false,
                loading: true
            }
        },
        methods: {
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            }
        }
    }
</script>
`;

code.close = `
<template>
    <Button @click="modal7 = true">Disable upper right corner (including Esc key)</Button>
    <Modal
        title="Title"
        v-model="modal7"
        :closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal8 = true">Disable mask layer closure</Button>
    <Modal
        title="Title"
        v-model="modal8"
        :mask-closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal7: false,
                modal8: false,
            }
        }
    }
</script>
`;

code.position = `
<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>
<template>
    <Button @click="modal9 = true">20px from the top</Button>
    <Modal
        title="Title"
        v-model="modal9"
        :styles="{top: '20px'}">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal10 = true">Vertical center</Button>
    <Modal
        title="Title"
        v-model="modal10"
        class-name="vertical-center-modal">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal9: false,
                modal10: false,
            }
        }
    }
</script>
`;

code.baseInstance = `
<template>
    <Button @click="instance('info')">Info</Button>
    <Button @click="instance('success')">Success</Button>
    <Button @click="instance('warning')">Warning</Button>
    <Button @click="instance('error')">Error</Button>
</template>
<script>
    export default {
        methods: {
            instance (type) {
                const title = 'Title';
                const content = '<p>Content of dialog</p><p>Content of dialog</p>';
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            title: title,
                            content: content
                        });
                        break;
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                    case 'warning':
                        this.$Modal.warning({
                            title: title,
                            content: content
                        });
                        break;
                    case 'error':
                        this.$Modal.error({
                            title: title,
                            content: content
                        });
                        break;
                }
            }
        }
    }
</script>
`;

code.confirm = `
<template>
    <Button @click="confirm">Normal</Button>
    <Button @click="custom">Custom button text</Button>
    <Button @click="async">Asynchronous closing</Button>
</template>
<script>
    export default {
        methods: {
            confirm () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
            custom () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    okText: 'OK',
                    cancelText: 'Cancel'
                });
            },
            async () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>The dialog box will be closed after 2 seconds</p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            this.$Message.info('Asynchronously close the dialog box');
                        }, 2000);
                    }
                });
            }
        }
    }
</script>
`;

code.render = `
<template>
    <p>
        Name: {{ value }}
    </p>
    <p>
        <Button @click="handleRender">Custom content</Button>
    </p>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }            
        },
        methods: {
            handleRender () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
    }
</script>
`;

export default code;