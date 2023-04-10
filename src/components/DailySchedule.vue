<script setup lang="ts">
import { inject } from "vue";
const completedTasks = inject("completedTasks");

const tasks = inject("tasks");

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}

const completeTask = (index) => {
  completedTasks.value.push(tasks.value[index]);
  tasks.value.splice(index, 1);
};
</script>

<template>
  <div class="daily-schedule">
    <strong>今日规划</strong>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="task">
        {{ task }}
        <button class="complete-btn" @click="completeTask(index)">Complete</button>
        <button class="delete-btn" @click="deleteTask(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.task {
  position: relative;
  background-color: #ffffff;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.task:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.task-content {
  display: inline-block;
  margin-right: 10px;
}

.complete-btn,
.delete-btn {
  position: absolute;
  right: 0;
  display: none;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 10px;
  transition: background-color 0.3s ease;
}

.complete-btn {
  right: 60px;
  color: #4caf50; /* Green */
}

.delete-btn {
  color: #f44336; /* Red */
}

.complete-btn:hover,
.delete-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.task:hover .complete-btn,
.task:hover .delete-btn {
  display: inline;
}
</style>
