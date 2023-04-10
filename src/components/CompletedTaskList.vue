<script setup lang="ts">
import { inject } from "vue";

const completedTasks = inject("completedTasks");
</script>

<template>
  <div class="completed-tasks">
    <strong>已完成任务</strong>
    <ul>
      <li v-for="(task, index) in completedTasks" :key="index">
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* style */
</style>
