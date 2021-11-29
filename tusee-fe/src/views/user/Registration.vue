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

<script lang="tsx">
import UserService from '@/services/user.service';
import IUserFormData from '@/interfaces/IUserFormData';
import { defineComponent } from 'vue';

type RegistrationPageState = {
  isRegistrationEnabled: boolean;
  formData: IUserFormData;
};

export default defineComponent({
  name: 'Registration',
  data(): RegistrationPageState {
    return {
      isRegistrationEnabled: false,
      formData: {
        email: '',
        password: '',
      } as IUserFormData,
    };
  },
  async created(): Promise<void> {
    this.isRegistrationEnabled = await UserService.isRegistrationEnabled();
  },
  methods: {
    async register(): Promise<void> {
      await UserService.register(this.formData);
    },
  },
});
</script>
