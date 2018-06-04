<template>
    <i-article>
        <article>
            <h1>Form</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Forms with abilities of data collecting, validating, and submitting, which includes checkbox, radio, dropdown etc.</p>
            <Alert show-icon style="margin-top: 16px">Attention: <code>i-form</code> is needed if not under template/render mode.</Alert>
            <Alert show-icon>
                <a href="https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2" target="_blank">W3C</a> regulates that
                    <template slot="desc">
                    <p>
                        <i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i>
                    </p>
                    <p>To prevent this behavior, you can add <code>@submit.native.prevent</code> on <code>&lt;Form&gt;</code>.</p>
                </template>
            </Alert>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Inline Form">
                <div slot="demo">
                    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                        <FormItem prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="Username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="Password">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
                        </FormItem>
                    </Form>
                </div>
                <div slot="desc">
                    <p>Set  <code>inline</code> prop to let Form arrange vertically.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.inline }}</i-code>
            </Demo>
            <Demo title="Form Control">
                <div slot="demo">
                    <Form :model="formItem" :label-width="80">
                        <FormItem label="Input">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="Select">
                            <Select v-model="formItem.select">
                                <Option value="beijing">New York</Option>
                                <Option value="shanghai">London</Option>
                                <Option value="shenzhen">Sydney</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="DatePicker">
                            <Row>
                                <Col span="11">
                                <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                                </Col>
                                <Col span="2" style="text-align: center">-</Col>
                                <Col span="11">
                                <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem label="Radio">
                            <RadioGroup v-model="formItem.radio">
                                <Radio label="male">Male</Radio>
                                <Radio label="female">Female</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="Checkbox">
                            <CheckboxGroup v-model="formItem.checkbox">
                                <Checkbox label="Eat"></Checkbox>
                                <Checkbox label="Sleep"></Checkbox>
                                <Checkbox label="Run"></Checkbox>
                                <Checkbox label="Movie"></Checkbox>
                            </CheckboxGroup>
                        </FormItem>
                        <FormItem label="Switch">
                            <i-switch v-model="formItem.switch" size="large">
                                <span slot="open">On</span>
                                <span slot="close">Off</span>
                            </i-switch>
                        </FormItem>
                        <FormItem label="Slider">
                            <Slider v-model="formItem.slider" range></Slider>
                        </FormItem>
                        <FormItem label="Text">
                            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">Submit</Button>
                            <Button type="ghost" style="margin-left: 8px">Cancel</Button>
                        </FormItem>
                    </Form>
                </div>
                <div slot="desc">
                    <p>In <code>Form</code>, each form consists of <code>FormItem</code>s. Available Control: Input, Radio, Checkbox, Switch, Select, Slider, DatePicker, TimePicker, Cascader, Transfer, InputNumber, Rate, Upload, AutoComplete, ColorPicker.</p>
                    <p>Setting <code>label</code> prop to <code>FormItem</code> can display the label of the form. <code>label-width</code> needs to be set on Form.</p>
                    <p>Set the property <code>label-for</code> to <code>FormItem</code>, and the <code>element-id</code> property to component, it will be focused when click label.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.item }}</i-code>
            </Demo>
            <Demo title="Alignment">
                <div slot="demo">
                    <Form :model="formLeft" label-position="left" :label-width="100">
                        <FormItem label="Title">
                            <Input v-model="formLeft.input1"></Input>
                        </FormItem>
                        <FormItem label="Title name">
                            <Input v-model="formLeft.input2"></Input>
                        </FormItem>
                        <FormItem label="Aligned title">
                            <Input v-model="formLeft.input3"></Input>
                        </FormItem>
                    </Form>
                    <Form :model="formRight" label-position="right" :label-width="100">
                        <FormItem label="Title">
                            <Input v-model="formRight.input1"></Input>
                        </FormItem>
                        <FormItem label="Title name">
                            <Input v-model="formRight.input2"></Input>
                        </FormItem>
                        <FormItem label="Aligned title">
                            <Input v-model="formRight.input3"></Input>
                        </FormItem>
                    </Form>
                    <Form :model="formTop" label-position="top">
                        <FormItem label="Title">
                            <Input v-model="formTop.input1"></Input>
                        </FormItem>
                        <FormItem label="Title name">
                            <Input v-model="formTop.input2"></Input>
                        </FormItem>
                        <FormItem label="Aligned title">
                            <Input v-model="formTop.input3"></Input>
                        </FormItem>
                    </Form>
                </div>
                <div slot="desc">
                    <p>Set <code>label-position</code> prop to change the position of the label. Optional: left, right, top.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.position }}</i-code>
            </Demo>
            <Demo title="Form Validation">
                <div slot="demo">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                        <FormItem label="Name" prop="name">
                            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                        </FormItem>
                        <FormItem label="E-mail" prop="mail">
                            <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
                        </FormItem>
                        <FormItem label="City" prop="city">
                            <Select v-model="formValidate.city" placeholder="Select your city">
                                <Option value="beijing">New York</Option>
                                <Option value="shanghai">London</Option>
                                <Option value="shenzhen">Sydney</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="Date">
                            <Row>
                                <Col span="11">
                                <FormItem prop="date">
                                    <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                                </FormItem>
                                </Col>
                                <Col span="2" style="text-align: center">-</Col>
                                <Col span="11">
                                <FormItem prop="time">
                                    <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                                </FormItem>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem label="Gender" prop="gender">
                            <RadioGroup v-model="formValidate.gender">
                                <Radio label="male">Male</Radio>
                                <Radio label="female">Female</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="Hobby" prop="interest">
                            <CheckboxGroup v-model="formValidate.interest">
                                <Checkbox label="Eat"></Checkbox>
                                <Checkbox label="Sleep"></Checkbox>
                                <Checkbox label="Run"></Checkbox>
                                <Checkbox label="Movie"></Checkbox>
                            </CheckboxGroup>
                        </FormItem>
                        <FormItem label="Desc" prop="desc">
                            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                        </FormItem>
                    </Form>
                </div>
                <div slot="desc">
                    <p>The validation module of Form is based on <a href="https://github.com/yiminghe/async-validator" target="_blank"><Icon type="social-github"></Icon> async-validator</a>. Set <code>rules</code> to Form and set <code>prop</code> prop to FormItem that needs to be validated.</p>
                    <p>For complete validation rules, please visit async-validator project site.</p>
                    <p>Validate method support Promise.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.validate }}</i-code>
            </Demo>
            <Demo title="Custom Validation">
                <div slot="demo">
                    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                        <FormItem label="Password" prop="passwd">
                            <Input type="password" v-model="formCustom.passwd"></Input>
                        </FormItem>
                        <FormItem label="Confirm" prop="passwdCheck">
                            <Input type="password" v-model="formCustom.passwdCheck"></Input>
                        </FormItem>
                        <FormItem label="Age" prop="age">
                            <Input type="text" v-model="formCustom.age" number></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
                            <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
                        </FormItem>
                    </Form>
                </div>
                <div slot="desc">
                    <p>You can customize your own rule to complete complex validation like data that needs to be validated on server side. The demo shows a rechecking on password and a simulation of async validation.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>
            <Demo title="Dynamic Adding / Removing">
                <div slot="demo">
                    <Form ref="formDynamic" :model="formDynamic" :label-width="80" style="width: 300px">
                        <FormItem
                                v-for="(item, index) in formDynamic.items"
                                v-if="item.status"
                                :key="index"
                                :label="'Item ' + item.index"
                                :prop="'items.' + index + '.value'"
                                :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}">
                            <Row>
                                <Col span="18">
                                <Input type="text" v-model="item.value" placeholder="Enter something..."></Input>
                                </Col>
                                <Col span="4" offset="1">
                                <Button type="ghost" @click="handleRemove(index)">Delete</Button>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem>
                            <Row>
                                <Col span="12">
                                <Button type="dashed" long @click="handleAdd" icon="plus-round">Add item</Button>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formDynamic')">Submit</Button>
                            <Button type="ghost" @click="handleReset('formDynamic')" style="margin-left: 8px">Reset</Button>
                        </FormItem>
                    </Form>
                </div>
                <div slot="desc">
                    <p>When you need to maintain FormItem dynamiclly, you can directly set <code>rules</code> prop to FormItem to validate the field individually.</p>
                    <p>When setting prop prop dynamiclly, FormItem will rely on its parent Form's model to get its content. Details on demo code.</p>
                    <p>You can set required, error or some other props on FormItem. Details on API Doc.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.dynamic }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Form props" h3></Anchor>
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
                            <td>model</td>
                            <td>Form's data object.</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>rules</td>
                            <td>Validation rules of Form. For more details, visit <a href="https://github.com/yiminghe/async-validator" target="_blank"><Icon type="social-github"></Icon> async-validator</a>.</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>inline</td>
                            <td>Enable inline-form mode or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>label-position</td>
                            <td>The position of Form's labels. Optional value: <code>left</code>, <code>right</code>, <code>top</code></td>
                            <td>String</td>
                            <td>right</td>
                        </tr>
                        <tr>
                            <td>label-width</td>
                            <td>Width of Form's labels. All Form-items in Form will inherit the value.</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>show-message</td>
                            <td>Show validation failing info or not.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>autocomplete</td>
                            <td>Native autocomplete property, which can be selected as off or on.</td>
                            <td>String</td>
                            <td>off</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Form methods" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Method Name</th>
                            <th>Description</th>
                            <th>Parameter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>validate</td>
                            <td>Validate the whole form. The parameter is the callback function after validating. It'll return a Boolean value to notice success of failure. Support Promise.</td>
                            <td>callback</td>
                        </tr>
                        <tr>
                            <td>validateField</td>
                            <td>Validate some field of the form, arg 1 is prop that needs to be validated, arg2 is callback function. It'll return the error message.</td>
                            <td>callback</td>
                        </tr>
                        <tr>
                            <td>resetFields</td>
                            <td>Reset the whole form. Remove the content of every field and reset the validation result.</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="FormItem props" h3></Anchor>
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
                            <td>prop</td>
                            <td>Target to the field in Form's model.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>Label text.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>label-width</td>
                            <td>Label width.</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>label-for</td>
                            <td>Set the property <code>for</code> to the native tag <code>label</code>, which matches the <code>element-id</code> property of the component and can click on the label to focus it.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>required</td>
                            <td>Required or not. If not set, it'll be generated accroding to validation rules.</td>
                            <td>Boolean</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>rules</td>
                            <td>Validation rules.</td>
                            <td>Object | Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>error</td>
                            <td>Error message of the form. Setting this prop will cause the validation state of the form changing to error, and the error message will be shown.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>show-message</td>
                            <td>Show validation error data or not.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="FormItem slot" h3></Anchor>
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
                            <td>content</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>Content of the label.</td>
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
    import Code from '../../code/form';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password again'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('The two input passwords do not match!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('Age cannot be empty'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('Please enter a numeric value'));
                    } else {
                        if (value < 18) {
                            callback(new Error('Must be over 18 years of age'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };

            return {
                code: Code,
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                },
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formRight: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formTop: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                },
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    age: [
                        { validator: validateAge, trigger: 'blur' }
                    ]
                },
                index: 1,
                formDynamic: {
                    items: [
                        {
                            value: '',
                            index: 1,
                            status: 1
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.index++;
                this.formDynamic.items.push({
                    value: '',
                    index: this.index,
                    status: 1
                });
            },
            handleRemove (index) {
                this.formDynamic.items[index].status = 0;
            }
        }
    }
</script>