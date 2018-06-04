<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-con{
        position: relative;
        overflow: hidden;
        text-align: center;
    }
    .layout-single{
        height: 253px;
        margin-bottom: 48px;
        font-size: 14px;
        color: white;
    }
    .layout-con:last-child{
        margin: 0;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .layout-header,
    .layout-footer{
        background: #7CBCE9;
        color: white;
    }
    .layout-content{
        background: #0F8DE9;
        min-height: 120px;
        line-height: 120px;
    }
    .layout-sider{
        background: #3A9FE8;
        min-height: 120px;
        line-height: 120px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .layout iframe{
        width: 100%;
        border: 0;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
    <i-article>
        <article>
            <Anchor title="Layout" h1></Anchor>
                <p>Handling the overall layout of a page.</p>
            <Anchor title="Specification" h2></Anchor>
            <Anchor title="Size" h3></Anchor>
            <p>The first level navigation is inclined left near a logo, and the secondary menu is inclined right.</p>
            <ul>
                <li>Top Navigation (almost systems): the height of the first level navigation <code>64px</code>, the second level navigation <code>48px</code>.</li>
                <li>Top Navigation(contents page): the height of the first level navigation <code>80px</code>, the second level navigation <code>56px</code>.</li>
                <li>Calculation formula of a top navigation: <code>48+8n</code>。</li>
                <li>Calculation formula of an aside navigation: <code>200+8n</code>。</li>
            </ul>
            <Anchor title="Interaction rules" h3></Anchor>
            <ul>
                <li>The first level navigation and the last level navigation should be distincted by visualization;</li>
                <li>The current item should have the highest priority of visualization;</li>
                <li>When the current navigation item is collapsed, the stlye of the current navigation item will be applied to its parent level;</li>
                <li>The left side navigation bar has support for both the accordion and expanding styles, you can choose the one that fits your case best.</li>
            </ul>
            <Anchor title="Visualization rules" h3></Anchor>
            <p>Style of a navigation should conform to the its level.</p>
            <ul>
                <li>
                    <p><strong>Emphasis by colorblock</strong></p>
                    <p>When background color is a deep color, you can use this pattern for the parent level navigation item of current page.</p>
                </li>
                <li>
                    <p><strong>The highlight match stick</strong></p>
                    <p>When background color is a light color, you can use this pattern for the current page navigation item, we recommed using it for the last item of the navigation path.</p>
                </li>
                <li>
                    <p><strong>Hightlighted font</strong></p>
                    <p>From the visualization aspect, hightlighted font is stronger than colorblock, this pattern is often used for the parent level of the current item.</p>
                </li>
                <li>
                    <p><strong>Enlarge the size of the font</strong></p>
                    <p><code>12px</code>、<code>14px</code>is a standard font size of navigations，14px is used for the first and the second level of the navigation. You can choose a approprigate font size in terms of the level of your navigation.</p>
                </li>
            </ul>
            <Anchor title="Component Overview" h2></Anchor>
            <ul>
                <li><code>Layout</code>: The layout wrapper, in which <code>Header</code><code>Sider</code><code>Content</code><code>Footer</code>or <code>Layout</code>  itself can be nested, and can be placed in any parent container.</li>
                <li><code>Header</code>: The top layout with default style, in which any element can be nested, and must be placed in <code>Layout</code> .</li>
                <li><code>Sider</code>: The sidebar with default style and basic functions, in which any element can be nested, and must be placed in <code>Layout</code>.</li>
                <li><code>Content</code>: The content layout with default style, in which any element can be nested, and must be placed in <code>Layout</code>.</li>
                <li><code>Footer</code>: The bottom layout with default style, in which any element can be nested, and must be placed in <code>Layout</code>.</li>
            </ul>
            <Alert show-icon style="margin-top: 16px">Based on flex layout, please pay attention to the <a href="https://caniuse.com/#search=flex" target="_blank" title="can i use">compatibility</a>.</Alert>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Structure" vertical hide-code>
                <div slot="demo">
                    <div class="layout-con">
                        <div class="layout-single">
                            <Layout>
                                <Header class="layout-header">Header</Header>
                                <Content class="layout-content">Content</Content>
                                <Footer class="layout-footer">Footer</Footer>
                            </Layout>
                        </div>
                        <div class="layout-single">
                            <Layout>
                                <Header class="layout-header">Header</Header>
                                <Layout>
                                    <Sider hide-trigger class="layout-sider">Sider</Sider>
                                    <Content class="layout-content">Content</Content>
                                </Layout>
                                <Footer class="layout-footer">Footer</Footer>
                            </Layout>
                        </div>
                        <div class="layout-single">
                            <Layout>
                                <Header class="layout-header">Header</Header>
                                <Layout>
                                    <Content class="layout-content">Content</Content>
                                    <Sider hide-trigger class="layout-sider">Sider</Sider>
                                </Layout>
                                <Footer class="layout-footer">Footer</Footer>
                            </Layout>
                        </div>
                        <div class="layout-single">
                            <Layout>
                                <Sider hide-trigger class="layout-sider" :style="{lineHeight: '253px'}">Sider</Sider>
                                <Layout>
                                    <Header class="layout-header">Header</Header>
                                    <Content class="layout-content">Content</Content>
                                    <Footer class="layout-footer">Footer</Footer>
                                </Layout>
                            </Layout>
                        </div>
                    </div>
                </div>
                <div slot="desc">
                    <p>Classic page layouts.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.basic }}</i-code>
            </Demo>
            <Demo title="Header-Content-Footer" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <Layout>
                            <Header>
                                <Menu mode="horizontal" theme="dark" active-name="1">
                                    <div class="layout-logo"></div>
                                    <div class="layout-nav">
                                        <MenuItem name="1">
                                            <Icon type="ios-navigate"></Icon>
                                            Item 1
                                        </MenuItem>
                                        <MenuItem name="2">
                                            <Icon type="ios-keypad"></Icon>
                                            Item 2
                                        </MenuItem>
                                        <MenuItem name="3">
                                            <Icon type="ios-analytics"></Icon>
                                            Item 3
                                        </MenuItem>
                                        <MenuItem name="4">
                                            <Icon type="ios-paper"></Icon>
                                            Item 4
                                        </MenuItem>
                                    </div>
                                </Menu>
                            </Header>
                            <Content :style="{padding: '0 50px'}">
                                <Breadcrumb :style="{margin: '20px 0'}">
                                    <BreadcrumbItem>Home</BreadcrumbItem>
                                    <BreadcrumbItem>Components</BreadcrumbItem>
                                    <BreadcrumbItem>Layout</BreadcrumbItem>
                                </Breadcrumb>
                                <Card>
                                    <div style="min-height: 200px;">
                                        Content
                                    </div>
                                </Card>
                            </Content>
                            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
                        </Layout>
                    </div>
                </div>
                <div slot="desc">
                    <p>The most basic "header-content-footer" layout.</p>
                    <p>Generally, the mainnav is placed at the top of the page, and includes the logo, the first level navigation, and the secondary menu (users, settings, notifications) from left to right in it. We always put contents in a fixed size navigation (eg: <code>1200px</code>), the layout of the whole page is stable, it's not affected by viewing area.</p>
                    <p>Top-bottom structure is conform with the top-bottom viewing habit, it's a classical navigation pattern of websites. This pattern demonstrates efficiency in the main workarea, while using some vertical space. And because the horizontal space of the navigation is limited, this pattern is not suitable for cases when the first level navigation contains many elements or links</p>
                </div>
                <i-code lang="html" slot="code">{{ code.topMiddleBottom }}</i-code>
            </Demo>
            <Demo title="Header-Sider" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <Layout>
                            <Header>
                                <Menu mode="horizontal" theme="dark" active-name="1">
                                    <div class="layout-logo"></div>
                                    <div class="layout-nav">
                                        <MenuItem name="1">
                                            <Icon type="ios-navigate"></Icon>
                                            Item 1
                                        </MenuItem>
                                        <MenuItem name="2">
                                            <Icon type="ios-keypad"></Icon>
                                            Item 2
                                        </MenuItem>
                                        <MenuItem name="3">
                                            <Icon type="ios-analytics"></Icon>
                                            Item 3
                                        </MenuItem>
                                        <MenuItem name="4">
                                            <Icon type="ios-paper"></Icon>
                                            Item 4
                                        </MenuItem>
                                    </div>
                                </Menu>
                            </Header>
                            <Layout>
                                <Sider hide-trigger :style="{background: 'white'}">
                                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                                        <Submenu name="1">
                                            <template slot="title">
                                                <Icon type="ios-navigate"></Icon>
                                                Item 1
                                            </template>
                                            <MenuItem name="1-1">Option 1</MenuItem>
                                            <MenuItem name="1-2">Option 2</MenuItem>
                                            <MenuItem name="1-3">Option 3</MenuItem>
                                        </Submenu>
                                        <Submenu name="2">
                                            <template slot="title">
                                                <Icon type="ios-keypad"></Icon>
                                                Item 2
                                            </template>
                                            <MenuItem name="2-1">Option 1</MenuItem>
                                            <MenuItem name="2-2">Option 2</MenuItem>
                                        </Submenu>
                                        <Submenu name="3">
                                            <template slot="title">
                                                <Icon type="ios-analytics"></Icon>
                                                Item 3
                                            </template>
                                            <MenuItem name="3-1">Option 1</MenuItem>
                                            <MenuItem name="3-2">Option 2</MenuItem>
                                        </Submenu>
                                    </Menu>
                                </Sider>
                                <Layout :style="{padding: '0 24px 24px'}">
                                    <Breadcrumb :style="{margin: '24px 0'}">
                                        <BreadcrumbItem>Home</BreadcrumbItem>
                                        <BreadcrumbItem>Components</BreadcrumbItem>
                                        <BreadcrumbItem>Layout</BreadcrumbItem>
                                    </Breadcrumb>
                                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                                        Content
                                    </Content>
                                </Layout>
                            </Layout>
                        </Layout>
                    </div>
                </div>
                <div slot="desc">
                    <p>Both the top navigation and the sidebar, commonly used in application site.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.topLeftRight }}</i-code>
            </Demo>
            <Demo title="Header-Sider" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <Layout>
                            <Header>
                                <Menu mode="horizontal" theme="dark" active-name="1">
                                    <div class="layout-logo"></div>
                                    <div class="layout-nav">
                                        <MenuItem name="1">
                                            <Icon type="ios-navigate"></Icon>
                                            Item 1
                                        </MenuItem>
                                        <MenuItem name="2">
                                            <Icon type="ios-keypad"></Icon>
                                            Item 2
                                        </MenuItem>
                                        <MenuItem name="3">
                                            <Icon type="ios-analytics"></Icon>
                                            Item 3
                                        </MenuItem>
                                        <MenuItem name="4">
                                            <Icon type="ios-paper"></Icon>
                                            Item 4
                                        </MenuItem>
                                    </div>
                                </Menu>
                            </Header>
                            <Layout :style="{padding: '0 50px'}">
                                <Breadcrumb :style="{margin: '16px 0'}">
                                    <BreadcrumbItem>Home</BreadcrumbItem>
                                    <BreadcrumbItem>Components</BreadcrumbItem>
                                    <BreadcrumbItem>Layout</BreadcrumbItem>
                                </Breadcrumb>
                                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                                    <Layout>
                                        <Sider hide-trigger :style="{background: 'white'}">
                                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                                                <Submenu name="1">
                                                    <template slot="title">
                                                        <Icon type="ios-navigate"></Icon>
                                                        Item 1
                                                    </template>
                                                    <MenuItem name="1-1">Option 1</MenuItem>
                                                    <MenuItem name="1-2">Option 2</MenuItem>
                                                    <MenuItem name="1-3">Option 3</MenuItem>
                                                </Submenu>
                                                <Submenu name="2">
                                                    <template slot="title">
                                                        <Icon type="ios-keypad"></Icon>
                                                        Item 2
                                                    </template>
                                                    <MenuItem name="2-1">Option 1</MenuItem>
                                                    <MenuItem name="2-2">Option 2</MenuItem>
                                                </Submenu>
                                                <Submenu name="3">
                                                    <template slot="title">
                                                        <Icon type="ios-analytics"></Icon>
                                                        Item 3
                                                    </template>
                                                    <MenuItem name="3-1">Option 1</MenuItem>
                                                    <MenuItem name="3-2">Option 2</MenuItem>
                                                </Submenu>
                                            </Menu>
                                        </Sider>
                                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                                            Content
                                        </Content>
                                    </Layout>
                                </Content>
                            </Layout>
                            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
                        </Layout>
                    </div>
                </div>
                <div slot="desc">
                    <p>Both the top navigation and the sidebar, commonly used in documentation site.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.topSiderFooter }}</i-code>
            </Demo>
            <Demo title="Sider" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <iframe src="https://file.iviewui.com/layout-page2/sider.html" height="360"></iframe>
                    </div>
                </div>
                <div slot="desc">
                    <p>Two-columns layout. The sider menu can be collapsed when horizontal space is limited.</p>
                    <p>Generally, the mainnav is placed on the left side of the page, and the secondary menu is placed on the top of the working area. Contents will adapt the layout to the viewing area to improve the horizontal space usage, while the layout of the whole page is not stable.</p>
                    <p>The level of the aisde navigation is scalable. The first, second, and third level navigations could be present more fluently and relevantly, and aside navigation can be fixed, allowing the user to quickly switch and spot the current position, improving the user experience. However, this navigation occupies some horizontal space of the contents</p>
                </div>
                <i-code lang="html" slot="code">{{ code.left }}</i-code>
            </Demo>
            <Demo title="Custom trigger" vertical hide-code>
                <div slot="demo">
                    <div :class="['layout', isCollapsed ? 'layout-hide-text' : '']">
                        <Layout>
                            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                                    <MenuItem name="1-1">
                                        <Icon type="ios-navigate"></Icon>
                                        <span>Option 1</span>
                                    </MenuItem>
                                    <MenuItem name="1-2">
                                        <Icon type="search"></Icon>
                                        <span>Option 2</span>
                                    </MenuItem>
                                    <MenuItem name="1-3">
                                        <Icon type="settings"></Icon>
                                        <span>Option 3</span>
                                    </MenuItem>
                                </Menu>
                            </Sider>
                            <Layout>
                                <Header :style="{padding: 0}" class="layout-header-bar">
                                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                                </Header>
                                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                                    Content
                                </Content>
                            </Layout>
                        </Layout>
                    </div>
                </div>
                <div slot="desc">
                    <p>if you want to use custom trigger, you can set <code>hide-trigger</code> to hide default trigger, you can also replace default trigger by <code>slot</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.selfTrigger }}</i-code>
            </Demo>
            <Demo title="Responsive" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <Layout>
                            <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed2">
                                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses2">
                                    <MenuItem name="1-1">
                                        <Icon type="ios-navigate"></Icon>
                                        <span>Option 1</span>
                                    </MenuItem>
                                    <MenuItem name="1-2">
                                        <Icon type="search"></Icon>
                                        <span>Option 2</span>
                                    </MenuItem>
                                    <MenuItem name="1-3">
                                        <Icon type="settings"></Icon>
                                        <span>Option 3</span>
                                    </MenuItem>
                                </Menu>
                                <div slot="trigger"></div>
                            </Sider>
                            <Layout>
                                <Header class="layout-header-bar"></Header>
                                <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
                                    Content
                                </Content>
                            </Layout>
                        </Layout>
                    </div>
                </div>
                <div slot="desc">
                    <p>Sider supports responsive layout.</p>
                    <Alert style="margin-top: 16px">Note: You can get a responsive layout by setting <code>breakpoint</code>, the Sider will collapse to the width of <code>collapsedWidth</code> when window width is below the <code>breakpoint</code>. And a special trigger will appear if the <code>collapsedWidth</code> is set to <code>0</code>.</Alert>
                </div>
                <i-code lang="html" slot="code">{{ code.media }}</i-code>
            </Demo>
            <Demo title="Fixed Header" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <div class="layout">
                            <iframe src="https://file.iviewui.com/layout-page2/header-fixed.html" height="360"></iframe>
                        </div>
                    </div>
                </div>
                <div slot="desc">
                    <p>Fixed Header is generally used to fix the top navigation to facilitate page switching.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.headerFixed }}</i-code>
            </Demo>
            <Demo title="Fixed sider" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <div class="layout">
                            <iframe src="https://file.iviewui.com/layout-page2/sider-fixed.html" height="360"></iframe>
                        </div>
                    </div>
                </div>
                <div slot="desc">
                    <p>When dealing with long content, a fixed sider can provide a better user experience.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.headerFixed }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Sider props" h3></Anchor>
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
                            <td>breakpoint</td>
                            <td>breakpoints of the responsive layout, Optional: <code>xs</code>,<code>sm</code>,<code>md</code>,<code>lg</code>,<code>xl</code> or <code>xxl</code>, trigger will hide if without this property</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>if Sider is collapsed, Use v-model to enable two-way binding.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>width of the Sider</td>
                            <td>Number</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>collapsible</td>
                            <td>whether can be collapsed, if you set <code>false</code>, the default trigger will hide, responsive layout will fail.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>collapsed-width</td>
                            <td>width of the collapsed sidebar, by setting to<code>0</code>a special trigger will appear</td>
                            <td>Number</td>
                            <td>64</td>
                        </tr>
                        <tr>
                            <td>hide-trigger</td>
                            <td>hide the default trigger</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>default-collapsed</td>
                            <td>to set the initial status, if you set this property after setting <code>collapsible</code>, Sider will also collapses.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>reverse-arrow</td>
                            <td>reverse direction of arrow, for a sider that expands from the right.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Sider events" h3></Anchor>
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
                            <td>on-collapse</td>
                            <td>Emit when collapsed / expand the Sider.</td>
                            <td>true / false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Sider slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>trigger</td>
                            <td>custom trigger</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Sider methods" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Method Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>toggleCollapse</td>
                            <td>collapse or expand Sider.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Anchor title="breakpoint width" h3></Anchor>
            <i-code lang="js" slot="code" :style="{background: '#f2f4f5', height: '170px'}">
        {
            xs: '480px',
            sm: '768px',
            md: '992px',
            lg: '1200px',
            xl: '1600px'
        }
            </i-code>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/layout';
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
                spanLeft: 5,
                spanRight: 19,
                isCollapsed: false,
                isCollapsed2: false
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            },
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            menuitemClasses2: function () {
                return [
                    'menu-item',
                    this.isCollapsed2 ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>