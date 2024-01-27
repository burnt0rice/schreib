<template>
    <div class="drawer drawer-end">
        <input id="settings-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content w-10 h-10">
            <!-- Page content here -->
            <label for="settings-drawer" class="drawer-button fixed bottom-2 right-2"><cog-6-tooth-icon class="w-10 h-10 hover:bg-base-300 p-1 rounded-full transition-all"/></label>
        </div> 
        <div class="drawer-side">
            <label for="settings-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <div class="flex flex-col gap-2 h-[calc(100vh-1rem)] rounded-lg m-2 bg-base-100 py-2 px-5">
                <h2 class="text-lg font-bold">Settings</h2>
                <div class="flex items-center gap-4 bg-base-200 py-2 px-5 rounded-lg">
                    <label class="pt-0.5 font-bold">Theme</label>
                    <select class="select select-ghost select-sm w-52" data-choose-theme>
                        <option v-for="t in themes" :key="t" :value="t">{{ capitalizeFirstLetter(t) }}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { themeChange } from 'theme-change';
import { Cog6ToothIcon } from '@heroicons/vue/24/outline';

export default {
    name: 'SettingsDrawer',
    components: {
        Cog6ToothIcon,
    },
    data() {
        return {
            themes: [
                "light",
                "dark",
            ],
        }
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },
    mounted() {
        themeChange(false)
    },
}
</script>