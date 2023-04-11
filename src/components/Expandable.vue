<script setup lang="ts">
import { ref } from "vue";

const isExpanded = ref(false);
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
    <div class="expandable" :class="{ expanded: isExpanded }">
      <button class="expand-btn" @click="toggleExpand">
        <span v-if="!isExpanded">⤢</span>
        <span v-else>×</span>
      </button>
      <slot></slot>
    </div>
</template>
  

  
  <style scoped>
  .expandable {
    position: relative;
  }
  
  .expanded {
    position: fixed;
    top: 0;
    left: 0;
    width: 65%;
    bottom: 0;
    z-index: 1000;
    overflow-y: auto;
    padding: 1rem;
    background-color:aliceblue;
    border-radius: 5px;
  }
  
  .expand-btn {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    padding: 2px 10px;
    transition: background-color 0.3s ease;
  }
  
  .expand-btn:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .symbol-container {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 2000; /* Make sure the symbol is on top of the other elements */
  }

  .expand-symbol,
  .cancel-symbol {
    cursor: pointer;
  }
  </style>
  
