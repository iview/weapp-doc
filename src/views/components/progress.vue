<template>
    <i-article>
        <article>
            <h1>Progress 进度条</h1>
            <Anchor title="概述" h2></Anchor>
            <p>展示操作或任务的当前进度，比如上传文件。</p>
            <Alert show-icon style="margin-top: 16px">注意：非 template/render 模式下，需使用 <code>i-progress</code>。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基本用法">
                <div slot="demo">
                    <Progress :percent="25"></Progress>
                    <Progress :percent="45" status="active"></Progress>
                    <Progress :percent="65" status="wrong"></Progress>
                    <Progress :percent="100"></Progress>
                    <Progress :percent="25" hide-info></Progress>
                </div>
                <div slot="desc">
                    <p>处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="垂直方向">
                <div slot="demo">
                    <div style="height: 100px;">
                        <Progress vertical :percent="25"></Progress>
                        <Progress vertical :percent="45" status="active"></Progress>
                        <Progress vertical :percent="65" status="wrong"></Progress>
                        <Progress vertical :percent="100"></Progress>
                        <Progress vertical :percent="25" hide-info></Progress>
                    </div>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>vertical</code> 将以垂直方向显示。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
            </Demo>
            <Demo title="配合外部组件使用">
                <div slot="demo">
                    <Progress :percent="percent"></Progress>
                    <ButtonGroup size="large">
                        <Button icon="ios-plus-empty" @click="add"></Button>
                        <Button icon="ios-minus-empty" @click="minus"></Button>
                    </ButtonGroup>
                </div>
                <div slot="desc">
                    <p>通过数据的联动和逻辑控制，实现动态效果。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.percent }}</i-code>
            </Demo>
            <Demo title="自定义更多样式">
                <div slot="demo">
                    <Progress :percent="25" :stroke-width="5"></Progress>
                    <Progress :percent="100">
                        <Icon type="checkmark-circled"></Icon>
                        <span>成功</span>
                    </Progress>
                </div>
                <div slot="desc">
                    <p>通过自定义<code>slot</code>和属性<code>stroke-width</code>改变进度条效果。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Progress props" h3></Anchor>
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
                            <td>percent</td>
                            <td>百分比</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>status</td>
                            <td>状态，可选值为<code>normal</code>、<code>active</code>、<code>wrong</code>、<code>success</code></td>
                            <td>String</td>
                            <td>normal</td>
                        </tr>
                        <tr>
                            <td>stroke-width</td>
                            <td>进度条的线宽，单位 px</td>
                            <td>Number</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>hide-info</td>
                            <td>隐藏数值或状态图标</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>vertical</td>
                            <td>是否在垂直方向显示</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Progress slot" h3></Anchor>
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
                            <td>自定义显示状态内容</td>
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
    import Code from '../../code/progress';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code: Code,
                percent: 0
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>