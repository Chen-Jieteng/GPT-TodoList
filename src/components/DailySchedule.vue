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


.complete-btn,
.delete-btn {
  position: absolute;
  right: 0;
  display: none;
}

.complete-btn {
  right: 60px;
}

.delete-btn {
  position: absolute;
  right: 0;
  display: none;
}

.task:hover .complete-btn,
.task:hover .delete-btn {
  display: inline;
}
</style>
