export const state = () => ({
    points: 0,
    history: [],
});

export const mutations = {
    setPoints(state, points) {
        state.points = points;
    },
    clearPoints(state) {
        state.points = 0;
    },
    addPoints(state, points) {
        state.points += points;
    },
    removePoints(state, points) {
        state.points -= points;
    },
};