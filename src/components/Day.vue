<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
  
  const day = ref(1);
  const timer: Ref<number | null> = ref(null);
  const timeLeft = ref(0);
  const settingsOpen = ref(false);
  
  
  const settings = ref({
    maxHours: 12,
    reviews: 3,
  });
  
  const openSettingsDialog = () => {
    settingsOpen.value = true;
  };
  
  const closeSettingsDialog = () => {
    settingsOpen.value = false;
    updateCurrentDay();
  };
  
  const startTimer = () => {
    if (timer.value) return;
    timer.value = setInterval(() => {
        timeLeft.value -= 1000;
        if (timeLeft.value <= 0) {
        updateCurrentDay();
        }
    }, 1000);
  };

    const stopTimer = () => {
    if (timer.value) {
        clearInterval(timer.value);
        timer.value = null;
    }
    };
  
  const updateCurrentDay = () => {
    const currentTime = new Date().getTime();
    const startTime = new Date().setHours(6, 0, 0, 0);
    const endTime = startTime + (settings.value.maxHours * 60 * 60 * 1000);
    const interval = (endTime - startTime) / settings.value.reviews;
    const passedIntervals = Math.floor((currentTime - startTime) / interval);
  
    day.value = passedIntervals + 1;
    timeLeft.value = interval - (currentTime - startTime) % interval;
  };
  
  const formatTime = (time: number) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

onMounted(() => {
  updateCurrentDay();
});
</script>

<template>
    <div class="day-container">
      <div v-if="settingsOpen" class="settings-modal">
        <div class="settings-modal-content">
          <h3>Settings</h3>
          <div class="settings-input">
            <label for="maxHours">Max hours to work today:</label>
            <input id="maxHours" v-model.number="settings.maxHours" type="number" min="2" step="2" />
          </div>
          <div class="settings-input">
            <label for="reviews">Number of reviews:</label>
            <input id="reviews" v-model.number="settings.reviews" type="number" min="1" />
          </div>
          <button class="confirm-button" @click="closeSettingsDialog">Confirm</button>
        </div>
      </div>
      <div class="day-display">
        <strong>Day {{ day }}</strong>
      </div>
      <button @click="openSettingsDialog" class="settings-button">
        <i class="fas fa-cog"></i>
      </button>
      <div class="timer">
        <div class="time-display">{{ formatTime(timeLeft) }}</div>
        <button @click="startTimer" class="timer-button">Start</button>
        <button @click="stopTimer" class="timer-button">Stop</button>
      </div>
    </div>
</template>
  
  <style scoped>
  .day-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
  }

  .day-display {
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 1rem;
  }

  .settings-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .settings-modal-content {
    width: 100%;
  }

  .settings-input {
    margin-bottom: 0.5rem;
  }

  .confirm-button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .confirm-button:hover {
    background-color: #0069d9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .timer {
    display: flex;
    align-items: center;
  }

  .time-display {
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }

  .timer-button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    margin-right: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .timer-button:hover {
    background-color: #0069d9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>
