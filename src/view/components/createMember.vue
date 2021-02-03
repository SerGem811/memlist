<template>
  <b-card header-bg-variant="secondary">
    <template #header> <fa-icon :icon="['fas', 'users']" class="mr-1" />Medlemsdata </template>
    <b-card-body>
      <b-form class="form-create-member border border-secondary">
        <b-form-group label="Medlemsnummer" label-for="member-name">
          <b-form-input
            id="member-num"
            v-model="form.number"
            placeholder="Lämna tomt för autogenererat"
          />
        </b-form-group>
        <b-row>
          <b-col md="6">
            <b-form-group label="Förnamn" label-for="member-firstname">
              <b-form-input
                id="member-firstname"
                v-model="form.firstname"
                placeholder="Samtliga tilltalsnamn"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Efternamn" label-for="member-lastname">
              <b-form-input id="member-lastname" v-model="form.lastname" placeholder="Efternamn" />
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group label="Inmatat Personnummer" label-for="member-security-number">
          <b-form-input
            id="member-security-number"
            v-model="form.security_number"
            placeholder="Ex: 19850130"
          />
        </b-form-group>
        <b-row>
          <b-col md="6">
            <div class="d-flex">
              <b-form-input disabled />
              <b-form-input class="ml-3" disabled />
              <b-form-input class="ml-3" disabled />
              <b-form-input class="ml-3" disabled />
            </div>
          </b-col>
        </b-row>
        <b-row class="mt-6">
          <b-col md="6">
            <b-form-group label="Gatuadress" label-for="member-street">
              <b-form-input
                id="member-street"
                v-model="form.street"
                placeholder="Ex: Hornsgatan 12"
              />
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label="Postkod" label-for="member-postcode">
              <b-form-input id="member-postcode" v-model="form.postcode" placeholder="Ex: 12214" />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Postkod" label-for="member-postoffice">
              <b-form-input id="member-postoffice" v-model="form.postoffice" />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="Region" label-for="member-region">
              <b-form-select
                id="member-region"
                :options="regions"
                v-model="selectedRegion.value"
                placeholder="Ex: 19850130"
                @change="onRegionChange"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Kommun" label-for="member-commun">
              <b-form-select
                id="member-commun"
                v-model="selectedCommune.value"
                :options="selectedRegion.communes"
                placeholder="Ex: 19850130"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="Land" label-for="member-countries">
              <b-form-select
                id="member-countries"
                v-model="selectedCountry.iso"
                :options="countries"
                placeholder="Ex: 19850130"
                text-field="sv"
                value-field="iso"
              />
            </b-form-group>
          </b-col>
          <b-col md="6"></b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="Mobiltelefon" label-for="member-mobile">
              <b-form-input id="member-mobile" v-model="form.mobile" placeholder="+46" />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Email" label-for="member-email">
              <b-form-input id="member-email" v-model="form.email" />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="Egen definerat kön" label-for="member-gender">
              <b-form-select id="member-gender" v-model="form.gender" :options="genders" />
            </b-form-group>
          </b-col>
          <b-col md="6"></b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <b-alert show variant="light">
              Fält som är metadata är data som följer med från importen och som inte går att göra
              sökningar på. Flytta över metadata till äkta medlemsattribut genom att
              <b>klicka på pilen</b> för att göra datat sökbart.
            </b-alert>
          </b-col>
        </b-row>
      </b-form>
    </b-card-body>
  </b-card>
</template>
<style lang="scss" scoped>
.form-create-member {
  max-width: 800px;
  margin: 0 auto;
  padding: 25px;
}
</style>
<script>
export default {
  name: 'create-member',
  data() {
    return {
      form: {
        number: '',
        firstname: '',
        lastname: '',
        security_number: '',
        mobile: '',
        email: '',
        gender: 'M'
      },
      selectedRegion: {},
      selectedCommune: {},
      selectedCountry: {},
      
    };
  },
  props: {
    regions: { type: Array, default: [] },
    countries: { type: Array, default: [] },
    genders: {type: Array, default: []}
  },
  async mounted() {},
  methods: {
    onRegionChange(value) {
      // this.selectedRegion = value;
      this.selectedRegion = this.regions.find(x => x.value == value);
      this.selectedCommune = this.selectedRegion.communes[0];
    }
  }
};
</script>
