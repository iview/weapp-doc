<style>
    .doc-update .ivu-timeline .ivu-timeline-item-content{
        top: -14px;
    }
    .doc-update h2{
        margin: 0;
        font-weight: normal;
    }
    .doc-update code{
        margin: 8px 0 10px;
    }
    .doc-update ul{
        padding-left: 22px !important;
    }
    .doc-update-important{
        color: #3399ff;
    }
    .doc-update-loop.ivu-load-loop{
        animation-duration: 3s;
    }
</style>
<template>
    <i-article>
        <h1>更新日志</h1>
        <article class="doc-update">
            <Timeline pending>
                <Timeline-item>
                    <Anchor title="2.14.1" h2></Anchor>
                    <p>
                        <code>2018-06-01</code>
                    </p>
                    <ul>
                        <li>修复 2.14.0 版本中，在 SSR 中无法使用的 bug。<issue id="3740"></issue></li>
                        <li>修复 2.14.0 版本中，Select 无法绑定数字 0 的 bug。<issue id="3696"></issue></li>
                        <li>修复 2.14.0 版本中，Select 有时会显示 undefined 的 bug。<issue id="3705"></issue></li>
                        <li>修复 2.14.0 版本中，Select 初次渲染会触发 @on-change 事件的 bug。<issue id="3725"></issue></li>
                        <li>修复 2.14.0 版本中，Select 显示 label 不正确的 bug。<issue id="3728"></issue> <issue id="3742"></issue></li>
                        <li>修复 2.14.0 版本中，Select 在 filterable 且 clearable 模式下，清空列表未还原的 bug。<issue id="3746"></issue></li>
                        <li>修复 2.14.0 版本中，Select 在开启 transfer 时无法使用的 bug。<issue id="3695"></issue></li>
                        <li>修复 2.14.0 版本中，Select 无法在移动设备使用的 bug。<issue id="3741"></issue></li>
                        <li>修复 2.14.0 版本中，Select 无法绑定值为对象的 bug。<issue id="3737"></issue></li>
                        <li>修复 2.14.0 版本中，AutoComplete 有时无法正常收起的 bug。<issue id="3709"></issue></li>
                        <li>修复 2.14.0 版本中，Tabs 内的表单控件不会自动获得焦点，除非开启属性 <code>capture-focus</code>。<issue id="3732"></issue></li>
                        <li>修复 2.14.0 版本中，横向 Menu 有时展开子菜单错位的 bug。<issue id="3733"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.14.0 KAMI" h2></Anchor>
                    <p>
                        <code>2018-05-24</code>
                    </p>
                    <ul>
                        <li>重构 Select 组件，完全支持键盘可访问性，并修复若干问题。<issue id="3157"></issue> <issue id="1647"></issue> <issue id="3574"></issue></li>
                        <li>DatePicker 组件增强键盘的可访问性。<issue id="3643"></issue> <issue id="1647"></issue></li>
                        <li>ColorPicker 组件增强键盘的可访问性。<issue id="3662"></issue> <issue id="1647"></issue></li>
                        <li>Tabs 组件增强键盘的可访问性。<issue id="3642"></issue> <issue id="1647"></issue></li>
                        <li>TabPane 将 <code>display: none</code> 改为了 <code>visibility: hidden</code>。<issue id="3652"></issue></li>
                        <li>ColorPicker 新增属性 <code>disabled</code>。<issue id="3662"></issue></li>
                        <li>Select 新增事件 <code>@on-clear</code> 和 <code>@on-open-change</code>。<issue id="3579"></issue></li>
                        <li>Rate 新增属性 <code>clearable</code>。<issue id="3487"></issue></li>
                        <li>ColorPicker 新增事件 <code>@on-open-change</code>。<issue id="3540"></issue></li>
                        <li>AutoComplete 新增事件 <code>@on-focus</code> 和 <code>@on-blur</code>。<issue id="3565"></issue></li>
                        <li>Icon 新增事件 <code>@click</code>。<issue id="3621"></issue></li>
                        <li>Menu 在手风琴模式下，关闭父菜单，其子菜单也会关闭。<issue id="3617"></issue></li>
                        <li>优化 popper.js 的配置。</li>
                        <li>修复 Slider 有时无法拖拽的 bug。<issue id="3468"></issue></li>
                        <li>修复 Grid 嵌套多层 Row 时，gutter 受父级影响的问题。<issue id="3596"></issue></li>
                        <li>修复 DatePicker 在 <code>type="datetimerange"</code> 且开启 show-week-numbers 时，错位的 bug。<issue id="3629"></issue></li>
                        <li>修复 DatePicker 在 multiple 模式下，使用 v-model 报错的 bug。<issue id="3675"></issue></li>
                        <li>修复 RadioGroup 无法直接使用 value 的 bug。<issue id="3498"></issue></li>
                        <li>修复 RadioGroup 有时内容不居中的问题。<issue id="3586"></issue></li>
                        <li>修复 $Spin 直接调用 .hide() 方法，有时报错的 bug。<issue id="3535"></issue></li>
                        <li>修复 AutoComplete 事件 <code>@on-change</code> 只触发一次的 bug。<issue id="3486"></issue></li>
                        <li>修复 AutoComplete 内容溢出，点击横向滚动条时，关闭弹层的 bug。<issue id="3590"></issue></li>
                        <li>修复 Notice 类名错误的 bug。<issue id="3551"></issue></li>
                        <li>修复 Menu 事件 @on-open-change 返回值不正确的 bug。<issue id="3575"></issue></li>
                        <li>修复 InputNumber 设置 precision 时，清空数据报错的 bug。<issue id="3676"></issue></li>
                        <li>新增捷克语。<mention id="ajkl2533"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.13.1" h2></Anchor>
                    <p>
                        <code>2018-04-23</code>
                    </p>
                    <ul>
                        <li>Tag 新增属性 <code>fade</code>。</li>
                        <li>InputNumber 新增属性 <code>placeholder</code>。<issue id="3424"></issue></li>
                        <li>InputNumber 的事件 <code>on-focus</code> 增加返回值 event。<issue id="3395"></issue></li>
                        <li>DatePicker 的事件 <code>on-change</code> 增加返回值 type。<issue id="3353"></issue></li>
                        <li>优化 popper.js 的配置及 dropdown 的展开动画。<issue id="3354"></issue></li>
                        <li>修复 Table 在动态调整页面宽度，有时滚动条显示错误的 bug。<issue id="3358"></issue></li>
                        <li>修复 Poptip / Tooltip 动态修改内容后，位置计算不准确的 bug。<issue id="3412"></issue></li>
                        <li>修复在 Form 内使用 Carousel 时，点击按钮会跳转的问题。<issue id="3426"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.13.0 King of Opera" h2></Anchor>
                    <p>
                        <code>2018-04-11</code>
                    </p>
                    <ul>
                        <li>Table 列新增属性 <code>minWidth</code> 和 <code>maxWidth</code>。<issue id="3284"></issue></li>
                        <li>DatePicker 的 <code>disabledDate</code> 功能，现在也能限制时、分、秒了。<issue id="3246"></issue></li>
                        <li>优化 Table 筛选样式。<issue id="3206"></issue></li>
                        <li>修复 Table 在多级表头里使用过滤和排序的 bug。<issue id="3339"></issue></li>
                        <li>修复 Table 在 2.12.0 版本，设置 <code>show-header="false"</code> 报错的 bug。</li>
                        <li>修复 Poptip 和 Tooltip 有时方向识别错误的 bug，并支持自定义 popper.js 的 options 选项。</li>
                        <li>修复 DatePicker 在 daterange 模式下，选择年、月后显示值不正确的 bug。<issue id="3345"></issue></li>
                        <li>修复 DatePicker 在 Safari 浏览器下 <code>on-change</code> 事件返回值有时不正确的 bug。<issue id="3232"></issue></li>
                        <li>修复 DatePicker 的 <code>show-week-numbers</code> 无法动态设置的 bug。<issue id="3277"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.12.0 Human Resource Machine" h2></Anchor>
                    <p>
                        <code>2018-04-04</code>
                    </p>
                    <ul>
                        <li>Select、AutoComplete、DatePicker、TimePicker、ColorPicker、Cascader、Dropdown 等组件支持自动识别浮层展开方向。<issue id="3156"></issue></li>
                        <li>Table 支持表头分组。</li>
                        <li>InputNumber 的值可以删除或设置为 null。<issue id="3174"></issue></li>
                        <li>Card 新增属性 <code>title</code> 和 <code>icon</code>，可以更简单地设置头部。</li>
                        <li>Tree 新增属性 <code>children-key</code>。</li>
                        <li>Slider 新增属性 <code>input-size</code>。<issue id="3301"></issue></li>
                        <li>Poptip 新增属性 <code>popper-class</code>。</li>
                        <li>优化 Input 在 clearable 模式下，无数据时不显示清空按钮。</li>
                        <li>优化 Table 筛选、排序样式。</li>
                        <li>修复 Table 在同时固定表头和列时，不显示垂直滚动条的 bug。<issue id="3178"></issue></li>
                        <li>修复 Table 固定列无法滚动的 bug。<issue id="2871"></issue></li>
                        <li>修复 Table 有时表头溢出的 bug。<issue id="3178"></issue></li>
                        <li>修复 Table 表头过长，有时导致滚动条溢出的 bug。<issue id="3178"></issue></li>
                        <li>修复 TimePicker 设置初始输入为空数组时，报错的 bug。<issue id="3161"></issue></li>
                        <li>修复 DatePicker 在选范围时，点击切换下一年按钮时，逻辑不正确的 bug。<issue id="3158"></issue></li>
                        <li>修复 Sider 无法正确使用 <code>v-model</code> 的 bug。<issue id="3186"></issue></li>
                        <li>修复 Slider 设置 step 为小数，有时无法拖动到最大值的 bug。<issue id="3195"></issue></li>
                        <li>修复 Slider 首次点击滑条，无法触发 on-change 事件的 bug。<issue id="3291"></issue></li>
                        <li>修复 Menu 在 accordion 模式下，事件 on-open-change 返回错误值的 bug。<issue id="3298"></issue></li>
                        <li>修复 Select 中 Option 过长，样式不正确的 bug。<issue id="2931"></issue></li>
                        <li>修复 Select 点击过快，错位的 bug。</li>
                        <li>修复 FormItem 在 slot 内时，有时无法正确获取到 Form 的 bug。</li>
                        <blockquote>特别感谢 <mention id="huanghong1125">@huanghong1125</mention> 的贡献！</blockquote>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Icon type="planet" size="18" slot="dot"></Icon>
                    <Anchor title="2.11.0 Alto's Odyssey" h2>
                        <span class="doc-update-important">悼念史蒂芬·霍金</span>
                    </Anchor>
                    <p>
                        <code>2018-03-14</code>
                    </p>
                    <ul>
                        <li>InputNumber 新增格式化展示属性 <code>formatter</code> 和 <code>parser</code>。<issue id="3081"></issue></li>
                        <li>Input 增加 <code>wrap</code> 属性。<issue id="3086"></issue></li>
                        <li>Page 增加 <code>transfer</code> 属性。<issue id="3112"></issue></li>
                        <li>优化了 Select 样式与交互，增强键盘的可访问性，更接近原生。<issue id="1647"></issue></li>
                        <li>修复 Menu 多层嵌套在 Vue.js 2.5.14 版本之后报错的 bug。<a href="https://github.com/iview/iview/commit/b71a171d36e1327ee8fe1cc4f35fe97887f0786c" target="_blank">b71a171</a></li>
                        <li>修复 Select 在不同尺寸，多选样式和单选不一致的 bug。<issue id="2451"></issue></li>
                        <li>修复 Cascader 在搜索时，样式不正确的 bug。</li>
                        <li>修复 Input 在 <code>size="small"</code> 且使用 <code>append</code> 或 <code>prepend</code> 时，样式错误的 bug。</li>
                        <li>优化 Collapse 样式。<issue id="2973"></issue></li>
                        <li>新增荷兰语。<mention id="mervy-sim"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.10.1" h2></Anchor>
                    <p>
                        <code>2018-03-09</code>
                    </p>
                    <ul>
                        <li>修复 2.10.0 版本，编译后文件过大的问题。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.10.0 Reigns" h2></Anchor>
                    <p>
                        <code>2018-03-09</code>
                    </p>
                    <ul>
                        <li>
                            重构了 DatePicker 组件。<issue id="2861"></issue>
                            <ul>
                                <li><code>daterange</code> 支持从右往左选择。<issue id="2731"></issue></li>
                                <li>新增 <code>split-panels</code> 属性，开启后，左右两面板可以不联动。<issue id="2067"></issue></li>
                                <li>新增 <code>multiple</code> 属性，开启后，可以选择多个日期。</li>
                                <li>新增 <code>start-date</code> 属性，可以设置面板展开时默认显示的日期。<issue id="2814"></issue></li>
                                <li>新增属性 <code>show-week-numbers</code>，开启后，可以显示星期数。</li>
                                <li>新增属性 <code>time-picker-options</code>，可以在 type 为 <code>datetime</code> 和 <code>datetimerange</code> 下，配置 TimePicker 的属性，比如时间间隔 <code>steps</code>。<issue id="3091"></issue></li>
                                <li>修复无法动态修改 <code>type</code> 的问题。<issue id="2608"></issue></li>
                                <li>修复使用 <code>v-model</code> 绑定的数据，有时无法更新面板的问题。<issue id="2386"></issue></li>
                                <li>修复手动输入禁用的日期报错的问题。<issue id="2544"></issue></li>
                            </ul>
                        </li>
                        <li>移除全局样式 <code>ul</code> 和 <code>ol</code>。<issue id="3061"></issue></li>
                        <li>优化了 Slider、Switch 样式与交互，增强键盘的可访问性，更接近原生。<issue id="1647"></issue></li>
                        <li>修复了 Slider 的 <code>step</code> 属性设置为小数时的 bug。<issue id="2984"></issue></li>
                        <li>修复 Select 在无 Option 时，按下方向键报错的 bug。</li>
                        <li>修复 Avatar 使用中文字符，有时不能居中的 bug。<issue id="3033"></issue></li>
                        <li>修复 Carousel 在没有使用 <code>v-model</code> 时，指示器不更新的 bug。<issue id="3038"></issue></li>
                        <li>修复 Input 在 <code>size="small"</code> 且使用 <code>prepend</code> 或 <code>append</code> 时，样式不正确的 bug。<issue id="3089"></issue></li>
                        <li>新增希腊语。<mention id="d4rth0nyx"></mention></li>
                        <li>优化繁体中文。</li>
                        <li>修复罗马尼亚语文件错误的问题。<issue id="3060"></issue></li>
                        <blockquote>特别感谢 <mention id="SergioCrisostomo"></mention> 和 <mention id="Xotic750"></mention> 的贡献！</blockquote>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.9.2" h2></Anchor>
                    <p>
                        <code>2018-02-02</code>
                    </p>
                    <ul>
                        <li>修复 Slider 无法正常触发 <code>on-change</code> 事件的 bug。<issue id="2975"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.9.1" h2></Anchor>
                    <p>
                        <code>2018-01-30</code>
                    </p>
                    <ul>
                        <li>修复了 Slider 在 2.9.0 版本下，设置 <code>max</code> 大于 100 时的 bug。<issue id="2914"></issue></li>
                        <li>优化了 Avatar 的默认背景色。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.9.0 Agent A" h2></Anchor>
                    <p>
                        <code>2018-01-24</code>
                    </p>
                    <ul>
                        <li>更新依赖，以及使用 browserlist。<issue id="2835"></issue> <issue id="2837"></issue> <issue id="2839"></issue></li>
                        <li>重构了 Slider 组件。<issue id="2393"></issue></li>
                        <li>优化了 Button、Radio、Checkbox 样式，增强键盘的可访问性，更接近原生。<issue id="1647"></issue></li>
                        <li>Menu 支持多级嵌套。</li>
                        <li>ColorPicker 新增是否显示色彩滑块的属性 <code>hue</code>。<issue id="2672"></issue></li>
                        <li>AutoComplete 新增 <code>placement</code> 属性。<issue id="2803"></issue></li>
                        <li>Input 新增 <code>clearable</code> 属性。<issue id="2884"></issue></li>
                        <li>Dropdown 新增事件 <code>@on-clickoutside</code>。<issue id="2783"></issue></li>
                        <li>修复 Table 固定列使用排序和筛选功能时的 bug。<issue id="2832"></issue></li>
                        <li>修复 Table 在筛选时有时报错的 bug。<issue id="2352"></issue></li>
                        <li>修复 Table 在有滚动条时，数据置空后，表头错误的 bug。<issue id="2775"></issue></li>
                        <li>修复 Cascader 数据 label 为空时，报错的 bug。<issue id="2722"></issue></li>
                        <li>修复 Cascader 在 <code>change-on-select</code> 模式下，动态改变 data 无法选中绑定值的 bug。<issue id="2793"></issue></li>
                        <li>修复 Dropdown 在 <code>trigger="click"</code> 有时报错的问题。<issue id="2780"></issue></li>
                        <li>修复 Slider 在 Modal 内使用，<code>show-tip="always"</code> 时，Tooltip 错位的 bug。<issue id="2852"></issue></li>
                        <li>优化 Table 在多选模式下，无数据时，无法点击全选按钮。<issue id="2823"></issue></li>
                        <li>优化 $Notice 使用 Render 时的样式。<issue id="2752"></issue></li>
                        <li>优化 Input 在 textarea 模式下的样式。</li>
                        <li>优化 Select 在 filterable 模式下， disabled 时的样式。<issue id="2893"></issue></li>
                        <li>新增印地语。<mention id="rajnikant307"></mention></li>
                        <li>新增波斯语。<mention id="roshangara"></mention></li>
                        <li>新增罗马尼亚语。<mention id="Leonard1980"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Icon type="ios-snowy" class="ivu-load-loop doc-update-loop" style="font-size: 32px;color: rgb(220,50,51)" slot="dot"></Icon>
                    <Anchor title="2.8.0 Oceanhorn" h2>
                        <span class="doc-update-important">Merry Christmas</span>
                    </Anchor>
                    <p>
                        <code>2017-12-25</code>
                    </p>
                    <ul>
                        <li>新增响应式布局组件 Layout（包括 Layout、Header、Sider、Content、Footer 5个组件）。<issue id="2646"></issue> <mention id="lison16"></mention> <router-link to="/components/layout">查看</router-link></li>
                        <li>Tag 支持自定义颜色。<issue id="2644"></issue></li>
                        <li>$Message 和 $Notice 支持 Render 函数。<issue id="2667"></issue></li>
                        <li>Affix 优化滚动时的占位区域高度。<issue id="2628"></issue></li>
                        <li>$Modal 支持 ESC 键关闭。<issue id="2362"></issue></li>
                        <li>TimeRange 也增加 steps 属性。<issue id="2580"></issue></li>
                        <li>修复无法按需加载 Submenu 组件的 bug。<issue id="2553"></issue></li>
                        <li>修复在 Vue 2.5.11 版本下，Circle 和 Switch 标签名警告的问题。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.4" h2></Anchor>
                    <p>
                        <code>2017-12-01</code>
                    </p>
                    <ul>
                        <li>修复部分组件在按需加载时报错的问题。<issue id="2537"></issue></li>
                        <li>Input 增加了更多的类型。<issue id="2526"></issue></li>
                        <li>新增意大利语。<mention id="lucagentile"></mention></li>
                        <li>新增泰语。<mention id="NatJNP"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.3" h2></Anchor>
                    <p>
                        <code>2017-11-16</code>
                    </p>
                    <ul>
                        <li>修复 2.7.0 版本下，无法在 Nuxt.js 中使用的问题。</li>
                        <li>修复 InputNumber 的一个问题。<issue id="2418"></issue></li>
                        <li>修改了西班牙语。<issue id="2426"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.2" h2></Anchor>
                    <p>
                        <code>2017-11-14</code>
                    </p>
                    <ul>
                        <li>修复 Tabs 销毁时报错的问题。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.1" h2></Anchor>
                    <p>
                        <code>2017-11-14</code>
                    </p>
                    <ul>
                        <li>修复 Tabs 组件报错的问题。<issue id="2407"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.0 Lara Croft GO" h2></Anchor>
                    <p>
                        <code>2017-11-13</code>
                    </p>
                    <ul>
                        <li>i18n 兼容 vue-i18n 6.x+ 版本，并支持通过 <code>script</code> 标签引入，完善国际化使用文档。<router-link to="/docs/guide/i18n">查看</router-link></li>
                        <li>现在可以更好地按需加载组件了。<router-link to="/docs/guide/start">查看</router-link></li>
                        <li>Form 验证方法 <code>validate</code> 支持 Promise。<issue id="2018"></issue></li>
                        <li>Form 新增 <code>autocomplete</code> 属性。</li>
                        <li>BreadcrumbItem 的 <code>href</code> 属性支持传入 vue-router 的 to 对象，同时新增 <code>to</code> 属性，与 href 相同，未来将废弃 href 属性。<issue id="2214"></issue></li>
                        <li>Input 新增 <code>spellcheck</code> 属性，部分可输入类组件设置了默认的 <code>autocomplete</code> 和 <code>spellcheck</code> 属性。<issue id="2324"></issue></li>
                        <li>Modal 增加事件 <code>on-visible-change</code>。</li>
                        <li>Transfer 新增选中项变化事件 <code>on-selected-change</code>。<issue id="2019"></issue></li>
                        <li>InputNumber 新增事件 <code>on-focus</code> 和 <code>on-blur</code>。</li>
                        <li>Avatar 样式调整为居中。<issue id="1926"></issue></li>
                        <li>修复 InputNumber 有时无法输入范围内数字的 bug。<issue id="2205"></issue></li>
                        <li>修复 Table 在未设置 width，垂直滚动时，固定列出现错位的 bug。<issue id="2102"></issue></li>
                        <li>修复 Table 在可展开且有固定列时，固定一列重复渲染的 bug。<issue id="1648"></issue></li>
                        <li>修复 DatePicker、TimePicker 第一次点击清除按钮时，无法触发 <code>on-change</code> 事件的 bug。<issue id="2215"></issue></li>
                        <li>修复 DatePicker、TimePicker、ColorPicker 在 FormItem 内使用时，图标位置不正确的 bug。<issue id="2219"></issue></li>
                        <li>修复 TimePicker 在 IE 下的一个问题。<issue id="2330"></issue></li>
                        <li>修复 Page 在 simple 模式下，输入页码为空时，回车显示为 NaN 的 bug。<issue id="1575"></issue></li>
                        <li>修复 Tooltip 在动态改变 content 时，错位的 bug。<issue id="1482"></issue></li>
                        <li>增加乌克兰语。<mention id="f3man"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.6.0 FRAMED" h2></Anchor>
                    <p>
                        <code>2017-10-26</code>
                    </p>
                    <ul>
                        <li>重构 Tree 组件，支持 Render 函数、异步加载数据，完善文档。<mention id="SergioCrisostomo"></mention></li>
                        <li>Carousel 增加循环滚动属性 <code>loop</code> 和圆形指示器属性 <code>radius-dot</code>。<issue id="2181"></issue> <mention id="lisafra"></mention></li>
                        <li>Tabs 标签页过多时，可以进行滚动。<issue id="1031"></issue> <mention id="marxy"></mention></li>
                        <li>Date 面板可根据当前语言包显示当地的年月格式。<issue id="2097"></issue> <mention id="SergioCrisostomo"></mention></li>
                        <li>Table 导出 csv 数据方法新增 <code>callback</code>、<code>quoted</code> 和 <code>separator</code> 选项。<issue id="2114"></issue></li>
                        <li>Table 新增过滤事件 <code>on-filter-change</code>。<issue id="2078"></issue></li>
                        <li>Tag 新增可选择属性 <code>checkable</code>。<issue id="2115"></issue></li>
                        <li>Scroll 新增边缘距离属性 <code>distance-to-edge</code>。<issue id="2137"></issue></li>
                        <li>修复 Scroll 组件在 Firefox 浏览器下，无法触发滚动事件的 bug。<issue id="2135"></issue></li>
                        <li>修复 Select 在 remote、multiple 模式下，主动清空数据后，未清空选中项的 bug。<issue id="2066"></issue></li>
                        <li>修复 Poptip 在 transfer 模式下，点击内部会关闭浮层的 bug。<issue id="1700"></issue></li>
                        <li>修复 Tabs 的 TabPane 无法使用 v-for 动态更新的 bug。<issue id="2100"></issue></li>
                        <li>修复 Cascader 在 trigger 为 hover 模式下，只有一项时，有时会直接选中的 bug。<issue id="1922"></issue></li>
                        <li>修复 Input 在 FormItem 内，size 为 small 时，icon 错位的 bug。<issue id="2149"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.5.1" h2></Anchor>
                    <p>
                        <code>2017-10-18</code>
                    </p>
                    <ul>
                        <li>修复 2.5.0 版本下，DatePicker 绑定数据为空时，初始化显示为 false 的bug。<issue id="2119"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.5.0 Old Man’s Journey" h2></Anchor>
                    <p>
                        <code>2017-10-17</code>
                    </p>
                    <ul>
                        <li><strong>发布后台管理系统模板 <a href="https://github.com/iview/iview-admin" target="_blank">iview-admin</a>。</strong></li>
                        <li>新增无限滚动组件 Scroll。<router-link to="/components/scroll">查看</router-link></li>
                        <li>Date 会根据当前语言包自动识别每周起始日。<issue id="1809"></issue></li>
                        <li>InputNumber 新增 readonly 和 editable 属性。</li>
                        <li>优化 InputNumber 实时输入的表现。<issue id="2059"></issue></li>
                        <li>优化 Date 在输入一个错误日期格式后失焦的表现。<issue id="2002"></issue></li>
                        <li>修复 Date 在 SSR 无法通过 Form 验证的问题。<issue id="1971"></issue></li>
                        <li>修复 Date 在 IE11 下的一个问题。<issue id="1937"></issue></li>
                        <li>修复 Date、Dropdown 在 transfer 模式下，body 宽度为 100% 时，样式错误的bug。<issue id="2050"></issue></li>
                        <li>修复 FormItem 在动态设置 error 时，有时错误信息无法清空的bug。<issue id="2047"></issue></li>
                        <li>修复 Badge 在开启 dot 且 count 为 0 时，扔显示 dot 的bug。</li>
                        <li>修复 InputNumber 在 precision 为 0 时，无法设置精度为整数的bug。<issue id="2026"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.4.0 Monument" h2></Anchor>
                    <p>
                        <code>2017-09-25</code>
                    </p>
                    <ul>
                        <li>InputNumber 新增精度属性 <code>precision</code>。<issue id="1810"></issue></li>
                        <li>Spin 增加全局用法 <code>$Spin</code>。<issue id="1063"></issue></li>
                        <li>Spin 样式调整，<code>fix</code> 时不再强制设置父级宽高。</li>
                        <li>Table 支持自适应宽度。<issue id="690"></issue></li>
                        <li>Table 新增加载中属性 <code>loading</code>，及具名 slot <code>loading</code>。<issue id="704"></issue></li>
                        <li>Table 新增取消单选方法 <code>clearCurrentRow</code>。<issue id="1372"></issue></li>
                        <li>Table 事件 <code>@on-row-click</code> 和 <code>@on-row-dblclick</code> 返回参数增加 index。<issue id="693"></issue></li>
                        <li>Date 支持动态切换 type。<issue id="1851"></issue></li>
                        <li>Steps 支持动态设置 Step。</li>
                        <li>所有表单类组件都支持设置 <code>name</code> 属性。<issue id="812"></issue></li>
                        <li>FormItem 新增 <code>label-for</code> 属性，Input、AutoComplete、Cascader、Date、InputNumber、Select(filterable) 增加 <code>element-id</code> 属性，当设置一致时，点击 label 可以聚焦对应的控件。<issue id="433"></issue></li>
                        <li>修改 Menu 的 z-index 值。<issue id="823"></issue></li>
                        <li>优化 Message 样式。<issue id="1881"></issue></li>
                        <li>优化 Select 样式。<issue id="860"></issue></li>
                        <li>优化 Date 按 tab 建的交互。<issue id="1930"></issue></li>
                        <li>修复 Table 在 stripe 模式下，hover 样式不正确的bug。<issue id="1380"></issue></li>
                        <li>修复 Tabs 在关闭所有页签后，报错的bug。<issue id="1842"></issue></li>
                        <li>修复 Select 在 remote 模式下，高亮搜索词时，再次键入并选择，query 不正确的bug。<issue id="1865"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.3.1 & 2.3.2" h2></Anchor>
                    <p>
                        <code>2017-09-10</code>
                    </p>
                    <ul>
                        <li>发布 <router-link to="/docs/guide/iview-loader">iview-loader</router-link>。</li>
                        <li>修复 Switch 使用 true-value 和 false-value 时，设置 slot 无法正确显示的bug。<issue id="1797"></issue></li>
                        <li>修复 Select 共用同一份 Option 数据时，仅第一个可以选择的bug。<issue id="1807"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.3.0 Lumino City" h2></Anchor>
                    <p>
                        <code>2017-09-05</code>
                    </p>
                    <ul>
                        <li>Switch 新增 true-value 和 false-value 属性。<issue id="1399"></issue></li>
                        <li>Input 新增 autocomplete 属性。</li>
                        <li>Table 的 column 新增 type: html，避免 XSS。<issue id="993"></issue></li>
                        <li>Table 列为可展开时，支持设置 title 或 renderHeader。</li>
                        <li>提高 Select 渲染性能。<issue id="1777"></issue></li>
                        <li>修复 Table 在 columns 为空时，报错的bug。<issue id="1736"></issue></li>
                        <li>修复 Table 在多选模式下，将所有列都禁用时，状态标记为全部选中的bug。<issue id="1751"></issue></li>
                        <li>修复 Select 选择 Option 时，将 slot 内的标签一同携带的bug。<issue id="1690"></issue></li>
                        <li>修复 Select 在 remote 模式下，手动清空数据后没有清空 label 的bug。<issue id="1743"></issue></li>
                        <li>修复 Rate 半选状态初始化不正确的bug。<issue id="1761"></issue></li>
                        <li>修复 Date 在 IE11 下无法显示初始值的bug。<issue id="1422"></issue></li>
                        <li>修复 Date 在选择时间模式下，清空再次选择后时间错误的bug。<issue id="1223"></issue></li>
                        <li>修复 Date 无默认值时，有时选择的时间提前一天的bug。<issue id="1734"></issue></li>
                        <li>修复 Tabs 在 IE11 下，边线宽度设置不正确的bug。<issue id="695"></issue></li>
                        <li>修复 Tooltip 在 always 模式下，错位的bug。<issue id="1568"></issue></li>
                        <li>修复 Slider 双击滑块时，滑块跳动的bug。<issue id="1354"></issue></li>
                        <li>修复 Cascader 在 transfer 模式下，部分样式错误的bug。<issue id="1728"></issue></li>
                        <li>新增印尼语。<mention id="IndraGunawan"></mention></li>
                        <blockquote>特别感谢 <mention id="SergioCrisostomo"></mention></blockquote>
                    </ul>
                </Timeline-item>
                <Timeline-item color="red">
                    <Icon type="ios-heart" size="18" slot="dot"></Icon>
                    <Anchor title="2.2.0 Shadowmatic" h2></Anchor>
                    <p>
                        <code>2017-08-28</code>
                    </p>
                    <ul>
                        <li>新增头像组件 Avatar。<router-link to="/components/avatar">查看</router-link></li>
                        <li>新增颜色选择器组件 ColorPicker。<router-link to="/components/color-picker">查看</router-link></li>
                        <li>新增自动完成组件 AutoComplete。<router-link to="/components/auto-complete">查看</router-link></li>
                        <li>Form 支持对 ColorPicker 和 AutoComplete 组件的验证。</li>
                        <li>Radio 和 RadioGroup 新增 size 属性。</li>
                        <li>Checkbox 和 CheckboxGroup 新增 size 属性。</li>
                        <li>具有 size 属性的组件都增加了 default。</li>
                        <li>修复 Select 在 filterable 模式下，开启 disabled 后仍然能够输入的bug。<issue id="1547"></issue></li>
                        <li>修复 Poptip 在 transfer 模式下，使用 confirm 样式错乱的bug。<issue id="1612"></issue></li>
                        <li>修复 InputNumber 的一个问题。<issue id="1654"></issue></li>
                        <li>优化 Grid 组件对 gutter 的设置。<issue id="1661"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.1.0 Alto's Adventure" h2></Anchor>
                    <p>
                        <code>2017-08-14</code>
                    </p>
                    <ul>
                        <li>TimePicker 新增属性 steps, 可以设置小时、分钟、秒的间隔。<mention id="SergioCrisostomo"></mention></li>
                        <li>Radio、Checkbox 新增 true-value 和 false-value 属性。<issue id="1191"></issue></li>
                        <li>Page 的 current 属性支持 .sync 修饰符。</li>
                        <li>Poptip、Tooltip 增加 on-popper-show 事件。</li>
                        <li>优化 Table 导出 csv 在 Safari 浏览器下的表现。</li>
                        <li>修复 Cascader 在 change-on-select 模式下，再次选择时没有重置子列表的bug。<issue id="1553"></issue></li>
                        <li>修复 Cascader 在动态加载选项，children 的数据为空时递归触发请求的bug。</li>
                        <li>修复 InputNumber 有时计算不准确的bug。<issue id="1452"></issue></li>
                        <li>修复 InputNumber 没有监听 min 和 max 的bug。<issue id="1134"></issue></li>
                        <li>修复 Page 在改变 total 时，页码计算不正确的bug。<issue id="1543"></issue></li>
                        <li>修复 Date 在 datetimerange 模式下，返回数据不正确的bug。<issue id="1220"></issue></li>
                        <li>修复 Tree 在 children 为空时，自动勾选的bug。<issue id="1504"></issue></li>
                        <li>修复 Form 重置后，部分组件首次无法校验的bug。<issue id="1534"></issue></li>
                        <li>新增越南语。<mention id="hckhanh"></mention></li>
                        <li>新增葡萄牙语。<mention id="SergioCrisostomo"></mention></li>
                        <li>新增瑞典语。<mention id="SergioCrisostomo"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item color="green">
                    <Icon type="trophy" size="18" slot="dot"></Icon>
                    <Anchor title="2.0.0 Leo's Fortune" h2></Anchor>
                    <p>
                        <code>2017-07-28</code>
                    </p>
                    <ul>
                        <li>Nuxt.js 支持使用多语言。<router-link to="/docs/guide/i18n">查看</router-link></li>
                        <li>Modal 的 width 当不大于 100 时，将以百分比显示。</li>
                        <li>Progress 新增垂直方向属性 vertical。<issue id="629"></issue></li>
                        <li>Table 新增默认排序属性 sortType。<issue id="1403"></issue></li>
                        <li>Table 在多选时，阻止冒泡。<issue id="1271"></issue></li>
                        <li>Table 的自定义表头方法 renderHeader 改为了 Render 函数。<issue id="1357"></issue></li>
                        <li>Table 在排序时，点击表头标题也可以进行排序。<issue id="122"></issue></li>
                        <li>修复 Table 内使用 Select、Dropdown 等组件无法收起的bug。<issue id="1341"></issue></li>
                        <li>修复 Table 在数据为空时，固定列高度不正确的bug。<issue id="1387"></issue></li>
                        <li>修复 Table 在数据为空时，未设置宽度的 column 消失的bug。<issue id="658"></issue></li>
                        <li>修复 Table 在数据为空，设置表格高度时，添加数据后，表格高度计算不正确的bug。<a href="https://github.com/iview/iview/commit/119eeafedea02d984650b82920abdcdf4e809f79" target="_blank">commit</a></li>
                        <li>
                            Modal、Poptip、Tooltip、Dropdown、Select、Date、Cascader 组件新增 transfer 属性，开启会将浮层移动到 body 内。<issue id="830"></issue> <issue id="844"></issue> <issue id="1187"></issue>
                            <blockquote>带有浮层的组件，在 Tabs、带有 fixed 的 Table 内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果。</blockquote>
                        </li>
                        <li>Input 新增事件 @on-keyup、@on-keydown、@on-keypress。</li>
                        <li>修复 Select 在 remote 模式下，在 Modal 内使用时，浮层错位的bug。<issue id="1099"></issue></li>
                        <li>修复 Tabs 嵌套使用时，外层禁用动画，内层无法切换的bug。<issue id="1427"></issue></li>
                        <li>新增韩语。<mention id="dokenzy"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.19" h2></Anchor>
                    <p>
                        <code>2017-07-17</code>
                    </p>
                    <ul>
                        <li>支持 Vue 2.4.1。</li>
                        <li>支持 SSR 和 Nuxt.js。<issue id="1315"></issue></li>
                        <li>Page 支持小键盘操作。<issue id="1318"></issue></li>
                        <li>Table 新增取消当前行事件 @on-select-cancel。<issue id="705"></issue></li>
                        <li>修复 Select 在 remote 模式下，手动设置 label 不生效的bug。<issue id="1286"></issue></li>
                        <li>修复 Table、Cascader、Tree 在 Vue 2.4.1 版本下，报错的问题。<issue id="1353"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.18" h2></Anchor>
                    <p>
                        <code>2017-07-03</code>
                    </p>
                    <ul>
                        <li>废弃 Table 旧 render 方法。</li>
                        <li>修复 Table 在使用展开功能时，render 重复触发的问题。<issue id="1195"></issue></li>
                        <li>修复 Transfer 在特定条件下报错的问题。</li>
                        <li>修复 Input 在 small 尺寸时，右间距不正确的问题。<issue id="1174"></issue></li>
                        <li>修复 Poptip title 无法显示的bug。<issue id="1222"></issue></li>
                        <li>修复 Poptip 使用 trigger 模式时，对普通元素无法生效的bug。</li>
                        <li>修复 Select 多选在 Firefox 下样式不正确的bug。<issue id="1224"></issue></li>
                        <li>修复 Upload 触发区域不准确的bug。<issue id="1258"></issue></li>
                        <li>优化 Menu 样式。</li>
                        <li>优化 Page 样式。</li>
                        <li>Date 组件改为 inline-block。</li>
                        <li>更新 async-validator 库到 1.7.1 版本。<issue id="1171"></issue></li>
                        <li>新增德语。<mention id="dspangenberg"></mention></li>
                        <li>新增葡萄牙语。<mention id="programadorthi"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.17" h2></Anchor>
                    <p>
                        <code>2017-06-14</code>
                    </p>
                    <ul>
                        <li>Table 新增禁用鼠标悬停高亮 prop：disabled-hover。<mention id="lcx960324"></mention></li>
                        <li>修复 CheckboxGroup 的 Checkbox 向上寻找父组件时的bug。</li>
                        <li>修复 Date 组件在禁用时，点击图标仍然会展开面板的bug。</li>
                        <li>修复 Vue 2.3.3 版本下， Poptip 在 focus，slot 含有 input、textarea 元素时无法聚焦的bug。<issue id="1101"></issue></li>
                        <li>修复 Menu 在手风琴模式下，on-open-change 返回值错误的bug。<issue id="1102"></issue></li>
                        <li>优化 Table 单元格的渲染。</li>
                        <li>优化 Table 展开项的渲染。<mention id="ckryo"></mention></li>
                        <li>优化 Tabs 自定义标签页的渲染。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Icon type="social-apple-outline" size="18" slot="dot"></Icon>
                    <Anchor title="2.0.0-rc.16" h2></Anchor>
                    <p>
                        <code>2017-06-05</code>
                    </p>
                    <ul>
                        <li>支持 SSR。</li>
                        <li>$Modal 内容支持自定义组件。<issue id="1041"></issue></li>
                        <li>Tabs 支持自定义标签页。</li>
                        <li>Table 可单独设置某行禁用展开功能。</li>
                        <li>Menu 增加展开时的过渡动画。<issue id="514"></issue></li>
                        <li>Collapse 增加展开时的过渡动画。</li>
                        <li>Tree 增加展开时的过渡动画。</li>
                        <li>修复 Notice 的 destroy 方法无法使用的bug。<issue id="1054"></issue> <mention id="lcx960324"></mention></li>
                        <li>修复 Badge 判断类型错误导致渲染错误的bug。<issue id="646"></issue></li>
                        <li>新增法语。<mention id="LekisS"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.15" h2></Anchor>
                    <p>
                        <code>2017-05-31</code>
                    </p>
                    <ul>
                        <li>Table 新增可展开功能。</li>
                        <li>Message 支持可关闭，并调整参数。<router-link to="/components/message">查看</router-link></li>
                        <li>Input 增加 type 为 textarea 时的 autofocus。<issue id="1017"></issue></li>
                        <li>修复 Table 新 render 方法重复渲染组件的bug。<issue id="1011"></issue></li>
                        <li>修复 Select 在 remote 模式下，绑定初始值但没有设置 label 时报错的问题。<issue id="978"></issue></li>
                        <li>修复 BackTop 不支持 IE、Firefox 浏览器的bug。<issue id="995"></issue></li>
                        <li>调整配色。</li>
                        <li>新增俄语。<mention id="explosivebit"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.14" h2></Anchor>
                    <p>
                        <code>2017-05-22</code>
                    </p>
                    <ul>
                        <li>修复 Table 重复调用 render 函数的问题。</li>
                        <li>Select 新增 prop: label，用于 remote 模式。</li>
                        <li>修复 Select 在单选 remote 模式下，选中显示为 value 而不是 label 的bug。<issue id="915"></issue></li>
                        <li>修复 Select 在 remote 模式下，设置初始值不生效的bug。<issue id="952"></issue></li>
                        <li>优化 Select 在搜索模式下，手动赋值后，第一次展开显示为全部候选项。<issue id="957"></issue></li>
                        <li>修复 Cascader 在搜索模式下，搜索结果过多时内容溢出的bug。</li>
                        <li>优化 Cascader 在动态加载选项时，调用 loadData 的时机。<issue id="941"></issue></li>
                        <li>修复 Form 在只有一个 Input 元素时，回车触发 submit 事件的问题。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.13" h2>
                        <span class="doc-update-important">重要更新</span>
                    </Anchor>
                    <p>
                        <code>2017-05-12</code>
                    </p>
                    <ul>
                        <li>Table 单元格渲染支持 Render 函数<span style="color: #f50">（目前兼容旧用法，但未来将废弃）</span>。</li>
                        <li>Select 支持远程搜索。</li>
                        <li>Cascader 支持异步加载选项。</li>
                        <li>Cascader 支持搜索。</li>
                        <li>Input 新增 focus 方法。<mention id="yinheli"></mention></li>
                        <li>修复 Cascader 在 change-on-select 模式下，初始设置的数组长度为1时视图没有渲染的bug。<issue id="810"></issue></li>
                        <li>修复 DatePicker 在 daterange 模式下，月模板的年份切换错误的bug。<issue id="845"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.12" h2></Anchor>
                    <p>
                        <code>2017-04-28</code>
                    </p>
                    <ul>
                        <li>Table 单元格支持渲染局部注册的组件。<issue id="775"></issue></li>
                        <li>Tree 新增事件 on-toggle-expand。<mention id="lcx960324"></mention></li>
                        <li>Page 和 Select 新增 prop: placement，可设置展开方向。</li>
                        <li>修复 Dropdown 有时点击报错的问题。<issue id="721"></issue></li>
                        <li>修复 Modal 标题默认为空，更新后不显示的bug。<issue id="504"></issue> <mention id="hezhiying"></mention></li>
                        <li>修复 FormItem 数据为数组时，第一次 reset 出错的问题。<issue id="768"></issue></li>
                        <li>修复 Tree 从外部改变数据时，视图没有正确更新的bug。<issue id="787"></issue></li>
                        <li>修复 CheckboxGroup 动态更新 Checkbox 时，没有选中已选值的bug。<issue id="778"></issue></li>
                        <li>修复 RadioGroup 动态更新 Radio 时，没有选中已选值的bug。</li>
                        <li>修复 Select 在单选可搜索模式下，手动设置 Option 时，第一次展开选项显示不全的bug。<issue id="805"></issue></li>
                        <li>调整 Page 的 on-page-size-change 事件触发时机。<issue id="759"></issue></li>
                        <li>新增日语。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.11" h2></Anchor>
                    <p>
                        <code>2017-04-22</code>
                    </p>
                    <ul>
                        <li>修复 Cascader 在 disabled 模式下扔能使用 clearable 功能的bug。<issue id="635"></issue></li>
                        <li>修复 Message 的 destroy 方法无法使用的bug。<mention id="lcx960324"></mention></li>
                        <li>修复 BreadcrumbItem 动态添加时，无法显示分隔符的bug。<mention id="Becavalier"></mention></li>
                        <li>修复 Menu 的 active-name 为 0 时无法正确匹配的bug。</li>
                        <li>修复 Slider 在 range 模式下，主动设置 value 时显示错误的bug。<issue id="724"></issue></li>
                        <li>修复 Select 在单选可搜索模式下，数字 0 默认不会被选中的问题。<issue id="718"></issue></li>
                        <li>修复 Select 在单选可搜索模式下，第一次展开选项显示不全的bug。<issue id="712"></issue></li>
                        <li>Table 新增远程过滤。<mention id="hezhiying"></mention> <issue id="714"></issue></li>
                        <li>Step 新增 slot。<mention id="purocean"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.10" h2></Anchor>
                    <p>
                        <code>2017-04-10</code>
                    </p>
                    <ul>
                        <li>Modal 的 DOM 移动到了 body。<issue id="583"></issue> <issue id="380"></issue></li>
                        <li>Select 新增 <code>on-query-change</code> 事件。</li>
                        <li>Cascader 新增 <code>on-visible-change</code> 事件。<issue id="593"></issue></li>
                        <li>修复 Date 在 Table 内使用时，样式错误的问题。<issue id="577"></issue></li>
                        <li>修复 Table 的 slot 无法使用的bug。<issue id="549"></issue></li>
                        <li>修复 Table 在 Modal 和 Tabs 内使用时，宽度计算不正确的bug。<issue id="591"></issue></li>
                        <li>修复 Tree 组件没有正确引入 Icon 组件的bug。<issue id="612"></issue></li>
                        <li>优化 Slider 在靠近边缘时，卡顿的问题。<issue id="461"></issue></li>
                        <li>优化 Select 在搜索模式下的交互体验。<issue id="566"></issue></li>
                        <li>新增西班牙语。<mention id="MatiasVerdier"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.9" h2></Anchor>
                    <p>
                        <code>2017-04-01</code>
                    </p>
                    <ul>
                        <li>Table 单元格的 render 方法，支持 <code v-pre>{{ row }}</code>、<code v-pre>{{ column }}</code> 用法。<issue id="438"></issue></li>
                        <li>Select 支持 IE。</li>
                        <li>BreadcrumbItem 新增 prop <code>replace</code> ，并支持 vue-router 的 push 和 replae 两种跳转。</li>
                        <li>Modal 新增 prop <code>transition-names</code>，支持自定义动画。<issue id="505"></issue></li>
                        <li>优化 DatePicker 在某些时候无法关闭弹窗的问题。</li>
                        <li>修复部分组件结合 vue-i18n 使用时，无法翻译的bug。</li>
                        <li>修复动态使用 Col 时，gutter 无法更新的bug。<issue id="540"></issue></li>
                        <li>修复 Cascader 修改 <code>data</code> 后，不能更新选中项的bug。<issue id="553"></issue></li>
                        <li>修复 Transfer 修改 <code>data</code> 后，不能更新内容的bug。<issue id="555"></issue></li>
                        <li>Input 组件：</li>
                        <ul>
                            <li>修复使用 slot 时，icon 不显示的bug。<issue id="554"></issue></li>
                            <li>优化默认情况下有右间距的问题。</li>
                            <li>优化使用 slot 时，不是圆角的问题。<issue id="397"></issue></li>
                        </ul>
                        <li>新增土耳其语。<mention id="ndrshn"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.8" h2></Anchor>
                    <p>
                        <code>2017-03-29</code>
                    </p>
                    <ul>
                        <li>修复 <code>Form</code> 无法对 <code>Cascader</code> 组件及时验证的bug。<issue id="525"></issue></li>
                        <li>修复 <code>Select</code> 在单选可搜索模式下，从外部清空数据时，视图没有更新的bug。<issue id="518"></issue></li>
                        <li>优化 <code>Date</code> 类型组件，点击小图标也可以显示选择器。<issue id="528"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.7" h2></Anchor>
                    <p>
                        <code>2017-03-27</code>
                    </p>
                    <ul>
                        <li>重构 <code>Tree</code> 组件。<issue id="468"></issue></li>
                        <li>修复 <code>Cascader</code> 数据置为空时，视图并没有更新的bug。<issue id="488"></issue></li>
                        <li>修复 <code>Form</code> 无法对 <code>Date</code> 类型的组件及时验证的bug。<issue id="494"></issue></li>
                        <li>优化 <code>Radio</code> 组合使用时，无法识别 label 为 0 的情况。<issue id="425"></issue></li>
                        <li><code>Tabs</code> 新增附加内容 slot <code>extra</code>。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.6" h2></Anchor>
                    <p>
                        <code>2017-03-22</code>
                    </p>
                    <ul>
                        <li>Table 的上下文 prop：content 更名为 <code>context</code>。</li>
                        <li>修复 Table 在生产环境时，自定义单元格渲染上下文失效的bug。<issue id="454"></issue></li>
                        <li>iCol 增加名称 <code>Col</code>。</li>
                        <li>iForm 增加名称 <code>Form</code>。</li>
                        <li>修复 Input 使用 number 模式时，不能正确返回数字类型的bug。</li>
                        <li>Card 增加内部间距 prop：padding。<mention id="muei"></mention></li>
                        <li>Tag 增加 prop：name。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.5" h2></Anchor>
                    <p>
                        <code>2017-03-15</code>
                    </p>
                    <ul>
                        <li>Table 的 自定义单元格支持 data、methods。</li>
                        <li>修复 Table 内通过点击操作删除一行数据时，报错的问题。</li>
                        <li>Button 增加自定义事件 @click，可以不用通过 @click.native 来使用了。</li>
                        <li>修复 Modal 不能自定义 header 的 bug。<issue id="407" /></li>
                        <li>优化 RadioGroup、CheckboxGroup、Menu，可以与其它组件进行嵌套使用。</li>
                        <li>修复 Transfer 在没有使用 slot 时报错的 bug。</li>
                        <li>优化 Form 在验证带有搜索功能的 Transfer 组件时，搜索框样式显示错误的问题。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.4" h2></Anchor>
                    <p>
                        <code>2017-03-14</code>
                    </p>
                    <ul>
                        <li>修复警告。</li>
                        <li>修复 Table 筛选下拉菜单不关闭的 bug。</li>
                        <li>修复含有 Input 的组件在 Form 内使用时，on-form-change 事件触发错误的逻辑。</li>
                        <li>优化 Select 广播事件重复的问题。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.3" h2></Anchor>
                    <p>
                        <code>2017-03-13</code>
                    </p>
                    <ul>
                        <li>修复部分组件在非 template 内书写时不被识别的问题。部分组件新增别名，并兼任1.0版别名。
                            详见 <a href="https://github.com/iview/iview/blob/2.0/src/index.js#L49" target="_blank">https://github.com/iview/iview/blob/2.0/src/index.js#L49</a></li>
                    </ul>
                </Timeline-item>
                <Timeline-item color="green">
                    <Icon type="trophy" size="18" slot="dot"></Icon>
                    <Anchor title="2.0.0-rc.2" h2></Anchor>
                    <p>
                        <code>2017-03-10</code>
                    </p>
                    <ul>
                        <li>Button 支持组件名 <code>Button</code>，兼容 <code>iButton</code>。</li>
                        <li>Input 支持组件名 <code>Input</code>，兼容 <code>iInput</code>，支持 v-model。</li>
                        <li>RadioGroup 支持 v-model。</li>
                        <li>Radio value 改为了 label，使用 v-model，废弃 checked。</li>
                        <li>Checkbox 支持 v-model。</li>
                        <li>CheckboxGroup value 改为了 label，使用 v-model，废弃 checked。</li>
                        <li>Switch 更名为 <code>iSwitch</code>，废弃checked， 改为了 value，使用 v-model。</li>
                        <li>Badge class 改为了 className。</li>
                        <li>InputNumber 使用 v-model。</li>
                        <li>Progress 支持组件名 <code>iProgress</code>，兼容 <code>Progress</code>，新增 on-status-change 事件。</li>
                        <li>Upload 父级不能通过 computed 获取 Upload 的 fileList 了。</li>
                        <li>Collapse 废弃 activeKey，使用 v-model，key 更名为 name。</li>
                        <li>Carousel 废弃 activeIndex，使用 v-model。</li>
                        <li>Circle 更名为 <code>iCircle</code>。</li>
                        <li>Tabs 废弃 activeKey，改用 value，使用 v-model，key 更名为 name。</li>
                        <li>DropdownItem key 改为 name, Dropdown 的 visible 要使用 @on-visible-change 捕获，不再 sync</li>
                        <li>Menu 支持组件名 <code>iMenu</code>，兼容 <code>Menu</code>，MenuItem 和 Submenu 的 key 改为了 name，Menu 的 activeKey 改为 activeName,openKeys 改为 openNames。</li>
                        <li>Select 支持组件名 <code>Select</code>，兼容 <code>iSelect</code>，model 改为 value，支持 v-model。</li>
                        <li>Page class 改为 className。</li>
                        <li>DatePicker 使用 v-model。</li>
                        <li>Modal visible 改为 value，使用 v-model，style 改为 styles。</li>
                        <li>Table 支持组件名 <code>Table</code>，兼容 <code>iTable</code>。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Button type="ghost" size="large" @click="handleBefore">查看 1.x 版本的日志</Button>
                </Timeline-item>
            </Timeline>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';
    import issue from '../../components/issue.vue';
    import mention from '../../components/mention.vue';

    import version from '../../config/config';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor,
            issue,
            mention
        },
        data () {
            return {
                code: Code
            }
        },
        mounted () {
            window.localStorage.setItem('version', version.version);
        },
        methods: {
            handleBefore () {
                window.open('http://v1.iviewui.com/docs/guide/update');
            }
        }
    }
</script>