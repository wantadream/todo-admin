import { defineStore } from "pinia";

export const useTaskStore = defineStore("task", {
  state: () => ({
    taskList: [
      {
        id: 1,
        title: "学习Vue3",
        status: false,
        createTime: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: "做任务管理项目",
        status: true,
        createTime: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: "做任务管理项目",
        status: true,
        createTime: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: "做任务管理项目",
        status: true,
        createTime: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: "做任务管理项目",
        status: true,
        createTime: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: "做任务管理项目",
        status: true,
        createTime: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: "做任务管理项目",
        status: true,
        createTime: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: "做任务管理项目",
        status: true,
        createTime: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: "做任务管理项目",
        status: true,
        createTime: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: "做任务管理项目",
        status: true,
        createTime: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: "做任务管理项目",
        status: true,
        createTime: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: "做任务管理项目",
        status: true,
        createTime: new Date().toLocaleString(),
      },

      {
        id: 2,
        title: "做任务管理项目",
        status: true,
        createTime: new Date().toLocaleString(),
      },
    ],
  }),
  actions: {
    addTask(title) {
      if (!title.trim()) return;
      this.taskList.push({
        id: Date.now(),
        title,
        status: false,
        createTime: new Date().toLocaleString(),
      });
    },
    deleteTask(id) {
      this.taskList = this.taskList.filter((task) => task.id !== id);
    },
    toggleTaskStatus(id) {
      const task = this.taskList.find((task) => task.id === id);
      if (task) {
        task.status = !task.status;
      }
    },
  },
  getters: {
    unDoneCount: (state) => {
      return state.taskList.filter((task) => !task.status).length;
    },
  },
});
