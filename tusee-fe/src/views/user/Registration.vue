<template>
  <main class="registration-page">
    <div v-if="isRegistrationEnabled">Registration is enabled</div>
    <div v-if="!isRegistrationEnabled">Registration is disabled</div>
  </main>
</template>

<script>
import UserService from '@/services/user.service';

export default {
  name: 'Registration',
  computed: {
    isRegistrationEnabled() {
      return UserService.isRegistrationEnabled();
    },
  },
};
</script>
