<script setup lang="ts">
import { inject } from "vue";

const tasks = inject("tasks");

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}
</script>

<template>
  <div class="daily-schedule">
    <strong>今日规划</strong>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="task">
        {{ task }}
        <button class="delete-btn" @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.task {
  position: relative;
}

.delete-btn {
  position: absolute;
  right: 0;
  display: none;
}

.task:hover .delete-btn {
  display: inline;
}
</style>
