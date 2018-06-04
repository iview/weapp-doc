<template>
    <i-article>
        <article>
            <h1>Notice 通知提醒</h1>
            <Anchor title="概述" h2></Anchor>
            <p>在界面右上角显示可关闭的全局通知，常用于以下场景：</p>
            <ul>
                <li>通知内容带有描述信息</li>
                <li>系统主动推送</li>
            </ul>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Button type="primary" @click="open(false)">打开提醒</Button>
                    <Button @click="open(true)">打开提醒（仅标题）</Button>
                </div>
                <div slot="desc">
                    <p>基本用法，默认在 4.5秒后关闭。如果 <code>desc</code> 参数为空或不填，则自动应用仅标题模式下的样式。</p>
                    <p>建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.open }}</i-code>
            </Demo>
            <Demo title="提醒类型">
                <div slot="demo">
                    <p>带描述信息</p>
                    <Button @click="info(false)">消息</Button>
                    <Button @click="success(false)">成功</Button>
                    <Button @click="warning(false)">警告</Button>
                    <Button @click="error(false)">错误</Button>
                    <p>仅标题</p>
                    <Button @click="info(true)">消息</Button>
                    <Button @click="success(true)">成功</Button>
                    <Button @click="warning(true)">警告</Button>
                    <Button @click="error(true)">错误</Button>
                </div>
                <div slot="desc">
                    <p>带有状态图标的提醒。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="自定义时长">
                <div slot="demo">
                    <Button type="primary" @click="time">打开提醒</Button>
                </div>
                <div slot="desc">
                    <p>自定义时长，为 0 则不自动关闭。也可以在<code>Notice.config()</code>中全局配置，详见API。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.time }}</i-code>
            </Demo>
            <Demo title="Render 函数">
                <div slot="demo">
                    <Button type="primary" @click="renderFunc">打开提醒</Button>
                </div>
                <div slot="desc">
                    <p>你可以自定义 Render 函数来替代 desc</p>
                </div>
                <i-code lang="html" slot="code">{{ code.render }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Notice instance" h3></Anchor>
                <p>通过直接调用以下方法来使用组件：</p>
                <ul>
                    <li>
                        <code>this.$Notice.open(config)</code>
                    </li>
                    <li>
                        <code>this.$Notice.info(config)</code>
                    </li>
                    <li>
                        <code>this.$Notice.success(config)</code>
                    </li>
                    <li>
                        <code>this.$Notice.warning(config)</code>
                    </li>
                    <li>
                        <code>this.$Notice.error(config)</code>
                    </li>
                </ul>
                <p>以上方法隐式地创建及维护Vue组件。参数 config 为对象，具体说明如下：</p>
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
                            <td>title</td>
                            <td>通知提醒的标题</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>desc</td>
                            <td>通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>render</td>
                            <td>自定义描述内容，使用 Vue 的 Render 函数，如果同时设置了 render 和 desc，则只显示 render 的内容</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>自动关闭的延时，单位秒，不关闭可以写 0</td>
                            <td>Number</td>
                            <td>4.5</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>当前通知的唯一标识</td>
                            <td>String</td>
                            <td>自动</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>关闭时的回调</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p>另外提供了全局配置、全局关闭某个通知和全局销毁的方法：</p>
                <ul>
                    <li>
                        <code>this.$Notice.config(options)</code>
                    </li>
                    <li>
                        <code>this.$Notice.close(name)</code>
                    </li>
                    <li>
                        <code>this.$Notice.destroy()</code>
                    </li>
                </ul>
                <br>
                <i-code bg>{{ code.config }}</i-code>
                <br>
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
                            <td>top</td>
                            <td>通知组件距离顶端的距离，单位像素</td>
                            <td>Number</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>默认自动关闭的延时，单位秒</td>
                            <td>Number</td>
                            <td>4.5</td>
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
    import Code from '../../code/notice';
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
                code: Code
            }
        },
        methods: {
            open (nodesc) {
                this.$Notice.open({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            info (nodesc) {
                this.$Notice.info({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            success (nodesc) {
                this.$Notice.success({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            warning (nodesc) {
                this.$Notice.warning({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            error (nodesc) {
                this.$Notice.error({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            time () {
                this.$Notice.open({
                    title: '这是通知标题',
                    desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。',
                    duration: 0
                });
            },
            renderFunc () {
                this.$Notice.success({
                    title: '这是通知标题',
                    desc: '当你定义了render之后，这个描述会被覆盖',
                    render: h => {
                        return h('span', [
                            '这是',
                            h('a', 'render'),
                            '函数渲染的'
                        ])
                    }
                });
            }
        }
    }
</script>