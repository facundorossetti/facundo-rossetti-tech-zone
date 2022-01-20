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
            toggle_button: 1,
            dialog: false,
            pointsToAdd: 5000,
            btns: [1000, 5000, 7500],
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NzBiNGEzMGFiYjAwMWE5NDExY2QiLCJpYXQiOjE2NDI0MjY1NDh9.H-F16vO3pn1zo5exccyNIvsA74sgV87egCdmUUUKNcU'
            },
        }
    },
    computed: {
        points() {
            return this.numberWithCommas(this.$store.state.user.points);
        },
    },
    methods: {
        changePoints(e) {
            this.pointsToAdd = e;
        },
        async addPoints() {
            await this.$axios
                .post('https://coding-challenge-api.aerolab.co/user/points', {'amount': this.pointsToAdd},
                { headers: this.headers })
                .then(response => this.$store.commit('user/setPoints', response.data['New Points']))
                .catch(error => error.response.data);
        },
        numberWithCommas(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
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
.menu-wrapper {
    position: absolute;
    z-index: 10;
    height: 404px;
    width: 312px;
    margin-top: 8px;
    right: 0;
    border: 1px solid #DAE4F2;
    background: $color-neutrals-0;
    border-radius: 16px;
    .menu-header {
        padding: 16px 24px;
        border-bottom: 1px solid #DAE4F2;
    }
}
.menu-content {
    padding: 24px;
}
.aerocard-container {
    display: flex;
    align-items: flex-end;
    width: 264px;
    height: 148px;
    border-radius: 8px;
    background-color: #252F3D;
}
.aerocard {
    width: 264px;
    height: 80px;
    border-radius: 8px;
    background-color: #252F3D;
    background-image: url("../assets/illustrations/single-wave-pattern.svg");
    background-size: contain;
    background-repeat: repeat;
}
.toggle-wrapper {
    margin: 40px auto 24px;
}
.toggle-button {
    width: 45%;
    height: 35px;
    border-radius: 12px !important;
    background-color: #E6F0FF !important;
}
::v-deep .v-btn--active {
    color: $color-neutrals-100 !important;
    background: $color-brand-default !important;
}
.add-points-btn {
    height: 51px;
    width: 100% !important;
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
    color: $color-neutrals-600 !important;
}
::v-deep th span {
    font-size: 20px;
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