<template>
	<div id="app">

		
		<component :is='name'></component>
        <el-button @click="change()">click</el-button>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	import test from './components/test.vue'

	export default {
		name: 'app',
		components: {
			HelloWorld,
			test
		},
		data() {
			return {
				name: "test"
			}
		},
		methods: {
			change() {
				if (this.name == "test") {
					this.name = "HelloWorld"
				} else {
					this.name = "test"
				}

			}
		}
	}
</script>
<!-- 
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
