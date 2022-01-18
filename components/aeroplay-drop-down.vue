<template>
    <div class="component-container">
        <div
            class="button"
            @click="menu = !menu"
            >
            <div>
                <icon :heigth="32" :width="32"></icon>
                <span class="text brand-default-color">10.000</span>
            </div>
            <div>
                <v-icon class="chevron-down">{{ menu ? "mdi-chevron-down" : "mdi-chevron-up" }}</v-icon>
            </div>
        </div>
        <div v-show="menu" class="menu-wrapper">
            <div class="menu-header text-l1-default">
                Add Balance
            </div>
            <div class="menu-content">
                <div class="aerocard"></div>
                <div class="toggle-wrapper">
                    <v-btn-toggle v-model="toggle_button" borderless mandatory>
                        <v-btn class="toggle-button" :ripple="false">
                            1000
                        </v-btn >
                        <v-btn class="toggle-button" :ripple="false">
                            5000
                        </v-btn>
                        <v-btn class="toggle-button" :ripple="false">
                            7500
                        </v-btn>
                    </v-btn-toggle>
                </div>
                <div>
                    <v-btn class="add-points-btn" :ripple="false" >
                        <icon :heigth="24" :width="24"></icon>
                        <span class="__text text-l1-default">Add Points</span>
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AeroplayDropDown',
    data() {
        return {
            toggle_button: 1,
            menu: false,
        }
    },
}
</script>

<style lang="scss" scoped>
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
    .text {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        padding-left: 3px;
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