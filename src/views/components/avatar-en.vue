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
            <h1>Avatar</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Avatars can be used to represent people or object, which supports image, iView-Icon, or letter.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic">
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
                    <p>Three sizes and two shapes are available.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Type">
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
                    <p>Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="With Badge">
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
                    <p>Usually used for messages remind.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.badge }}</i-code>
            </Demo>
            <Demo title="Autoset Font Size">
                <div slot="demo">
                    <div class="demo-avatar">
                        <Avatar :style="{background: color}">{{ user }}</Avatar>
                        <Button size="small" @click="handleChange">Change</Button>
                    </div>
                </div>
                <div slot="desc">
                    <p>For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar.</p>
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
                        <th>Property</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Default</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>shape</td>
                        <td>To set the shape of avatar, options include circle, square.</td>
                        <td>String</td>
                        <td>circle</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>To set the size of avatar, options include large, small, default.</td>
                        <td>String</td>
                        <td>default</td>
                    </tr>
                    <tr>
                        <td>src</td>
                        <td>The address of a image avatar.</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>The icon type of a icon avatar, see <code>Icon</code> Component.</td>
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