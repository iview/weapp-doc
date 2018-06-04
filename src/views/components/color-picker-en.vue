<template>
    <i-article>
        <article>
            <h1>ColorPicker</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>For color selection, support for multiple color formats and color presets.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic">
                <div slot="demo">
                    <Row>
                        <Col span="12">
                            With default value
                            <ColorPicker v-model="color1" />
                        </Col>
                        <Col span="12">
                            With no default value
                            <ColorPicker v-model="color2" />
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Basic usage. You can use <code>v-model</code> to enable a two-way bingding on data.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Alpha">
                <div slot="demo">
                    <ColorPicker v-model="color3" alpha />
                </div>
                <div slot="desc">
                    <p>Add the property <code>alpha</code> to select a color with alpha channel.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.alpha }}</i-code>
            </Demo>
            <Demo title="Hue">
                <div slot="demo">
                    <ColorPicker v-model="color7" :hue="false" />
                </div>
                <div slot="desc">
                    <p>Set property <code>hue</code> to false, can hide hue slider.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.hue }}</i-code>
            </Demo>
            <Demo title="Color Presets">
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
                    <p>Add the property <code>recommend</code> to display the recommended color presets, or set <code>colors</code> to customize the default colors.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.colors }}</i-code>
            </Demo>
            <Demo title="Size">
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
                    <p>There are three size of ColorPicker: large, medium(default), small.</p>
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
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>value</td>
                            <td>Bound value. Use v-model to enable a two-way binding.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Set picker to disable.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>alpha</td>
                            <td>Whether to display the alpha slider.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>hue</td>
                            <td>Whether to display the hue slider.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>recommend</td>
                            <td>Whether to display the color presets.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>colors</td>
                            <td>Customize color presets.</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>Color format, Optional value: hsl, hsv, hex, rgb</td>
                            <td>String</td>
                            <td>When opening alpha is rgb, the other is hex</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>The size of the component. Optional value: <code>large</code>, <code>small</code>, <code>default</code> or leave blank.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="ColorPicker events" h3></Anchor>
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
                            <td>Triggers when input value changes.</td>
                            <td>color value</td>
                        </tr>
                        <tr>
                            <td>on-active-change</td>
                            <td>Triggers when the current active color changes.</td>
                            <td>active color value</td>
                        </tr>
                        <tr>
                            <td>on-open-change</td>
                            <td>Emitted when dropdown show or hide.</td>
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