<template>
    <splitpanes class="h-screen w-full" style="height: 100vh;">
        <pane id="editor" class="h-screen">
            <textarea v-model="editorContent" class="w-full h-full focus-none px-4 py-3 bg-base-100" placeholder="Editor"></textarea>
        </pane>
        <pane id="preview" class="markdown-body h-screen border-l border-base-300 px-4 py-3" v-html="previewContent">
        </pane>
    </splitpanes>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

import { marked } from 'marked';

export default {
    name: 'Editor',
    components: { Splitpanes, Pane },
    data() {
        return {
            editorContent: '',
            previewContent: '',
        }
    },
    watch: {
        editorContent() {
            this.previewContent = marked(this.editorContent);
        }
    }
}
</script>

<style scoped>
.splitpanes--vertical > .splitpanes__splitter {
  min-width: 10px;
  background: blue;
}

.splitpanes--horizontal > .splitpanes__splitter {
  min-height: 10px;
  background: red;
}
</style>