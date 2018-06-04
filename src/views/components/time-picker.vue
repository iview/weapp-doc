<template>
    <div>
        <i-article>
            <article>
                <h1>TimePicker 时间选择器</h1>
                <Anchor title="概述" h2></Anchor>
                <p>选择或输入标准时间，支持选择范围。</p>
                <Anchor title="代码示例" h2></Anchor>
                <Demo title="基础用法">
                    <div slot="demo">
                        <Row>
                            <Col span="12">
                                <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
                            </Col>
                            <Col span="12">
                                <TimePicker type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>设置属性 <code>type</code> 为 <code>time</code> 或 <code>timerange</code> 分别显示<strong>选择单个时间</strong>和<strong>选择范围时间</strong>类型。</p>
                        <p>设置属性 <code>placement</code> 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.base }}</i-code>
                </Demo>
                <Demo title="时间格式">
                    <div slot="demo">
                        <row>
                            <Col span="12">
                                <TimePicker :value="value1" format="HH点mm分ss秒" placeholder="Select time" style="width: 168px"></TimePicker>
                            </Col>
                            <Col span="12">
                                <TimePicker :value="value2" format="HH’mm’ss" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>设置属性 <code>format</code> 可以改变时间的显示格式，详见 <a href="javascript:void(0)" @click="handleShowDate"><Icon type="information-circled"></Icon> Date</a>。</p>
                        <p>注意，format 只是改变显示的格式，并非改变 value 值。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.format }}</i-code>
                </Demo>
                <Demo title="选择时分">
                    <div slot="demo">
                        <row>
                            <Col span="12">
                                <TimePicker format="HH:mm" placeholder="Select time" style="width: 112px"></TimePicker>
                            </Col>
                            <Col span="12">
                                <TimePicker format="HH:mm" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>组件浮层中的列会随着 <code>format</code> 变化，当略去 <code>format</code> 中的秒时，浮层中对应的列也会消失。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.hours }}</i-code>
                </Demo>
                <Demo title="时间间隔">
                    <div slot="demo">
                        <TimePicker :steps="[1, 15, 15]" placeholder="Select time" style="width: 112px"></TimePicker>
                    </div>
                    <div slot="desc">
                        <p>通过属性 <code>steps</code> 可以设置时间间隔。数组的三项分别对应小时、分钟、秒。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.steps }}</i-code>
                </Demo>
                <Demo title="不可选时间">
                    <div slot="demo">
                        <row>
                            <Col span="12">
                                <TimePicker
                                        :disabled-hours="[1,5,10]"
                                        :disabled-minutes="[0,10,20]"
                                        placeholder="Select time"
                                        style="width: 168px"></TimePicker>
                            </Col>
                            <Col span="12">
                                <TimePicker
                                        hide-disabled-options
                                        :disabled-hours="[1,5,10]"
                                        :disabled-minutes="[0,10,20]"
                                        placeholder="Select time"
                                        style="width: 168px"></TimePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>可以使用 <code>disabled-hours</code> <code>disabled-minutes</code> <code>disabled-seconds</code> 组合禁止用户选择某个时间。</p>
                        <p>使用 <code>hide-disabled-options</code> 可以直接把不可选择的项隐藏。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
                </Demo>
                <Demo title="带有确认操作">
                    <div slot="demo">
                        <row>
                            <Col span="12">
                                <TimePicker confirm placeholder="Select time" style="width: 168px"></TimePicker>
                            </Col>
                            <Col span="12">
                                <TimePicker type="timerange" confirm placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>设置属性 <code>confirm</code>，选择器会有清空和确定按钮。</p>
                        <p>确认按钮并没有影响时间的正常选择。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.confirm }}</i-code>
                </Demo>
                <Demo title="手动控制组件">
                    <div slot="demo">
                        <TimePicker
                                :open="open"
                                :value="value3"
                                confirm
                                @on-change="handleChange"
                                @on-clear="handleClear"
                                @on-ok="handleOk">
                            <a href="javascript:void(0)" @click="handleClick">
                                <Icon type="ios-clock-outline"></Icon>
                                <template v-if="value3 === ''">Select time</template>
                                <template v-else>{{ value3 }}</template>
                            </a>
                        </TimePicker>
                    </div>
                    <div slot="desc">
                        <p>对于一些定制化的场景，可以使用 slot 配合参数 <code>open</code> <code>confirm</code> 及事件来手动控制组件的显示状态，详见示例和 API。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.slot }}</i-code>
                </Demo>
                <Demo title="尺寸">
                    <div slot="demo">
                        <row :gutter="16">
                            <Col span="8">
                                <TimePicker size="small" placeholder="Select time"></TimePicker>
                            </Col>
                            <Col span="8">
                                <TimePicker placeholder="Select time"></TimePicker>
                            </Col>
                            <Col span="8">
                                <TimePicker size="large" placeholder="Select time"></TimePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>通过设置属性 <code>size</code> 为 <code>large</code> 或 <code>small</code> 可以调整选择器尺寸为大或小，默认不填为中。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.size }}</i-code>
                </Demo>

                <ad></ad>

                <div class="api">
                    <Anchor title="API" h2></Anchor>
                    <Anchor title="TimePicker props" h3></Anchor>
                    <table>
                        <colgroup>
                            <col>
                            <col>
                            <col>
                            <col width="200">
                        </colgroup>
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
                            <td>type</td>
                            <td>显示类型，可选值为 <code>time</code>、<code>timerange</code></td>
                            <td>String</td>
                            <td>time</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>
                                时间，可以是 JavaScript 的 Date，例如 <strong>new Date()</strong>，也可以是标准的时间格式，点击右边查看<br>
                                注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用
                            </td>
                            <td>
                                <a href="javascript:void(0)" @click="handleShowDate"><Icon type="information-circled"></Icon> Date</a>
                            </td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>展示的时间格式</td>
                            <td>
                                <a href="javascript:void(0)" @click="handleShowDate"><Icon type="information-circled"></Icon> Date</a>
                            </td>
                            <td>HH:mm:ss</td>
                        </tr>
                        <tr>
                            <td>steps</td>
                            <td>下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>时间选择器出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>，2.12.0 版本开始支持自动识别</td>
                            <td>String</td>
                            <td>bottom-start</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>占位文本</td>
                            <td>String</td>
                            <td>空</td>
                        </tr>
                        <tr>
                            <td>confirm</td>
                            <td>是否显示底部控制栏</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>open</td>
                            <td>手动控制时间选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用</td>
                            <td>Boolean</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用选择器</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>是否显示清除按钮</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>readonly</td>
                            <td>完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>editable</td>
                            <td>文本框是否可以输入，只在没有使用 slot 时有效</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>element-id</td>
                            <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="TimePicker events" h3></Anchor>
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
                            <td>on-change</td>
                            <td>时间发生变化时触发</td>
                            <td>已经格式化后的时间，比如 09:41:00</td>
                        </tr>
                        <tr>
                            <td>on-open-change</td>
                            <td>弹出浮层和关闭浮层时触发</td>
                            <td>true | false</td>
                        </tr>
                        <tr>
                            <td>on-ok</td>
                            <td>点击确定按钮时触发</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-clear</td>
                            <td>在清空日期时触发</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="TimePicker slot" h3></Anchor>
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
                            <td>自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </i-article>
        <Date-type v-model="showDateModal"></Date-type>
    </div>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/time-picker';
    import Anchor from '../../components/anchor.vue';
    import DateType from '../../components/date-type.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor,
            DateType
        },
        data () {
            return {
                code: Code,
                showDateModal: false,
                value1: '09:41:00',
                value2: ['09:41:00', '12:00:00'],
                open: false,
                value3: ''
            }
        },
        methods: {
            handleClick () {
                this.open = !this.open;
            },
            handleChange (time) {
                this.value3 = time;
            },
            handleClear () {
                this.open = false;
            },
            handleOk () {
                this.open = false;
            },
            handleShowDate () {
                this.showDateModal = true;
            }
        }
    }
</script>