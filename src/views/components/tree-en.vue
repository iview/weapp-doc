<template>
    <i-article>
        <article>
            <h1>Tree</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>When To Use?</p>
            <p>Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The Tree component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a Tree.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Tree :data="data1"></Tree>
                </div>
                <div slot="desc">
                    <p>The most basic usage, tell you how to use selected and expanded.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Checkbox">
                <div slot="demo">
                    <Tree :data="data2" show-checkbox></Tree>
                </div>
                <div slot="desc">
                    <p>Set the property <code>show-checkbox</code> to check the nodes.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.checkbox }}</i-code>
            </Demo>
            <Demo title="Lazy mode">
                <div slot="demo">
                    <Tree :data="data3" :load-data="loadData" show-checkbox></Tree>
                </div>
                <div slot="desc">
                    <p>Using the <code>load-data</code> property to load the child nodes lazily, you need to add <code>loading</code> to the data.</p>
                    <p>The first param of load-data is current node data. Call the second param and transfer the data obtained.</p>
                    <p>If a node does not contain <code>loading</code> and <code>children</code> fields, the asynchronous loading effect will not be applied.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.lazy }}</i-code>
            </Demo>
            <Demo title="Expand, Selected, Checked and Disabled">
                <div slot="demo">
                    <Tree :data="data4" show-checkbox multiple></Tree>
                </div>
                <div slot="desc">
                    <p>Set <code>expand</code>, <code>selected</code>, <code>checked</code> and <code>disabled</code> to nodes can set the node to expand, select, check, and disable.</p>
                    <p>Multiple choices can be made for setting property <code>multiple</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.more }}</i-code>
            </Demo>
            <Demo title="Custom node content">
                <div slot="demo">
                    <Tree :data="data5" :render="renderContent"></Tree>
                </div>
                <div slot="desc">
                    <p>Using a powerful Render function allows you to customize the nodes to display content and interactions, such as adding icons, buttons, and so on.</p>
                    <p>The second parameter of the Render function consists of three fields:</p>
                    <ul>
                        <li><strong>root</strong> &lt;Array&gt;：root node of tree</li>
                        <li><strong>node</strong> &lt;Object&gt;：current node</li>
                        <li><strong>data</strong> &lt;Object&gt;：current node data</li>
                    </ul>
                    <p>By reasonably using root, node, and data to achieve various effects, the iView sets a <code>nodeKey</code> field for each node to identify the node's id.</p>
                    <p>The Render function is divided into two types. One is to set the same rendering content to each node of the current Tree, which is passed through the property <code>render</code> of the Tree component. The other is to set up a single node, set in the <code>render</code> field of the node; At the same time, the Render function of the current node is preferred.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.render }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Tree props" h3></Anchor>
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
                        <td>data</td>
                        <td>An array of nestable node properties that generates tree data.</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>multiple</td>
                        <td>Allows selecting multiple treeNodes.</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>show-checkbox</td>
                        <td>Adds a Checkbox before the treeNodes.</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>empty-text</td>
                        <td>A tip without data.</td>
                        <td>String</td>
                        <td>No Data</td>
                    </tr>
                    <tr>
                        <td>load-data</td>
                        <td>Methods to load data lazily, see examples.</td>
                        <td>Function</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>render</td>
                        <td>Custom node content, see examples.</td>
                        <td>Function</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>children-key</td>
                        <td>Define child node key</td>
                        <td>String</td>
                        <td>children</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="Tree events" h3></Anchor>
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
                        <td>on-select-change</td>
                        <td>Emitted when the tree node is clicked.</td>
                        <td>The currently selected node array.</td>
                    </tr>
                    <tr>
                        <td>on-check-change</td>
                        <td>Emitted when the checkbox is clicked.</td>
                        <td>An array of nodes is currently checked.</td>
                    </tr>
                    <tr>
                        <td>on-toggle-expand</td>
                        <td>Emitted when when the list is expanded or dropped.</td>
                        <td>Current nodes.</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="Tree methods" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>Method Name</th>
                        <th>Description</th>
                        <th>Arguments</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>getCheckedNodes</td>
                        <td>Gets the checked node.</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>getSelectedNodes</td>
                        <td>Gets the selected node.</td>
                        <td>None</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="children" h3></Anchor>
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
                        <td>title</td>
                        <td>Title</td>
                        <td>String | Element String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>expand</td>
                        <td>Whether to expand the child node.</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>Disables the treeNode</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>disableCheckbox</td>
                        <td>Disables the checkbox of the treeNode.</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>selected</td>
                        <td>Whether to select a child node.</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>checked</td>
                        <td>Whether to check node (if checked, the child node will check all).</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>children</td>
                        <td>An array of child nodes</td>
                        <td>Array</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>render</td>
                        <td>Custom node content, see examples.</td>
                        <td>Function</td>
                        <td>-</td>
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
    import Code from '../../code/tree';
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
                data1: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                data2: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                data3: [
                    {
                        title: 'parent',
                        loading: false,
                        children: []
                    }
                ],
                data4: [
                    {
                        title: 'parent 1',
                        expand: true,
                        selected: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        disabled: true
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        checked: true
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                data5: [
                    {
                        title: 'parent 1',
                        expand: true,
                        render: (h, { root, node, data }) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%'
                                }
                            }, [
                                h('span', [
                                    h('Icon', {
                                        props: {
                                            type: 'ios-folder-outline'
                                        },
                                        style: {
                                            marginRight: '8px'
                                        }
                                    }),
                                    h('span', data.title)
                                ]),
                                h('span', {
                                    style: {
                                        display: 'inline-block',
                                        float: 'right',
                                        marginRight: '32px'
                                    }
                                }, [
                                    h('Button', {
                                        props: Object.assign({}, this.buttonProps, {
                                            icon: 'ios-plus-empty',
                                            type: 'primary'
                                        }),
                                        style: {
                                            width: '52px'
                                        },
                                        on: {
                                            click: () => { this.append(data) }
                                        }
                                    })
                                ])
                            ]);
                        },
                        children: [
                            {
                                title: 'child 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'ghost',
                    size: 'small',
                }
            }
        },
        methods: {
            loadData (item, callback) {
                setTimeout(() => {
                    const data = [
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        },
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            },
            renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-plus-empty'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => { this.append(data) }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-minus-empty'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                const children = data.children || [];
                children.push({
                    title: 'appended node',
                    expand: true
                });
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            }
        }
    };
</script>