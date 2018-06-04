<template>
    <i-article>
        <article>
            <h1>Button</h1>
            <p>Basic component that is used to trigger bussiness logic.</p>
            <Alert show-icon style="margin-top: 16px">Warning：Except for template/render mode，use <code>i-button</code> instead.</Alert>
            <Anchor title="Example" h2></Anchor>
            <Demo title="Types">
                <div slot="demo">
                    <Button>Default</Button>
                    <Button type="primary">Primary</Button>
                    <Button type="ghost">Ghost</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="text">Text</Button>
                    <br><br>
                    <Button type="info">Info</Button>
                    <Button type="success">Success</Button>
                    <Button type="warning">Warning</Button>
                    <Button type="error">Error</Button>
                </div>
                <div slot="desc">
                    <p>Types of buttons: default, primary, ghost, dashed, text and 4 buttons of different colors.</p>
                    <p>Set the <code>type</code> to<code>primary</code>、<code>ghost</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>to choose different buttons, by default the default type is used.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="Icons & Shapes">
                <div slot="demo">
                    <Button type="primary" shape="circle" icon="ios-search"></Button>
                    <Button type="primary" icon="ios-search">Search</Button>
                    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
                    <Button type="primary" shape="circle">Circle</Button>
                    <br><br>
                    <Button type="ghost" shape="circle" icon="ios-search"></Button>
                    <Button type="ghost" icon="ios-search">Search</Button>
                    <Button type="ghost" shape="circle" icon="ios-search">Search</Button>
                    <Button type="ghost" shape="circle">Circle</Button>
                </div>
                <div slot="desc">
                    <p>Set the <code>icon</code> to insert an <code>Icon</code> to the <code>Button</code>, or use the <code>Icon</code> component inside the <code>Button</code> directly.</p>
                    The icon would appear at the leftmost side of the <code>Button</code> when <p>using the <code>icon</code>; use <code>Icon</code> component for different icons' positions.</p>
                    <p>Set the <code>shape</code> to <code>circle</code> to use a circle button.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="Size">
                <div slot="demo">
                    <Button type="primary" size="large">Large</Button>
                    <Button type="primary">Default</Button>
                    <Button type="primary" size="small">Small</Button>
                    <br><br>
                    <Button type="primary" shape="circle" size="large">Large</Button>
                    <Button type="primary" shape="circle">Default</Button>
                    <Button type="primary" shape="circle" size="small">Small</Button>
                </div>
                <div slot="desc">
                    <p>Sizes of buttons: large, default (medium) and small.</p>
                    <p>Set the <code>size</code> to <code>large</code> or <code>small</code> to use large/small size of button, by default the button's size is medium.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="Long Button">
                <div slot="demo">
                    <Button type="success" long>SUBMIT</Button>
                    <br><br>
                    <Button type="error" long>DELETE</Button>
                </div>
                <div slot="desc">
                    <p>Set the <code>long</code> to set the width of the button to 100%，it's usually used for modals.</p>
                    <p>Users could also add <code>style</code> to the component to furtherly refine, e.g., use customed width.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.long }}</i-code>
            </Demo>
            <Demo title="Disabled">
                <div slot="demo">
                    <Button>Default</Button>
                    <Button disabled>Default(Disabled)</Button>
                    <br><br>
                    <Button type="primary">Primary</Button>
                    <Button type="primary" disabled>Primary(Disabled)</Button>
                    <br><br>
                    <Button type="ghost">Ghost</Button>
                    <Button type="ghost" disabled>Ghost(Disabled)</Button>
                    <br><br>
                    <Button type="dashed">Dashed</Button>
                    <Button type="dashed" disabled>Dashed(Disabled)</Button>
                    <br><br>
                    <Button type="text">Text</Button>
                    <Button type="text" disabled>Text(Disabled)</Button>
                </div>
                <div slot="desc">
                    <p>Set the <code>disabled</code> attribute to disable the button.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="Loading">
                <div slot="demo">
                    <Button type="primary" loading>Loading...</Button>
                    <Button type="primary" :loading="loading" @click="toLoading">
                        <span v-if="!loading">Click me!</span>
                        <span v-else>Loading...</span>
                    </Button>
                    <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
                        <span v-if="!loading2">Click me!</span>
                        <span v-else>Loading...</span>
                    </Button>
                </div>
                <div slot="desc">
                    <p>Set <code>loading</code> attribute to set the button to loading status, click the latter two buttons to see the loading effect in action.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.loading }}</i-code>
            </Demo>
            <Demo title="Group">
                <div slot="demo">
                    <h4>Basic</h4>
                    <br><br>
                    <ButtonGroup>
                        <Button>Cancel</Button>
                        <Button type="primary">Confirm</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button disabled>Yesterday</Button>
                        <Button disabled>Today</Button>
                        <Button disabled>Tomorrow</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type="primary">L</Button>
                        <Button>M</Button>
                        <Button type="ghost">M</Button>
                        <Button type="dashed">R</Button>
                    </ButtonGroup>
                    <br><br>
                    <h4>Icons</h4>
                    <br><br>
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="chevron-left"></Icon>
                            Backward
                        </Button>
                        <Button type="primary">
                            Forward
                            <Icon type="chevron-right"></Icon>
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type="primary" icon="ios-skipbackward"></Button>
                        <Button type="primary" icon="ios-skipforward"></Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type="ghost" icon="ios-color-wand-outline"></Button>
                        <Button type="ghost" icon="ios-sunny-outline"></Button>
                        <Button type="ghost" icon="ios-crop"></Button>
                        <Button type="ghost" icon="ios-color-filter-outline"></Button>
                    </ButtonGroup>
                    <br><br>
                    <h4>Circle</h4>
                    <br><br>
                    <ButtonGroup shape="circle">
                        <Button type="primary">
                            <Icon type="chevron-left"></Icon>
                            Backward
                        </Button>
                        <Button type="primary">
                            Forward
                            <Icon type="chevron-right"></Icon>
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup shape="circle">
                        <Button type="primary" icon="ios-skipbackward"></Button>
                        <Button type="primary" icon="ios-skipforward"></Button>
                    </ButtonGroup>
                    <ButtonGroup shape="circle">
                        <Button type="ghost" icon="ios-color-wand-outline"></Button>
                        <Button type="ghost" icon="ios-sunny-outline"></Button>
                        <Button type="ghost" icon="ios-crop"></Button>
                        <Button type="ghost" icon="ios-color-filter-outline"></Button>
                    </ButtonGroup>
                    <br><br>
                    <h4>Size</h4>
                    <br><br>
                    <ButtonGroup size="large">
                        <Button type="ghost">Large</Button>
                        <Button type="ghost">Large</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type="ghost">Default</Button>
                        <Button type="ghost">Default</Button>
                    </ButtonGroup>
                    <ButtonGroup size="small">
                        <Button type="ghost">Small</Button>
                        <Button type="ghost">Small</Button>
                    </ButtonGroup>
                    <br><br>
                    <ButtonGroup size="large" shape="circle">
                        <Button type="ghost">Large</Button>
                        <Button type="ghost">Large</Button>
                    </ButtonGroup>
                    <ButtonGroup shape="circle">
                        <Button type="ghost">Default</Button>
                        <Button type="ghost">Default</Button>
                    </ButtonGroup>
                    <ButtonGroup size="small" shape="circle">
                        <Button type="ghost">Small</Button>
                        <Button type="ghost">Small</Button>
                    </ButtonGroup>
                </div>
                <div slot="desc">
                    <p>Combine multiple <code>Button</code> together into <code>ButtonGroup</code> to get a buttons set.</p>
                    <p>Set the <code>ButtonGroup</code> attribute <code>size</code> to <code>large</code> or <code>small</code> to choose large/small size of botton group, by default the <code>size</code> is medium.</p>
                    <p>Set the <code>ButtonGroup</code> atrribute <code>shape</code> to <code>circle</code> to apply a border-radius to the button's shape.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.group }}</i-code>
            </Demo>
            <Demo title="Vertical ButtonGroup">
                <div slot="demo">
                    <ButtonGroup vertical>
                        <Button type="ghost" icon="social-facebook"></Button>
                        <Button type="ghost" icon="social-twitter"></Button>
                        <Button type="ghost" icon="social-googleplus"></Button>
                        <Button type="ghost" icon="social-tumblr"></Button>
                    </ButtonGroup>
                </div>
                <div slot="desc">
                    <p>Set the <code>ButtonGroup</code> attribute <code>vertical</code> to set up a vertical button group.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Button props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Explanation</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>type</td>
                            <td>Button type, options include <code>primary</code>、<code>ghost</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>, optional</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>Button size，options include <code>large</code>, <code>small</code>, <code>default</code> optional</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>Button shape, options include <code>circle</code>, optional</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>long</td>
                            <td>Set the width of the button to 100%</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>html-type</td>
                            <td>Set the <code>button</code> raw <code>type</code>，options include <code>button</code>、<code>submit</code>、<code>reset</code></td>
                            <td>String</td>
                            <td>button</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Disable the button</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>Set the button to loading status</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>Set the icons used in the button</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="ButtonGroup props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Explanation</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>size</td>
                            <td>ButtonGroup size, options include <code>large</code>, <code>small</code>, <code>default</code> optional</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>ButtonGroup shape, options include<code>circle</code>, optional</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>vertical</td>
                            <td>For vertical ButtonGroup</td>
                            <td>Boolean</td>
                            <td>false</td>
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
    import Code from '../../code/button';
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
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>
