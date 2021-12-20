<template>
  <div class="home">
    <nav>
      <ul>
        <li v-if="isLoggedIn">{{ $t('home.goToBoards') }}</li>
        <li v-else>{{ $t('home.login') }}</li>
        <li v-if="!isLoggedIn">{{ $t('home.register') }}</li>
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
