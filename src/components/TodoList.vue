<template>
  <div class="todo-container">
    <div class="layer layer-1">
      <div class="day-title day-1"><strong>Day 1</strong></div>
      <div class="add-task">
        <!-- Add new task input or form goes here -->
      </div>
    </div>
    <div class="layer layer-2">
      <strong>今日规划</strong>
    </div>
    <div class="layer layer-3">
      <div class="completed-tasks">
        <strong>已完成任务</strong>
      </div>
      <div class="incompleted-tasks">
        <strong>什么没完成？</strong>
      </div>
      <div class="incompletion-reasons">
        <strong>为什么没完成？</strong>
      </div>
    </div>
    <div class="layer layer-4">
      <div class="learnings">
        <strong>今天有哪些收获？</strong>
      </div>
      <div class="ideas">
        <strong>今天有什么想法？</strong>
      </div>
      <div class="inspiring-quotes">
        <strong>引发思考的几句话</strong>
      </div>
    </div>
    <div class="layer layer-5">
      <!-- List of descriptions for improvement goes here -->
    </div>
  </div>
</template>
<style scoped>
.todo-container {
  background-color: #f5f5f5;
  padding: 1rem;
  margin-left: 2rem;
  width: 100%;
  height: 80%;
  overflow-y: auto;
  border-radius: 5px;
}

.layer {
  margin-bottom: 1rem;
}

.layer-1 {
  display: flex;
  width: 100%;
}

.day-title {
  width: 20%;
}

.day-1 {
  color: red; /* apply red color to Day 1 */
}

.add-task {
  width: 80%;
}

.layer-3,
.layer-4 {
  display: flex;
  justify-content: space-between;
}

.completed-tasks,
.incompleted-tasks,
.incompletion-reasons,
.learnings,
.ideas,
.inspiring-quotes {
  width: 32%;
}
</style>
