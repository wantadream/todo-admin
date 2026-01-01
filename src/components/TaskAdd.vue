<template>
  <div class="task-add">
    <el-input 
      v-model="taskTitle" 
      placeholder="请输入任务标题" 
      style="width: 100%; max-width: 300px; margin-right: 10px;"
    ></el-input>
    <el-button type="primary" @click="addTask">新增任务</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../pinia/taskStore'
import { ElMessage } from 'element-plus'

const taskTitle = ref('')
const taskStore = useTaskStore()

const addTask = () => {
  if (!taskTitle.value.trim()) {
    ElMessage.warning('任务标题不能为空！')
    return
  }
  taskStore.addTask(taskTitle.value)
  taskTitle.value = ''
  ElMessage.success('任务新增成功！')
}
</script>

<style scoped>
.task-add {
  margin: 20px 0;
}
</style>