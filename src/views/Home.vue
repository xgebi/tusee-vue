<template>
  <div class="home">
    <nav>
      <ul>
        <li v-if="isLoggedIn">Go to dashboards</li>
        <li v-else>Login</li>
        <li v-if="!isLoggedIn">Sign up</li>
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
