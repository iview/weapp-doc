<style>
    .demo-date-type *{
        font-size: 12px !important;
    }
</style>
<template>
    <div>
        <i-article>
            <article>
                <h1>DatePicker</h1>
                <Anchor title="Brief Introduction" h2></Anchor>
                <p>Pick or input date. Support type: year, month, date etc. Range picking is supported.</p>
                <Anchor title="Examples" h2></Anchor>
                <Demo title="Basic Usage">
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
                        <p>Set <code>type</code> prop to <code>date</code> or <code>daterange</code> to show <strong>Pick Single Date</strong> or <strong>Pick Range</strong> type.</p>
                        <p>Set <code>placement</code> prop to change the display direction of the DatePicker. Same as Poptip and Tooltip, <code>placement</code> supports 12 directions. Details on API doc below.</p>
                        <blockquote>Support from right to left choice after <code>2.10.0</code>.</blockquote>
                    </div>
                    <i-code lang="html" slot="code">{{ code.base }}</i-code>
                </Demo>
                <Demo title="Shortcut">
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
                        <p>Set <code>shortcuts</code> in <code>options</code> object prop to set shortcut options. See the demo code to get more info.</p>
                        <p>Within it, <strong>value</strong> is a function that must return a date. If you use daterange, an array need to be returned.</p>
                        <p>value accept any correct date format, such as: 2016-12-24, 12/24/16.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.shortcuts }}</i-code>
                </Demo>

                <Demo title="Split Panels">
                    <div slot="demo">
                        <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
                    </div>
                    <div slot="desc">
                        <p>Open property <code>split-panels</code>, the left and right panels are not interconnected during the switching year and month.</p>
                        <blockquote>Support after <code>2.10.0</code></blockquote>
                    </div>
                    <i-code lang="html" slot="code">{{ code.split_panels }}</i-code>
                </Demo>

                <Demo title="Multiple">
                    <div slot="demo">
                        <DatePicker type="date" multiple placeholder="Select date" style="width: 300px"></DatePicker>
                    </div>
                    <div slot="desc">
                        <p>Open property <code>multiple</code>, you can select multiple.</p>
                        <blockquote>Support after <code>2.10.0</code></blockquote>
                    </div>
                    <i-code lang="html" slot="code">{{ code.multiple }}</i-code>
                </Demo>

                <Demo title="Show Week Numbers">
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
                        <p>Open property <code>show-week-numbers</code>, can display the week numbers.</p>
                        <blockquote>Support after <code>2.10.0</code></blockquote>
                    </div>
                    <i-code lang="html" slot="code">{{ code.weeks }}</i-code>
                </Demo>

                <Demo title="Start Date">
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
                        <p>Set property <code>start-date</code> to a custom date, you can change the default display date panel to the specified date.</p>
                        <blockquote>Support after <code>2.10.0</code></blockquote>
                    </div>
                    <i-code lang="html" slot="code">{{ code.start_date }}</i-code>
                </Demo>

                <Demo title="Date Format">
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
                        <p>Set <code>format</code> prop to change the date format. Details in <a href="javascript:void(0)" @click="handleShowDate"><Icon type="information-circled"></Icon> Date</a>.</p>
                        <p>Attention, format only changes the date format that displays not value.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.format }}</i-code>
                </Demo>
                <Demo title="Date Time Picker">
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
                        <p>Set <code>type</code> prop to <code>datetime</code> or <code>datetimerange</code> to pick time.</p>
                        <p>Set format and ignore second to reserve only hour and minute.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.datetime }}</i-code>
                </Demo>
                <Demo title="Year and Month">
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
                        <p>Set <code>type</code> to <code>year</code> or <code>month</code> can select year and month.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.type }}</i-code>
                </Demo>
                <Demo title="Disabled">
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
                        <p>Set <code>disabledDate</code> in <code>options</code> object prop to set a date that can't be picked.</p>
                        <p>disabledDate is a function which accepts an argument: current date. A Boolean value needs to be returned to disable the date or not.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
                </Demo>
                <Demo title="Operation with Confirmation">
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
                        <p> DatePicker won't close actively after picking if you set <code>confirm</code> prop. It requires a confirmation.</p>
                        <p>Ok button won't affect date picking operation.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.confirm }}</i-code>
                </Demo>
                <Demo title="Manually Controlled Component">
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
                        <p>In some customized scenes, you can use slot with <code>open</code> prop and events to control the display status of the component. Details on API doc below.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.slot }}</i-code>
                </Demo>
                <Demo title="Size">
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
                        <p>Set <code>size</code> prop to <code>large</code> or <code>small</code> to adjust the size of DatePicker to large or small. Default is medium.</p>
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
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>type</td>
                            <td>Display type. Optional value: <code>date</code>, <code>daterange</code>, <code>datetime</code>, <code>datetimerange</code>, <code>year</code>、<code>month</code></td>
                            <td>String</td>
                            <td>date</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>
                                Date, can be JavaScript's Date like <strong>new Date()</strong>, or standard date format, <br>
                                Attention: When using v-model, the type of value is Date. You can use it with @on-change .
                            </td>
                            <td>
                                <a href="javascript:void(0)" @click="handleShowDate"><Icon type="information-circled"></Icon> Date</a>
                            </td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>The date format that displays.</td>
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
                            <td>The direction DatePicker displays. Optional value: <code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>, supports automatic recognition after 2.12.0</td>
                            <td>String</td>
                            <td>bottom-start</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>Place holder.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>Extra configurations of DatePicker, such as disabling date, or shortcuts. For more details, see the table below.</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>split-panels</td>
                            <td>When open it, the left and right panels are not interconnected during the switching year and month. Only work in <code>daterange</code> and <code>datetimerange</code> type.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>When open it, you can select multiple dates. Only work in <code>date</code> type.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-week-numbers</td>
                            <td>When open it, you can display the numbers of week.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>start-date</td>
                            <td>Set the start date of the default display.</td>
                            <td>Date</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>confirm</td>
                            <td>Display the control panel at the bottom of the DatePicker or not. If enabled, DatePicker won't close actively but wait user to confirm.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>open</td>
                            <td>Control the display status of DatePicker manually. Set true to display, false to hide. DatePicker won't close actively after using this component. We suggest you to use it with slot, confirm and related events.</td>
                            <td>Boolean</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>The size of the component. Optional value: <code>large</code>, <code>small</code>, <code>default</code> or leave blank.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Disable DatePicker or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>Show the clear button or not.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>readonly</td>
                            <td>Totally readonly. DatePicker won't be shown if enabled. It only works without setting open prop.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>editable</td>
                            <td>Enable inputting into textbox. Only works without slot.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>Whether to append the layer in body. When used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>element-id</td>
                            <td>Set the <code>id</code> for the input element, more info can be found in Form.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>time-picker-options</td>
                            <td>TimePicker attributes can be configured under the type datetime and datetimerange, such as steps: <code>:time-picker-options="{steps: [1, 10, 10]}"</code></td>
                            <td>Object</td>
                            <td>{}</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="options" h3></Anchor>
                    <p>Extra configurations</p>
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
                            <td>shortcuts</td>
                            <td>
                                Set shortcuts:
                                <ul>
                                    <li><strong>text | String</strong>: Text to be shown.</li>
                                    <li><strong>value | Function</strong>: Return selected date. You don't need to set it if you want to control the return value yourself by using onClick callback.</li>
                                    <li><strong>onClick | Function</strong>: Callback after clicking. Accept one argument: current DatePicker Vue instance. Use it when you need to customize complex operations.</li>
                                </ul>
                            </td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabledDate</td>
                            <td>Set the date that can't be picked. Accept one argument: current date, return a Boolean value to disable it or not.</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="DatePicker events" h3></Anchor>
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
                            <td>on-change</td>
                            <td>Emit when date is changed.</td>
                            <td>Return two values, formatted date like 2016-01-01, and the current date type, such as date.</td>
                        </tr>
                        <tr>
                            <td>on-open-change</td>
                            <td>Emit when open / close the calendar.</td>
                            <td>true | false</td>
                        </tr>
                        <tr>
                            <td>on-ok</td>
                            <td>Works on confirm mode. Emit when clicking ok button.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-clear</td>
                            <td>Works on confirm mode or clearable = true mode. Emit when date is cleared.</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="DatePicker slot" h3></Anchor>
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
                            <td>Customize the content of DatePicker. We suggest you to use it with open props etc. See the demo above to get more info.</td>
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