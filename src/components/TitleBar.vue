<template>
    <div class="flex flex-col h-28 w-screen px-4 py-3 bg-primary">
      <div class="flex flex-row">
        <button>
          <arrow-left-icon v-if="barsActive" class="w-5 h-5 text-primary-content" />
          <bars-3-icon v-else class="w-5 h-5 text-primary-content" />
        </button>
        <div class="flex-1" @mousedown="startDraggingWindow"></div>
        <div class="flex items-center gap-6">
          <button @click="minimizeWindow">
            <minus-icon class="w-5 h-5 text-primary-content" />
          </button>
          <button @click="maximizeWindow">
            <stop-icon class="w-4 h-4 text-primary-content" />
          </button>
          <button @click="closeWindow">
            <x-mark-icon class="w-5 h-5 text-primary-content" />
          </button>
        </div>
      </div>
      <div class="flex flex-col pt-2 h-full">
        <h1 class="text-2xl font-bold text-primary-content">{{ title }}</h1>
        <div class="flex-1 flex items-center">
          <slot></slot>
        </div>
      </div>
    </div>
</template>

<script>
import { appWindow } from '@tauri-apps/api/window'
import { ArrowLeftIcon, Bars3Icon, XMarkIcon, MinusIcon, StopIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'TitleBar',
  components: {
    ArrowLeftIcon,
    Bars3Icon,
    XMarkIcon,
    MinusIcon,
    StopIcon,
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    barsActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    minimizeWindow() {
      console.log('minimize')
      appWindow.minimize()
    },
    maximizeWindow() {
      appWindow.toggleMaximize()
    },
    closeWindow() {
      appWindow.close()
    },
    startDraggingWindow() {
      appWindow.startDragging()
    },
  }
}
</script>

<style scoped>
</style>