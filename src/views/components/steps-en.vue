<template>
    <i-article>
        <article>
            <h1>Steps</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Steps is a navigation bar that guides users through the steps of a task.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage" vertical>
                <div slot="demo">
                    <Steps :current="1">
                        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                    </Steps>
                </div>
                <div slot="desc">
                    <p>The most basic step bar，The component automatically determines the status of each step based on <code>current</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Mini version" vertical>
                <div slot="demo">
                    <Steps :current="2" size="small">
                        <Step title="已完成"></Step>
                        <Step title="已完成"></Step>
                        <Step title="进行中"></Step>
                        <Step title="待进行"></Step>
                    </Steps>
                </div>
                <div slot="desc">
                    <p>Set <code>size</code> to <code>small</code> to use mini version. </p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="With icon" vertical>
                <div slot="demo">
                    <Steps :current="1">
                        <Step title="注册" icon="person-add"></Step>
                        <Step title="上传头像" icon="camera"></Step>
                        <Step title="验证邮箱" icon="email"></Step>
                    </Steps>
                </div>
                <div slot="desc">
                    <p>You can use icons by setting the property <code>icon</code> for Step.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="Switch Step" vertical>
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
                    <Button type="primary" @click="next">Next step</Button>
                </div>
                <div slot="desc">
                    <p>Cooperate with the content and buttons, to represent the progress of a process.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.change }}</i-code>
            </Demo>
            <Demo title="Vertical">
                <div slot="demo">
                    <Steps :current="2" direction="vertical">
                        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                    </Steps>
                </div>
                <div slot="desc">
                    <p>A simple step bar in the vertical direction by setting attribute <code>direction</code> to <code>vertical</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.direction }}</i-code>
            </Demo>
            <Demo title="Error status" vertical>
                <div slot="demo">
                    <Steps :current="1" status="error">
                        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                    </Steps>
                </div>
                <div slot="desc">
                    <p>By using <code>status</code> of <code>Steps</code>, you can specify the state for current step.</p>
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
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>current</td>
                            <td>To set the current step, counting from 0.</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>status</td>
                            <td>To specify the status of current step, can be set to one of the following values: <code>wait</code>, <code>process</code>, <code>finish</code>, <code>error</code>.</td>
                            <td>String</td>
                            <td>process</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>To specify the size of the step bar, the optional value is small or not written.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>direction</td>
                            <td>To specify the direction of the step bar, <code>horizontal</code> and <code>vertical</code> are currently supported.</td>
                            <td>String</td>
                            <td>horizontal</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Step props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>status</td>
                            <td>To specify the status. It will be automatically set by current of Steps if not configured. Optional values are: wait process finish error.</td>
                            <td>String</td>
                            <td>process</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>Title</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>Detail of the step, optional property.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>Icon of the step, optional property.</td>
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