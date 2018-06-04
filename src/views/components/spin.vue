<style>
    .demo-spin-container{
        display: inline-block;
        width: 200px;
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
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
    .demo-spin-article{
        width: 400px;
        height: 200px;
        padding: 10px;
        position: relative;
        border: 1px solid #eee;
        text-align: center;
    }
    .demo-spin-article h3{
        font-size: 22px;
    }
    .demo-spin-article address{
        color: #999;
        font-style: normal;
        font-size: 14px;
    }
    .demo-spin-article p{
        font-size: 16px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Spin 加载中</h1>
            <Anchor title="概述" h2></Anchor>
            <p>当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Spin></Spin>
                </div>
                <div slot="desc">
                    <p>最简单使用 Spin 的方法。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="各种尺寸">
                <div slot="demo">
                    <Row>
                        <Col span="8">
                            <Spin size="small"></Spin>
                        </Col>
                        <Col span="8">
                            <Spin></Spin>
                        </Col>
                        <Col span="8">
                            <Spin size="large"></Spin>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>通过设置<code>size</code>属性为<code>large</code>和<code>small</code>将 Spin 设置为大和小尺寸，不设置为默认（中）尺寸。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="居中固定">
                <div slot="demo">
                    <div class="demo-spin-container">
                        <Spin fix></Spin>
                    </div>
                </div>
                <div slot="desc">
                    <p>在容器内部垂直居中固定，需要父级有<code>relative</code>或<code>absolute</code>。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fix }}</i-code>
            </Demo>
            <Demo title="自定义内容">
                <div slot="demo">
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
                </div>
                <div slot="desc">
                    <p>自定义 Spin 的内容，可以是简单的文字，也可以是很复杂的动画。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>
            <Demo title="状态切换">
                <div slot="demo">
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
                </div>
                <div slot="desc">
                    <p>控制 Spin 组件的显示和消失。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.status }}</i-code>
            </Demo>
            <Demo title="整页加载">
                <div slot="demo">
                    <Button type="primary" @click="handleSpinShow">整页加载，3秒后关闭</Button>
                    <Button type="primary" @click="handleSpinCustom">自定义显示内容</Button>
                </div>
                <div slot="desc">
                    <p>使用内置的 <code>$Spin</code> 方法可以全局加载。</p>
                    <p>可以使用 Render 函数自定义显示内容。<studyRender></studyRender></p>
                </div>
                <i-code lang="html" slot="code">{{ code.$spin }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Spin props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>size</td>
                            <td>Spin尺寸，可选值为<code>large</code>和<code>small</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>fix</td>
                            <td>是否固定，需要父级有<code>relative</code>或<code>absolute</code></td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Spin slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>无</td>
                            <td>自定义 Spin 的内容，设置slot后，默认的样式不生效</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/spin';
    import Anchor from '../../components/anchor.vue';
    import studyRender from '../../components/study.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor,
            studyRender
        },
        data () {
            return {
                code: Code,
                spinShow: true
            }
        },
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