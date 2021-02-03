import Cookies from 'js-cookie';
// action type
export const SET_COMPANY = 'setCompany';
export const SET_PERIOD = 'setPeriod';
export const SET_PERIODS = 'setPeriods';
// mutation types
export const UPDATE_COMPANY = 'updateCompany';
export const UPDATE_PERIOD = 'updatePeriod';
export const UPDATE_PERIODS = 'updatePeriods';

const cid = Cookies.get('company_id');
const pid = Cookies.get('period_id');

const state = {
  currentCompanyId: cid ? cid : '',
  currentPeriodId: pid ? pid : '',
  periods: []
};

const getters = {
  currentCompanyId: state => state.currentCompanyId,
  currentPeriodId: state => state.currentPeriodId,
  periods: state => state.periods
};

const actions = {
  [SET_COMPANY](state, payload) {
    state.commit(UPDATE_COMPANY, payload);
  },
  [SET_PERIOD](state, payload) {
    state.commit(UPDATE_PERIOD, payload);
  },
  [SET_PERIODS](state, payload) {
    state.commit(UPDATE_PERIODS, payload);
  }
};

const mutations = {
  [UPDATE_COMPANY](state, payload) {
    state.currentCompanyId = payload;
    Cookies.set('company_id', payload);
  },
  [UPDATE_PERIOD](state, payload) {
    state.currentPeriodId = payload;
    Cookies.set('period_id', payload);
  },
  [UPDATE_PERIODS](state, payload) {
    state.periods = payload;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
