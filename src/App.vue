<template>
  <div class="flex flex-col w-screen h-screen">
    <title-bar :title="'schreib'" />
    <div class="flex-1 p-3 rounded-lg">
      <editor />
    </div>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar.vue';
import Editor from './components/Editor.vue';
import SettingsDrawer from './components/SettingsDrawer.vue';

export default {
  name: 'App',
  components: {
    TitleBar,
    SettingsDrawer,
    Editor
},
}
</script>
