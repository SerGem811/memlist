<template>
  <b-card>
    <template #header>
      <div class="d-flex justify-content-between align-items-center">
        <h5>Sökresultat:</h5>
        <b-dropdown text="Exportera" variant="outline-success">
          <b-dropdown-item
            ><fa-icon :icon="['fas', 'file-excel']" class="mr-2" size="lg" />Excel</b-dropdown-item
          >
          <b-dropdown-item
            ><fa-icon :icon="['fas', 'file-csv']" class="mr-2" size="lg" />CSV</b-dropdown-item
          >
        </b-dropdown>
      </div>
    </template>
    <v-select multiple v-model="showFields" :options="fields" />
    <b-table striped hover bordered :items="data" :fields="showFields" class="mt-3"> </b-table>
  </b-card>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
export default {
  name: 'search-result',
  components: {
    vSelect
  },
  data() {
    return {
      fields: [
        { label: 'Förening', code: 'company' },
        { label: 'Period', code: 'period' },
        { label: 'Förnamn', code: 'firstname' },
        { label: 'Efternamn', code: 'lastname' },
        { label: 'Personnummer', code: 'in_personnr' },
        { label: 'Betalat', code: 'paying' },
        { label: 'LADOK', code: 'ladok' },
        { label: 'Ålder', code: 'age' },
        { label: 'Kön', code: 'sex' },
        { label: 'E-post', code: 'email' },
        { label: 'Telefon', code: 'phone' },
        { label: 'Gata', code: 'address' },
        { label: 'Postnummer', code: 'zipcode' },
        { label: 'Land', code: 'country' }
      ],
      showFields: ['company', 'period', 'firstname', 'lastname', 'in_personnr', 'email']
    };
  },
  props: {
    data: { type: Array, default: [] }
  }
};
</script>
