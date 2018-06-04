<style>
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Upload 上传</h1>
            <Anchor title="概述" h2></Anchor>
            <p>文件选择上传和拖拽上传控件。</p>
            <Alert show-icon style="margin-top: 16px">暂不支持 IE9 浏览器。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="点击上传">
                <div slot="demo">
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
                    </Upload>
                </div>
                <div slot="desc">
                    <p>最基本用法，点击上传，一次选择一个文件。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.select }}</i-code>
            </Demo>
            <Demo title="多选">
                <div slot="demo">
                    <Upload
                        multiple
                        action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
                    </Upload>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>multiple</code>，可以选择多个文件。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.multiple }}</i-code>
            </Demo>
            <Demo title="手动上传">
                <div slot="demo">
                    <Upload
                        :before-upload="handleUpload"
                        action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="ghost" icon="ios-cloud-upload-outline">Select the file to upload</Button>
                    </Upload>
                    <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
                </div>
                <div slot="desc">
                    <p>绑定 <code>before-upload</code>，并返回<code>false</code>，可以阻止默认上传流程，手动控制文件上传。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.manual }}</i-code>
            </Demo>
            <Demo title="拖拽上传">
                <div slot="demo">
                    <Upload
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/">
                        <div style="padding: 20px 0">
                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                            <p>Click or drag files here to upload</p>
                        </div>
                    </Upload>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>type</code> 为 <code>drag</code>，可以拖拽上传。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.drag }}</i-code>
            </Demo>
            <Demo title="自定义上传列表">
                <div slot="demo">
                    <div class="demo-upload-list" v-for="item in uploadList">
                        <template v-if="item.status === 'finished'">
                            <img :src="item.url" style="vertical-align:top">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                            </div>
                        </template>
                        <template v-else>
                            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                        </template>
                    </div>
                    <Upload
                        ref="upload"
                        :show-upload-list="false"
                        :default-file-list="defaultList"
                        :on-success="handleSuccess"
                        :format="['jpg','jpeg','png']"
                        :max-size="2048"
                        :on-format-error="handleFormatError"
                        :on-exceeded-size="handleMaxSize"
                        :before-upload="handleBeforeUpload"
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/"
                        style="display: inline-block;width:58px;">
                        <div style="width: 58px;height:58px;line-height: 58px;">
                            <Icon type="camera" size="20"></Icon>
                        </div>
                    </Upload>
                    <Modal title="View Image" v-model="visible">
                        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
                    </Modal>
                </div>
                <div slot="desc">
                    <p>可以自由控制上传列表，完成各种业务逻辑，示例是一个照片墙，可以查看大图和删除。</p>
                    <ul>
                        <li>设置属性 <code>show-upload-list</code> 为 false，可以不显示默认的上传列表。</li>
                        <li>设置属性 <code>default-file-list</code> 设置默认已上传的列表。</li>
                        <li>通过 <code>on-success</code> 等属性来控制完整的上传过程，详见API。</li>
                    </ul>
                    <p>另外，可以通过丰富的配置，来定制上传需求，本例中包含了：</p>
                    <ul>
                        <li>文件必须是 jpg 或 png 格式的图片。</li>
                        <li>最多上传5张图片。</li>
                        <li>每个文件大小不超过 2M。</li>
                    </ul>
                </div>
                <i-code lang="html" slot="code">{{ code.list }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Upload props" h3></Anchor>
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
                            <td>action</td>
                            <td>上传的地址，必填</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>headers</td>
                            <td>设置上传的请求头部</td>
                            <td>Object</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>是否支持多选文件</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>data</td>
                            <td>上传时附带的额外参数</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>上传的文件字段名</td>
                            <td>String</td>
                            <td>file</td>
                        </tr>
                        <tr>
                            <td>with-credentials</td>
                            <td>支持发送 cookie 凭证信息</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-upload-list</td>
                            <td>是否显示已上传文件列表</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>上传控件的类型，可选值为 <code>select</code>（点击选择），<code>drag</code>（支持拖拽）</td>
                            <td>String</td>
                            <td>select</td>
                        </tr>
                        <tr>
                            <td>accept</td>
                            <td>接受上传的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept" target="_blank">文件类型</a></td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>max-size</td>
                            <td>文件大小限制，单位 kb</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>before-upload</td>
                            <td>上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-progress</td>
                            <td>文件上传时的钩子，返回字段为 event, file, fileList</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-success</td>
                            <td>文件上传成功时的钩子，返回字段为 response, file, fileList</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-error</td>
                            <td>文件上传失败时的钩子，返回字段为 error, file, fileList</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-preview</td>
                            <td>点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-remove</td>
                            <td>文件列表移除文件时的钩子，返回字段为 file, fileList</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-format-error</td>
                            <td>文件格式验证失败时的钩子，返回字段为 file, fileList</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-exceeded-size</td>
                            <td>文件超出指定大小限制时的钩子，返回字段为 file, fileList</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>default-file-list</td>
                            <td>
                                默认已上传的文件列表，例如：
                                <pre>
                                    <code>
[
    {
        name: 'img1.jpg',
        url: 'http://www.xxx.com/img1.jpg'
    },
    {
        name: 'img2.jpg',
        url: 'http://www.xxx.com/img2.jpg'
    }
]
                                    </code>
                                </pre>
                            </td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Upload methods" h3></Anchor>
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
                            <td>clearFiles</td>
                            <td>清空已上传的文件列表</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Upload slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>无</td>
                            <td>触发上传组件的控件</td>
                        </tr>
                        <tr>
                            <td>tip</td>
                            <td>辅助提示内容</td>
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
    import Code from '../../code/upload';
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
                file: null,
                loadingStatus: false,
                defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
                ],
                imgName: '',
                visible: false,
                uploadList: []
            }
        },
        methods: {
            handleUpload (file) {
                this.file = file;
                return false;
            },
            upload () {
                this.loadingStatus = true;
                setTimeout(() => {
                    this.file = null;
                    this.loadingStatus = false;
                    this.$Message.success('Success')
                }, 1500);
            },
            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                // 从 upload 实例删除数据
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                // 因为上传过程为实例，这里模拟添加 url
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                }
                return check;
            }
        },
        mounted () {
            this.uploadList = this.$refs.upload.fileList;
        }
    };
</script>