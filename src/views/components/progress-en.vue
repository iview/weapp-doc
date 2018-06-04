<template>
    <i-article>
        <article>
            <h1>Progress</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Show current progres status of the opreation or task. For example, uploading file.</p>
            <Alert show-icon style="margin-top: 16px">Attention：Use <code>i-progress</code> if not under template/render mode.</Alert>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Progress :percent="25"></Progress>
                    <Progress :percent="45" status="active"></Progress>
                    <Progress :percent="65" status="wrong"></Progress>
                    <Progress :percent="100"></Progress>
                    <Progress :percent="25" hide-info></Progress>
                </div>
                <div slot="desc">
                    <p>Progress in different status. When percent reaches 100, the status will be automatically set to success.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Vertical">
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
                    <p>Set the property <code>vertical</code> will be displayed in the vertical direction.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
            </Demo>
            <Demo title="Use with External Component">
                <div slot="demo">
                    <Progress :percent="percent"></Progress>
                    <ButtonGroup size="large">
                        <Button icon="ios-plus-empty" @click="add"></Button>
                        <Button icon="ios-minus-empty" @click="minus"></Button>
                    </ButtonGroup>
                </div>
                <div slot="desc">
                    <p>You can realise a dynamic effect by combining data and controlling logic.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.percent }}</i-code>
            </Demo>
            <Demo title="Custom Style">
                <div slot="demo">
                    <Progress :percent="25" :stroke-width="5"></Progress>
                    <Progress :percent="100">
                        <Icon type="checkmark-circled"></Icon>
                        <span>成功</span>
                    </Progress>
                </div>
                <div slot="desc">
                    <p>Change Progress's style by customize <code>slot</code> and <code>stroke-width</code> prop.</p>
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
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>percent</td>
                            <td>Percentage.</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>status</td>
                            <td>Progress's status. Optional value: <code>normal</code>, <code>active</code>, <code>wrong</code>, <code>success</code></td>
                            <td>String</td>
                            <td>normal</td>
                        </tr>
                        <tr>
                            <td>stroke-width</td>
                            <td>The width of the progress bar. Unit: px</td>
                            <td>Number</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>hide-info</td>
                            <td>Hide value/status icon.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>vertical</td>
                            <td>Whether to display in the vertical direction.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Progress slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>-</td>
                            <td>Customize how to show Progress's status.</td>
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