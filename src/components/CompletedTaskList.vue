<script setup lang="ts">
  import { defineProps, defineEmits } from "vue";
  import type { Task } from "../types/task";
  const emit = defineEmits(["redo"]);

  const props = defineProps<{ completedTasks: Task[] }>();
  const completedTasks = props.completedTasks;

  const redoTask = (index: number) => {
    completedTasks.splice(index, 1);
    completedTasks.splice(index, 1);
    emit("redo", taskToRedo);
  };

  const formatDuration = (duration: number) => `${duration}min`;
</script>

<template>
    <div class="completed-tasks">
      <strong>已完成任务</strong>
      <ul>
        <li v-for="(task, index) in completedTasks" :key="index" class="task">
          <div class="task-content">
            {{ task.content }}
            <span class="task-duration">{{ formatDuration(task.duration) }}</span>
            <span class="task-time">结束: {{ task.endingTime }}</span>
          </div>
          <button class="redo-btn" @click="redoTask(index)">恢复任务</button>        </li>
      </ul>
    </div>
</template>

<style scoped>
.task {
  position: relative;
  background-color: #ffffff;
  padding: 15px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  min-height: 50px;
}

.task-content {
  display: inline-block;
  margin-right: 10px;
}

.task-time {
  font-size: 12px;
  color: #888;
  margin-left: 5px;
}

.redo-btn {
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  padding: 2px 10px;
  transition: background-color 0.3s ease;
  color:mediumorchid;
  margin-right:3%;
}

.redo-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.completed-tasks {
  background-color: lightgreen;
  padding: 1rem;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.completed-tasks {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}

</style>
