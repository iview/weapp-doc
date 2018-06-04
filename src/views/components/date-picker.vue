<style>
    .demo-date-type *{
        font-size: 12px !important;
    }
</style>
<template>
    <div>
        <i-article>
            <article>
                <h1>DatePicker 日期选择器</h1>
                <Anchor title="概述" h2></Anchor>
                <p>选择或输入日期，支持年、月、日期等类型，支持选择范围。</p>
                <Anchor title="代码示例" h2></Anchor>
                <Demo title="基础用法">
                    <div slot="demo">
                        <Row>
                            <Col span="12">
                            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                            <Col span="12">
                            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>设置属性 <code>type</code> 为 <code>date</code> 或 <code>daterange</code> 分别显示<strong>选择单日</strong>和<strong>选择范围</strong>类型。</p>
                        <p>设置属性 <code>placement</code> 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。</p>
                        <blockquote><code>2.10.0</code> 版本开始支持从右往左选择。</blockquote>
                    </div>
                    <i-code lang="html" slot="code">{{ code.base }}</i-code>
                </Demo>
                <Demo title="快捷方式">
                    <div slot="demo">
                        <Row>
                            <Col span="12">
                            <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                            <Col span="12">
                            <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>设置属性 <code>options</code> 对象中的 <code>shortcuts</code> 可以设置快捷选项，详见示例代码。</p>
                        <p>其中 <strong>value</strong> 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。</p>
                        <p>value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.shortcuts }}</i-code>
                </Demo>

                <Demo title="面板不联动">
                    <div slot="demo">
                        <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
                    </div>
                    <div slot="desc">
                        <p>开启属性 <code>split-panels</code> 后，左右两面板在切换年、月时不联动。</p>
                        <blockquote><code>2.10.0</code> 版本开始支持。</blockquote>
                    </div>
                    <i-code lang="html" slot="code">{{ code.split_panels }}</i-code>
                </Demo>

                <Demo title="多选">
                    <div slot="demo">
                        <DatePicker type="date" multiple placeholder="Select date" style="width: 300px"></DatePicker>
                    </div>
                    <div slot="desc">
                        <p>开启属性 <code>multiple</code> 后，可以多选。</p>
                        <blockquote><code>2.10.0</code> 版本开始支持。</blockquote>
                    </div>
                    <i-code lang="html" slot="code">{{ code.multiple }}</i-code>
                </Demo>

                <Demo title="显示星期数">
                    <div slot="demo">
                        <Row>
                            <Col span="12">
                                <DatePicker type="date" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                            <Col span="12">
                                <DatePicker type="daterange" show-week-numbers placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>开启属性 <code>show-week-numbers</code> 后，可以显示星期数。</p>
                        <blockquote><code>2.10.0</code> 版本开始支持。</blockquote>
                    </div>
                    <i-code lang="html" slot="code">{{ code.weeks }}</i-code>
                </Demo>

                <Demo title="起始日期">
                    <div slot="demo">
                        <Row>
                            <Col span="12">
                                <DatePicker type="date" :start-date="new Date(1991, 4, 14)" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                            <Col span="12">
                                <DatePicker type="daterange" :start-date="new Date(1991, 4, 14)" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>设置属性 <code>start-date</code> 后，可以将默认显示的日期面板设置为指定日期。</p>
                        <blockquote><code>2.10.0</code> 版本开始支持。</blockquote>
                    </div>
                    <i-code lang="html" slot="code">{{ code.start_date }}</i-code>
                </Demo>

                <Demo title="日期格式">
                    <div slot="demo">
                        <Row>
                            <Col span="12">
                            <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                            <Col span="12">
                            <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>设置属性 <code>format</code> 可以改变日期的显示格式，详见 <a href="javascript:void(0)" @click="handleShowDate"><Icon type="information-circled"></Icon> Date</a>。</p>
                        <p>注意，format 只是改变显示的格式，并非改变 value 值。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.format }}</i-code>
                </Demo>
                <Demo title="日期时间选择">
                    <div slot="demo">
                        <DatePicker type="datetime" placeholder="Select date and time" style="width: 200px"></DatePicker>
                        <br>
                        <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 200px"></DatePicker>
                        <br>
                        <DatePicker type="datetimerange" placeholder="Select date and time" style="width: 300px"></DatePicker>
                        <br>
                        <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 300px"></DatePicker>
                    </div>
                    <div slot="desc">
                        <p>设置属性 <code>type</code> 为 <code>datetime</code> 或 <code>datetimerange</code> 可以选择时间。</p>
                        <p>设置 format 并且忽略秒，可以只设置小时和分钟维度。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.datetime }}</i-code>
                </Demo>
                <Demo title="年和月">
                    <div slot="demo">
                        <Row>
                            <Col span="12">
                            <DatePicker type="year" placeholder="Select year" style="width: 200px"></DatePicker>
                            </Col>
                            <Col span="12">
                            <DatePicker type="month" placeholder="Select month" style="width: 200px"></DatePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>设置属性 <code>type</code> 为 <code>year</code> 或 <code>month</code> 可以使用选择年或月的功能。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.type }}</i-code>
                </Demo>
                <Demo title="不可选日期">
                    <div slot="demo">
                        <Row>
                            <Col span="12">
                            <DatePicker type="date" :options="options3" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                            <Col span="12">
                            <DatePicker type="date" :options="options4" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>设置属性 <code>options</code> 对象中的 <code>disabledDate</code> 可以设置不可选择的日期。</p>
                        <p>disabledDate 是函数，参数为当前的日期，需要返回 Boolean 是否禁用这天。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
                </Demo>
                <Demo title="带有确认操作">
                    <div slot="demo">
                        <Row>
                            <Col span="12">
                            <DatePicker type="date" confirm placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                            <Col span="12">
                            <DatePicker type="daterange" confirm placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>设置属性 <code>confirm</code>，选择日期后，选择器不会主动关闭，需用户确认后才可关闭。</p>
                        <p>确认按钮并没有影响日期的正常选择。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.confirm }}</i-code>
                </Demo>
                <Demo title="手动控制组件">
                    <div slot="demo">
                        <DatePicker
                                :open="open"
                                :value="value3"
                                confirm
                                type="date"
                                @on-change="handleChange"
                                @on-clear="handleClear"
                                @on-ok="handleOk">
                            <a href="javascript:void(0)" @click="handleClick">
                                <Icon type="ios-calendar-outline"></Icon>
                                <template v-if="value3 === ''">Select date</template>
                                <template v-else>{{ value3 }}</template>
                            </a>
                        </DatePicker>
                    </div>
                    <div slot="desc">
                        <p>对于一些定制化的场景，可以使用 slot 配合参数 <code>open</code> 及事件来手动控制组件的显示状态，详见示例和 API。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.slot }}</i-code>
                </Demo>
                <Demo title="尺寸">
                    <div slot="demo">
                        <Row :gutter="16">
                            <Col span="8">
                            <DatePicker size="small" type="date" placeholder="Select date"></DatePicker>
                            </Col>
                            <Col span="8">
                            <DatePicker type="date" placeholder="Select date"></DatePicker>
                            </Col>
                            <Col span="8">
                            <DatePicker size="large" type="date" placeholder="Select date"></DatePicker>
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
                    <Anchor title="DatePicker props" h3></Anchor>
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
                            <td>显示类型，可选值为 <code>date</code>、<code>daterange</code>、<code>datetime</code>、<code>datetimerange</code>、<code>year</code>、<code>month</code></td>
                            <td>String</td>
                            <td>date</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>
                                日期，可以是 JavaScript 的 Date，例如 <strong>new Date()</strong>，也可以是标准的日期格式，点击右边查看<br>
                                注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用
                            </td>
                            <td>
                                <a href="javascript:void(0)" @click="handleShowDate"><Icon type="information-circled"></Icon> Date</a>
                            </td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>展示的日期格式</td>
                            <td>
                                <a href="javascript:void(0)" @click="handleShowDate"><Icon type="information-circled"></Icon> Date</a>
                            </td>
                            <td>
                                <ul>
                                    <li><strong>date | daterange</strong>：<br>yyyy-MM-dd</li>
                                    <li><strong>datetime | datetimerange</strong>：<br>yyyy-MM-dd HH:mm:ss</li>
                                    <li><strong>year</strong>：yyyy</li>
                                    <li><strong>month</strong>：yyyy-MM</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>日期选择器出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>，2.12.0 版本开始支持自动识别</td>
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
                            <td>options</td>
                            <td>选择器额外配置，比如不可选日期与快捷选项，具体项详见下表</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>split-panels</td>
                            <td>开启后，左右面板不联动，仅在 <code>daterange</code> 和 <code>datetimerange</code> 下可用。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>开启后，可以选择多个日期，仅在 <code>date</code> 下可用。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-week-numbers</td>
                            <td>开启后，可以显示星期数。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>start-date</td>
                            <td>设置默认显示的起始日期。</td>
                            <td>Date</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>confirm</td>
                            <td>是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>open</td>
                            <td>手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用</td>
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
                        <tr>
                            <td>time-picker-options</td>
                            <td>可以在 type 为 datetime 和 datetimerange 下，配置 TimePicker 的属性，比如时间间隔 steps：<code>:time-picker-options="{steps: [1, 10, 10]}"</code></td>
                            <td>Object</td>
                            <td>{}</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="options" h3></Anchor>
                    <p>选择器额外配置</p>
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
                            <td>shortcuts</td>
                            <td>
                                设置快捷选项，每项内容：
                                <ul>
                                    <li><strong>text | String</strong>：显示的文案</li>
                                    <li><strong>value | Function</strong>：返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调</li>
                                    <li><strong>onClick | Function</strong>：点击时的回调，参数为当前日期选择器的 Vue 实例，当需要自定义复杂操作时，可以使用</li>
                                </ul>
                            </td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabledDate</td>
                            <td>设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="DatePicker events" h3></Anchor>
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
                            <td>日期发生变化时触发</td>
                            <td>返回两个值，已经格式化后的日期，比如 2016-01-01，和当前的日期类型，比如 date</td>
                        </tr>
                        <tr>
                            <td>on-open-change</td>
                            <td>弹出日历和关闭日历时触发</td>
                            <td>true | false</td>
                        </tr>
                        <tr>
                            <td>on-ok</td>
                            <td>在 confirm 模式下有效，点击确定按钮时触发</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-clear</td>
                            <td>在 confirm 模式或 clearable = true 时有效，在清空日期时触发</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="DatePicker slot" h3></Anchor>
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
    import Code from '../../code/date-picker';
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
                value1: '2016-01-01',
                value2: ['2016-01-01', '2016-02-15'],
                options1: {
                    shortcuts: [
                        {
                            text: 'Today',
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click today');
                            }
                        },
                        {
                            text: 'Yesterday',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click yesterday');
                            }
                        },
                        {
                            text: 'One week',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click a week ago');
                            }
                        }
                    ]
                },
                options2: {
                    shortcuts: [
                        {
                            text: '1 week',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '1 month',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '3 months',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                },
                options3: {
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now() - 86400000;
                    }
                },
                options4: {
                    disabledDate (date) {
                        const disabledDay = date.getDate();
                        return disabledDay === 15;
                    }
                },
                open: false,
                value3: ''
            }
        },
        methods: {
            handleClick () {
                this.open = !this.open;
            },
            handleChange (date) {
                this.value3 = date;
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