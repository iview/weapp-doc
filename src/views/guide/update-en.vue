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
        <h1>Change Log</h1>
        <article class="doc-update">
            <Timeline pending>
                <Timeline-item>
                    <Anchor title="2.14.1" h2></Anchor>
                    <p>
                        <code>2018-06-01</code>
                    </p>
                    <ul>
                        <li>Fixed bug that not available under SSR mode in the 2.14.0 version. <issue id="3740"></issue></li>
                        <li>Fixed bug that Select can not bind the number 0 in the 2.14.0 version. <issue id="3696"></issue></li>
                        <li>Fixed bug that Select will show undefined sometimes in the 2.14.0 version. <issue id="3705"></issue></li>
                        <li>Fixed bug that Select will trigger @on-change event at initialization in the 2.14.0 version. <issue id="3725"></issue></li>
                        <li>Fixed bug that Select show incorrect label in the 2.14.0 version. <issue id="3728"></issue> <issue id="3742"></issue></li>
                        <li>Fixed bug that Select can not show correct options when clear selected item under filterable and clearable mode in the 2.14.0 version. <issue id="3746"></issue></li>
                        <li>Fixed bug that Select can not use under transfer mode in the 2.14.0 version. <issue id="3695"></issue></li>
                        <li>Fixed bug that Select can not use in mobile phone in the 2.14.0 version. <issue id="3741"></issue></li>
                        <li>Fixed bug that Select can not bind an Object in the 2.14.0 version. <issue id="3737"></issue></li>
                        <li>Fixed bug that AutoComplete can not hide drop panel sometimes in the 2.14.0 version. <issue id="3709"></issue></li>
                        <li>Fixed bug that form components in Tabs will be focused automatically, unless open the property <code>capture-focus</code>. <issue id="3732"></issue></li>
                        <li>Fixed bug that transverse Menu's Submenu show incorrect position. <issue id="3733"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.14.0 KAMI" h2></Anchor>
                    <p>
                        <code>2018-05-24</code>
                    </p>
                    <ul>
                        <li>Refactor the Select component, fully supports keyboard accessibility and fixes several issues. <issue id="3157"></issue> <issue id="1647"></issue> <issue id="3574"></issue></li>
                        <li>DatePicker supports keyboard accessibility. <issue id="3643"></issue> <issue id="1647"></issue></li>
                        <li>ColorPicker supports keyboard accessibility. <issue id="3662"></issue> <issue id="1647"></issue></li>
                        <li>Tabs supports keyboard accessibility. <issue id="3642"></issue> <issue id="1647"></issue></li>
                        <li>TabPane changed <code>display: none</code> to <code>visibility: hidden</code>. <issue id="3652"></issue></li>
                        <li>ColorPicker add new property <code>disabled</code>. <issue id="3662"></issue></li>
                        <li>Select add new events <code>@on-clear</code> and <code>@on-open-change</code>. <issue id="3579"></issue></li>
                        <li>Rate add new property <code>clearable</code>. <issue id="3487"></issue></li>
                        <li>ColorPicker add new event <code>@on-open-change</code>. <issue id="3540"></issue></li>
                        <li>AutoComplete add new event <code>@on-focus</code> and <code>@on-blur</code>. <issue id="3565"></issue></li>
                        <li>Icon add new event <code>@click</code>. <issue id="3621"></issue></li>
                        <li>Menu In accordion mode, when the parent menu is closed, its submenus are closed too. <issue id="3617"></issue></li>
                        <li>Optimize the popper.js configuration.</li>
                        <li>Fixed the bug that Slider can't drag sometimes. <issue id="3468"></issue></li>
                        <li>Fixed nested Row gutter bug. <issue id="3596"></issue></li>
                        <li>Fixed DatePicker style bug when <code>type="datetimerange"</code> and open show-week-numbers. <issue id="3629"></issue></li>
                        <li>Fixed DatePicker bug that uses v-model in multiple mode. <issue id="3675"></issue></li>
                        <li>Fixed RadioGroup bug that cannot use value directly. <issue id="3498"></issue></li>
                        <li>Fixed bug that RadioGroup doesn't center content sometimes. <issue id="3586"></issue></li>
                        <li>Fixed bug that $Spin calls the .hide() method directly. <issue id="3535"></issue></li>
                        <li>Fixed bug that AutoComplete event <code>@on-change</code> called only once. <issue id="3486"></issue></li>
                        <li>Fixed bug that AutoComplete can not scroll when the content is too long. <issue id="3590"></issue></li>
                        <li>Fixed Notice bug that class name is wrong. <issue id="3551"></issue></li>
                        <li>Fixed bug of Menu that @on-open-change event return wrong value. <issue id="3575"></issue></li>
                        <li>Fixed bug of InputNumber when set precision property and clear value. <issue id="3676"></issue></li>
                        <li>Add Czech. <mention id="ajkl2533"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.13.1" h2></Anchor>
                    <p>
                        <code>2018-04-23</code>
                    </p>
                    <ul>
                        <li>Tag add new property <code>fade</code>.</li>
                        <li>InputNumber add new property <code>placeholder</code>. <issue id="3424"></issue></li>
                        <li>InputNumber add new event <code>on-focus</code> and return <code>event</code>. <issue id="3395"></issue></li>
                        <li>DatePicker event <code>on-change</code> will return a new value <code>type</code>. <issue id="3353"></issue></li>
                        <li>Optimize the configuration of popper.js and expand animation of dropdown. <issue id="3354"></issue></li>
                        <li>Fixed Table bug dynamically adjusts the page width, and the scroll bar shows the wrong sometimes. <issue id="3358"></issue></li>
                        <li>Fixed inaccurate bug in position when Poptip / Tooltip modified content dynamically. <issue id="3412"></issue></li>
                        <li>Fixed issue where clicking a button would jump when using Carousel inside a Form. <issue id="3426"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.13.0 King of Opera" h2></Anchor>
                    <p>
                        <code>2018-04-11</code>
                    </p>
                    <ul>
                        <li>Table column add new property <code>minWidth</code> and <code>maxWidth</code>. <issue id="3284"></issue></li>
                        <li>DatePicker <code>disabledDate</code> function can now also limit hours, minutes, and seconds. <issue id="3246"></issue></li>
                        <li>Optimize the Table filter style. <issue id="3206"></issue></li>
                        <li>Fixed Table bug of using filtering and sorting in header group. <issue id="3339"></issue></li>
                        <li>Fixed Table bug in version 2.12.0 that will throw error when set the <code>show-header="false"</code>.</li>
                        <li>Fixed bug in Poptip and Tooltip that identify placement and you can custom options for popper.js now.</li>
                        <li>Fixed DatePicker bug in daterange mode that show incorrect values after select year or month. <issue id="3345"></issue></li>
                        <li>Fixed bug that DatePicker sometimes returns incorrect values in the <code>on-change</code> event of the Safari browser. <issue id="3232"></issue></li>
                        <li>Fixed bug that DatePicker <code>show-week-numbers</code> cannot be dynamically set. <issue id="3277"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.12.0 Human Resource Machine" h2></Anchor>
                    <p>
                        <code>2018-04-04</code>
                    </p>
                    <ul>
                        <li>Components such as Select, AutoComplete, DatePicker, TimePicker, ColorPicker, Cascader, Dropdown, etc., support the automatic recognition of the direction in which the floating layer expands. <issue id="3156"></issue></li>
                        <li>Table support header grouping.</li>
                        <li>The value of InputNumber can be removed or set to null. <issue id="3174"></issue></li>
                        <li>Card add new property <code>title</code> and <code>icon</code>, can set the head more simply.</li>
                        <li>Tree add new property <code>children-key</code>.</li>
                        <li>Slider add new property <code>input-size</code>. <issue id="3301"></issue></li>
                        <li>Poptip add new property <code>popper-class</code>.</li>
                        <li>Optimized Input In the clearable mode, the clear button is not displayed when value is empty.</li>
                        <li>Optimize Table filtering and sorting styles.</li>
                        <li>Fixed Table does not show vertical scroll bar bugs when headers and columns are fixed at the same time. <issue id="3178"></issue></li>
                        <li>Fixed bug where Table fixed columns could not be scrolled. <issue id="2871"></issue></li>
                        <li>Fixed Table header overflow sometimes. <issue id="3178"></issue></li>
                        <li>Fixed the bug that the Table header is too long, sometimes causing scroll bars to overflow. <issue id="3178"></issue></li>
                        <li>Fixed bug where TimePicker set initial value to empty array. <issue id="3161"></issue></li>
                        <li>Fixed a bug in the logic when the DatePicker selected the range and clicked to switch the next year button. <issue id="3158"></issue></li>
                        <li>Fixed Sider bug of using <code>v-model</code> incorrectly. <issue id="3186"></issue></li>
                        <li>Fixed Slider bug that setting step as a decimal, sometimes unable to drag to the maximum. <issue id="3195"></issue></li>
                        <li>Fixed Slider bug that click on the slider and could not trigger the on-change event for the first time. <issue id="3291"></issue></li>
                        <li>Fixed Menu bug in the accordion mode, the event on-open-change returns wrong value. <issue id="3298"></issue></li>
                        <li>Fixed the bug that the Option of Select is too long and the style is incorrect. <issue id="2931"></issue></li>
                        <li>Fixed Select bug that click too fast.</li>
                        <li>Fixed the FormItem bug as slot, can not get correct Form sometimes.</li>
                        <blockquote>Special thanks to <mention id="huanghong1125">@huanghong1125</mention> contribution!</blockquote>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Icon type="planet" size="18" slot="dot"></Icon>
                    <Anchor title="2.11.0 Alto's Odyssey" h2>
                        <span class="doc-update-important">Mourning Stephen Hawking</span>
                    </Anchor>
                    <p>
                        <code>2018-03-14</code>
                    </p>
                    <ul>
                        <li>InputNumber add formatted display properties <code>formatter</code> and <code>parser</code>. <issue id="3081"></issue></li>
                        <li>Input add new property <code>wrap</code>. <issue id="3086"></issue></li>
                        <li>Page add new property <code>transfer</code>. <issue id="3112"></issue></li>
                        <li>Optimized Select style, enhanced keyboard accessibility, closer to native. <issue id="1647"></issue></li>
                        <li>Fixed Menu with inline Submenu bug that throw errors after Vue.js 2.5.14. <a href="https://github.com/iview/iview/commit/b71a171d36e1327ee8fe1cc4f35fe97887f0786c" target="_blank">b71a171</a></li>
                        <li>Fixed Select bug in different sizes, the multiple mode style is wrong. <issue id="2451"></issue></li>
                        <li>Fixed Cascader style bug under search mode.</li>
                        <li>Fixed Input style bug when <code>size="small"</code> and using <code>append</code> or <code>prepend</code>.</li>
                        <li>Optimized Collapse style. <issue id="2973"></issue></li>
                        <li>Add Dutch. <mention id="mervy-sim"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.10.1" h2></Anchor>
                    <p>
                        <code>2018-03-09</code>
                    </p>
                    <ul>
                        <li>Fixed the problem of large file size after compiling in version 2.10.0</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.10.0 Reigns" h2></Anchor>
                    <p>
                        <code>2018-03-09</code>
                    </p>
                    <ul>
                        <li>
                            Refactor the DatePicker component. <issue id="2861"></issue>
                            <ul>
                                <li><code>daterange</code> supports right-to-left selection. <issue id="2731"></issue></li>
                                <li>Add property <code>split-panels</code>, when open it, the left and right panels are not interconnected during the switching year and month. <issue id="2067"></issue></li>
                                <li>Add property <code>multiple</code>, when open it, you can select multiple dates.</li>
                                <li>Add property <code>start-date</code>, you can set the date to display by default when the panel is expanded. <issue id="2814"></issue></li>
                                <li>Add property <code>show-week-numbers</code>, when open it, you can display the numbers of week.</li>
                                <li>Add property <code>time-picker-options</code>, TimePicker attributes can be configured under the type <code>datetime</code> and <code>datetimerange</code>, such as <code>steps</code>. <issue id="3091"></issue></li>
                                <li>Fixed the problem of unable to dynamically modify <code>type</code>. <issue id="2608"></issue></li>
                                <li>Fixed the data bound with <code>v-model</code>, sometimes failing to update the panel. <issue id="2386"></issue></li>
                                <li>Fixed the problem of entering a disabled date. <issue id="2544"></issue></li>
                            </ul>
                        </li>
                        <li>Remove global style <code>ul</code> and <code>ol</code>. <issue id="3061"></issue></li>
                        <li>Optimized Slider, Switch style, enhanced keyboard accessibility, closer to native. <issue id="1647"></issue></li>
                        <li>Fixed Slider bug when set <code>step</code> property to decimal. <issue id="2984"></issue></li>
                        <li>Fixed Select bug with empty Option, press the arrow keys will throw error. </li>
                        <li>Fixed Avatar bug when use Chinese characters as slot, sometimes can not be centered. <issue id="3033"></issue></li>
                        <li>Fixed Carousel bug that dots not update when <code>v-model</code> is not used. <issue id="3038"></issue></li>
                        <li>Fixed an incorrectly-styled bug when Input was <code>size="small"</code> and using <code>prepend</code> or <code>append</code>. <issue id="3089"></issue></li>
                        <li>Add Greek. <mention id="d4rth0nyx"></mention></li>
                        <li>Optimize Chinese Traditional.</li>
                        <li>Fixed bug in Romanian file. <issue id="3060"></issue></li>
                        <blockquote>Special thanks to <mention id="SergioCrisostomo"></mention> and <mention id="Xotic750"></mention> contribution!</blockquote>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.9.2" h2></Anchor>
                    <p>
                        <code>2018-02-02</code>
                    </p>
                    <ul>
                        <li>Fix Slider bug that can not emit <code>on-change</code> event. <issue id="2975"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.9.1" h2></Anchor>
                    <p>
                        <code>2018-01-30</code>
                    </p>
                    <ul>
                        <li>Fix Slider for min/max values greater than 100 under 2.9.0 version. <issue id="2914"></issue></li>
                        <li>Optimize Avatar default background color.</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.9.0 Agent A" h2></Anchor>
                    <p>
                        <code>2018-01-24</code>
                    </p>
                    <ul>
                        <li>Update dependencies and use browserlist. <issue id="2835"></issue> <issue id="2837"></issue> <issue id="2839"></issue></li>
                        <li>Refactor the Slider component. <issue id="2393"></issue></li>
                        <li>Optimized Button, Radio, Checkbox style, enhanced keyboard accessibility, closer to native. <issue id="1647"></issue></li>
                        <li>Menu supports multi-level nesting.</li>
                        <li>ColorPicker add new property <code>hue</code> to control whether to show the hue slider. <issue id="2672"></issue></li>
                        <li>AutoComplete add property <code>placement</code>. <issue id="2803"></issue></li>
                        <li>Input add property <code>clearable</code>. <issue id="2884"></issue></li>
                        <li>Dropdown add new event <code>@on-clickoutside</code>. <issue id="2783"></issue></li>
                        <li>Fixed Table bug that using sort or filter on fixed column. <issue id="2832"></issue></li>
                        <li>Fixed Table bug that sometimes throw error when filtering. <issue id="2352"></issue></li>
                        <li>Fixed Table bug when there is a scrollbar, and set data to empty, the table head is wrong. <issue id="2775"></issue></li>
                        <li>Fixed Cascader bug when <code>label</code> is empty. <issue id="2722"></issue></li>
                        <li>Fixed Cascader bug in <code>change-on-select</code> mode, dynamically change the data can not select the bound value. <issue id="2793"></issue></li>
                        <li>Fixed Dropdown bug when <code>trigger="click"</code>, will throw error sometimes. <issue id="2780"></issue></li>
                        <li>Fixed Slider bug when <code>show-tip="always"</code> and using in Modal, the Tooltip position is wrong. <issue id="2852"></issue></li>
                        <li>Optimized Table in multiple choice mode, when data is empty, can not click the checkbox all button now. <issue id="2823"></issue></li>
                        <li>Optimized the style of $Notice using Render function. <issue id="2752"></issue></li>
                        <li>Optimized the style of Input in the textarea mode.</li>
                        <li>Optimized the disabled style of Select in the filterable mode. <issue id="2893"></issue></li>
                        <li>Add Hindi. <mention id="rajnikant307"></mention></li>
                        <li>Add Farsi. <mention id="roshangara"></mention></li>
                        <li>Add Romanian. <mention id="Leonard1980"></mention></li>
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
                        <li>Add responsive components(including Layout, Header, Sider, Content, Footer). <issue id="2646"></issue> <mention id="lison16"></mention> <router-link to="/components/layout-en">View</router-link></li>
                        <li>Tag supports custom colors. <issue id="2644"></issue></li>
                        <li>$Message and $Notice support Render function. <issue id="2667"></issue></li>
                        <li>Affix optimizes the height of the occupied area when scrolling. <issue id="2628"></issue></li>
                        <li>$Modal supports press ESC key to close. <issue id="2362"></issue></li>
                        <li>TimeRange supports steps property. <issue id="2580"></issue></li>
                        <li>Fixed bug that cannot load Submenu components on demand. <issue id="2553"></issue></li>
                        <li>Fixed the problem of the Circle and Switch tag warning under Vue 2.5.11.</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.4" h2></Anchor>
                    <p>
                        <code>2017-12-01</code>
                    </p>
                    <ul>
                        <li>Fixed bug that import some components on demand. <issue id="2537"></issue></li>
                        <li>Input add more type. <issue id="2526"></issue></li>
                        <li>Add Italian. <mention id="lucagentile"></mention></li>
                        <li>Add Thai. <mention id="NatJNP"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.3" h2></Anchor>
                    <p>
                        <code>2017-11-16</code>
                    </p>
                    <ul>
                        <li>Fixed problem that can not be used in Nuxt.js under version 2.7.0.</li>
                        <li>Fixed a bug about InputNumber. <issue id="2418"></issue></li>
                        <li>Update Spanish. <issue id="2426"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.2" h2></Anchor>
                    <p>
                        <code>2017-11-14</code>
                    </p>
                    <ul>
                        <li>Fixed bug when Tabs was destroyed.</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.1" h2></Anchor>
                    <p>
                        <code>2017-11-14</code>
                    </p>
                    <ul>
                        <li>Fix the problem of errors in Tabs. <issue id="2407"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.7.0 Lara Croft GO" h2></Anchor>
                    <p>
                        <code>2017-11-13</code>
                    </p>
                    <ul>
                        <li>i18n support vue-i18n 6.x+ version, and support using with <code>script</code> tag. Improve the i18n doc. <router-link to="/docs/guide/i18n-en">View</router-link></li>
                        <li>Now you can load components on demand. <router-link to="/docs/guide/start-en">View</router-link></li>
                        <li>Form validation method <code>validate</code> supporting Promise. <issue id="2018"></issue></li>
                        <li>Form add new property <code>autocomplete</code>. </li>
                        <li>BreadcrumbItem <code>href</code> support the <code>to</code> Object of vue-router, and add new property <code>to</code>, the same as href. The href property will be abandoned in the future. <issue id="2214"></issue></li>
                        <li>Input add new property <code>spellcheck</code>, and some components add <code>autocomplete</code> and <code>spellcheck</code> as default. <issue id="2324"></issue></li>
                        <li>Modal add new event <code>on-visible-change</code>. </li>
                        <li>Transfer add new event <code>on-selected-change</code>. <issue id="2019"></issue></li>
                        <li>InputNumber add new event <code>on-focus</code> and <code>on-blur</code>. </li>
                        <li>Avatar style adjusts to center. <issue id="1926"></issue></li>
                        <li>Fixed InputNumber bug that sometimes unable to enter the range of numbers. <issue id="2205"></issue></li>
                        <li>Fixed Table bug when it is not set width and in vertical scroll, the fixed column's position is wrong. <issue id="2102"></issue></li>
                        <li>Fixed Table bug when the column is expandable and fixed, the fixed column will be rendered again. <issue id="1648"></issue></li>
                        <li>Fixed DatePicker and TimePicker that can not trigger <code>on-change</code> event when click clear button at first time.<issue id="2215"></issue></li>
                        <li>Fixed DatePicker, TimePicker and ColorPicker bug that using in FormItem, the icon is incorrect.<issue id="2219"></issue></li>
                        <li>Fixed an IE bug of TimePicker. <issue id="2330"></issue></li>
                        <li>Fixed Page bug in simple mode, enter an empty string, it shows NaN. <issue id="1575"></issue></li>
                        <li>Fixed Tooltip bug when change the content, the position is wrong. <issue id="1482"></issue></li>
                        <li>Add Ukrainian. <mention id="f3man"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.6.0 FRAMED" h2></Anchor>
                    <p>
                        <code>2017-10-26</code>
                    </p>
                    <ul>
                        <li>Refactor the Tree component to support Render function, asynchronous loading data, and perfect documentation. <mention id="SergioCrisostomo"></mention></li>
                        <li>Carousel add new properties <code>loop</code> and <code>radius-dot</code>. <issue id="2181"></issue> <mention id="lisafra"></mention></li>
                        <li>Tabs can be rolled when TabPane are too much. <issue id="1031"></issue> <mention id="marxy"></mention></li>
                        <li>The Date panel can display local year and month formats based on the current language package. <issue id="2097"></issue> <mention id="SergioCrisostomo"></mention></li>
                        <li>Table add new properties <code>callback</code>, <code>quoted</code> and <code>separator</code> in export csv file. <issue id="2114"></issue></li>
                        <li>Table add filter event <code>on-filter-change</code>. <issue id="2078"></issue></li>
                        <li>Tag add new property <code>checkable</code>. <issue id="2115"></issue></li>
                        <li>Scroll add new property <code>distance-to-edge</code>.  <issue id="2137"></issue></li>
                        <li>Fix the Scroll component bug under the Firefox browser that unable to trigger the rolling event. <issue id="2135"></issue></li>
                        <li>Fix Select bug in remote and multiple mode, and when the data is cleared, the selected item is not empty. <issue id="2066"></issue></li>
                        <li>Fix Poptip bug in transfer mode, the float layer will be closed when click inside. <issue id="1700"></issue></li>
                        <li>Fix Tabs bug that can not update TabPane using v-for directive. <issue id="2100"></issue></li>
                        <li>Fix Cascader bug in trigger mode with only one item, sometimes it will be selected directly. <issue id="1922"></issue></li>
                        <li>Fix the bug when Input size is small, and using in FormItem, the icon's position is wrong. <issue id="2149"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.5.1" h2></Anchor>
                    <p>
                        <code>2017-10-18</code>
                    </p>
                    <ul>
                        <li>Fixed bug in version 2.5.0 that the DatePicker will be displayed <code>false</code> when binding an empty data. <issue id="2119"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.5.0 Old Man’s Journey" h2></Anchor>
                    <p>
                        <code>2017-10-17</code>
                    </p>
                    <ul>
                        <li><strong>Publish management system template <a href="https://github.com/iview/iview-admin" target="_blank">iview-admin</a>.</strong></li>
                        <li>Add infinite Scroll component. <router-link to="/components/scroll-en">View</router-link></li>
                        <li>Date will automatically identify the weekly start Date according to the current language package. <issue id="1809"></issue></li>
                        <li>InputNumber add <code>readonly</code> and <code>editable</code> properties. </li>
                        <li>Optimize the performance of InputNumber real-time input.<issue id="2059"></issue></li>
                        <li>Optimized Date to focusout after entering a wrong Date format. <issue id="2002"></issue></li>
                        <li>Fix the problem that Date is not validated by the Form under SSR. <issue id="1971"></issue></li>
                        <li>Fix a problem with Date in IE11. <issue id="1937"></issue></li>
                        <li>Fix the bug that Date, Dropdown in transfer mode, the style is wrong when the body's width is 100%. <issue id="2050"></issue></li>
                        <li>Fix the bug that sometimes the error message cannot be cleared when the FormItem set `error` property. <issue id="2047"></issue></li>
                        <li>Fix Badge bug that when the dot is opened and the count is 0, the dot is displayed. </li>
                        <li>Fix InputNumber bug that when the precision is 0, unable to set the precision to an integer. <issue id="2026"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.4.0 Monument" h2></Anchor>
                    <p>
                        <code>2017-09-25</code>
                    </p>
                    <ul>
                        <li>InputNumber adds new property <code>precision</code>. <issue id="1810"></issue></li>
                        <li>Spin adds global usage <code>$Spin</code>. <issue id="1063"></issue></li>
                        <li>Optimize Spin styles, <code>fix</code> no longer mandatory set parent's width and height.</li>
                        <li>Table supports adaptive width. <issue id="690"></issue></li>
                        <li>Table adds property <code>loading</code> and named slot <code>loading</code>. <issue id="704"></issue></li>
                        <li>Table adds method <code>clearCurrentRow</code> to clear highlighted row. <issue id="1372"></issue></li>
                        <li>Table event <code>@on-row-click</code> and <code>@on-row-dblclick</code> params add index. <issue id="693"></issue></li>
                        <li>Date supports the dynamic toggle type. <issue id="1851"></issue></li>
                        <li>Steps supports dynamic setting Step.</li>
                        <li>All form components add <code>name</code> property. <issue id="812"></issue></li>
                        <li>FormItem adds <code>label-for</code> property. Input, AutoComplete, Cascader, Date, InputNumber, Select(filterable) add <code>element-id</code> property, click label can focus corresponding component when label-for is equivalent to element-id. <issue id="433"></issue></li>
                        <li>Modify the z-index value of the Menu. <issue id="823"></issue></li>
                        <li>Optimize Message styles. <issue id="1881"></issue></li>
                        <li>Optimize Select styles. <issue id="860"></issue></li>
                        <li>Optimize the interaction of Date when press tab key. <issue id="1930"></issue></li>
                        <li>Fix Table bug in stripe mode that hover style is not correct. <issue id="1380"></issue></li>
                        <li>Fix Tabs bug after closing all tabs. <issue id="1842"></issue></li>
                        <li>Fix Select bug in remote mode, highlight the search word, retype and select an item, the query is incorrect. <issue id="1865"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.3.1 & 2.3.2" h2></Anchor>
                    <p>
                        <code>2017-09-10</code>
                    </p>
                    <ul>
                        <li>Publish <router-link to="/docs/guide/iview-loader-en">iview-loader</router-link> .</li>
                        <li>Fix the bug that the slot cannot display correctly when the Switch uses <code>true-value</code> and <code>false-value</code>. <issue id="1797"></issue></li>
                        <li>Fix the bug that Select use the same Option data, only the first one can be selected. <issue id="1807"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.3.0 Lumino City" h2></Anchor>
                    <p>
                        <code>2017-09-05</code>
                    </p>
                    <ul>
                        <li>Switch add new property <code>true-value</code> and <code>false-value</code>. <issue id="1399"></issue></li>
                        <li>Input add new property <code>autocomplete</code>.</li>
                        <li>Table column add <code>type: html</code> to avoid XSS. <issue id="993"></issue></li>
                        <li>When the Table column is expandable, it can set the title or renderHeader.</li>
                        <li>Improve Select rendering performance. <issue id="1777"></issue></li>
                        <li>Fix the bug when Table columns are empty. <issue id="1736"></issue></li>
                        <li>Fix Table bug in selection mode when all columns are disabled, the header will be checked. <issue id="1751"></issue></li>
                        <li>Fix Select bug that select an Option, the html tag will be included. <issue id="1690"></issue></li>
                        <li>Fix Select bug in remote mode, when clear data, the label will not be clear. <issue id="1743"></issue></li>
                        <li>Fix Rate bug in allow-half mode. <issue id="1761"></issue></li>
                        <li>Fix Date bug that unable to display the initial value in IE 11. <issue id="1422"></issue></li>
                        <li>Fix Date bug in <code>datetime</code> type, clear date and select again, the time is wrong. <issue id="1223"></issue></li>
                        <li>Fix Date bug without default value, sometimes choose the time one day ahead. <issue id="1734"></issue></li>
                        <li>Fix Tabs bug that bottom border is not correct in IE 11. <issue id="695"></issue></li>
                        <li>Fix Tooltip bug in always mode, the position is wrong. <issue id="1568"></issue></li>
                        <li>Fix Slider bug when dbclick, it will jump to the left. <issue id="1354"></issue></li>
                        <li>Fix Cascader bug in transfer mode, the style is wrong. <issue id="1728"></issue></li>
                        <li>Add Indonesian. <mention id="IndraGunawan"></mention></li>
                        <blockquote>Special thanks to <mention id="SergioCrisostomo"></mention></blockquote>
                    </ul>
                </Timeline-item>
                <Timeline-item color="red">
                    <Icon type="ios-heart" size="18" slot="dot"></Icon>
                    <Anchor title="2.2.0 Shadowmatic" h2></Anchor>
                    <p>
                        <code>2017-08-28</code>
                    </p>
                    <ul>
                        <li>Add Avatar component. <router-link to="/components/avatar-en">View</router-link></li>
                        <li>Add ColorPicker component. <router-link to="/components/color-picker-en">View</router-link></li>
                        <li>Add AutoComplete component.<router-link to="/components/auto-complete-en">View</router-link></li>
                        <li>Form supports validation of ColorPicker and AutoComplete components.</li>
                        <li>Radio and RadioGroup add <code>size</code> property.</li>
                        <li>Checkbox and CheckboxGroup add <code>size</code> property.</li>
                        <li>Components with size property add <code>default</code> value.</li>
                        <li>Fix the bug that the Select can still input when opening the disabled in the filterable mode. <issue id="1547"></issue></li>
                        <li>Fix Poptip in the transfer mode, using the confirm style bug. <issue id="1612"></issue></li>
                        <li>Fix a problem with InputNumber. <issue id="1654"></issue></li>
                        <li>Optimize the Grid component for gutter settings. <issue id="1661"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.1.0 Alto's Adventure" h2></Anchor>
                    <p>
                        <code>2017-08-14</code>
                    </p>
                    <ul>
                        <li>TimePicker add new property <code>steps</code>, You can set the interval of hours, minutes, and seconds. <mention id="SergioCrisostomo"></mention></li>
                        <li>Radio、Checkbox add new property <code>true-value</code> and <code>false-value</code>. <issue id="1191"></issue></li>
                        <li>The current of the Page supports the <code>.sync</code> modifier.</li>
                        <li>Poptip、Tooltip add event <code>on-popper-show</code>.</li>
                        <li>Optimize the export of csv in the Safari browser.</li>
                        <li>Fix Cascader bug in <code>change-on-select</code> mode that when you choose item again, the panel does not reset the sublist. <issue id="1553"></issue></li>
                        <li>Fix Cascader bug in the dynamic load option, when the child's data is empty, recursively triggered the requested.</li>
                        <li>Fix InputNumber bug that sometimes to calculate inaccurate. <issue id="1452"></issue></li>
                        <li>Fix InputNumber bug that not watch for min and max. <issue id="1134"></issue></li>
                        <li>Fix Page when changing the <code>total</code>, the page number is incorrect. <issue id="1543"></issue></li>
                        <li>Fix Date in datetimerange mode, the data is incorrectly returned. <issue id="1220"></issue></li>
                        <li>Fix the bug that the Tree automatically checked when children were empty. <issue id="1504"></issue></li>
                        <li>Fix a bug that after the replacement of the Form, some of the components can not be verified for the first time. <issue id="1534"></issue></li>
                        <li>Add Vietnamese. <mention id="hckhanh"></mention></li>
                        <li>Add Portuguese. <mention id="SergioCrisostomo"></mention></li>
                        <li>Add Swedish. <mention id="SergioCrisostomo"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item color="green">
                    <Icon type="trophy" size="18" slot="dot"></Icon>
                    <Anchor title="2.0.0 Leo's Fortune" h2></Anchor>
                    <p>
                        <code>2017-07-28</code>
                    </p>
                    <ul>
                        <li>Nuxt.js support internationalization. <router-link to="/docs/guide/i18n-en">View</router-link></li>
                        <li>Modal width will be displayed as a percentage when less than 100.</li>
                        <li>Progress add new property <code>vertical</code>. <issue id="629"></issue></li>
                        <li>Table add property <code>sortType</code> to achieve the default sort. <issue id="1403"></issue></li>
                        <li>Table will prevent bubbling under selection mode. <issue id="1271"></issue></li>
                        <li>Table replace <code>renderHeader</code> to a Render function. <issue id="1357"></issue></li>
                        <li>When sorting using Table, click the header title can also be sorted. <issue id="122"></issue></li>
                        <li>Fixed Table bug that using Select, Dropdown and other components can not be folded. <issue id="1341"></issue></li>
                        <li>Fixed Table bug that fixed column height is incorrect when data is empty. <issue id="1387"></issue></li>
                        <li>Fixed Table bug that column without width will be disappeared when data is empty. <issue id="658"></issue></li>
                        <li>Fixed Table bug, set the height and add some data, the height is incorrect when data is empty. <a href="https://github.com/iview/iview/commit/119eeafedea02d984650b82920abdcdf4e809f79" target="_blank">commit</a></li>
                        <li>
                            Modal, Poptip, Tooltip, Dropdown, Select, Date, Cascader add property <code>transfer</code>, it will be inserted to body when the value is true. <issue id="830"></issue> <issue id="844"></issue> <issue id="1187"></issue>
                            <blockquote>A component with a floating layer, when used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results.</blockquote>
                        </li>
                        <li>Input add event @on-keyup, @on-keydown, @on-keypress. </li>
                        <li>Fixed Select bug that using in Modal, the layer position is not correct under remote mode. <issue id="1099"></issue></li>
                        <li>Fixed bug that when Tabs contains other Tabs, the outer one disable animation, the inner can not be clicked. <issue id="1427"></issue></li>
                        <li>Add Korean. <mention id="dokenzy"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.19" h2></Anchor>
                    <p>
                        <code>2017-07-17</code>
                    </p>
                    <ul>
                        <li>Support Vue 2.4.1</li>
                        <li>Support SSR and Nuxt.js.<issue id="1315"></issue></li>
                        <li>Page supports keypad operation.<issue id="1318"></issue></li>
                        <li>Table add new event <code>@on-select-cancel</code> to cancel select row. <issue id="705"></issue></li>
                        <li>Fixed Select bug in remote mode that set <code>label</code> does not take effect.<issue id="1286"></issue></li>
                        <li>Fixed Table, Cascader, Tree bug in Vue 2.4.1 <issue id="1353"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Button type="ghost" size="large" @click="handleBefore">View 1.x Change Log</Button>
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