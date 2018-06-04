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
            margin-right: 20px;
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
            <Anchor title="Layout 布局" h1></Anchor>
                <p>协助进行页面级整体布局。</p>
            <Anchor title="设计规则" h2></Anchor>
            <Anchor title="尺寸" h3></Anchor>
            <p>一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。</p>
            <ul>
                <li>顶部导航（大部分系统）：一级导航高度 <code>64px</code>，二级导航 <code>48px</code>。</li>
                <li>顶部导航（展示类页面）：一级导航高度 <code>80px</code>，二级导航 <code>56px</code>。</li>
                <li>顶部导航高度的范围计算公式为：<code>48+8n</code>。</li>
                <li>侧边导航宽度的范围计算公式：<code>200+8n</code>。</li>
            </ul>
            <Anchor title="交互" h3></Anchor>
            <ul>
                <li>一级导航和末级的导航需要在可视化的层面被强调出来；</li>
                <li>当前项应该在呈现上优先级最高；</li>
                <li>当导航收起的时候，当前项的样式自动赋予给它的上一个层级；</li>
                <li>左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。</li>
            </ul>
            <Anchor title="视觉" h3></Anchor>
            <p>导航样式上需要根据信息层级合理的选择样式：</p>
            <ul>
                <li>
                    <p><strong>大色块强调</strong></p>
                    <p>建议用于底色为深色系时，当前页面父级的导航项。</p>
                </li>
                <li>
                    <p><strong>高亮火柴棍</strong></p>
                    <p>当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。</p>
                </li>
                <li>
                    <p><strong>字体高亮变色</strong></p>
                    <p>从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。</p>
                </li>
                <li>
                    <p><strong>字体放大</strong></p>
                    <p><code>12px</code>、<code>14px</code> 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。</p>
                </li>
            </ul>
            <Anchor title="组件概述" h2></Anchor>
            <ul>
                <li><code>Layout</code>：布局容器，其下可嵌套 <code>Header</code><code>Sider</code><code>Content</code><code>Footer</code>或 <code>Layout</code> 本身，可以放在任何父容器中。</li>
                <li><code>Header</code>：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</li>
                <li><code>Sider</code>：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</li>
                <li><code>Content</code>：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</li>
                <li><code>Footer</code>：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</li>
            </ul>
            <Alert show-icon style="margin-top: 16px">注意：采用 flex 布局实现，请注意<a href="https://caniuse.com/#search=flex" target="_blank" title="can i use">浏览器兼容性</a>问题。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基本结构" vertical hide-code>
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
                    <p>典型的页面布局</p>
                </div>
                <i-code lang="html" slot="code">{{ code.basic }}</i-code>
            </Demo>
            <Demo title="上中下布局" vertical hide-code>
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
                    <p>最基本的『上-中-下』布局。</p>
                    <p>一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.topMiddleBottom }}</i-code>
            </Demo>
            <Demo title="顶部-侧边布局-通栏" vertical hide-code>
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
                    <p>同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.topLeftRight }}</i-code>
            </Demo>
            <Demo title="顶部-侧边布局" vertical hide-code>
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
                    <p>拥有顶部导航及侧边栏的页面，多用于展示类网站。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.topSiderFooter }}</i-code>
            </Demo>
            <Demo title="侧边布局" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <iframe src="https://file.iviewui.com/layout-page2/sider.html" height="360"></iframe>
                    </div>
                </div>
                <div slot="desc">
                    <p>侧边两列式布局。页面横向空间有限时，侧边导航可收起。</p>
                    <p>侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.left }}</i-code>
            </Demo>
            <Demo title="自定义触发器" vertical hide-code>
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
                    <p>要使用自定义触发器，可以设置<code>hide-trigger</code>属性来隐藏默认触发器，也可以通过<code>slot</code>替换默认触发器。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.selfTrigger }}</i-code>
            </Demo>
            <Demo title="响应式布局" vertical hide-code>
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
                    <p>Sider支持响应式布局</p>
                    <Alert style="margin-top: 16px">说明：配置<code>breakpoint</code> 属性即生效，视窗宽度小于<code>breakpoint</code> 时 Sider 缩小为<code>collapsedWidth</code> 宽度，若将<code>collapsedWidth</code> 设置为零，会出现特殊 trigger。</Alert>
                </div>
                <i-code lang="html" slot="code">{{ code.media }}</i-code>
            </Demo>
            <Demo title="固定头部" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <div class="layout">
                            <iframe src="https://file.iviewui.com/layout-page2/header-fixed.html" height="360"></iframe>
                        </div>
                    </div>
                </div>
                <div slot="desc">
                    <p>一般用于固定顶部导航，方便页面切换。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.headerFixed }}</i-code>
            </Demo>
            <Demo title="固定侧边栏" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <div class="layout">
                            <iframe src="https://file.iviewui.com/layout-page2/sider-fixed.html" height="360"></iframe>
                        </div>
                    </div>
                </div>
                <div slot="desc">
                    <p>当内容较长时，使用固定侧边栏可以提供更好的体验。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.siderFixed }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Sider props" h3></Anchor>
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
                            <td>breakpoint</td>
                            <td>触发响应式布局的断点，可选值为<code>xs</code>,<code>sm</code>,<code>md</code>,<code>lg</code>,<code>xl</code>或<code>xxl</code>，若不设此属性则不会触发响应式布局。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>侧边栏是否收起，可使用 v-model 双向绑定数据。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>宽度</td>
                            <td>Number</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>collapsible</td>
                            <td>是否可收起，设为<code>false</code>后，默认触发器会隐藏，且响应式布局不会触发</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>collapsed-width</td>
                            <td>收缩宽度，设置为 0 会出现特殊 trigger</td>
                            <td>Number</td>
                            <td>64</td>
                        </tr>
                        <tr>
                            <td>hide-trigger</td>
                            <td>隐藏默认触发器</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>default-collapsed</td>
                            <td>是否默认收起，设置了<code>collapsible</code>后设置此属性侧边栏仍会收起。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>reverse-arrow</td>
                            <td>改变侧边栏触发器箭头方向，和改变侧边栏收起方向，当Sider在右边时可以使用。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Sider events" h3></Anchor>
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
                            <td>on-collapse</td>
                            <td>展开-收起时的回调</td>
                            <td>true / false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Sider slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>trigger</td>
                            <td>自定义触发器</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Sider methods" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>方法名</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>toggleCollapse</td>
                            <td>改变Sider展开-收起状态。</td>
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