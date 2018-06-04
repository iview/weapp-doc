<template>
    <i-article>
        <article>
            <h1>ColorPicker 颜色选择器</h1>
            <Anchor title="概述" h2></Anchor>
            <p>用于颜色选择，支持多种颜色格式，支持颜色预设。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Row>
                        <Col span="12">
                            有默认值
                            <ColorPicker v-model="color1" />
                        </Col>
                        <Col span="12">
                            无默认值
                            <ColorPicker v-model="color2" />
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>基本用法，可以使用 <code>v-model</code> 实现数据的双向绑定。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="透明度">
                <div slot="demo">
                    <ColorPicker v-model="color3" alpha />
                </div>
                <div slot="desc">
                    <p>开启属性 <code>alpha</code>，可以选择带 Alpha 通道的颜色。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.alpha }}</i-code>
            </Demo>
            <Demo title="色彩">
                <div slot="demo">
                    <ColorPicker v-model="color7" :hue="false" />
                </div>
                <div slot="desc">
                    <p>设置属性 <code>hue</code> 为 false，可以禁用色彩选项。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.hue }}</i-code>
            </Demo>
            <Demo title="颜色预设">
                <div slot="demo">
                    <Row>
                        <Col span="12">
                            <ColorPicker v-model="color4" recommend />
                        </Col>
                        <Col span="12">
                            <ColorPicker v-model="color5" :colors="colors" />
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>开启属性 <code>recommend</code> 可以显示推荐的颜色预设，或设置属性 <code>colors</code> 来自定义预设颜色。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.colors }}</i-code>
            </Demo>
            <Demo title="尺寸">
                <div slot="demo">
                    <Row>
                        <Col span="8">
                            <ColorPicker v-model="color6" size="large" />
                        </Col>
                        <Col span="8">
                            <ColorPicker v-model="color6" />
                        </Col>
                        <Col span="8">
                            <ColorPicker v-model="color6" size="small" />
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>选择器有三种尺寸：大、默认（中）、小。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="ColorPicker props" h3></Anchor>
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
                            <td>value</td>
                            <td>绑定的值，可使用 v-model 双向绑定</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>alpha</td>
                            <td>是否支持透明度选择</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>hue</td>
                            <td>是否支持色彩选择</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>recommend</td>
                            <td>是否显示推荐的颜色预设</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>colors</td>
                            <td>自定义颜色预设</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>颜色的格式，可选值为 hsl、hsv、hex、rgb</td>
                            <td>String</td>
                            <td>开启 alpha 时为 rgb，其它为 hex</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="ColorPicker events" h3></Anchor>
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
                            <td>on-change</td>
                            <td>当绑定值变化时触发</td>
                            <td>当前值</td>
                        </tr>
                        <tr>
                            <td>on-active-change</td>
                            <td>面板中当前显示的颜色发生改变时触发</td>
                            <td>当前显示的颜色值</td>
                        </tr>
                        <tr>
                            <td>on-open-change</td>
                            <td>下拉框展开或收起时触发</td>
                            <td>true / false</td>
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
    import Code from '../../code/color-picker';
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
                color1: '#19be6b',
                color2: '',
                color3: 'rgba(25, 190,107, .5)',
                color4: '#19be6b',
                color5: '#19be6b',
                colors: ['#311B92', '#512DA8', '#673AB7', '#9575CD', '#D1C4E9'],
                color6: '#19be6b',
                color7: '#19be6b'
            }
        }
    }
</script>