<script setup lang="ts">
import { defineProps } from "vue";

interface Task {
  id: number;
  content: string;
  duration: number;
  startingTime: string;
  endingTime: string
}

const props = defineProps<{ tasks: Task[]; completedTasks: Task[] }>();
const tasks = props.tasks;
const completedTasks = props.completedTasks;

function deleteTask(index: number) {
  tasks.splice(index, 1);
}

const completeTask = (index: number) => {
  completedTasks.push(tasks[index]);
  tasks.splice(index, 1);
};

const formatDuration = (duration: number) => `${duration}min`;
</script>

<template>
    <div class="daily-schedule">
      <strong>今日规划</strong>
      <ul>
        <li v-for="(task, index) in tasks" :key="index" class="task">
          <div class="task-content">
            {{ task.content }}
            <span class="task-duration">{{ formatDuration(task.duration) }}</span>
            <span class="task-time">
                开始: {{ task.startingTime }} - 结束: {{ task.endingTime }}
            </span>
          </div>
          <button class="complete-btn" @click="completeTask(index)">已完成</button>
          <button class="delete-btn" @click="deleteTask(index)">删除</button>
        </li>
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

.task:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
  padding: 2px 10px;
  transition: background-color 0.3s ease;
  margin-right:3%;
}

.complete-btn {
  right: 60px;
  color:mediumaquamarine;
}

.delete-btn {
  color:firebrick;
}

.complete-btn:hover,
.delete-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.task:hover .complete-btn,
.task:hover .delete-btn {
  display: inline;
}

.daily-schedule {
  background-color: lightgreen;
  padding: 1rem;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.daily-schedule:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
