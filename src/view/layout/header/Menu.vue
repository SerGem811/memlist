<template>
  <div>
    <b-dropdown :text="period.name" variant="outline-success" class="dropdown-year">
      <b-dropdown-item v-for="(p, i) in periods" :key="`year-${i}`" @click="onSelectPeriod(p)">{{
        p.name
      }}</b-dropdown-item>
    </b-dropdown>
    <b-dropdown :text="company.name" variant="outline-success" class="ml-4 dropdown-company">
      <b-dropdown-text tag="div" class="topnav-company-list-wrapper">
        <b-form-input v-model="filterText" @keydown="filterCompany" placeholder="Filtrera" />
        <span class="ml-4">Filtrera på org. eller namn</span>
      </b-dropdown-text>
      <div class="topnav-company-list">
        <b-dropdown-item
          v-for="(c, i) in filtered"
          :key="`company-${i}`"
          @click="onSelectCompany(c)"
        >
          <fa-icon :icon="['fas', 'network-wired']" class="mr-3" />
          {{ c.name }}
        </b-dropdown-item>
      </div>
    </b-dropdown>
  </div>
</template>
<style lang="scss" scoped>
.topnav-company-list-wrapper {
  min-width: 300px;
  span {
    font-size: 0.8rem;
  }
}
.topnav-company-list {
  padding: 20px;
  max-height: 400px;
  overflow-y: auto;
}
</style>
<script>
import axios from 'axios';
import { SET_COMPANY, SET_PERIOD, SET_PERIODS } from '@/core/services/store/common.module';
export default {
  name: 'KTMenu',
  data() {
    return {
      periods: [],
      period: {},
      companies: [],
      company: {},
      filterText: '',
      filtered: []
    };
  },
  props: {
    company_id: { type: String, default: '' },
    period_id: { type: String, default: '' }
  },
  mounted() {
    // load companies
    axios
      .get('/company/list')
      .then(res => {
        if (res.status === 200) {
          // this.companies = res.data;
          res.data.companies.forEach(c => {
            this.companies.push(c.company);
          });
          if (this.companies.length > 0) {
            if (this.company_id) {
              const c = this.companies.find(x => x.company_id === this.company_id);
              if (c) {
                this.onSelectCompany(c);
              } else {
                this.onSelectCompany(this.companies[0]);
              }
            } else {
              this.onSelectCompany(this.companies[0]);
            }
          }
          this.filtered = this.companies;
        }
      })
      .catch(err => {});
  },
  methods: {
    async onSelectCompany(c) {
      const res = await axios.put('/user/current_company', { company_id: c.company_id });
      if (res.status === 200 || res.status === 204) {
        this.company = c;
        this.$store.dispatch(SET_PERIOD, '');
        this.$store.dispatch(SET_COMPANY, c.company_id);
        // update period
        this.periods = [];
        this.company.periods.forEach(p => {
          this.periods.push({
            id: p.id,
            name: p.name
          });
        });
        this.$store.dispatch(SET_PERIODS, this.periods);

        if (this.period_id) {
          const p = this.periods.find(x => x.id === this.period_id);
          if (p) {
            this.onSelectPeriod(p);
          } else {
            this.onSelectPeriod(this.periods[0]);
          }
        } else if (this.periods.length > 0) {
          this.onSelectPeriod(this.periods[0]);
        }
      }
    },
    async onSelectPeriod(p) {
      const res = await axios.put('/user/selected_period', {
        period_id: p.id
      });
      if (res.status === 200 || res.status === 204) {
        this.period = p;
        this.$store.dispatch(SET_PERIOD, p.id);
      }
    },
    filterCompany(e) {
      if (this.filterText === '' || this.filterText === ' ') {
        this.filtered = this.companies;
      } else {
        this.filtered = this.companies.filter(x =>
          x.name.toUpperCase().includes(this.filterText.toUpperCase())
        );
      }
    }
  }
};
</script>
