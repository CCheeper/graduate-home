<template>
	<div class="edit_container" >
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
			onEditorBlur() {}, // 失去焦点事件
			onEditorFocus() {}, // 获得焦点事件
			onEditorChange() {}, // 内容改变事件
			saveHtml: function(event) {
				alert(this.content);
			}
		},
		data() {
			return {
				content: `<p>hello world</p>`,
				editorOption: {}
			}
		}

	}
</script>

<style>
</style>
