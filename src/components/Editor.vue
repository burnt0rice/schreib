<template>
    <splitpanes class="rounded-lg" style="height: 100%;">
        <pane id="editor" class="h-full px-4 py-3 bg-base-100">
            <textarea v-model="editorContent" class="w-full h-full focus-none bg-base-100 resize-none overflow-visible" placeholder="Editor"></textarea>
        </pane>
        <pane id="preview" class="markdown-body h-full px-4 py-3 overflow-visible" v-html="previewContent">
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