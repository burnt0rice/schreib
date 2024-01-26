<template>
  <div>
    <editor />
    <settings-drawer />
  </div>
</template>

<script>
import Editor from './components/Editor.vue';
import SettingsDrawer from './components/SettingsDrawer.vue';

export default {
  name: 'App',
  components: {
    SettingsDrawer,
    Editor
},
}
</script>
