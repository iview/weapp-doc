<template>
    <div class="vue-book">
        <div class="main ivu-article">
            <h1>《Vue.js 实战》预购</h1>
            <blockquote>
                <p>《Vue.js 实战》一书将在 10 月由清华大学出版社出版，现可预购 <strong>签名版</strong>。</p>
                <p>图书介绍：本书以 Vue.js 2.0 为基础，以项目实战的方式来引导读者渐进式学习 Vue.js。通过本书的学习，读者能够掌握 Vue.js 框架主要 API 的使用方法、自定义指令、组件开发、单文件组件、Render 函数、使用 Webpack 开发可复用的单页面富应用等。本书特点是示例丰富，侧重实战，适用于刚接触或即将接触 Vue.js 的开发者，也适用于对 Vue.js 有过开发经验，但需要进一步提升的开发者。</p>
                <p>作者简介：梁灏（Aresn），基于 Vue.js 的开源组件库 iView 作者，程序员社区 TalkingCoder 创办者。现工作于 TalkingData，负责大数据可视化基础架构。</p>
                <p>本书由 Vue.js 作者 <strong>尤雨溪</strong> 作推荐序<a href="https://i.loli.net/2017/08/07/5987de0f8d841.png" target="_blank">查看</a>，大漠、justjavac 等老师作推荐语<a href="https://i.loli.net/2017/08/07/5987df18c2a41.png" target="_blank">查看</a>。</p>
                <p><a href="https://i.loli.net/2017/08/07/5987e087b025b.png" target="_blank">查看本书目录</a></p>
                <p>图书定价：<strong style="color: #ed3f14">79 元</strong>（包邮）。</p>
                <p>发货日期：出版后即发货，大概在 10 月份。</p>
                <!--<p><strong style="color: #ed3f14;font-size: 16px;">注：目前 200 本签名版已售罄，感谢您的支持。</strong></p>-->
                <!--<p><strong>加入 QQ 群，获取最新状态，参与讨论。群号：225472461</strong></p>-->
                <!--<p>-->
                    <!--<img src="https://i.loli.net/2017/08/16/5993e3c74221b.png">-->
                <!--</p>-->
            </blockquote>
        </div>
        <div class="steps">
            <Steps :current="steps">
                <Step title="填写订单"></Step>
                <Step title="付款"></Step>
                <Step title="完成"></Step>
            </Steps>
        </div>
        <div class="order" v-if="steps === 0">
            <i-form :model="formItem" :rules="ruleValidate" :label-width="80">
                <Form-item prop="name" label="姓名">
                    <i-input v-model="formItem.name" placeholder="请输入收货人真实姓名，例如：梁灏"></i-input>
                </Form-item>
                <Form-item prop="phone" label="电话">
                    <i-input v-model="formItem.phone" placeholder="请输入收货人联系电话，例如：18500000000"></i-input>
                </Form-item>
                <Form-item prop="address" label="收货地址">
                    <i-input type="textarea" v-model="formItem.address" placeholder="请填写完整的收货地址，例如：北京市东城区东直门外大街39号院京投快轨大厦608室"></i-input>
                </Form-item>
            </i-form>
            <div style="text-align: center;margin: 16px 0;">
                <Button type="primary" size="large" @click="handleOrder">提交订单</Button>
            </div>
        </div>
        <div class="order" v-if="steps === 1">
            <h2>付款步骤：</h2>
            <div style="font-size: 16px;">
                <p>1. 添加个人微信 <strong>talkingcoder</strong>，并转账 <strong style="color: #ed3f14">79 元</strong></p>
                <p>2. 将你的订单号 <strong style="color: #ed3f14">{{ order_id }}</strong> 发送给 talkingcoder</p>
                <p>3. 管理员稍后会确认订单，并加你到预购群，等待发货</p>
            </div>
            <div style="margin-top: 16px">
                <p>扫码二维码添加微信，或搜索 talkingcoder</p>
                <img style="width: 160px;height: 160px;" src="https://i.loli.net/2017/08/07/5988010701dce.jpeg">
            </div>
            <div style="text-align: center;margin: 16px 0;">
                <Button type="primary" size="large" @click="handleFinish">完成付款，并已发送订单号</Button>
            </div>
        </div>
        <div class="order" v-if="steps === 2">
            <h2>订购完成！</h2>
            <div style="font-size: 16px;">
                稍后管理员确认订单后，会加您到预购微信群。
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    const apiPath = 'https://www.iviewui.com';
//    const apiPath = 'http://127.0.0.1:9800';

    export default {
        props: {},
        data () {
            return {
                order_id: 0,
                steps: 0,
                formItem: {
                    name: '',
                    phone: '',
                    address: ''
                },
                ruleValidate: {
                    name: [
                        {
                            required: true,
                            message: '姓名不能为空',
                            trigger: 'blur'
                        }
                    ],
                    phone: [
                        {
                            required: true,
                            message: '电话不能为空',
                            trigger: 'blur'
                        }
                    ],
                    address: [
                        {
                            required: true,
                            message: '收货地址不能为空',
                            trigger: 'blur'
                        }
                    ]
                }
            };
        },
        methods: {
            handleOrder () {
                if (this.formItem.name === '') {
                    this.$Notice.warning({
                        title: '请输入姓名'
                    });
                    return false;
                }
                if (this.formItem.phone === '') {
                    this.$Notice.warning({
                        title: '请输入联系电话'
                    });
                    return false;
                }
                if (this.formItem.address === '') {
                    this.$Notice.warning({
                        title: '请输入收获地址'
                    });
                    return false;
                }

                this.$Modal.confirm({
                    title: '收获信息确认',
                    content: `<p>姓名：${this.formItem.name}</p><p>电话：${this.formItem.phone}</p><p>地址：${this.formItem.address}</p><p><strong style="color: #ed3f14;font-size: 12px;">目前 100 本签名版已售罄，您将要购买的是普通版（无纪念品），请知晓，感谢您的支持。</strong></p>`,
                    onOk: () => {
                        const params = new URLSearchParams();
                        params.append('name', this.formItem.name);
                        params.append('phone', this.formItem.phone);
                        params.append('address', this.formItem.address);

                        axios({
                            method: 'post',
                            url: `${apiPath}/order/buy`,
                            data: params,
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                            }
                        }).then(res => {
                            if (res.data.status_code === '0') {
                                this.order_id = res.data.data.order.id;
                                this.steps = 1;
                            }
                        });
                    },
                    onCancel: () => {

                    }
                });
            },
            handleFinish () {
                this.$Modal.confirm({
                    title: '付款确认',
                    content: `<p>确认已完成付费并发送订单号后，请点击确定按钮。</p>`,
                    onOk: () => {
                        this.steps = 2;
                    },
                    onCancel: () => {

                    }
                });
            }
        },
        mounted () {
            document.body.style.background = '#f8f8f9';
            document.body.style.height = '100%';
            document.getElementsByTagName('html')[0].style.height = '100%';
            document.getElementsByTagName('div')[0].style.height = '100%';
        }
    };
</script>
<style scoped>
    .vue-book{
        width: 60%;
        min-height: 100%;
        margin: 0 auto;
        padding: 16px;
        background: #fff;
        box-shadow: 0 2px 2px rgba(0,0,0,.2);
    }
    h1{
        text-align: center;
    }
    .steps{
        margin: 16px 0 32px;
    }
    .order{
        padding: 16px;
    }
</style>