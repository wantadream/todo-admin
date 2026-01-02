<template>
	

	<div class="app" >
		<!-- 侧边栏 -->
		<div class=" app-sidebar left">左侧菜单栏</div>
		<div class="app-main right">
			<!-- 主区头部 -->
			<div class="main-header  header"> 头部状态栏</div>
			  <!-- 主区内容 -->
			<div class="main-content content">
				<TodoList></TodoList>
			</div>
		</div>
	</div>
</template>

<script setup>
import TodoList from '../views/demo/todolist/TodoList.vue'
</script>

<style scoped >
.app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	/* margin-top: 20px; */
	width: 100%;
	width: 100vw;
	height: 100vh;
	display: flex;
	.left{
		width: 250px;
		height: 100%;
		background-color: saddlebrown;
	}
	.right{
		flex: 1;
		display: flex;
		flex-direction: column;
		.header{
			height: 50px;
			background: #eee;
		}
		.content{
			flex: 1;
			background: #e0b3b3;
		}
	}
}
</style>