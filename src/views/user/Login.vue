<template>
  <main class="login-page">
    <div class="modal">
      <section>
        <label for="email">{{ $t('shared.email') }}:</label>
        <input type="email" required id="email" v-model="formData.email" />
      </section>
      <section>
        <label for="password">{{ $t('shared.password') }}:</label>
        <input
          type="password"
          required
          id="password"
          v-model="formData.password"
        />
      </section>
      <section>
        <button @click="login">{{ $t('login.login') }}</button>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IUserFormData from '@/interfaces/IUserFormData';
import UserService from '@/services/user.service';

type LoginPageState = {
  formData: IUserFormData;
  error: false;
  errorMessage: string;
};

export default defineComponent({
  name: 'Login',
  data(): LoginPageState {
    return {
      error: false,
      errorMessage: '',
      formData: {
        email: '',
        password: '',
      } as IUserFormData,
    };
  },
  methods: {
    async login(): Promise<void> {
      UserService;
    },
  },
});
</script>
