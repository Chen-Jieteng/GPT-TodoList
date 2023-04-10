<script setup lang="ts">
import { inject } from "vue";

const tasks = inject("tasks");

const addTask = () => {
  const input = document.getElementById("task-input");
  if (input.value.trim()) {
    tasks.value.push(input.value.trim());
    input.value = "";
  }
};
</script>

<template>
  <div class="add-task">
    <input id="task-input" type="text" placeholder="Add new task" />
    <button @click="addTask">Add Task</button>
  </div>
</template>



