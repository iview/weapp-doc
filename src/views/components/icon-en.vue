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
            <h1>Icon</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>iView uses open source icon set <a href="http://ionicons.com/" target="_blank"><Icon type="ionic"></Icon> ionicons</a></p>
            <Anchor title="How to Use" h2></Anchor>
            <p>Use <code>&lt;Icon /></code> component, Set corresponding <code>type</code> prop of the icon. Sample code:</p>
            <i-code lang="html" bg>{{ code.demo }}</i-code>
            <p>After rending:</p>
            <i-code lang="html" bg>{{ code.render }}</i-code>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Icon props" h3></Anchor>
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
                            <td>type</td>
                            <td>Name of icon.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>Size of icon. Unit: px</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>Color of icon.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Anchor title="Icon Preview" h2></Anchor>
            <div class="icon-search">
                <input
                    type="text"
                    :placeholder="searchPlaceholder"
                    @focus="changeHolder('focus')"
                    @blur="changeHolder('blur')"
                    v-model="search">
                <p>Click icon buttons below can copy the component code directly.</p>
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

    const searchPlaceholder = 'Input keyword to search, e.g. success';

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