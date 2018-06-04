<template>
    <i-article>
        <article>
            <h1>Input</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Basic form component. It supports input and textarea, and expands some functions on native DOM components. It can combine with native component.</p>
            <Alert show-icon style="margin-top: 16px">Attention: <code>i-input</code> is needed if not under template/render mode.</Alert>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
                </div>
                <div slot="desc">
                    <p>Basic usage. You can use <code>v-model</code> to enable a two-way bingding on data.</p>
                    <p>You can directly set style to change the width of the input box. Default: 100%</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Size">
                <div slot="demo">
                    <Row :gutter="8">
                        <Col span="8">
                            <Input v-model="value1" size="large" placeholder="large size"></Input>
                        </Col>
                        <Col span="8">
                            <Input v-model="value2" placeholder="default size"></Input>
                        </Col>
                        <Col span="8">
                            <Input v-model="value3" size="small" placeholder="small size"></Input>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>There are three size of input box: large, medium(default), small.</p>
                    <p>Set <code>size</code> to <code>large</code> or <code>small</code> to change the size.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="Clearable">
                <div slot="demo">
                    <Input v-model="value14" placeholder="Enter something..." clearable style="width: 200px"></Input>
                </div>
                <div slot="desc">
                    <p>Set property <code>clearable</code> to display clear button.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.clearable }}</i-code>
            </Demo>
            <Demo title="Input with Icon">
                <div slot="demo">
                    <Input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px"></Input>
                </div>
                <div slot="desc">
                    <p>Add an icon at the left of the input box by setting <code>icon</code> prop.</p>
                    <p><code>on-click</code> event will be emitted when clicking the icon.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="Textarea">
                <div slot="demo">
                    <Row :gutter="8">
                        <Col span="12">
                            <Input v-model="value5" type="textarea" placeholder="Enter something..."></Input>
                        </Col>
                        <Col span="12">
                            <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Set <code>type</code> to <code>textarea</code> to use textarea for multirow input.</p>
                    <p>Control the display row numbers by setting <code>rows</code> prop.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.textarea }}</i-code>
            </Demo>
            <Demo title="Self-adapting Textarea">
                <div slot="demo">
                    <Row :gutter="8">
                        <Col span="12">
                            <Input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..."></Input>
                        </Col>
                        <Col span="12">
                            <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Textarea will adapt the height automaticlly when <code>autosize</code> is set.</p>
                    <p><code>autosize</code> can be set to an object to asign the maximum and minimum number of the row.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.autosize }}</i-code>
            </Demo>
            <Demo title="Disable">
                <div slot="demo">
                    <Row :gutter="8">
                        <Col span="12">
                            <Input v-model="value9" disabled placeholder="Enter something..."></Input>
                        </Col>
                        <Col span="12">
                            <Input v-model="value10" disabled type="textarea" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Add <code>disabled</code> prop to disable inputting.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="Mixed Input">
                <div slot="demo">
                    <Input v-model="value11">
                        <span slot="prepend">http://</span>
                        <span slot="append">.com</span>
                    </Input>
                    <br>
                    <Input v-model="value12">
                        <Select v-model="select1" slot="prepend" style="width: 80px">
                            <Option value="http">http://</Option>
                            <Option value="https">https://</Option>
                        </Select>
                        <Select v-model="select2" slot="append" style="width: 70px">
                            <Option value="com">.com</Option>
                            <Option value="org">.org</Option>
                            <Option value="io">.io</Option>
                        </Select>
                    </Input>
                    <br>
                    <Input v-model="value13">
                        <Select v-model="select3" slot="prepend" style="width: 80px">
                            <Option value="day">Day</Option>
                            <Option value="month">Month</Option>
                        </Select>
                        <Button slot="append" icon="ios-search"></Button>
                    </Input>
                </div>
                <div slot="desc">
                    Set preposed or postposed slot to realise a mixin input.
                </div>
                <i-code lang="html" slot="code">{{ code.addon }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Input props" h3></Anchor>
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
                            <td>type</td>
                            <td>Input type. Optional value: <code>text</code>, <code>password</code>, <code>textarea</code>, <code>url</code>, <code>email</code>, <code>date</code></td>
                            <td>String</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>Bound value. Use v-model to enable a two-way binding.</td>
                            <td>String | Number</td>
                            <td>empty</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>The size of Input. Optional value: <code>large</code>, <code>small</code>, <code>default</code> or leave empty.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>Placeholder.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>Whether to display the clear button.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Set Input to disabled.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>readonly</td>
                            <td>Set Input to readonly.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>maxlength</td>
                            <td>Maximum input length.</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>Icon at the end of Input. Only works in text type.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>rows</td>
                            <td>Default row number of textarea. Only works in textarea type.</td>
                            <td>Number</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>autosize</td>
                            <td>Automaticlly adapting the height of the content. Only works in textarea type. Accepts an object. For example, { minRows: 2, maxRows: 6 } .</td>
                            <td>Boolean | Object</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>number</td>
                            <td>Change the user input to Number type.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>autofocus</td>
                            <td>Same as autofocus in native input.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>autocomplete</td>
                            <td>Native autocomplete function, Optional value: off and on</td>
                            <td>String</td>
                            <td>off</td>
                        </tr>
                        <tr>
                            <td>element-id</td>
                            <td>Set the <code>id</code> for the input element, more info can be found in Form.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>spellcheck</td>
                            <td>Native spellcheck property.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>wrap</td>
                            <td>Native wrap property, optional value: hard and soft, only works in textarea type.</td>
                            <td>String</td>
                            <td>soft</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Input events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Description</th>
                            <th>Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-enter</td>
                            <td>Emitted when press enter.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-click</td>
                            <td>Emitted when clicking the icon if icon prop is set.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-change</td>
                            <td>Emitted when data changing.</td>
                            <td>event</td>
                        </tr>
                        <tr>
                            <td>on-focus</td>
                            <td>Emitted when Input gets focus.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-blur</td>
                            <td>Emitted when Input loses focus.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-keyup</td>
                            <td>Native keyup event.</td>
                            <td>event</td>
                        </tr>
                        <tr>
                            <td>on-keydown</td>
                            <td>Native keydown event.</td>
                            <td>event</td>
                        </tr>
                        <tr>
                            <td>on-keypress</td>
                            <td>Native keypress event.</td>
                            <td>event</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Input slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>prepend</td>
                            <td>Preposed content. Only works in text type.</td>
                        </tr>
                        <tr>
                            <td>append</td>
                            <td>Postposed content. Only works in text type.</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Input methods" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>Method Name</th>
                        <th>Description</th>
                        <th>Arguments</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>focus</td>
                        <td>Focus Input</td>
                        <td>None</td>
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
    import Code from '../../code/input';
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
                value: '',
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                value8: '',
                value9: '',
                value10: '',
                value11: '',
                value12: '',
                value13: '',
                value14: 'Hello World',
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        },
        methods: {

        }
    }
</script>