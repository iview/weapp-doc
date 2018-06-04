<template>
    <i-article>
        <article>
            <h1>Steps 步骤条</h1>
            <Anchor title="概述" h2></Anchor>
            <p>拆分某项流程的步骤，引导用户按流程完成任务。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法" vertical>
                <div slot="demo">
                    <Steps :current="1">
                        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                    </Steps>
                </div>
                <div slot="desc">
                    <p>基本用法，组件会根据<code>current</code>自动判断各步骤状态。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="迷你版" vertical>
                <div slot="demo">
                    <Steps :current="2" size="small">
                        <Step title="已完成"></Step>
                        <Step title="已完成"></Step>
                        <Step title="进行中"></Step>
                        <Step title="待进行"></Step>
                    </Steps>
                </div>
                <div slot="desc">
                    <p>设置属性<code>size</code>为<code>small</code>启用迷你版。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="带图标的步骤条" vertical>
                <div slot="demo">
                    <Steps :current="1">
                        <Step title="注册" icon="person-add"></Step>
                        <Step title="上传头像" icon="camera"></Step>
                        <Step title="验证邮箱" icon="email"></Step>
                    </Steps>
                </div>
                <div slot="desc">
                    <p>通过设置<code>Step</code>的<code>icon</code>属性可以自定义图标。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="切换步骤" vertical>
                <div slot="demo">
                    <p>当前正在进行第 {{ current + 1 }} 步</p>
                    <br>
                    <Steps :current="current">
                        <Step title="步骤1"></Step>
                        <Step title="步骤2"></Step>
                        <Step title="步骤3"></Step>
                        <Step title="步骤4"></Step>
                    </Steps>
                    <br>
                    <Button type="primary" @click="next">下一步</Button>
                </div>
                <div slot="desc">
                    <p>点击下一步按钮可以切换当前进度状态。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.change }}</i-code>
            </Demo>
            <Demo title="垂直方向">
                <div slot="demo">
                    <Steps :current="2" direction="vertical">
                        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                    </Steps>
                </div>
                <div slot="desc">
                    <p>设置属性<code>direction</code>为<code>vertical</code>在垂直方向展示。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.direction }}</i-code>
            </Demo>
            <Demo title="步骤运行错误" vertical>
                <div slot="demo">
                    <Steps :current="1" status="error">
                        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                    </Steps>
                </div>
                <div slot="desc">
                    <p>设置<code>Steps</code>的属性<code>status</code>为<code>error</code>指定当前步骤状态。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.error }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Steps props" h3></Anchor>
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
                            <td>current</td>
                            <td>当前步骤，从 0 开始计数</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>status</td>
                            <td>当前步骤的状态，可选值为<code>wait</code>、<code>process</code>、<code>finish</code>、<code>error</code></td>
                            <td>String</td>
                            <td>process</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>步骤条的尺寸，可选值为<code>small</code>或者不写</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>direction</td>
                            <td>步骤条的方向，可选值为<code>horizontal</code>（水平）或<code>vertical</code>（垂直）</td>
                            <td>String</td>
                            <td>horizontal</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Step props" h3></Anchor>
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
                            <td>status</td>
                            <td>步骤的状态，可选值为<code>wait</code>、<code>process</code>、<code>finish</code>、<code>error</code>，不设置时自动判断</td>
                            <td>String</td>
                            <td>process</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>标题</td>
                            <td>String</td>
                            <td>空</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>步骤的详细描述，可选</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>步骤的图标，可选</td>
                            <td>String</td>
                            <td>-</td>
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
    import Code from '../../code/steps';
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
                current: 0
            }
        },
        methods: {
            next () {
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            }
        }
    }
</script>