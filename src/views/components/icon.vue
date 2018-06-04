<style scoped>
    .icons{
        overflow: hidden;
        zoom: 1;
    }
    .icons-item{
        float: left;
        margin: 6px 6px 6px 0;
        width: 145px;
        text-align: center;
        list-style: none;
        cursor: pointer;
        height: 100px;
        color: #5C6B77;
        transition: all 0.2s ease;
        position: relative;
        padding-top: 10px;
    }
    .icons-item p{
        padding-top: 15px;
    }
    .icon-search{
        position: relative;
        margin: 20px auto 30px;
        text-align: center;
    }
    .icon-search input{
        width: 500px;
        box-sizing: border-box;
        border: 0;
        border-radius: 4px;
        background: #f5f5f5;
        text-align: center;
        font-size: 14px;
        outline: none;
        margin: 0 auto;
        padding: 8px 0;
    }
    .icon-search p{
        margin-top: 20px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Icon 图标</h1>
            <Anchor title="概述" h2></Anchor>
            <p>iView 的图标使用开源项目<a href="http://ionicons.com/" target="_blank"><Icon type="ionic"></Icon> ionicons</a></p>
            <Anchor title="如何使用" h2></Anchor>
            <p>使用<code>&lt;Icon /></code>组件，指定图标对应的<code>type</code>属性，示例代码：</p>
            <i-code lang="html" bg>{{ code.demo }}</i-code>
            <p>渲染后为：</p>
            <i-code lang="html" bg>{{ code.render }}</i-code>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Icon props" h3></Anchor>
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
                            <td>type</td>
                            <td>图标的名称</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>图标的大小，单位是 px</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>图标的颜色</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Anchor title="示例" h2></Anchor>
            <div class="icon-search">
                <input
                    type="text"
                    :placeholder="searchPlaceholder"
                    @focus="changeHolder('focus')"
                    @blur="changeHolder('blur')"
                    v-model="search">
                <p>点击下面的图标按钮可以直接复制组件代码</p>
            </div>
            <div class="icons">
                <div class="icons-item" v-for="item in filterIcons" @click="clip(item)">
                    <i class="ivu-icon" :class="[`ivu-icon-${item.name}`]" style="font-size:32px"></i>
                    <p>
                        {{ item.name }}
                    </p>
                </div>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/icon';
    import Anchor from '../../components/anchor.vue';
    import Icons from '../../code/iconname';
    import Clipboard from 'clipboard';

    const searchPlaceholder = '输入英文关键词搜索，比如 success';

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
                icons: Icons,
                searchPlaceholder: searchPlaceholder,
                search: ''
            }
        },
        computed: {
            filterIcons () {
                return this.icons.filter(icon => icon.tag.indexOf(this.search) > -1);
            }
        },
        methods: {
            clip (type) {
                const icon = `<Icon type="${type.name}"></Icon>`;

                const clipboard = new Clipboard('.icons', {
                    text () {
                        return icon
                    }
                });

                clipboard.on('success', (e) => {
                    e.clearSelection();
                    clipboard.destroy();
                    this.$Message.success('组件代码已经复制到剪贴板');
                });
            },
            changeHolder (type) {
                if (type == 'focus') {
                    this.searchPlaceholder = '';
                } else if (type == 'blur') {
                    this.searchPlaceholder = searchPlaceholder;
                }
            }
        }
    }
</script>