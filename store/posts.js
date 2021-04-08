const state = () => ({
    post: '',
    posts: [],
});

const actions = {
    async fetchAll({ commit }, postType, query) {
        try {
            const { data } = $axios.get(`wp/v2/${postType}`, { params: query });
            commit('setPost', data)
        } catch(error) {
            console.log(error);
        }
    },

    async fetch({ commit }, postType, slug) {
        try {
            const { data } = $axios.get(`wp/v2/${postType}/?slug=${slug}`);
            commit('setPost', data)
        } catch(error) {
            console.log(error);
        }
    }
}

const mutations = {
    setPost(state, data) {
        state.post = data;
    },
},

export default {
    state,
    actions,
    mutations,
};
