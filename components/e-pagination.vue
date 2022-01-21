<template>
    <div class="pagination-container">
        <button :class="currentPage === 1 ? 'disabled' : 'pager'" @click="previousPage">
            <v-icon class="chevron-left" :color="currentPage === 1 ? '#DAE4F2' : '#8FA3BF'">mdi-chevron-left</v-icon>
        </button>
        <div class="d-flex justify-space-between">
            <span class="text-l1-default neutrals-600-color-text">Page</span>
            <span class="text-l1-default brand-default-color-text pl-2">{{currentPage}} of {{maxPages}}</span>
        </div>
        <button :class="currentPage === maxPages ? 'disabled' : 'pager'" @click="nextPage">
            <v-icon class="chevron-right" :color="currentPage === maxPages ? '#DAE4F2' : '#8FA3BF'">mdi-chevron-right</v-icon>
        </button>
    </div>
</template>

<script>
export default {
    name: "EPagination",
    props: {
        maxPages: {
            type: Number,
            default: 1,
        },
        currentPage: {
            type: Number,
            default: 1,
        }
    },
    methods: {
        nextPage() {
            if(this.currentPage < this.maxPages) {
                this.$emit("changeToNext");
            }
        },
        previousPage() {
            if(this.currentPage > 1) {
                this.$emit("changeToPrevious");
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    width: 259px;
    padding: 16px;
    border-radius: 16px;
    border: 1px solid $color-neutrals-300;
    .pager {
        padding: 0 !important;
        height: 40px;
        width: 40px;
        border-radius: 8px;
        background: $color-brand-light;
    }
    .pager:hover {
        background: $color-brand-light-blue;
    }
    .disabled {
        cursor: default;
        padding: 0 !important;
        height: 40px;
        width: 40px;
        border-radius: 8px;
        background: $color-neutrals-200;
    }
}
</style>