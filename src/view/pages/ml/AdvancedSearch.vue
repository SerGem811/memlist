<template>
  <div class="px-5" id="page-advanced-search">
    <h4>Avancerad sök</h4>
    <b-card no-body>
      <div class="create-member">
        <b-button variant="success" @click="showNew = !showNew">Skapa ny medlem</b-button>
        <span class="">Avancerad sökfunktion, spara urval och exporter till Excel</span>
      </div>
    </b-card>
    <create-member
      v-if="showNew"
      class="mt-4"
      :regions="regions"
      :countries="countries"
      :genders="genders"
    ></create-member>
    <!-- <b-card class="mt-4" v-if="showNew"> </b-card> -->
    <b-row class="mt-4">
      <b-col lg="4">
        <b-card no-body>
          <template #header>
            <h5 class="mb-0">Använd sparad sökning</h5>
          </template>
          <div class="p-6">
            <b-form-select v-model="selectedSearch" :options="searchHistory"></b-form-select>
          </div>
        </b-card>
        <search-options
          class="mt-4"
          :countries="countries"
          :periods="periods"
          :genders="genders"
          :payments="payments"
          :ladoks="ladoks"
          @onSearch="onSearch"
        ></search-options>
      </b-col>
      <b-col lg="8">
        <search-result :data="[]" />
      </b-col>
    </b-row>
  </div>
</template>
<style lang="scss" scoped>
#page-advanced-search {
  .create-member {
    padding: 25px;
    display: flex;
    flex: 1;
    span {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

<script>
import axios from 'axios';
import createMember from '@/view/components/createMember.vue';
import searchOptions from '@/view/components/searchOptions.vue';
import searchResult from '@/view/components/searchResult.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'advancedSearch',
  components: {
    createMember,
    searchOptions,
    searchResult
  },
  computed: {
    ...mapGetters(['currentCompanyId', 'currentPeriodId', 'periods'])
  },
  data() {
    return {
      showNew: false,
      selectedSearch: null,
      searchHistory: [{ value: null, text: 'Select from old history' }],
      regions: [],
      countries: [],
      genders: [
        { value: 'M', text: 'Man' },
        { value: 'F', text: 'Kvinna' },
        { value: 'O', text: 'Annat' },
        { value: 'U', text: 'Okänt' }
      ],
      payments: [
        { value: 'Y', text: 'Betalat' },
        { value: 'N', text: 'Ej Betalat' }
      ],
      ladoks: [
        { value: 'OK', text: 'Aktiv Student' },
        { value: 'NO', text: 'Ej Student' },
        { value: 'S', text: 'Väntar' },
        { value: 'N', text: 'Saknas' }
      ]
    };
  },
  async mounted() {
    // get regions
    const res = await axios.get('/location/regions');
    if (res.status === 200) {
      // region load
      for (const [k, region] of Object.entries(res.data.regions)) {
        const communes = [];
        for (const [key, comm] of Object.entries(region.communes)) {
          communes.push({ value: key, text: comm.commune });
        }
        this.regions.push({
          text: region.region,
          value: region.region_code,
          communes: communes
        });
      }
    } else {
      // no region found
    }
    // country
    const res1 = await axios.get('/location/countries');
    if (res1.status === 200) {
      this.countries = res1.data.countries;
    } else {
    }

    // periods
  },
  methods: {
    onSearch(v) {
      let variables = [];
      if (v.firstname) {
        variables.push({ key: 'firstname', value: v.firstname });
      }
      if (v.lastname) {
        variables.push({ key: 'lastname', value: v.lastname });
      }
      if (v.street) {
        variables.push({ key: 'address', value: v.street });
      }
      if (v.postcode) {
        variables.push({ key: 'zipcode', value: v.postcode });
      }
      variables.push({ key: 'from_age', value: v.age_range[0] });
      variables.push({ key: 'to_age', value: v.age_range[1] });
      variables.push({ key: 'country', value: v.country });
      variables.push({ key: 'period_id', value: v.period });
      axios
        .post('/search', {
          company_ids: ['all'],
          limit: 100,
          name: '',
          order_by: { key: 'lastname', value: 'desc' },
          page: 1,
          selected_company_id: this.currentCompanyId,
          types: ['member'],
          variables: variables
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {});
    }
  }
};
</script>
