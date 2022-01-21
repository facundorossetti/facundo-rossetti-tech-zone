<template>
    <div class="selector-container">
        <button 
            class="e-select-filter"
            @click="menu = !menu"
            >   
            <div class="d-flex justify-space-between align-center">
                <span class="neutrals-600-color-text text-l1-default">{{ selectedItem }}</span>
                <v-icon class="chevron-down">{{ menu ? "mdi-chevron-down" : "mdi-chevron-up" }}</v-icon>
            </div>
        </button>
        <transition name="fade">
            <div v-show="menu" class="menu">
                <button
                    v-for="(item, index) in items" :key="index" 
                    class="menu-options text-l1-default" 
                    @click="optionClicked(item)"
                    >{{item}}
                </button>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "SelectFilter",
    props: {
        label: {
            type: String,
            default: ""
        },
        items: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            menu: false,
            selectedItem: this.items[0],
        }
    },
    methods: {
        optionClicked(item) {
            this.selectedItem = item;
            this.menu = false;
            this.$emit("select", item);
        }
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
.selector-container {
    position: relative;
    .e-select-filter {
        padding: 16px 24px;
        width: 256px;
        height: 59px;
        border-radius: 16px;
        border: 1px solid $color-neutrals-300;
    }
    .menu {
        position: absolute;
        display: flex;
        overflow-y: auto;
        z-index: 10;
        flex-direction: column;
        margin-top: 8px;
        height: 271px;
        background: $color-neutrals-0;
        width: 256px;
        padding: 8px 0;
        border: 1px solid $color-neutrals-300;
        border-radius: 16px;
        &::-webkit-scrollbar {
            width: 8px;
        }
        &::-webkit-scrollbar-track {
            background: transparent !important;
        }
        &::-webkit-scrollbar-thumb {
            background: $color-illustration-bg;
            border-radius: 12px;
        }
        &::-webkit-scrollbar-track-piece:end {
            background: transparent;
            margin-bottom: 10px; 
        }
        &::-webkit-scrollbar-track-piece:start {
            background: transparent;
            margin-top: 10px;
        }
        .menu-options {
            display: flex;
            justify-content: flex-start;
            height: 100%;
            width: 100%;
            padding: 8px 24px;
            color: $color-neutrals-600;
            &:hover {
                background: $color-neutrals-100;
            }
        }
    }
}
</style>