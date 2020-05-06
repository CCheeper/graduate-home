<template>

	<el-container>
		<el-header style='background-color: aquamarine;'>Header</el-header>
		<div class="block" style="background-color: skyblue;">
			<span class="demonstration">Click 指示器触发</span>
			<el-carousel trigger="click" height="300px">
				<el-carousel-item v-for="item in 4" :key="item">
					<h3 class="small">{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
		</div>
		<el-container>

			<el-main style="background-color: bisque;">
				<div class="grid-content bg-purple" style="background-color: chartreuse;border-radius: 30px;">
					<el-divider></el-divider>
					<span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
					<el-divider></el-divider>
					<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
					<el-divider></el-divider>
					<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
					<el-divider></el-divider>
					<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
					<el-divider></el-divider>
					<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
					<el-divider></el-divider>
				</div>
			</el-main>
			<el-aside width="200px" style="background-color: azure;">
				<div class="grid-content bg-purple-light" style="background-color: cornflowerblue;">
					<el-divider></el-divider>
					<span>青春是一个短暂的美梦, 当你醒来时,它早已消失无踪</span>
					<el-divider></el-divider>
					<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
					<el-divider></el-divider>
					<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
					<el-divider></el-divider>
					<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
					<el-divider></el-divider>
					<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
					<el-divider></el-divider>
				</div>
			</el-aside>
		</el-container>
	</el-container>

</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		}
	}
</script>
