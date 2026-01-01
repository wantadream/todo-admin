<template>
  <div class="task-list">
    <div class="filter-btn" style="display: flex; flex-wrap: wrap; gap: 8px;">
      <el-button :type="activeFilter === 'all' ? 'primary' : ''" @click="activeFilter = 'all'">全部</el-button>
      <el-button :type="activeFilter === 'undone' ? 'primary' : ''" @click="activeFilter = 'undone'">未完成</el-button>
      <el-button :type="activeFilter === 'done' ? 'primary' : ''" @click="activeFilter = 'done'">已完成</el-button>
    </div>

    <el-table :data="filterTaskList" border fit style="width: 100%; margin-top: 10px; font-size: 14px;">
      <el-table-column prop="title" label="任务标题" min-width="120" />
      <el-table-column prop="status" label="状态" width="80">
        <template #default="scope">
          <el-tag :type="scope.row.status ? 'success' : 'warning'" size="small">
            {{ scope.row.status ? '已完成' : '未完成' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="时间" width="140" />
      <el-table-column label="操作" width="160">
        <template #default="scope">
          <el-button size="mini" @click="toggleStatus(scope.row.id)">
            {{ scope.row.status ? '取消' : '完成' }}
          </el-button>
          <el-button size="mini" type="danger" @click="deleteTask(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTaskStore } from '../pinia/taskStore'
import { ElMessage } from 'element-plus'

const activeFilter = ref('all')
const taskStore = useTaskStore()

const filterTaskList = computed(() => {
  switch (activeFilter.value) {
    case 'undone':
      return taskStore.taskList.filter(task => !task.status)
    case 'done':
      return taskStore.taskList.filter(task => task.status)
    default:
      return taskStore.taskList
  }
})

const toggleStatus = (id) => {
  taskStore.toggleTaskStatus(id)
  ElMessage.info('任务状态已更新！')
}

const deleteTask = (id) => {
  taskStore.deleteTask(id)
  ElMessage.success('任务已删除！')
}
</script>

<style scoped>
.task-list {
  margin: 20px 0;
}
.filter-btn {
  margin-bottom: 10px;
}
</style>