<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs";

const newTask = ref("");

interface Task {
  id: number;
  content: string;
  duration: number;
  startingTime: string;
}

const props = defineProps<{ tasks: Task[] }>();
const tasks = props.tasks;

const parseInput = (input: string): { duration: number; taskName: string } | null => {
  const regex = /^(\d+)分钟(.+)$/;
  const match = input.match(regex);
  if (!match) return null;

  return {
    duration: parseInt(match[1], 10),
    taskName: match[2].trim(),
  };
};

/* const addTask = () => {
  const parsedInput = parseInput(newTask.value);
  if (!parsedInput) {
    window.alert("输入的任务格式错误，请重新输入");
    return;
  }

  const { duration, taskName } = parsedInput;

  if (duration < 5) {
    window.alert("任务时长需至少5分钟");
    return;
  }

  if (!isNaN(Number(taskName))) {
    window.alert("任务名字不能仅包含数字");
    return;
  }

  if (taskName) {
    const taskId = Date.now();
    tasks.push({
      id: taskId,
      content: taskName,
      duration,
      startingTime: dayjs().format("HH:mm A"),
    });
    newTask.value = "";
  }
}; */

const addTask = () => {
  const parsedInput = parseInput(newTask.value);
  if (!parsedInput) {
    window.alert("输入的任务格式错误，请重新输入");
    return;
  }

  const { duration, taskName } = parsedInput;

  if (duration < 5) {
    window.alert("任务时长需至少5分钟");
    return;
  }

  if (!isNaN(Number(taskName))) {
    window.alert("任务名字不能仅包含数字");
    return;
  }

  if (taskName) {
    const taskId = Date.now();
    const startingTime = dayjs().format("HH:mm A");
    const endingTime = dayjs()
      .add(duration, "minute")
      .format("hh:mm A");

    window.alert(
      `Starting Time: ${startingTime}\nEnding Time: ${endingTime}\nDuration: ${duration}min`
    );

    tasks.push({
      id: taskId,
      content: taskName,
      duration,
      startingTime,
    });
    newTask.value = "";
  }
};

</script>

<template>
  <div class="add-task">
    <input id="task-input" v-model="newTask" type="text" placeholder="例如：10分钟完成英语作业" />
    <button @click="addTask">添加任务</button>
  </div>
</template>
