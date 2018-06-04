<template>
    <i-article>
        <article>
            <h1>Tag 标签</h1>
            <Anchor title="概述" h2></Anchor>
            <p>对不同维度进行简单的标记和分类。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基本用法">
                <div slot="demo">
                    <Tag>标签一</Tag>
                    <Tag>标签二</Tag>
                    <Tag v-if="show" closable @on-close="handleClose">标签三</Tag>
                </div>
                <div slot="desc">
                    <p>简单的展示，添加属性<code>closable</code>可以关闭标签。</p>
                    <p>点击关闭标签时，会触发 on-close 事件，需自己实现关闭逻辑。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="样式类型">
                <div slot="demo">
                    <Tag type="border">标签三</Tag>
                    <Tag type="border" closable>标签四</Tag>
                    <Tag type="dot">标签一</Tag>
                    <Tag type="dot" closable>标签二</Tag>
                </div>
                <div slot="desc">
                    <p>通过设置 <code>type</code> 属性为 <code>border</code> 或 <code>dot</code> 来选择不同的样式类型。建议有关闭的某些场景下使用 border，图例的场景下使用 dot。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="各种颜色">
                <div slot="demo">
                    <Tag closable color="blue">标签一</Tag>
                    <Tag closable color="green">标签二</Tag>
                    <Tag closable color="red">标签三</Tag>
                    <Tag closable color="yellow">标签四</Tag>
                    <br><br>
                    <Tag type="border" closable color="blue">标签一</Tag>
                    <Tag type="border" closable color="green">标签二</Tag>
                    <Tag type="border" closable color="red">标签三</Tag>
                    <Tag type="border" closable color="yellow">标签四</Tag>
                    <br><br>
                    <Tag type="dot" closable color="blue">标签一</Tag>
                    <Tag type="dot" closable color="green">标签二</Tag>
                    <Tag type="dot" closable color="red">标签三</Tag>
                    <Tag type="dot" closable color="yellow">标签四</Tag>
                    <br><br>
                    <Tag closable color="#EF6AFF" checkable>标签一</Tag>
                    <Tag type="border" closable color="#EF6AFF" checkable>标签二</Tag>
                    <Tag type="dot" closable color="#EF6AFF" checkable>标签三</Tag>
                    <Tag closable color="default" checkable>标签四</Tag>
                </div>
                <div slot="desc">
                    <p>四种预设颜色，可自定义颜色</p>
                </div>
                <i-code lang="html" slot="code">{{ code.color }}</i-code>
            </Demo>
            <Demo title="可选择">
                <div slot="demo">
                    <Tag checkable color="blue">标签一</Tag>
                    <Tag checkable color="green">标签二</Tag>
                    <Tag checkable color="red">标签三</Tag>
                    <Tag checkable color="yellow">标签四</Tag>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>checkable</code>，可以对标签进行选择，属性 <code>checked</code> 控制当前选择状态。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.checkable }}</i-code>
            </Demo>
            <Demo title="动态添加和删除">
                <div slot="demo">
                    <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
                    <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</Button>
                </div>
                <div slot="desc">
                    <p>用数组生成一组标签，可以动态添加和删除。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.add }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Tag props" h3></Anchor>
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
                            <td>closable</td>
                            <td>标签是否可以关闭</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>checkable</td>
                            <td>标签是否可以选择</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>checked</td>
                            <td>标签的选中状态</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>标签的样式类型，可选值为 <code>border</code>、<code>dot</code>或不填</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>标签颜色，预设颜色值为<code>blue</code>、<code>green</code>、<code>red</code>、<code>yellow</code>、<code>default</code>，你也可以自定义颜色值。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>当前标签的名称，使用 v-for，并支持关闭时，会比较有用</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>fade</td>
                            <td>是否在出现和消失时使用渐变的动画，动画时长可能会引起占位的闪烁</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tag events" h3></Anchor>
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
                            <td>on-close</td>
                            <td>关闭时触发</td>
                            <td>event, name</td>
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
    import Code from '../../code/tag';
    import Anchor from '../../components/anchor.vue';

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
                count: [0, 1, 2],
                show: true
            }
        },
        methods: {
            handleClose () {
                this.show = false;
            },
            handleAdd () {
                if (this.count.length) {
                    this.count.push(this.count[this.count.length - 1] + 1);
                } else {
                    this.count.push(0);
                }
            },
            handleClose2 (event, name) {
                const index = this.count.indexOf(name);
                this.count.splice(index, 1);
            }
        }
    }
</script>