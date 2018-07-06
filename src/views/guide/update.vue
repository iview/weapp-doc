<style>
    .doc-update .ivu-timeline .ivu-timeline-item-content{
        top: -14px;
    }
    .doc-update h2{
        margin: 0;
        font-weight: normal;
    }
    .doc-update code{
        margin: 8px 0 10px;
    }
    .doc-update ul{
        padding-left: 22px !important;
    }
    .doc-update-important{
        color: #3399ff;
    }
    .doc-update-loop.ivu-load-loop{
        animation-duration: 3s;
    }
</style>
<template>
    <i-article>
        <h1>更新日志</h1>
        <article class="doc-update">
            <Timeline pending>
                <Timeline-item>
                    <Anchor title="2.0.0" h2></Anchor>
                    <p>
                        <code>2018-07-28</code>
                    </p>
                    <h3>新增组件</h3>
                    <ul>
                        <li>新增倒计时组件 <code>CountDown</code>。</li>
                        <li>新增滑动菜单组件 <code>Swipeout</code>。</li>
                        <li>新增索引选择器组件 <code>Index</code>。</li>
                        <li>新增分隔符组件 <code>Divider</code>。</li>
                        <li>新增吸顶容器组件 <code>Sticky</code>。</li>
                        <li>新增页底提示组件 <code>LoadMore</code>。</li>
                        <li>新增折叠面板组件 <code>Collapse</code>。</li>
                    </ul>
                    <h3>新特性 & 优化</h3>
                    <ul>
                        <li>Icon 新增自定义图标属性 <code>custom</code>。</li>
                        <li>Button 新增方法 <code>bindcontact</code>、<code>bindgetuserinfo</code>、<code>bindgetphonenumber</code>、<code>binderror</code>。</li>
                        <li>Button 新增行内元素属性 <code>inline</code>。</li>
                        <li>Button 增加了按下的交互效果。</li>
                        <li>Drawer 的遮罩层也支持过渡动画了。</li>
                        <li>NoticeBar 新增属性 <code>background-color</code>、<code>color</code>、<code>speed</code>。<issue id="25"></issue></li>
                        <li>TabBar 新增自定义图片属性 <code>img</code> 和 <code>current-img</code>。</li>
                        <li>TabBar 点击区域增大，更容易点击了。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="1.1.0" h2></Anchor>
                    <p>
                        <code>2018-06-05</code>
                    </p>
                    <ul>
                        <li>Cell 的点击事件名改为了 <code>bind:click</code>。</li>
                        <li>Button 的属性 <code>showMessageCard</code> 类型修正为 Boolean。</li>
                        <li>Drawer 的属性 <code>show</code> 改名为 <code>visible</code>, <code>type</code> 改名为 <code>mode</code>, <code>overlay</code> 改名为 <code>mask</code>, <code>closeOverlay</code> 改名为 <code>maskClosable</code>。</li>
                        <li>Rate 支持触摸滑动来选择了。</li>
                        <li>Alert 的关闭事件名改为了 <code>bind:close</code>。</li>
                        <li>修复 Alert 缺失 info 图标的 bug。</li>
                        <li>修复 Page 警告的问题。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item color="green">
                    <Icon type="trophy" size="18" slot="dot"></Icon>
                    <Anchor title="1.0.0" h2></Anchor>
                    <p>
                        <code>2018-06-01</code>
                    </p>
                    <ul>
                        <li>完成 30 个组件。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.0.1" h2></Anchor>
                    <p>
                        <code>2018-05-15</code>
                    </p>
                    <ul>
                        <li>立项。</li>
                    </ul>
                </Timeline-item>
            </Timeline>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';
    import issue from '../../components/issue.vue';
    import mention from '../../components/mention.vue';

    import version from '../../config/config';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor,
            issue,
            mention
        },
        data () {
            return {
                code: Code
            }
        },
        mounted () {
            window.localStorage.setItem('version', version.version);
        },
        methods: {
            handleBefore () {
                window.open('http://v1.iviewui.com/docs/guide/update');
            }
        }
    }
</script>