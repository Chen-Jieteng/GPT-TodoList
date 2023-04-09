<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
</script>

<template>
  <div class="container">
    <div class="left-side">
      <TodoList />
    </div>
    <div class="right-side">
      <Suspense>
        <RouterView />
      </Suspense>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.left-side {
  flex: 2;
  background-color: black;
  margin-right: 2rem; 
}

.right-side {
  flex: 1;
}
</style>
