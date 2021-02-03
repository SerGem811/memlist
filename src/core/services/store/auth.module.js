import Cookies from 'js-cookie';

// action types
export const LOGIN = 'login';
export const LOGOUT = 'logout';

// mutation types
export const PURGE_AUTH = 'logOut';
export const SET_AUTH = 'setUser';

const userc = Cookies.get('user');

const state = {
  user: 'undefined' === typeof userc ? null : JSON.parse(Cookies.get('user')),
  token: Cookies.get('token')
};

const getters = {
  currentUser: state => state.user,
  token: state => state.token,
  isAuthenticated: state => state.user !== null
};

const actions = {
  [LOGIN](context, data) {
    context.commit(SET_AUTH, data);
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  }
};

const mutations = {
  [SET_AUTH](state, data) {
    state.user = data.user;
    state.token = data.token;
    Cookies.set('user', JSON.stringify(data.user));
    Cookies.set('token', data.token, { expires: 1 });
  },
  [PURGE_AUTH](state) {
    state.user = null;
    Cookies.remove('user');
    Cookies.remove('token');
    Cookies.remove('company_id');
    Cookies.remove('period_id');
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
