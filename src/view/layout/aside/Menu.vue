<template>
  <ul class="menu-nav">
    <router-link to="/ml-dashboard" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-start-up"></i>
          <span class="menu-text">Dashboard</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-todo" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-list"></i>
          <span class="menu-text">Ärendehantering</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-error-report" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-warning-sign"></i>
          <span class="menu-text">Felrapport</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-event" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-presentation"></i>
          <span class="menu-text">Evenemang</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-calendar" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-calendar-3"></i>
          <span class="menu-text">Kalender</span>
        </a>
      </li>
    </router-link>

    <li class="menu-section">
      <h4 class="menu-text">MEDLEMMAR</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <router-link to="/ml-quick-search" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-search"></i>
          <span class="menu-text">Snabbsök</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-advanced-search" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-signs-1"></i>
          <span class="menu-text">Avancerad sök</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-import" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-file-1"></i>
          <span class="menu-text">Importera</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-samples" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-phone"></i>
          <span class="menu-text">Stickprover</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-ladok" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fa fa-book-reader"></i>
          <span class="menu-text">LADOK</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-education-attributes" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fa fa-graduation-cap"></i>
          <span class="menu-text">Utbildningar/Attribut</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-members" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-box-1"></i>
          <span class="menu-text">Medlemshantering</span>
        </a>
      </li>
    </router-link>

    <li class="menu-section">
      <h4 class="menu-text">FÖRENING</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <router-link to="/ml-mucf" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-list-3"></i>
          <span class="menu-text">MUCF</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-settings" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-gear"></i>
          <span class="menu-text">Inställningar</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-register-wizard" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-app"></i>
          <span class="menu-text">Registreringswizard</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-periods" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-clock-2"></i>
          <span class="menu-text">Perioder</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-users" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-safe"></i>
          <span class="menu-text">Användare</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-sub-associattions" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-map"></i>
          <span class="menu-text">Underföreningar</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-filer" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-folder-1"></i>
          <span class="menu-text">Filer</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-store" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-price-tag"></i>
          <span class="menu-text">Butik</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-accounting" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-sheet"></i>
          <span class="menu-text">Bokföring</span>
        </a>
      </li>
    </router-link>

    <li class="menu-section">
      <h4 class="menu-text">KOMMUNIKATION</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <router-link to="/ml-dispatch" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-mail-1"></i>
          <span class="menu-text">Utskick</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-templates" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-interface-11"></i>
          <span class="menu-text">Mallar</span>
        </a>
      </li>
    </router-link>

    <li class="menu-section">
      <h4 class="menu-text">Administration</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <router-link to="/ml-suggestion-support" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-open-box"></i>
          <span class="menu-text">Förslagslåda/Support</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-costs" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-interface-9"></i>
          <span class="menu-text">Kostnader</span>
        </a>
      </li>
    </router-link>

    <router-link to="/ml-language-translation" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-gear"></i>
          <span class="menu-text">Språk/Översättning</span>
        </a>
      </li>
    </router-link>

  </ul>
</template>

<script>
export default {
  name: 'KTMenu',
  methods: {
    hasActiveChildren(match) {
      return this.$route['path'].indexOf(match) !== -1;
    }
  }
};
</script>
