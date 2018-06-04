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
            <h1>Upload</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>File select upload and drag upload component.</p>
            <Alert show-icon style="margin-top: 16px">IE 9 is not supported.</Alert>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Click to Upload">
                <div slot="demo">
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
                    </Upload>
                </div>
                <div slot="desc">
                    <p>Basic usage. Clikc to upload, each at one time.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.select }}</i-code>
            </Demo>
            <Demo title="Multi Choices">
                <div slot="demo">
                    <Upload
                        multiple
                        action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
                    </Upload>
                </div>
                <div slot="desc">
                    <p>Set <code>multiple</code> prop to enable multi choices.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.multiple }}</i-code>
            </Demo>
            <Demo title="Manual Upload">
                <div slot="demo">
                    <Upload
                        :before-upload="handleUpload"
                        action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="ghost" icon="ios-cloud-upload-outline">Select the file to upload</Button>
                    </Upload>
                    <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? '上传中' : '点击上传' }}</Button></div>
                </div>
                <div slot="desc">
                    <p>Bind a function which returns <code>false</code> to <code>before-upload</code>. It will prevent default upload process and allow you control it manually.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.manual }}</i-code>
            </Demo>
            <Demo title="Drag to Upload">
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
                    <p>Set <code>type</code> prop to <code>drag</code> to enable drag-to-upload.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.drag }}</i-code>
            </Demo>
            <Demo title="Custom Upload List">
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
                    <p>You can control the upload list freely. The demo is a photo wall. You an view the big picture or delete the photo.</p>
                    <ul>
                        <li>Set <code>show-upload-list</code> prop to false to hide the default upload list.</li>
                        <li>Set <code>default-file-list</code> prop to set uploaded file list.</li>
                        <li>Set <code>on-success</code> prop and some other props to control the upload procedure. Details on API Doc.</li>
                    </ul>
                    <p>By the way, you can meet your need by using our APIs creatively. The demo below includes: </p>
                    <ul>
                        <li>The file format must be jpg or png image.</li>
                        <li>Upload up to 5 images.</li>
                        <li>The size of each image does not exceed 2M.</li>
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
                            <th>Property</th>
                            <th>Decription</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>action</td>
                            <td>Upload request URL, required.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>headers</td>
                            <td>Upload request header.</td>
                            <td>Object</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>Enable multi choices or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>data</td>
                            <td>Extra data with upload request.</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>The key in upload request targeting to the file.</td>
                            <td>String</td>
                            <td>file</td>
                        </tr>
                        <tr>
                            <td>with-credentials</td>
                            <td>Enable certification info in Cookie or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-upload-list</td>
                            <td>Show upload file list or not.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>The type of Upload. Optional value: <code>select</code>, <code>drag</code></td>
                            <td>String</td>
                            <td>select</td>
                        </tr>
                        <tr>
                            <td>accept</td>
                            <td>Accepted <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept" target="_blank">file formats</a>.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>Accepted file formats. Different to accept prop, format recognizes the appendix of the file. Accept is same to HTML's input accept prop, it'll filter the file list during file selecting. You can use them together.</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>max-size</td>
                            <td>File size limitation. Unit: kb</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>before-upload</td>
                            <td>Hook before file starts to upload. The only parameter is the file. If the function return false, or a Promise, default upload procedure will be stopped.</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-progress</td>
                            <td>Hook when file is uploading. It has three params: event, file, fileList</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-success</td>
                            <td>Hook when file is successfully uploaded. It has three params: response, file, fileList</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-error</td>
                            <td>Hook when file is failed to upload. It has three params: error, file, fileList</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-preview</td>
                            <td>Hook when clicking uploaded file link. The only parameter is file. You can get server-side response data in file.response.</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-remove</td>
                            <td>Hook when a certain file is removed from the file list. It has two params: file, fileList</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-format-error</td>
                            <td>Hook when file format verification is failed. It has two params: file, fileList</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-exceeded-size</td>
                            <td>Hook when file size exceeds the limitation. It has two params: file, fileList</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>default-file-list</td>
                            <td>
                                Default uploaded file list. For example:
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
                            <th>Method Name</th>
                            <th>Description</th>
                            <th>Arguments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>clearFiles</td>
                            <td>Clear uploaded file list.</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Upload slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>-</td>
                            <td>Component that activates the upload component.</td>
                        </tr>
                        <tr>
                            <td>tip</td>
                            <td>Tip content</td>
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