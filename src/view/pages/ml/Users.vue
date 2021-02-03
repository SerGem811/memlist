<template>
  <div class="px-5" id="page-users">
    <h4>Användare</h4>
    <UsersTable :items="users" />
  </div>
</template>

<style lang="scss" scoped>


</style>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import UsersTable from "@/view/content/widgets/advance-table/UsersTable.vue";

export default {
  name: 'users',
  components: {
    UsersTable,
  },
  computed: {
    ...mapGetters(['currentCompanyId'])
  },
  mounted() {
    this.loadUsers();
  },
  data() {
    return {
        users: []
    };
  },
  watch: {
    currentCompanyId(newValue, oldvalue) {
      this.loadUsers();
    }
  },
  methods: {
    loadUsers() {
      if (!this.currentCompanyId) {
        return;
      }
      this.users = [];
      axios
        .get(`/user/list?company_id=${this.currentCompanyId}`)
        .then(res => {
          if (res.status === 200) {
            this.users = res.data.users;
          }
        })
        .catch(err => {});
    }
  }
};
</script>
