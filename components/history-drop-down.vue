<template>
    <div class="component-container">
        <div class="button" @click="dialog = !dialog">
            <img class="icon" src="../assets/sprite/svg/icons/aeropay-3.svg" alt="">
            <span class="text pl-1 text-l1-default neutrals-0-color-text">History</span>
        </div>
        <v-dialog
            v-model="dialog"
            width="920px"
        >
            <v-card>
                <v-data-table
                    hide-default-footer
                    disable-pagination
                    :footer-props="{'disable-items-per-page': true}"
                    :headers="tableHeaders"
                    :items="tableItems"
                    :items-per-page="10"
                ></v-data-table>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'HistoryDropDown',
    props: {
        tableHeaders: {
            type: Array,
            default: () => []
        },
        tableItems: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            dialog: false,
        }
    },
}
</script>

<style lang="scss" scoped>
.v-dialog {
    max-width: 900px !important;
}
.button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 8px 16px;
    width: 110px;
    height: 35px;
    background: $color-brand-default;
    border-radius: 16px;
    div {
        display: flex;
        align-items: center;
    }
    &:hover {
        background: $color-brand-hover !important;
    }
    .text {
        font-size: 16px !important;
    }
}
.chevron-down {
    color: #8FA3BF !important;
}
.component-container {
    position: relative;
    z-index: 10;
}
.icon {
    width: 20px;
    height: 20px;
}
::v-deep .v-dialog {
    background: #FFFFFF;
    border-radius: 32px !important;
    &::-webkit-scrollbar {
        display: block;
        width: 12px;
    }
    &::-webkit-scrollbar-track {
        background: transparent !important;
    }
    &::-webkit-scrollbar-thumb {
        background: $color-brand-default;
        height: 5px !important;
        border-radius: 12px;
    }
    &::-webkit-scrollbar-track-piece:end {
        background: transparent;
        margin-bottom: 45px; 
    }

    &::-webkit-scrollbar-track-piece:start {
        background: transparent;
        margin-top: 35px;
    }
}
::v-deep tbody tr:hover {
    background: $color-section-bg !important;
    & td {
        color: $color-neutrals-0 !important;
    }
}
::v-deep .v-data-table {
    background: $color-neutrals-0 !important;
    padding: 32px !important;
    overflow-y: auto !important;
}
::v-deep tbody tr td {
    font-family: arial;
    font-family: arial;
    font-weight: 600;
    letter-spacing: 0.05em;
    font-size: 18px;
    line-height: 150%;
    color: $color-neutrals-600 !important;
}
::v-deep th span {
    font-size: 20px;
    font-family: arial;
    font-weight: 600;
}
::v-deep th .v-icon {
    margin-left: 5px !important;
    margin-bottom: 5px !important;
}
::v-deep .v-btn__content .v-icon, 
::v-deep .v-data-footer__pagination,
::v-deep th .v-icon,
::v-deep th span,
::v-deep .v-data-footer__select,
::v-deep .v-select__slot,
::v-deep .v-input__icon .v-icon {
    background-image: $color-brand-default !important;
    background-clip: text !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
}
::v-deep .v-btn::before {
    background: $color-brand-default !important;
}
::v-deep .v-data-footer {
    padding-top: 20px;
    display: flex;
    justify-content: center;
}
::v-deep .v-data-footer__pagination {
    font-size: 16px;
    font-weight: 600;
}
::v-deep .v-data-footer__select {
    display: none;
}
::v-deep .v-btn--disabled .v-btn__content {
    display: none !important;
}
</style>