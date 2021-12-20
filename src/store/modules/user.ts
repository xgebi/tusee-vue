interface IUser {
  uuid: string;
}

const state: IUser = {
  uuid: '',
};

const getters = {
  isLoggedIn: (state: IUser): boolean => {
    return state.uuid.length > 0;
  },
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
