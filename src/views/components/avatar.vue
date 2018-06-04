<style>
    .demo-avatar .ivu-avatar{
        margin-top: 16px;
        margin-right: 16px;
    }
    .demo-avatar-badge .ivu-badge{
        margin-right: 16px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Avatar 头像</h1>
            <Anchor title="概述" h2></Anchor>
            <p>用来代表用户或事物，支持图片、图标或字符展示。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <div class="demo-avatar">
                        <Avatar icon="person" size="large" />
                        <Avatar icon="person" />
                        <Avatar icon="person" size="small" />
                    </div>
                    <div class="demo-avatar">
                        <Avatar shape="square" icon="person" size="large" />
                        <Avatar shape="square" icon="person" />
                        <Avatar shape="square" icon="person" size="small" />
                    </div>
                </div>
                <div slot="desc">
                    <p>头像有三种尺寸，两种形状可选。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="类型">
                <div slot="demo">
                    <div class="demo-avatar">
                        <Avatar icon="person" />
                        <Avatar>U</Avatar>
                        <Avatar>USER</Avatar>
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                        <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>
                        <Avatar style="background-color: #87d068" icon="person" />
                    </div>
                </div>
                <div slot="desc">
                    <p>支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="带徽标的头像">
                <div slot="demo">
                    <div class="demo-avatar-badge">
                        <Badge count="1">
                            <Avatar shape="square" icon="person" />
                        </Badge>
                        <Badge dot>
                            <Avatar shape="square" icon="person" />
                        </Badge>
                    </div>
                </div>
                <div slot="desc">
                    <p>通常用于消息提示。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.badge }}</i-code>
            </Demo>
            <Demo title="自动调整字符大小">
                <div slot="demo">
                    <div class="demo-avatar">
                        <Avatar :style="{background: color}">{{ user }}</Avatar>
                        <Button size="small" @click="handleChange">Change</Button>
                    </div>
                </div>
                <div slot="desc">
                    <p>对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.string }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Avatar props" h3></Anchor>
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
                            <td>shape</td>
                            <td>指定头像的形状，可选值为 circle、square</td>
                            <td>String</td>
                            <td>circle</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>设置头像的大小，可选值为 large、small、default</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>src</td>
                            <td>图片类头像的资源地址</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>设置头像的图标类型，参考 <code>Icon</code> 组件</td>
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
    import Code from '../../code/avatar';
    import Anchor from '../../components/anchor.vue';

    const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

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
                user: UserList[0],
                color: ColorList[0]
            }
        },
        methods: {
            handleChange () {
                const index = UserList.indexOf(this.user);
                this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
                this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
            }
        }
    }
</script>