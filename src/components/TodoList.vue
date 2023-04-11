<script setup lang="ts">
import { ref } from "vue";

import Expandable from "./Expandable.vue";
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
const completedTasks = ref([]);

const redoTask = (index: number) => {
  tasks.value.push(completedTasks.value[index]);
  completedTasks.value.splice(index, 1);
};
</script>

<template>
    <div class="todo-container">
      <div class="layer layer-1">
        <Day /><AddTask :tasks="tasks" />
      </div>
      <div class="layer layer-2">
        <Expandable>
          <DailySchedule :tasks="tasks" :completedTasks="completedTasks" />
        </Expandable>
      </div>
      <div class="layer layer-3">
        <Expandable>
          <completed-task-list :completed-tasks="completedTasks" @redo="redoTask" />
        </Expandable>
        <Expandable>
          <IncompletedTaskList />
        </Expandable>
        <Expandable>
          <ReasonIncomplete />
        </Expandable>
      </div>
      <div class="layer layer-4">
        <Expandable>
          <DailyResult />
        </Expandable>
        <Expandable>
          <DailyThought />
        </Expandable>
        <Expandable>
          <DailyRevoke />
        </Expandable>
      </div>
      <div class="layer layer-5">
        <Expandable>
          <DailyImprovement />
        </Expandable>
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
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 1.5rem;
  border-radius: 5px;
  overflow-y: auto;
}

.layer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.layer > * {
  flex: 1;
  min-width: calc(50% - 1rem);
}
</style>

