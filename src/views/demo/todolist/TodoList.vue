<template>
	<div class="todolist" style="max-width: 100%; ">
		<el-page-header content="简易任务管理系统" />
		<TaskAdd />
	
		<TaskList />
		<div style="text-align: center; margin-top: 20px; color: #999;">
			©2026 任务管理系统 | Vue3 + Element Plus
		</div>
	</div>
</template>

<script setup>
import TaskAdd from '@/components/TaskAdd.vue'
import TaskList from '@/components/TaskList.vue'


</script>

<style scoped>
.todolist {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	/* margin-top: 20px; */
	width: 100%;
	/* width: 100vw; */
	/* height: 100vh; */
}
</style>