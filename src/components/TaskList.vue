<template>
  <div class="task-list">
    <div class="filter-btn" style="display: flex; flex-wrap: wrap; gap: 8px;">
      <el-button :type="activeFilter === 'all' ? 'primary' : ''" @click="activeFilter = 'all'">全部</el-button>
      <el-button :type="activeFilter === 'undone' ? 'primary' : ''" @click="activeFilter = 'undone'">未完成</el-button>
      <el-button :type="activeFilter === 'done' ? 'primary' : ''" @click="activeFilter = 'done'">已完成</el-button>
				<input v-model="searchKeyword" placeholder="搜索任务..."
			style="padding: 8px; width: 200px; border: 1px solid #eee; border-radius: 4px;" :scroll="{ x: 'max-content' }">
    </div>

    <el-table :data="filterTaskList" border fit height="calc(100vh - 200px)" style="width: 100%; margin-top: 10px; font-size: 14px;   max-height: calc(100vh - 250px);">
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
const searchKeyword = ref('') 
const taskStore = useTaskStore()

const filterTaskList = computed(() => {
  let filteredTasks = []
  switch (activeFilter.value) {
    case 'undone':
      filteredTasks = taskStore.taskList.filter(task => !task.status)
      break
    case 'done':
      filteredTasks = taskStore.taskList.filter(task => task.status)
      break
    default:
      filteredTasks = taskStore.taskList
  }

	if (searchKeyword.value) { // 如果输入了搜索关键词
    filteredTasks = filteredTasks.filter(task => {
      // 匹配任务标题，忽略大小写（比如搜“吃饭”和“吃饭”都能找到）
      return task.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
    })
  }

  return filteredTasks // 返回最终筛选结果
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