<script setup lang="ts">

import { ref, provide } from "vue";

import Day from "./Day.vue";
import AddTask from "./AddTask.vue";
import DailySchedule from "./DailySchedule.vue";
import CompletedTaskList from "./CompletedTaskList.vue";
import IncompletedTaskList from "./IncompletedTaskList.vue";
import ReasonIncomplete from "./ReasonIncomplete.vue";
import DailyResult from "./DailyResult.vue";
import DailyThought from "./DailyThought.vue";
import DailyRevoke from "./DailyRevoke.vue";
import DailyImprovement from "./DailyImprovement.vue";

const tasks = ref([]);
provide("tasks", tasks);

</script>

<template>
  <div class="todo-container">
    <div class="layer layer-1">
      <Day />
      <AddTask />
    </div>
    <div class="layer layer-2">
      <DailySchedule />
    </div>
    <div class="layer layer-3">
      <CompletedTaskList />
      <IncompletedTaskList />
      <ReasonIncomplete />
    </div>
    <div class="layer layer-4">
      <DailyResult />
      <DailyThought />
      <DailyRevoke />
    </div>
    <div class="layer layer-5">
      <DailyImprovement />
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  background-color: #f5f5f5;
  padding: 1rem;
  margin: 2rem;
  width: 90%;
  height: 90%;
  overflow-y: auto;
  border-radius: 5px;
}

.layer {
  margin-bottom: 1.5rem;
}
</style>

