<template>
  <v-container>
    <v-row class="text-center">
      <form>
        <v-text-field
          type="text"
          v-model="id"
          :error-messages="idErrors"
          label="아이디"
          required
          @input="$v.id.$touch()"
          @blur="$v.id.$touch()"
        ></v-text-field>
        <v-text-field
          :type="showPw ? 'text' : 'password'"
          v-model="password"
          :error-messages="passwordErrors"
          label="비밀번호"
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
          hint="적어도 5글자 이상 입력하세요."
          min="5"
          :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
          counter
          @click:append="showPw = !showPw"
        ></v-text-field>
        <v-btn class="mr-4" @click="submit"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </form>
    </v-row>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import { required } from 'vuelidate/lib/validators'

const { mapActions: userMapActions } = createNamespacedHelpers('user')
export default {
  name: 'Login',
  validations: {
    id: { required },
    password: { required }
  },

  data: () => ({
    id: '',
    password: '',
    showPw: false
  }),

  computed: {
    idErrors () {
      const errors = []
      if (!this.$v.id.$dirty) return errors
      !this.$v.id.required && errors.push('아이디를 입력해주세요.')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('비밀번호를 입력해주세요.')
      return errors
    }
  },

  methods: {
    ...userMapActions(['FETCH_USER']),
    async submit () {
      this.$v.$touch()
      await this.FETCH_USER({ id: this.id, password: this.password })
      this.$router.push({ name: 'Home' })
    },
    clear () {
      this.$v.$reset()
      this.id = ''
      this.password = ''
    }
  }
}
</script>

<style></style>
