<script setup lang="ts">
import { inject } from "vue";

const tasks = inject("tasks");
</script>

<template>
  <div class="daily-schedule">
    <strong>今日规划</strong>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
    </ul>
  </div>
</template>

