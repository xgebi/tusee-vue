<template>
  <div class="home">
    <nav>
      <ul>
        <li v-if="isLoggedIn">
          <a href="/dashboards">{{ $t('home.goToDashboard') }}</a>
        </li>
        <li v-else>
          <a href="/login">{{ $t('home.login') }}</a>
        </li>
        <li v-if="!isLoggedIn">
          <a href="/register">{{ $t('home.register') }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
  name: 'Home',
  components: {},
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
  },
});
</script>
