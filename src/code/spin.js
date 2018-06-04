let code = {};

code.base = `
<template>
    <Spin></Spin>
</template>
<script>
    export default {
        
    }
</script>
`;

code.size = `
<template>
    <Spin size="small"></Spin>
    <Spin></Spin>
    <Spin size="large"></Spin>
</template>
<script>
    export default {
        
    }
</script>
`;

code.fix = `
<style>
    .demo-spin-container{
    	display: inline-block;
        width: 200px;
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
<template>
    <div class="demo-spin-container">
        <Spin fix></Spin>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.custom = `
<style>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
<template>
    <Row>
        <Col class="demo-spin-col" span="8">
            <Spin fix>加载中...</Spin>
        </Col>
        <Col class="demo-spin-col" span="8">
            <Spin fix>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </Col>
        <Col class="demo-spin-col" span="8">
            <Spin fix>
                <div class="loader">
                    <svg class="circular" viewBox="25 25 50 50">
                        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
                    </svg>
                </div>
            </Spin>
        </Col>
    </Row>
</template>
<script>
    // 部分样式代码冗长，未作展示
    export default {
        
    }
</script>
`;

code.status = `
<template>
    <div class="demo-spin-article">
        <h3>登金陵凤凰台</h3>
        <address>李白</address>
        <article>
            <p>凤凰台上凤凰游，凤去台空江自流。</p>
            <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
            <p>三山半落青天外，二水中分白鹭洲。</p>
            <p>总为浮云能蔽日，长安不见使人愁。</p>
        </article>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
    <br>
    切换显示状态：<i-switch @on-change="spinShow = !spinShow"></i-switch>
</template>
<script>
    export default {
        data () {
            return {
                spinShow: true
            }
        }
    }
</script>
`;

code.$spin = `
<template>
    <div>
        <Button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</Button>
        <Button type="primary" @click="handleSpinCustom">自定义显示内容</Button>
    </div>
</template>
<script>
    export default {
        methods: {
            handleSpinShow () {
                this.$Spin.show();
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            },
            handleSpinCustom () {
                this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'load-c',
                                    size: 18
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            }
        }
    }
</script>
<style>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
</style>
`;

export default code;