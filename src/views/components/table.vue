<style>
    .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>
<template>
    <div>
        <i-article>
            <article>
                <h1>Table 表格</h1>
                <Anchor title="概述" h2></Anchor>
                <p>主要用于展示大量结构化数据。</p>
                <p>支持排序、筛选、分页、自定义操作、导出 csv 等复杂功能。</p>
                <Alert show-icon style="margin-top: 16px">注意：非 template/render 模式下，需使用 <code>i-table</code>。</Alert>
                <Anchor title="代码示例" h2></Anchor>
                <Demo title="基础用法" vertical hide-code>
                    <div slot="demo">
                        <Table :columns="columns1" :data="data1"></Table>
                    </div>
                    <div slot="desc">
                        <p>表格的最简单用法。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.base }}</i-code>
                </Demo>
                <Demo title="斑马纹" vertical hide-code>
                    <div slot="demo">
                        <Table stripe :columns="columns1" :data="data1"></Table>
                    </div>
                    <div slot="desc">
                        <p>设置属性 <code>stripe</code> ，表格会间隔显示不同颜色，用于区分不同行数据。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.stripe }}</i-code>
                </Demo>
                <Demo title="带边框" vertical hide-code>
                    <div slot="demo">
                        <Table border :columns="columns1" :data="data1"></Table>
                    </div>
                    <div slot="desc">
                        <p>添加表格的边框线。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.border }}</i-code>
                </Demo>
                <Demo title="特定样式" vertical hide-code>
                    <div slot="demo">
                        <p>Custom row styles:</p>
                        <Table :row-class-name="rowClassName" :columns="columns1" :data="data1"></Table>
                        <p>Custom column styles:</p>
                        <Table :columns="columns9" :data="data1"></Table>
                        <p>Custom arbitrary cell styles:</p>
                        <Table :columns="columns1" :data="data8"></Table>
                    </div>
                    <div slot="desc">
                        <p><strong>行</strong>：通过属性 <code>row-class-name</code> 可以给某一行指定一个样式名称。</p>
                        <p><strong>列</strong>：通过给列 columns 设置字段 <code>className</code> 可以给某一列指定一个样式。</p>
                        <p><strong>单元格</strong>：通过给数据 data 设置字段 <code>cellClassName</code> 可以给任意一个单元格指定样式。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.class }}</i-code>
                </Demo>
                <Demo title="固定表头" vertical hide-code>
                    <div slot="demo">
                        <Table height="200" :columns="columns1" :data="data2"></Table>
                    </div>
                    <div slot="desc">
                        <p>通过设置属性 <code>height</code> 给表格指定高度后，会自动固定表头。当纵向内容过多时可以使用。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.height }}</i-code>
                </Demo>
                <Demo title="固定列" vertical hide-code>
                    <div slot="demo">
                        <Table width="550" border :columns="columns2" :data="data3"></Table>
                    </div>
                    <div slot="desc">
                        <p>通过给数据 <code>columns</code> 的项设置 <code>fixed</code> 为 <code>left</code> 或 <code>right</code>，可以左右固定需要的列。当横向内容过多时可以使用。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.fixed }}</i-code>
                </Demo>
                <Demo title="固定表头和列" vertical hide-code>
                    <div slot="demo">
                        <Table width="550" height="200" border :columns="columns2" :data="data4"></Table>
                    </div>
                    <div slot="desc">
                        <p>同时应用上述两个属性，可以同时固定表头和列。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.fixedAll }}</i-code>
                </Demo>
                <Demo title="单选" vertical hide-code>
                    <div slot="demo">
                        <Table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></Table>
                        <br>
                        <Button @click="handleClearCurrentRow">清除单选</Button>
                    </div>
                    <div slot="desc">
                        <p>通过设置属性 <code>highlight-row</code>，可以选中某一行。</p>
                        <p>当选择时，触发事件 <code>@on-current-change</code>，可以自定义操作，事件返回两个值 <code>currentRow</code> 和 <code>oldCurrentRow</code>，分别为当前行的数据和上一次选择的数据。</p>
                        <p>通过给 <code>columns</code> 数据设置一项，指定 <code>type: 'index'</code>，可以自动显示一个从 1 开始的索引列。</p>
                        <p>给 data 项设置特殊 key <code>_highlight: true</code> 可以默认选中当前项。</p>
                        <p>调用 <code>clearCurrentRow</code> 方法可以手动清除选中项。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.highlight }}</i-code>
                </Demo>
                <Demo title="多选" vertical hide-code>
                    <div slot="demo">
                        <Table border ref="selection" :columns="columns4" :data="data1"></Table>
                        <br>
                        <Button @click="handleSelectAll(true)">设置全选</Button>
                        <Button @click="handleSelectAll(false)">取消全选</Button>
                    </div>
                    <div slot="desc">
                        <p>通过给 <code>columns</code> 数据设置一项，指定 <code>type: 'selection'</code>，即可自动开启多选功能。</p>
                        <p>给 data 项设置特殊 key <code>_checked: true</code> 可以默认选中当前项。</p>
                        <p>给 data 项设置特殊 key <code>_disabled: true</code> 可以禁止选择当前项。</p>
                        <p>正确使用好以下事件，可以达到需要的效果：</p>
                        <ul>
                            <li><code>@on-select</code>，选中某一项触发，返回值为 <code>selection</code> 和 <code>row</code>，分别为已选项和刚选择的项。</li>
                            <li><code>@on-select-all</code>，点击全选时触发，返回值为 <code>selection</code>，已选项。</li>
                            <li><code>@on-selection-change</code>，只要选中项发生变化时就会触发，返回值为 <code>selection</code>，已选项。</li>
                        </ul>
                    </div>
                    <i-code lang="html" slot="code">{{ code.selection }}</i-code>
                </Demo>
                <Demo title="排序" vertical hide-code>
                    <div slot="demo">
                        <Table border :columns="columns5" :data="data5"></Table>
                    </div>
                    <div slot="desc">
                        <p>通过给 <code>columns</code> 数据的项，设置 <code>sortable: true</code>，即可对该列数据进行排序。</p>
                        <p>排序默认使用升序和降序，也可以通过设置属性 <code>sortMethod</code> 指定一个自定义排序函数，接收三个参数 a 、 b 和 type。</p>
                        <p>通过给某一列设置 <code>sortType</code> 可以在初始化时使用排序。</p>
                        <p>如果使用远程排序，可以设置 <code>sortable： 'custom'</code>，然后在触发排序事件 <code>@on-sort-change</code>后，进行远程排序，并手动设置新的 data，详见 API。</p>
                        <p>注意，排序并不会影响到源数据 data。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.sort }}</i-code>
                </Demo>
                <Demo title="筛选" vertical hide-code>
                    <div slot="demo">
                        <Table border :columns="columns6" :data="data5"></Table>
                    </div>
                    <div slot="desc">
                        <p>通过给 <code>columns</code> 数据的项，设置 <code>filters</code>，可进行筛选，filters 接收一个数组，详见 Demo 和 API。</p>
                        <p>必须指定一个筛选函数 <code>filterMethod</code> 才可以进行筛选，filterMethod 传入两个参数 value 和 row，详见 Demo 和 API。</p>
                        <p>如果指定 <code>filterMultiple: false</code>，则使用单选，默认为多选。</p>
                        <p>注意，筛选并不会影响到源数据 data。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.filter }}</i-code>
                </Demo>
                <Demo title="自定义列模板" vertical hide-code>
                    <div slot="demo">
                        <Table border :columns="columns7" :data="data6"></Table>
                    </div>
                    <div slot="desc">
                        <p>通过给 <code>columns</code> 数据的项，设置一个函数 <code>render</code>，可以自定义渲染当前列，包括渲染自定义组件，它基于 Vue 的 Render 函数。</p>
                        <p><code>render</code> 函数传入两个参数，第一个是 h，第二个是对象，包含 <code>row</code>、<code>column</code> 和 <code>index</code>，分别指当前单元格数据，当前列数据，当前是第几行。</p>
                        <p><study-render></study-render></p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.render }}</i-code>
                </Demo>
                <Demo title="可展开" vertical hide-code>
                    <div slot="demo">
                        <Table :columns="columns10" :data="data9"></Table>
                    </div>
                    <div slot="desc">
                        <p>当表格内容较多不能一次性完全展示时使用。</p>
                        <p>通过给 <code>columns</code> 数据设置一项，指定 <code>type: 'expand'</code>，即可开启扩展功能。</p>
                        <p>给行数据 data 的某项设置 <code>_expanded</code> 为 true，可以默认展开当前行，设置 <code>_disableExpand</code> 可以禁用当前行的展开功能。</p>
                        <p>渲染展开区域与自定义列模板方法类似，使用 render 函数。当内容较复杂时，可拆分为组件或使用 JSX。</p>
                        <p><study-render></study-render></p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.expand }}</i-code>
                </Demo>

                <Demo title="表头分组" vertical hide-code>
                    <div slot="demo">
                        <Table :columns="columns11" :data="data10" border height="500"></Table>
                    </div>
                    <div slot="desc">
                        <p>给 column 设置 children，可以渲染出分组表头。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.head }}</i-code>
                </Demo>

                <Demo title="加载中" vertical hide-code>
                    <div slot="demo">
                        <Table :loading="loading" :columns="columns1" :data="data1"></Table>
                        <br>
                        切换 Loading 状态 <Switch v-model="loading"></Switch>
                    </div>
                    <div slot="desc">
                        <p>通过设置属性 <code>loading</code> 可以让表格处于加载中状态，在异步请求数据、分页时建议使用。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.loading }}</i-code>
                </Demo>
                <Demo title="尺寸" vertical hide-code>
                    <div slot="demo">
                        <Table size="large" :columns="columns1" :data="data1"></Table>
                        <br>
                        <Table size="small" :columns="columns1" :data="data1"></Table>
                    </div>
                    <div slot="desc">
                        <p>通过设置属性 <code>size</code> 为 <code>large</code> 或 <code>small</code> 可以调整表格尺寸为大或小，默认不填或填写 <code>default</code> 为中。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.size }}</i-code>
                </Demo>
                <Demo title="导出csv" vertical hide-code>
                    <div slot="demo">
                        <Table :columns="columns8" :data="data7" size="small" ref="table"></Table>
                        <br>
                        <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出原始数据</Button>
                        <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> 导出排序和过滤后的数据</Button>
                        <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> 导出自定义数据</Button>
                    </div>
                    <div slot="desc">
                        <p>通过调用 <code>exportCsv()</code> 方法，可以将数据导出为 <code>.csv</code> 的表格文件，详见 API。</p>
                        <p>说明：</p>
                        <ul>
                            <li>支持IE9~IE11、Edge、Chrome、Safari、Firefox 全系列浏览器。</li>
                            <li>IE9、Safari 需要手动修改后缀名为 <code>.csv</code>。</li>
                            <li>IE9暂时只支持英文，中文会显示为乱码。</li>
                        </ul>
                    </div>
                    <i-code lang="html" slot="code">{{ code.csv }}</i-code>
                </Demo>
                <Anchor title="高级示例" h2></Anchor>
                <p>以上示例已经基本涵盖了表格组件的所有功能，我们根据实际业务场景，增加了一些较为复杂的示例，可以结合来看，更深入了解表格组件的使用。</p>
                <Button type="primary" size="large" @click="table1 = true">带有分页的复杂表格</Button>
                <Button type="primary" size="large" @click="table2 = true">多列指标筛选的表格</Button>
                <Button type="primary" size="large" @click="table3 = true">多种效果组合的表格</Button>

                <ad></ad>

                <div class="api">
                    <Anchor title="API" h2></Anchor>
                    <Anchor title="Table props" h3></Anchor>
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
                            <td>data</td>
                            <td>显示的结构化数据，其中，字段 cellClassName 用于设置任意单元格的样式名称，因此数据不能使用该字段，详见示例<strong>特定样式</strong>。</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>columns</td>
                            <td>表格列的配置描述，具体项见后文</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>stripe</td>
                            <td>是否显示间隔斑马纹</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>border</td>
                            <td>是否显示纵向边框</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-header</td>
                            <td>是否显示表头</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>表格宽度，单位 px</td>
                            <td>Number | String</td>
                            <td>自动</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>表格是否加载中</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled-hover</td>
                            <td>禁用鼠标悬停时的高亮</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>highlight-row</td>
                            <td>是否支持高亮选中的行，即单选</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>row-class-name</td>
                            <td>
                                行的 className 的回调方法，传入参数：
                                <ul>
                                    <li><code>row</code>：当前行数据</li>
                                    <li><code>index</code>：当前行的索引</li>
                                </ul>
                            </td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>表格尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不填</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <!--<tr>-->
                            <!--<td><del>context</del></td>-->
                            <!--<td><span style="color: #f50; font-weight: bold;">旧用法，已废弃。</span>设置单元格内渲染自定义组件时的上下文。比如父级是 $parent，根组件是 $root，当 <code>Table</code> 作为一个 slot 封装在其它组件里时，会很有用。使用旧用法时必须设置。</td>-->
                            <!--<td>Object</td>-->
                            <!--<td>Table 所在的上下文</td>-->
                        <!--</tr>-->
                        <tr>
                            <td>no-data-text</td>
                            <td>数据为空时显示的提示内容</td>
                            <td>String</td>
                            <td>暂无数据</td>
                        </tr>
                        <tr>
                            <td>no-filtered-data-text</td>
                            <td>筛选数据为空时显示的提示内容</td>
                            <td>String</td>
                            <td>暂无筛选结果</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="Table events" h3></Anchor>
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
                            <td>on-current-change</td>
                            <td>开启 <code>highlight-row</code> 后有效，当表格的当前行发生变化的时候会触发</td>
                            <td>
                                <ul>
                                    <li><code>currentRow</code>：当前高亮行的数据</li>
                                    <li><code>oldCurrentRow</code>：上一次高亮的数据</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>on-select</td>
                            <td>在多选模式下有效，选中某一项时触发</td>
                            <td>
                                <ul>
                                    <li><code>selection</code>：已选项数据</li>
                                    <li><code>row</code>：刚选择的项数据</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>on-select-cancel</td>
                            <td>在多选模式下有效，取消选中某一项时触发</td>
                            <td>
                                <ul>
                                    <li><code>selection</code>：已选项数据</li>
                                    <li><code>row</code>：取消选择的项数据</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>on-select-all</td>
                            <td>在多选模式下有效，点击全选时触发</td>
                            <td>
                                <ul>
                                    <li><code>selection</code>：已选项数据</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>on-selection-change</td>
                            <td>在多选模式下有效，只要选中项发生变化时就会触发</td>
                            <td>
                                <ul>
                                    <li><code>selection</code>：已选项数据</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>on-sort-change</td>
                            <td>排序时有效，当点击排序时触发</td>
                            <td>
                                <ul>
                                    <li><code>column</code>：当前列数据</li>
                                    <li><code>key</code>：排序依据的指标</li>
                                    <li><code>order</code>：排序的顺序，值为 <code>asc</code> 或 <code>desc</code></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>on-filter-change</td>
                            <td>筛选时有效，筛选条件发生变化时触发</td>
                            <td>当前列数据</td>
                        </tr>
                        <tr>
                            <td>on-row-click</td>
                            <td>单击某一行时触发</td>
                            <td>
                                <ul>
                                    <li>当前行的数据</li>
                                    <li>index</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>on-row-dblclick</td>
                            <td>双击某一行时触发</td>
                            <td>
                                <ul>
                                    <li>当前行的数据</li>
                                    <li>index</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>on-expand</td>
                            <td>展开或收起某一行时触发</td>
                            <td>
                                <ul>
                                    <li><code>row</code>：当前行的数据</li>
                                    <li><code>status</code>：当前的状态</li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="Table slot" h3></Anchor>
                    <table>
                        <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>header</td>
                            <td>表头</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>页脚</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>加载中</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="Table methods" h3></Anchor>
                    <table>
                        <thead>
                        <tr>
                            <th>方法名</th>
                            <th>说明</th>
                            <th>参数</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>exportCsv</td>
                            <td>
                                将数据导出为 <code>.csv</code> 文件，说明：
                                <ul>
                                    <li>支持IE9~IE11、Edge、Chrome、Safari、Firefox 全系列浏览器。</li>
                                    <li>IE9、Safari 需要手动修改后缀名为 <code>.csv</code>。</li>
                                    <li>IE9暂时只支持英文，中文会显示为乱码。</li>
                                </ul>
                            </td>
                            <td>
                                params(Object):
                                <ul>
                                    <li>
                                        <strong>filename</strong>
                                        文件名，默认为 table.csv
                                    </li>
                                    <li>
                                        <strong>original</strong>
                                        是否导出为原始数据，默认为 true
                                    </li>
                                    <li>
                                        <strong>noHeader</strong>
                                        不显示表头，默认为 false
                                    </li>
                                    <li>
                                        <strong>columns</strong>
                                        自定义导出的列数据
                                    </li>
                                    <li>
                                        <strong>data</strong>
                                        自定义导出的行数据
                                    </li>
                                    <li>
                                        <strong>callback</strong>
                                        添加此函数后，不会下载，而是返回数据
                                    </li>
                                    <li>
                                        <strong>separator</strong>
                                        数据分隔符，默认是逗号(,)
                                    </li>
                                    <li>
                                        <strong>quoted</strong>
                                        每项数据是否加引号，默认为 false
                                    </li>
                                </ul>
                                说明：columns 和 data 需同时声明，声明后将导出指定的数据，建议列数据有自定义render时，可以根据需求自定义导出内容
                            </td>
                        </tr>
                        <tr>
                            <td>clearCurrentRow</td>
                            <td>清除高亮项，仅在开启 <code>highlight-row</code> 时可用</td>
                            <td>无</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="column" h3></Anchor>
                    <p>列描述数据对象，是 columns 中的一项</p>
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
                            <td>列类型，可选值为 index、selection、expand、html</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>列头显示文字</td>
                            <td>String</td>
                            <td>#</td>
                        </tr>
                        <tr>
                            <td>key</td>
                            <td>对应列内容的字段名</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>列宽</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>minWidth</td>
                            <td>最小列宽</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>maxWidth</td>
                            <td>最大列宽</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>align</td>
                            <td>对齐方式，可选值为 <code>left</code> 左对齐、<code>right</code> 右对齐和 <code>center</code> 居中对齐</td>
                            <td>String</td>
                            <td>left</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>列的样式名称</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>fixed</td>
                            <td>列是否固定在左侧或者右侧，可选值为 <code>left</code> 左侧和 <code>right</code> 右侧</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>ellipsis</td>
                            <td>开启后，文本将不换行，超出部分显示为省略号</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>render</td>
                            <!--<td>自定义渲染列，传入三个参数 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例</td>-->
                            <td>自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例。<study-render></study-render></td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>renderHeader</td>
                            <td>自定义列头显示内容，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 <code>column</code> 和 <code>index</code>，分别为当前列数据和当前列索引。</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>sortable</td>
                            <td>对应列是否可以排序，如果设置为 <code>custom</code>，则代表用户希望远程排序，需要监听 Table 的 on-sort-change 事件</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>sortMethod</td>
                            <td>自定义排序使用的方法，接收三个参数 a 、 b 和 type，当设置 <code>sortable: true</code> 时有效。type 值为 asc 和 desc</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>sortType</td>
                            <td>设置初始化排序。值为 asc 和 desc</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>filters</td>
                            <td>过滤数据的选项，格式为数组，数组中每项包含 <code>label</code> 和 <code>value</code> 属性，使用过滤，必须同时配置 filterMethod</td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>filterMethod</td>
                            <td>数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>filterMultiple</td>
                            <td>数据过滤的选项是否多选</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>filteredValue</td>
                            <td>在初始化时使用过滤，数组，值为需要过滤的 value 集合</td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>filterRemote</td>
                            <td>使用远程过滤</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>children</td>
                            <td>表头分组</td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </i-article>
        <Modal v-model="table1" title="带有分页的复杂表格" width="1000" :styles="{top: '20px'}">
            <div v-if="table1">
                <div class="ivu-article">
                    <blockquote>
                        <p>该表格来自于 TalkingData <a href="https://www.talkingdata.com/product-MarketingCloud.jsp" target="_blank">MarketingCloud</a> 产品，展示的是人群画像列表，数据为模拟数据，分页只是提供效果展示，并非真实拉取服务端数据。</p>
                    </blockquote>
                </div>
                <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
                <div style="margin: 10px;overflow: hidden">
                    <div style="float: right;">
                        <Page :total="100" :current="1" @on-change="changePage"></Page>
                    </div>
                </div>
                <i-code lang="html" bg>{{ code.table1 }}</i-code>
            </div>
        </Modal>
        <Modal v-model="table2" title="多列指标筛选的表格" width="1000" :styles="{top: '20px'}">
            <div v-if="table2">
                <div class="ivu-article">
                    <blockquote>
                        <p>该表格来自于 TalkingData <a href="https://www.talkingdata.com/product-AdTracking.jsp">Ad Tracking</a> 产品，展示各种推广活动不同指标的数据，数据为模拟数据。</p>
                        <p>该示例主要展示固定列、自定义列数量以及排序的功能。</p>
                    </blockquote>
                </div>
                <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
                    <Checkbox label="show">展示</Checkbox>
                    <Checkbox label="weak">唤醒</Checkbox>
                    <Checkbox label="signin">登录</Checkbox>
                    <Checkbox label="click">点击</Checkbox>
                    <Checkbox label="active">激活</Checkbox>
                    <Checkbox label="day7">7日留存</Checkbox>
                    <Checkbox label="day30">30日留存</Checkbox>
                    <Checkbox label="tomorrow">次日留存</Checkbox>
                    <Checkbox label="day">日活跃</Checkbox>
                    <Checkbox label="week">周活跃</Checkbox>
                    <Checkbox label="month">月活跃</Checkbox>
                </Checkbox-group>
                <Table :data="tableData2" :columns="tableColumns2" border></Table>
                <br>
                <i-code lang="html" bg>{{ code.table2 }}</i-code>
            </div>
        </Modal>
        <Modal v-model="table3" title="多种效果组合的表格" width="1000" :styles="{top: '20px'}">
            <div v-if="table3">
                <div class="ivu-article">
                    <blockquote>
                        <p>该示例主要展示了表格丰富的显示效果。</p>
                    </blockquote>
                </div>
                <div style="margin: 10px">
                    显示边框 <i-switch v-model="showBorder" style="margin-right: 5px"></i-switch>
                    显示斑马纹 <i-switch v-model="showStripe" style="margin-right: 5px"></i-switch>
                    显示索引 <i-switch v-model="showIndex" style="margin-right: 5px"></i-switch>
                    显示多选框 <i-switch v-model="showCheckbox" style="margin-right: 5px"></i-switch>
                    显示表头 <i-switch v-model="showHeader" style="margin-right: 5px"></i-switch>
                    表格滚动 <i-switch v-model="fixedHeader" style="margin-right: 5px"></i-switch>
                    <br>
                    <br>
                    表格尺寸
                    <Radio-group v-model="tableSize" type="button">
                        <Radio label="large">大</Radio>
                        <Radio label="default">中</Radio>
                        <Radio label="small">小</Radio>
                    </Radio-group>
                </div>
                <Table :border="showBorder" :stripe="showStripe" :show-header="showHeader" :height="fixedHeader ? 250 : ''" :size="tableSize" :data="tableData3" :columns="tableColumns3"></Table>
                <br>
                <i-code lang="html" bg>{{ code.table3 }}</i-code>
            </div>
        </Modal>
    </div>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/table';
    import Anchor from '../../components/anchor.vue';

    import expandRow from './table-expand.vue';
    import studyRender from '../../components/study.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor,
            expandRow,
            studyRender
        },
        data () {
            return {
                code: Code,
                table1: false,
                table2: false,
                table3: false,
                tableData1: this.mockTableData1(),
                tableData2: this.mockTableData2(),
                tableData3: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                tableColumns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Status',
                        key: 'status',
                        render: (h, params) => {
                            const row = params.row;
                            const color = row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red';
                            const text = row.status === 1 ? 'Working' : row.status === 2 ? 'Success' : 'Fail';

                            return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, text);
                        }
                    },
                    {
                        title: 'Portrayal',
                        key: 'portrayal',
                        render: (h, params) => {
                            return h('Poptip', {
                                props: {
                                    trigger: 'hover',
                                    title: params.row.portrayal.length + 'portrayals',
                                    placement: 'bottom'
                                }
                            }, [
                                h('Tag', params.row.portrayal.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                    h('ul', this.tableData1[params.index].portrayal.map(item => {
                                        return h('li', {
                                            style: {
                                                textAlign: 'center',
                                                padding: '4px'
                                            }
                                        }, item)
                                    }))
                                ])
                            ]);
                        }
                    },
                    {
                        title: 'People',
                        key: 'people',
                        render: (h, params) => {
                            return h('Poptip', {
                                props: {
                                    trigger: 'hover',
                                    title: params.row.people.length + 'customers',
                                    placement: 'bottom'
                                }
                            }, [
                                h('Tag', params.row.people.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                    h('ul', this.tableData1[params.index].people.map(item => {
                                        return h('li', {
                                            style: {
                                                textAlign: 'center',
                                                padding: '4px'
                                            }
                                        }, item.n + '：' + item.c + 'People')
                                    }))
                                ])
                            ]);
                        }
                    },
                    {
                        title: 'Sampling Time',
                        key: 'time',
                        render: (h, params) => {
                            return h('div', 'Almost' + params.row.time + 'days');
                        }
                    },
                    {
                        title: 'Updated Time',
                        key: 'update',
                        render: (h, params) => {
                            return h('div', this.formatDate(this.tableData1[params.index].update));
                        }
                    }
                ],
                tableColumns2: [],
                tableColumnsChecked: ['show', 'weak', 'signin', 'click', 'active', 'day7', 'day30', 'tomorrow', 'day', 'week', 'month'],
                showBorder: false,
                showStripe: false,
                showHeader: true,
                showIndex: true,
                showCheckbox: false,
                fixedHeader: false,
                tableSize: 'default',
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                columns2: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
                columns3: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                columns5: [
                    {
                        title: 'Date',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                columns6: [
                    {
                        title: 'Date',
                        key: 'date'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        filters: [
                            {
                                label: 'Greater than 25',
                                value: 1
                            },
                            {
                                label: 'Less than 25',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.age > 25;
                            } else if (value === 2) {
                                return row.age < 25;
                            }
                        }
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        filters: [
                            {
                                label: 'New York',
                                value: 'New York'
                            },
                            {
                                label: 'London',
                                value: 'London'
                            },
                            {
                                label: 'Sydney',
                                value: 'Sydney'
                            }
                        ],
                        filterMethod (value, row) {
                            return row.address.indexOf(value) > -1;
                        }
                    }
                ],
                columns7: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                columns8: [
                    {
                        "title": "Name",
                        "key": "name",
                        "fixed": "left",
                        "width": 200
                    },
                    {
                        "title": "Show",
                        "key": "show",
                        "width": 150,
                        "sortable": true,
                        filters: [
                            {
                                label: 'Greater than 4000',
                                value: 1
                            },
                            {
                                label: 'Less than 4000',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 4000;
                            } else if (value === 2) {
                                return row.show < 4000;
                            }
                        }
                    },
                    {
                        "title": "Weak",
                        "key": "weak",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Signin",
                        "key": "signin",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Click",
                        "key": "click",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Active",
                        "key": "active",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "7, retained",
                        "key": "day7",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "30, retained",
                        "key": "day30",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "The next day left",
                        "key": "tomorrow",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Day Active",
                        "key": "day",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Week Active",
                        "key": "week",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Month Active",
                        "key": "month",
                        "width": 150,
                        "sortable": true
                    }
                ],
                columns9: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                columns10: [
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                columns11: [
                    {
                        title: 'Name',
                        key: 'name',
                        align: 'center',
                        width: 200,
                        fixed: 'left',
                        filters: [
                            {
                                label: 'Joe',
                                value: 1
                            },
                            {
                                label: 'John',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.name === 'Joe';
                            } else if (value === 2) {
                                return row.name === 'John Brown';
                            }
                        }
                    },
                    {
                        title: 'Other',
                        align: 'center',
                        children: [
                            {
                                title: 'Age',
                                key: 'age',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: 'Address',
                                align: 'center',
                                children: [
                                    {
                                        title: 'Street',
                                        key: 'street',
                                        align: 'center',
                                        width: 200
                                    },
                                    {
                                        title: 'Block',
                                        align: 'center',
                                        children: [
                                            {
                                                title: 'Building',
                                                key: 'building',
                                                align: 'center',
                                                width: 200,
                                                sortable: true
                                            },
                                            {
                                                title: 'Door No.',
                                                key: 'door',
                                                align: 'center',
                                                width: 200
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Company',
                        align: 'center',
                        children: [
                            {
                                title: 'Company Address',
                                key: 'caddress',
                                align: 'center',
                                width: 200
                            },
                            {
                                title: 'Company Name',
                                key: 'cname',
                                align: 'center',
                                width: 200
                            }
                        ]
                    },
                    {
                        title: 'Gender',
                        key: 'gender',
                        align: 'center',
                        width: 200,
                        fixed: 'right'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                data2: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                data3: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ],
                data4: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ],
                data5: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ],
                data7: [
                    {
                        "name": "Name1",
                        "fav": 0,
                        "show": 7302,
                        "weak": 5627,
                        "signin": 1563,
                        "click": 4254,
                        "active": 1438,
                        "day7": 274,
                        "day30": 285,
                        "tomorrow": 1727,
                        "day": 558,
                        "week": 4440,
                        "month": 5610
                    },
                    {
                        "name": "Name2",
                        "fav": 0,
                        "show": 4720,
                        "weak": 4086,
                        "signin": 3792,
                        "click": 8690,
                        "active": 8470,
                        "day7": 8172,
                        "day30": 5197,
                        "tomorrow": 1684,
                        "day": 2593,
                        "week": 2507,
                        "month": 1537
                    },
                    {
                        "name": "Name3",
                        "fav": 0,
                        "show": 7181,
                        "weak": 8007,
                        "signin": 8477,
                        "click": 1879,
                        "active": 16,
                        "day7": 2249,
                        "day30": 3450,
                        "tomorrow": 377,
                        "day": 1561,
                        "week": 3219,
                        "month": 1588
                    },
                    {
                        "name": "Name4",
                        "fav": 0,
                        "show": 9911,
                        "weak": 8976,
                        "signin": 8807,
                        "click": 8050,
                        "active": 7668,
                        "day7": 1547,
                        "day30": 2357,
                        "tomorrow": 7278,
                        "day": 5309,
                        "week": 1655,
                        "month": 9043
                    },
                    {
                        "name": "Name5",
                        "fav": 0,
                        "show": 934,
                        "weak": 1394,
                        "signin": 6463,
                        "click": 5278,
                        "active": 9256,
                        "day7": 209,
                        "day30": 3563,
                        "tomorrow": 8285,
                        "day": 1230,
                        "week": 4840,
                        "month": 9908
                    },
                    {
                        "name": "Name6",
                        "fav": 0,
                        "show": 6856,
                        "weak": 1608,
                        "signin": 457,
                        "click": 4949,
                        "active": 2909,
                        "day7": 4525,
                        "day30": 6171,
                        "tomorrow": 1920,
                        "day": 1966,
                        "week": 904,
                        "month": 6851
                    },
                    {
                        "name": "Name7",
                        "fav": 0,
                        "show": 5107,
                        "weak": 6407,
                        "signin": 4166,
                        "click": 7970,
                        "active": 1002,
                        "day7": 8701,
                        "day30": 9040,
                        "tomorrow": 7632,
                        "day": 4061,
                        "week": 4359,
                        "month": 3676
                    },
                    {
                        "name": "Name8",
                        "fav": 0,
                        "show": 862,
                        "weak": 6520,
                        "signin": 6696,
                        "click": 3209,
                        "active": 6801,
                        "day7": 6364,
                        "day30": 6850,
                        "tomorrow": 9408,
                        "day": 2481,
                        "week": 1479,
                        "month": 2346
                    },
                    {
                        "name": "Name9",
                        "fav": 0,
                        "show": 567,
                        "weak": 5859,
                        "signin": 128,
                        "click": 6593,
                        "active": 1971,
                        "day7": 7596,
                        "day30": 3546,
                        "tomorrow": 6641,
                        "day": 1611,
                        "week": 5534,
                        "month": 3190
                    },
                    {
                        "name": "Name10",
                        "fav": 0,
                        "show": 3651,
                        "weak": 1819,
                        "signin": 4595,
                        "click": 7499,
                        "active": 7405,
                        "day7": 8710,
                        "day30": 5518,
                        "tomorrow": 428,
                        "day": 9768,
                        "week": 2864,
                        "month": 5811
                    }
                ],
                data8: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 25,
                        address: 'London No. 1 Lake Park',
                        cellClassName: {
                            age: 'demo-table-info-cell-age',
                            address: 'demo-table-info-cell-address'
                        }
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        cellClassName: {
                            name: 'demo-table-info-cell-name'
                        }
                    }
                ],
                data9: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        job: 'Data engineer',
                        interest: 'badminton',
                        birthday: '1991-05-14',
                        book: 'Steve Jobs',
                        movie: 'The Prestige',
                        music: 'I Cry'
                    },
                    {
                        name: 'Jim Green',
                        age: 25,
                        address: 'London No. 1 Lake Park',
                        job: 'Data Scientist',
                        interest: 'volleyball',
                        birthday: '1989-03-18',
                        book: 'My Struggle',
                        movie: 'Roman Holiday',
                        music: 'My Heart Will Go On'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        job: 'Data Product Manager',
                        interest: 'tennis',
                        birthday: '1992-01-31',
                        book: 'Win',
                        movie: 'Jobs',
                        music: 'Don’t Cry'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        job: 'Data Analyst',
                        interest: 'snooker',
                        birthday: '1988-7-25',
                        book: 'A Dream in Red Mansions',
                        movie: 'A Chinese Ghost Story',
                        music: 'actor'
                    }
                ],
                loading: true,
                data10: []
            }
        },
        computed: {
            tableColumns3 () {
                let columns = [];
                if (this.showCheckbox) {
                    columns.push({
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    })
                }
                if (this.showIndex) {
                    columns.push({
                        type: 'index',
                        width: 60,
                        align: 'center'
                    })
                }
                columns.push({
                    title: 'Date',
                    key: 'date',
                    sortable: true
                });
                columns.push({
                    title: 'Name',
                    key: 'name'
                });
                columns.push({
                    title: 'Age',
                    key: 'age',
                    sortable: true,
                    filters: [
                        {
                            label: 'Greater than 25',
                            value: 1
                        },
                        {
                            label: 'Less than 25',
                            value: 2
                        }
                    ],
                    filterMultiple: false,
                    filterMethod (value, row) {
                        if (value === 1) {
                            return row.age > 25;
                        } else if (value === 2) {
                            return row.age < 25;
                        }
                    }
                });
                columns.push({
                    title: 'Address',
                    key: 'address',
                    filters: [
                        {
                            label: 'New York',
                            value: 'New York'
                        },
                        {
                            label: 'London',
                            value: 'London'
                        },
                        {
                            label: 'Sydney',
                            value: 'Sydney'
                        }
                    ],
                    filterMethod (value, row) {
                        return row.address.indexOf(value) > -1;
                    }
                });
                return columns;
            }
        },
        methods: {
            rowClassName (row, index) {
                if (index === 1) {
                    return 'demo-table-info-row';
                } else if (index === 3) {
                    return 'demo-table-error-row';
                }
                return '';
            },
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: 'Business' + Math.floor(Math.random () * 100 + 1),
                        status: Math.floor(Math.random () * 3 + 1),
                        portrayal: ['City', 'People', 'Cost', 'Life', 'Entertainment'],
                        people: [
                            {
                                n: 'People' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            },
                            {
                                n: 'People' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            },
                            {
                                n: 'People' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            }
                        ],
                        time: Math.floor(Math.random () * 7 + 1),
                        update: new Date()
                    })
                }
                return data;
            },
            formatDate (date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            },
            changePage () {
                this.tableData1 = this.mockTableData1();
            },
            mockTableData2 () {
                let data = [];
                function getNum() {
                    return Math.floor(Math.random () * 10000 + 1);
                }
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: 'Name' + (i+1),
                        fav: 0,
                        show: getNum(),
                        weak: getNum(),
                        signin: getNum(),
                        click: getNum(),
                        active: getNum(),
                        day7: getNum(),
                        day30: getNum(),
                        tomorrow: getNum(),
                        day: getNum(),
                        week: getNum(),
                        month: getNum()
                    })
                }
                return data;
            },
            getTable2Columns () {
                const table2ColumnList = {
                    name: {
                        title: 'Name',
                        key: 'name',
                        fixed: 'left',
                        width: 200,
                        render: (h, params) => {
                            const fav = this.tableData2[params.index].fav;
                            const style = fav === 0 ? {
                                cursor: 'pointer'
                            } : {
                                cursor: 'pointer',
                                color: '#f50'
                            };

                            return h('div', [
                                h('Icon', {
                                    style: style,
                                    props: {
                                        type: fav === 0 ? 'ios-star-outline' : 'ios-star'
                                    },
                                    nativeOn: {
                                        click: () => {
                                            this.toggleFav(params.index);
                                        }
                                    }
                                }),
                                h('span', ' ' + params.row.name)
                            ]);
                        }
                    },
                    show: {
                        title: 'Show',
                        key: 'show',
                        width: 150,
                        sortable: true
                    },
                    weak: {
                        title: 'Weak',
                        key: 'weak',
                        width: 150,
                        sortable: true
                    },
                    signin: {
                        title: 'Signin',
                        key: 'signin',
                        width: 150,
                        sortable: true
                    },
                    click: {
                        title: 'Click',
                        key: 'click',
                        width: 150,
                        sortable: true
                    },
                    active: {
                        title: 'Active',
                        key: 'active',
                        width: 150,
                        sortable: true
                    },
                    day7: {
                        title: '7, retained',
                        key: 'day7',
                        width: 150,
                        sortable: true
                    },
                    day30: {
                        title: '30, retained',
                        key: 'day30',
                        width: 150,
                        sortable: true
                    },
                    tomorrow: {
                        title: 'The next day left',
                        key: 'tomorrow',
                        width: 150,
                        sortable: true
                    },
                    day: {
                        title: 'Day Active',
                        key: 'day',
                        width: 150,
                        sortable: true
                    },
                    week: {
                        title: 'Week Active',
                        key: 'week',
                        width: 150,
                        sortable: true
                    },
                    month: {
                        title: 'Month Active',
                        key: 'month',
                        width: 150,
                        sortable: true
                    }
                };

                let data = [table2ColumnList.name];

                this.tableColumnsChecked.forEach(col => data.push(table2ColumnList[col]));

                return data;
            },
            changeTableColumns () {
                this.tableColumns2 = this.getTable2Columns();
            },
            toggleFav (index) {
                this.tableData2[index].fav = this.tableData2[index].fav === 0 ? 1 : 0;
            },
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: 'The original data'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: 'Sorting and filtering data',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: 'Custom data',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            },
            handleClearCurrentRow () {
                this.$refs.currentRowTable.clearCurrentRow();
            },
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            }
        },
        mounted () {
            this.changeTableColumns();

            const data = [];
            for (let i = 0; i < 20; i++) {
                data.push({
                    key: i,
                    name: 'John Brown',
                    age: i + 1,
                    street: 'Lake Park',
                    building: 'C',
                    door: 2035,
                    caddress: 'Lake Street 42',
                    cname: 'SoftLake Co',
                    gender: 'M',
                });
            }
            this.data10 = data;
        }
    }
</script>