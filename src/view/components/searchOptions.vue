<template>
  <b-card>
    <template #header>
      <h5 class="mb-0">Gör en ny sökning</h5>
    </template>
    <b-form-group> </b-form-group>
    <b-form-group label="Förnamn" label-for="new-search-firstname">
      <b-form-input id="new-search-firstname" v-model="form.firstname" placeholder="Förnamn" />
    </b-form-group>
    <b-form-group label="Efternamn" label-for="new-search-lastname">
      <b-form-input id="new-search-lastname" v-model="form.lastname" placeholder="Efternamn" />
    </b-form-group>
    <b-form-group label="Gatuadress" label-for="new-search-street">
      <b-form-input id="new-search-street" v-model="form.street" placeholder="Gatuadress" />
    </b-form-group>
    <b-form-group label="Postkod" label-for="new-search-postcode">
      <b-form-input id="new-search-postcode" v-model="form.postcode" placeholder="Postkod" />
    </b-form-group>
    <b-form-group label="Land" label-for="new-search-countries">
      <b-form-select id="new-search-countries" v-model="form.country">
        <b-form-select-option value="all">Alla</b-form-select-option>
        <b-form-select-option
          v-for="(c, i) in countries"
          :key="`search-country-${i}`"
          :value="c.iso"
          >{{ c.sv }}</b-form-select-option
        >
      </b-form-select>
    </b-form-group>
    <b-form-group label="Period" label-for="new-search-period">
      <b-form-select
        id="new-search-period"
        v-model="form.period"
        :options="periods"
        text-field="name"
        value-field="id"
      >
      </b-form-select>
    </b-form-group>
    <b-form-group label="Kön" label-for="new-search-gender">
      <b-form-select id="new-search-gender" v-model="form.gender">
        <b-form-select-option value="all">Alla</b-form-select-option>
        <b-form-select-option
          v-for="(g, i) in genders"
          :key="`search-gender-${i}`"
          :value="g.value"
          >{{ g.text }}</b-form-select-option
        >
      </b-form-select>
    </b-form-group>
    <b-form-group label="Betalstatus" label-for="new-search-payment">
      <b-form-select id="new-search-payment" v-model="form.payment">
        <b-form-select-option value="all">Alla</b-form-select-option>
        <b-form-select-option
          v-for="(p, i) in payments"
          :key="`search-payment-${i}`"
          :value="p.value"
          >{{ p.text }}</b-form-select-option
        >
      </b-form-select>
    </b-form-group>
    <b-form-group label="LADOK" label-for="new-search-ladoks">
      <b-form-select id="new-search-ladoks" v-model="form.ladok">
        <b-form-select-option value="all">Alla</b-form-select-option>
        <b-form-select-option
          v-for="(l, i) in ladoks"
          :key="`search-ladok-${i}`"
          :value="l.value"
          >{{ l.text }}</b-form-select-option
        >
      </b-form-select>
    </b-form-group>
    <b-form-group>
      <div class="d-flex align-items-center">
        <label class="checkbox checkbox-lg checkbox-single flex-shrink-0 checkbox-light-success">
          <input type="checkbox" name="" v-model="form.incorrect_membership" />
          <span></span>
        </label>
        <span
          class="ml-3 cursor-pointer"
          @click="form.incorrect_membership = !form.incorrect_membership"
          >Visa felaktiga medlemskap</span
        >
      </div>
    </b-form-group>
    <b-form-group>
      <div class="d-flex align-items-center">
        <label class="checkbox checkbox-lg checkbox-single flex-shrink-0 checkbox-light-success">
          <input type="checkbox" name="" v-model="form.sample_member" />
          <span></span>
        </label>
        <span class="ml-3 cursor-pointer" @click="form.sample_member = !form.sample_member"
          >Visa stickprovad medlem</span
        >
      </div>
    </b-form-group>

    <label class="mt-6">Åldersurval</label>
    <VueSimpleRangeSlider style="width: 100%" :min="0" :max="100" v-model="form.age_range" />
    <hr class="w-100 mt-12" />
    <b-form-group label="Spara sökning/urval" label-for="new-search-savetext">
      <b-form-input
        id="new-search-savetext"
        v-model="form.savetext"
        placeholder="Namn på sökning/urval"
      />
    </b-form-group>
    <div class="d-flex justify-content-end">
      <b-button variant="success" size="sm" @click="onSave">Spara</b-button>
      <b-button variant="light" size="sm" class="ml-2" @click="onReset">Rensa</b-button>
      <b-button variant="primary" size="sm" class="ml-2" @click="onSearch">Sök</b-button>
    </div>
  </b-card>
</template>
<style lang="scss" scoped>
.checkbox.checkbox-light-success > span {
  background-color: white;
  border: 1px solid #ddd;
}
</style>
<script>
import VueSimpleRangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/dist/vueSimpleRangeSlider.css';
export default {
  name: 'search-options',
  components: { VueSimpleRangeSlider },
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        street: '',
        postcode: '',
        country: 'all',
        period: '',
        gender: 'all',
        payment: 'all',
        ladok: 'all',
        incorrect_membership: false,
        sample_member: false,
        age_range: [0, 25],
        savetext: ''
      }
    };
  },
  props: {
    countries: { type: Array, default: [] },
    periods: { type: Array, default: [] },
    genders: { type: Array, default: [] },
    payments: { type: Array, default: [] },
    ladoks: { type: Array, default: [] }
  },
  mounted() {
    if (this.periods.length > 0) {
      this.form.period = this.periods[0].id;
    }
  },

  methods: {
    onSave() {},
    onReset() {},
    onSearch() {
      this.$emit('onSearch', this.form);
    }
  }
};
</script>
