<template>
    <div class="component-container">
        <div class="button" @click="menu = !menu">
            <div>
                <icon :heigth="32" :width="32"></icon>
                <span class="text pl-1 text-l1-default brand-default-color-text">{{ points }}</span>
            </div>
            <div>
                <v-icon class="chevron-down">{{ menu ? "mdi-chevron-down" : "mdi-chevron-up" }}</v-icon>
            </div>
        </div>
        <transition name="fade">
            <div v-show="menu" class="menu-wrapper">
                <div class="menu-header text-l1-default">
                    Add Balance
                </div>
                <div class="menu-content">
                    <div class="aerocard"></div>
                    <div class="toggle-wrapper">
                        <e-button-toggle :btns="btns" @select="changePoints"></e-button-toggle>
                    </div>
                    <div>
                        <v-btn class="add-points-btn" :ripple="false" @click="addPoints">
                            <icon :heigth="24" :width="24"></icon>
                            <span class="__text text-l1-default">Add Points</span>
                        </v-btn>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'AeroplayDropDown',
    data() {
        return {
            toggle_button: 1,
            menu: false,
            pointsToAdd: 5000,
            btns: [1000, 5000, 7500],
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NzBiNGEzMGFiYjAwMWE5NDExY2QiLCJpYXQiOjE2NDI0MjY1NDh9.H-F16vO3pn1zo5exccyNIvsA74sgV87egCdmUUUKNcU'
            }
        }
    },
    computed: {
        points() {
            return this.numberWithCommas(this.$store.state.user.points);
        },
    },
    async beforeMount() {
        await this.$axios
        .get('https://coding-challenge-api.aerolab.co/user/me', {headers: this.headers})
        .then(response => {
            this.$store.commit('user/setPoints', response.data.points);
        })
        .catch(error => error.response.data)
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
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
.button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    width: 172px;
    height: 48px;
    border: 1px solid #DAE4F2;
    border-radius: 16px;
    div {
        display: flex;
        align-items: center;
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
.aerocard {
    width: 264px;
    height: 148px;
    border-radius: 8px;
    background: #252F3D;
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
    text-transform: capitalize !important;
    border-radius: 12px !important;
    background: $color-brand-default !important;
    .__text {
        padding-left: 8px;
        color: $color-neutrals-0 !important;
    }
}
</style>