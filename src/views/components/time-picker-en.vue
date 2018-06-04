<template>
    <div>
        <i-article>
            <article>
                <h1>TimePicker</h1>
                <Anchor title="Brief Introduction" h2></Anchor>
                <p>Select or input standard time. It supports range selection.</p>
                <Anchor title="Examples" h2></Anchor>
                <Demo title="Basic Usage">
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
                        <p>Set <code>type</code> prop to <code>time</code> or <code>timerange</code> to display <strong>Select Time</strong> or <strong>Select Time Range</strong> type.</p>
                        <p>Set <code>placement</code> prop to change the direction time picker displays. The configuration is same to Poptip and Tooltip. Details on API Doc.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.base }}</i-code>
                </Demo>
                <Demo title="Time Format">
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
                        <p>Set <code>format</code> prop can change the time format. See <a href="javascript:void(0)" @click="handleShowDate"><Icon type="information-circled"></Icon> Date</a> for more details.</p>
                        <p>Attention: format only controls how TimePicker displays the date, it won't change value.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.format }}</i-code>
                </Demo>
                <Demo title="Select Hour & Minute">
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
                        <p>The columns in the picker will change with <code>format</code>. When second in <code>format</code> is removed, the second column will be removed too.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.hours }}</i-code>
                </Demo>
                <Demo title="Steps">
                    <div slot="demo">
                        <TimePicker :steps="[1, 15, 15]" placeholder="Select time" style="width: 112px"></TimePicker>
                    </div>
                    <div slot="desc">
                        <p>You can set the interval of hours, minutes, and seconds by <code>steps</code> property. The value corresponds to hours, minutes and seconds.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.steps }}</i-code>
                </Demo>
                <Demo title="Disabled Time">
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
                        <p>You can use <code>disabled-hours</code> <code>disabled-minutes</code> <code>disabled-seconds</code> as a combination to disallow user select a certain time.</p>
                        <p>Use <code>hide-disabled-options</code> can hide disabled options.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
                </Demo>
                <Demo title="Operation with Confirmation">
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
                        <p>The picker will get a clear and an OK button if you set <code>confirm</code> prop.</p>
                        <p>OK button won't affect time picking operation.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.confirm }}</i-code>
                </Demo>
                <Demo title="Manually Controlled Component">
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
                        <p>In some custom scenarios, you can use slots with <code>open</code> <code>confirm</code> params and events to handle the component. Details on API Doc.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.slot }}</i-code>
                </Demo>
                <Demo title="Size">
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
                        <p>Set <code>size</code> prop to <code>large</code> or <code>small</code> to adjust TimePicker's size. Default is medium.</p>
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
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>type</td>
                            <td>The type of the picker. Optional value: <code>time</code>, <code>timerange</code></td>
                            <td>String</td>
                            <td>time</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>
                                Time. It can be JavaScript's Date, like <strong>new Date()</strong>, or standard time string. Click the link to see more info.<br>
                                Attention: when binding value on v-model, if the type is Date, you can use it with @on-change event.
                            </td>
                            <td>
                                <a href="javascript:void(0)" @click="handleShowDate"><Icon type="information-circled"></Icon> Date</a>
                            </td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>Time format that is displayed.</td>
                            <td>
                                <a href="javascript:void(0)" @click="handleShowDate"><Icon type="information-circled"></Icon> Date</a>
                            </td>
                            <td>HH:mm:ss</td>
                        </tr>
                        <tr>
                            <td>steps</td>
                            <td>Interval of hours, minutes, and seconds. For example, set [1, 15], the minutes will be displayed as 00, 15, 30, 45. </td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>The direction time picker displays. Optional value: <code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>, supports automatic recognition after 2.12.0</td>
                            <td>String</td>
                            <td>bottom-start</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>Placeholder</td>
                            <td>String</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>confirm</td>
                            <td>Show confirm panel on the bottom or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>open</td>
                            <td>Use this prop to control TimePicker's display manually. true: display, false: hide. TimePicker won't close automatically if you use this prop. We suggest you using it with slot, confirm and related events.</td>
                            <td>Boolean</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>The size of TimePicker. Optional value: <code>large</code>, <code>small</code>, <code>default</code> or leave empty.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Disable the picker or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>Show clear button or not.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>readonly</td>
                            <td>Readonly. If is set to true, the picker won't display. It only works when open prop is not set.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>editable</td>
                            <td>Text box is editable or not. It only works when slot is not set.</td>
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
                        </tbody>
                    </table>
                    <Anchor title="TimePicker events" h3></Anchor>
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
                            <td>Emitted when selected time changes.</td>
                            <td>Formatted time string like 09:41:00</td>
                        </tr>
                        <tr>
                            <td>on-open-change</td>
                            <td>Emitted when picker is open or close.</td>
                            <td>true | false</td>
                        </tr>
                        <tr>
                            <td>on-ok</td>
                            <td>Emitted when OK button is clicked.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-clear</td>
                            <td>Emitted when date is cleared.</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="TimePicker slot" h3></Anchor>
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
                            <td>Customize the content picker displays. We suggest you using it with open and other params. For more details, please see the demo above.</td>
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