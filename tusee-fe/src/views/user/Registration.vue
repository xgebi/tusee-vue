<template>
  <main class="registration-page">
    <div v-if="isRegistrationEnabled" class="modal">
      <section>
        <label for="email">Email:</label>
        <input type="email" required id="email" v-model="formData.email" />
      </section>
      <section>
        <button @click="register">Register</button>
      </section>
    </div>
    <div v-if="!isRegistrationEnabled" class="modal">
      Registration is disabled
    </div>
  </main>
</template>

<script lang="ts">
import UserService from '@/services/user.service';

type FormData = {
  email: string;
  password: string;
};

type RegistrationPageState = {
  isRegistrationEnabled: boolean;
  formData: FormData;
};

export default {
  name: 'Registration',
  data(): RegistrationPageState {
    return {
      isRegistrationEnabled: false,
      formData: {
        email: '',
        password: '',
      } as FormData,
    };
  },
  async created(): Promise<void> {
    this.isRegistrationEnabled = await UserService.isRegistrationEnabled();
  },
  methods: {
    async register(): Promise<void> {
      console.log(this.formData);
    },
  },
};
</script>
