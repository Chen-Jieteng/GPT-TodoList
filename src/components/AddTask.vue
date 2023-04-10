<script setup lang="ts">
import { inject, ref, defineExpose } from "vue";

const tasks = inject("tasks");
const newTask = ref("");

const addTask = () => {
  const parsedInput = parseInput(newTask.value);
  if (!parsedInput) {
    window.alert("输入的任务格式错误，请重新输入");
    return;
  }

  const { duration, taskName } = parsedInput;
  if (duration <= 2) {
    window.alert("任务时长需至少2分钟");
    return;
  }

  if (/^\d+$/.test(taskName)) {
    window.alert("任务名字不能只包含数字");
    return;
  }

  if (taskName) {
    tasks.value.push({
      content: taskName,
      duration,
    });
    newTask.value = "";
  }
};

function parseInput(input) {
  const match = input.match(/(\d+)(分钟|min)[^\d]*(.*)/i);
  if (match) {
    const duration = parseInt(match[1]);
    const taskName = match[3].trim();
    return { duration, taskName };
  }
  return null;
}

defineExpose({
  addTask,
  newTask,
});
</script>

<template>
  <div class="add-task">
    <input id="task-input" type="text" placeholder="Add new task" v-model="newTask" />
    <button @click="addTask">添加任务</button>
  </div>
</template>
