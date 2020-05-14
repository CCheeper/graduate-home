<template>
    <div class="edit_container">

        <el-upload
                class="avatar"
                ref="quillUpload"
                action="/text/pupload"
                name="img"
                :show-file-list="false"
                :on-success="uploadSuccess"
                :on-error="uploadError"
                :on-change="quillChange"
                :before-upload="beforeUpload"
                :data="param"
                style="height: 0">
        </el-upload>
        <quill-editor
                v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
                style="width: 60% ;">

        </quill-editor>
        <button v-on:click="saveHtml">保存</button>

    </div>
</template>

<script>
    import axios from 'axios'
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // 切换按钮
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // 用户自定义按钮值
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // 上标/下标
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // 减少缩进/缩进
        [{ 'direction': 'rtl' }],                         // 文本下划线

        [{ 'size': ['small', false, 'large', 'huge'] }],  // 用户自定义下拉
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // 主题默认下拉，使用主题提供的值
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['image'],
        ['clean']                                         // remove formatting button
    ];
    export default {

        name: 'test',
        props: {
            msg: String
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            },
        },

        methods: {

            onEditorReady(editor) { // 准备编辑器
            },

            quillChange(file){
                this.param.imgFile = file.raw;
            },
            // 富文本图片上传前
            uploadSuccess(res, file) {
                // res为图片服务器返回的数据
                // 获取富文本组件实例
                let quill = this.$refs.myQuillEditor.quill;
                console.log(res.meta.res)
                // 如果上传成功
                if (res.meta.res === 200) {
                    // 获取光标所在位置
                    let length = quill.getSelection().index;
                    // 插入图片  res.info为服务器返回的图片地址
                    quill.insertEmbed(length, 'image', res.meta.qnUrl);
                    // 调整光标到最后
                    quill.setSelection(length + 1)
                } else {
                    this.$message.error('图片插入失败')
                }
            },

            // 富文本图片上传失败
            uploadError() {
                this.$message.error('图片插入失败')
            },

            onEditorBlur() {
            }, // 失去焦点事件
            onEditorFocus() {
            }, // 获得焦点事件
            onEditorChange() {
            }, // 内容改变事件
            saveHtml: function (event) {
                alert(this.content);
            }
        },
        data() {
            return {
                content: `<p>hello world</p>`,
                editorOption: {
                    placeholder: '',
                    theme: 'snow',  // or 'bubble'
                    modules: {
                        toolbar: {
                            container: toolbarOptions,  // 工具栏
                            handlers: {
                                'image': function (value) {
                                    if (value) {
                                        // 触发input框选择图片文件
                                        document.querySelector('.avatar input').click();
                                    } else {
                                        this.quill.format('image', false);
                                    }
                                }
                            },
                        }
                    }
                },
                header: {
                    // token: sessionStorage.token
                }, // 有的图片服务器要求请求头需要有token
                param:{
                    imgFile:"",
                },
                apiurl: "/text/pupload"

            }
        }

    }
</script>

<style>
</style>
