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
    <i-article>
        <article>
            <h1>Modal 对话框</h1>
            <Anchor title="概述" h2></Anchor>
            <p>模态对话框，在浮层中显示，引导用户进行相关操作。</p>
            <p><code>Modal</code>提供了两种用法，普通组件使用和封装好的简洁实例调用。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Anchor title="普通组件使用方法" h3></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Button type="primary" @click="modal1 = true">显示对话框</Button>
                    <Modal
                        v-model="modal1"
                        title="普通的Modal对话框标题"
                        @on-ok="ok"
                        @on-cancel="cancel">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </Modal>
                </div>
                <div slot="desc">
                    <p>最简单的使用方法，通过控制属性<code>visible</code>来显示 / 隐藏对话框。</p>
                    <p>可以使用 v-model 实现双向绑定。</p>
                    <p>默认按键盘<code>ESC</code>键也可以关闭。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="自定义样式">
                <div slot="demo">
                    <Button @click="modal2 = true">自定义页头和页脚</Button>
                    <Modal v-model="modal2" width="360">
                        <p slot="header" style="color:#f60;text-align:center">
                            <Icon type="information-circled"></Icon>
                            <span>删除确认</span>
                        </p>
                        <div style="text-align:center">
                            <p>此任务删除后，下游 10 个任务将无法执行。</p>
                            <p>是否继续删除？</p>
                        </div>
                        <div slot="footer">
                            <Button type="error" size="large" long :loading="modal_loading" @click="del">删除</Button>
                        </div>
                    </Modal>
                    <Button @click="modal3 = true">不带标题栏</Button>
                    <Modal v-model="modal3">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </Modal>
                    <Button @click="modal4 = true">国际化</Button>
                    <Modal
                        v-model="modal4"
                        title="Modal Title"
                        ok-text="OK"
                        cancel-text="Cancel">
                        <p>Something...</p>
                        <p>Something...</p>
                        <p>Something...</p>
                    </Modal>
                    <Button @click="modal5 = true">设置宽度</Button>
                    <Modal
                        v-model="modal5"
                        title="自定义宽度"
                        width="300">
                        <p>自定义宽度，单位 px，默认 520px。</p>
                        <p>对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。</p>
                    </Modal>
                </div>
                <div slot="desc">
                    <p>Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮。</p>
                    <p>通过和其它组件的交互，能实现更复杂的功能，满足了大多业务场景。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>
            <Demo title="异步关闭">
                <div slot="demo">
                    <Button type="primary" @click="modal6 = true">显示对话框</Button>
                    <Modal
                        v-model="modal6"
                        title="对话框标题"
                        :loading="loading"
                        @on-ok="asyncOK">
                        <p>点击确定后，对话框将在 2秒 后关闭。</p>
                    </Modal>
                </div>
                <div slot="desc">
                    <p>给<code>Modal</code>添加属性<code>loading</code>后，点击确定按钮对话框不会自动消失，并显示 loading 状态，需要手动关闭对话框，常用于表单提交。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.async }}</i-code>
            </Demo>
            <Demo title="禁用关闭">
                <div slot="demo">
                    <Button @click="modal7 = true">禁用右上角关闭（含Esc键）</Button>
                    <Modal
                        title="对话框标题"
                        v-model="modal7"
                        :closable="false">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </Modal>
                    <Button @click="modal8 = true">禁用遮罩层关闭</Button>
                    <Modal
                        title="对话框标题"
                        v-model="modal8"
                        :mask-closable="false">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </Modal>
                </div>
                <div slot="desc">
                    <p>可以禁用关闭和遮罩层关闭。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.close }}</i-code>
            </Demo>
            <Demo title="自定义位置">
                <div slot="demo">
                    <Button @click="modal9 = true">距离顶部 20px</Button>
                    <Modal
                        title="对话框标题"
                        v-model="modal9"
                        :styles="{top: '20px'}">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </Modal>
                    <Button @click="modal10 = true">垂直居中</Button>
                    <Modal
                        title="对话框标题"
                        v-model="modal10"
                        class-name="vertical-center-modal">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </Modal>
                </div>
                <div slot="desc">
                    <p>可以自定义 Modal 的对话框样式 以及 对话框 Wrap 的 class 名称，从而实现更多自定义的样式，比如垂直居中。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.position }}</i-code>
            </Demo>
            <Anchor title="实例化使用方法" h3></Anchor>
            <p>除了上述通过标准组件的使用方法，iView 还精心封装了一些实例方法，用来创建一次性的轻量级对话框。</p>
            <p>实例以隐式创建 Vue 组件的方式在全局创建一个对话框，并在消失时移除，所以同时只能操作一个对话框。</p>
            <Demo title="基本用法">
                <div slot="demo">
                    <Button @click="instance('info')">消息</Button>
                    <Button @click="instance('success')">成功</Button>
                    <Button @click="instance('warning')">警告</Button>
                    <Button @click="instance('error')">错误</Button>
                </div>
                <div slot="desc">
                    <p>四种基本的对话框，只提供一个确定按钮。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.baseInstance }}</i-code>
            </Demo>
            <Demo title="确认对话框">
                <div slot="demo">
                    <Button @click="confirm">标准</Button>
                    <Button @click="custom">自定义按钮文字</Button>
                    <Button @click="async">异步关闭</Button>
                </div>
                <div slot="desc">
                    <p>快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.confirm }}</i-code>
            </Demo>
            <Demo title="自定义内容">
                <div slot="demo">
                    <p>
                        姓名：{{ value }}
                    </p>
                    <p>
                        <Button @click="handleRender">自定义内容</Button>
                    </p>
                </div>
                <div slot="desc">
                    <p>使用 <code>render</code> 字段可以基于 Render 函数来自定义内容。</p>
                    <p>使用 render 后，将不再限制类型，content 也将无效。</p>
                    <p><study-render></study-render></p>
                </div>
                <i-code lang="html" slot="code">{{ code.render }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Modal props" h3></Anchor>
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
                            <td>value</td>
                            <td>对话框是否显示，可使用 v-model 双向绑定数据。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>对话框标题，如果使用 slot 自定义了页头，则 title 无效</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>mask-closable</td>
                            <td>是否允许点击遮罩层关闭</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置<code>visible</code>来关闭对话框</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>scrollable</td>
                            <td>页面是否可以滚动</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>ok-text</td>
                            <td>确定按钮文字</td>
                            <td>String</td>
                            <td>确定</td>
                        </tr>
                        <tr>
                            <td>cancel-text</td>
                            <td>取消按钮文字</td>
                            <td>String</td>
                            <td>取消</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。当其值不大于 100 时以百分比显示，大于 100 时为像素</td>
                            <td>Number | String</td>
                            <td>520</td>
                        </tr>
                        <tr>
                            <td>styles</td>
                            <td>设置浮层样式，调整浮层位置等，该属性设置的是<code>.ivu-modal</code>的样式</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>class-name</td>
                            <td>设置对话框容器<code>.ivu-modal-wrap</code>的类名，可辅助实现垂直居中等自定义效果</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>transition-names</td>
                            <td>自定义显示动画，第一项是模态框，第二项是背景</td>
                            <td>Array</td>
                            <td>['ease', 'fade']</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>是否将弹层放置于 body 内</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Modal events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-ok</td>
                            <td>点击确定的回调</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>on-cancel</td>
                            <td>点击取消的回调</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>on-visible-change</td>
                            <td>显示状态发生变化时触发</td>
                            <td>true / false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Modal slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>header</td>
                            <td>自定义页头</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>自定义页脚内容</td>
                        </tr>
                        <tr>
                            <td>close</td>
                            <td>自定义右上角关闭内容</td>
                        </tr>
                        <tr>
                            <td>无</td>
                            <td>对话框主体内容</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Modal instance" h3></Anchor>
                <p>通过直接调用以下方法来使用：</p>
                <ul>
                    <li>
                        <code>this.$Modal.info(config)</code>
                    </li>
                    <li>
                        <code>this.$Modal.success(config)</code>
                    </li>
                    <li>
                        <code>this.$Modal.warning(config)</code>
                    </li>
                    <li>
                        <code>this.$Modal.error(config)</code>
                    </li>
                    <li>
                        <code>this.$Modal.confirm(config)</code>
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
                            <td>标题</td>
                            <td>String | Element String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>内容</td>
                            <td>String | Element String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>render</td>
                            <td>自定义内容，使用后不再限制类型， content 也无效。<study-render></study-render></td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>宽度，单位 px</td>
                            <td>Number | String</td>
                            <td>416</td>
                        </tr>
                        <tr>
                            <td>okText</td>
                            <td>确定按钮的文字</td>
                            <td>String</td>
                            <td>确定</td>
                        </tr>
                        <tr>
                            <td>cancelText</td>
                            <td>取消按钮的文字，只在<code>Modal.confirm()</code>下有效</td>
                            <td>String</td>
                            <td>取消</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用<code>Modal.remove()</code>来关闭对话框</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>scrollable</td>
                            <td>页面是否可以滚动</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>是否可以按 Esc 键关闭</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>onOk</td>
                            <td>点击确定的回调</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>onCancel</td>
                            <td>点击取消的回调，只在<code>Modal.confirm()</code>下有效</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p>另外提供了全局关闭对话框的方法：</p>
                <ul>
                    <li>
                        <code>this.$Modal.remove()</code>
                    </li>
                </ul>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/modal';
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
                modal1: false,
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false,
                modal5: false,
                modal6: false,
                loading: true,
                modal7: false,
                modal8: false,
                modal9: false,
                modal10: false,
                value: ''
            }
        },
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            },
            del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('删除成功');
                }, 2000);
            },
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            },
            instance (type) {
                const title = '对话框的标题';
                const content = '<p>一些对话框内容</p><p>一些对话框内容</p>';
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
            },
            confirm () {
                this.$Modal.confirm({
                    title: '确认对话框标题',
                    content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                    onOk: () => {
                        this.$Message.info('点击了确定');
                    },
                    onCancel: () => {
                        this.$Message.info('点击了取消');
                    }
                });
            },
            custom () {
                this.$Modal.confirm({
                    title: '确认对话框标题',
                    content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                    okText: 'OK',
                    cancelText: 'Cancel'
                });
            },
            async () {
                this.$Modal.confirm({
                    title: '确认对话框标题',
                    content: '<p>对话框将在 2秒 后关闭</p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            this.$Message.info('异步关闭了对话框');
                        }, 2000);
                    }
                });
            },
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